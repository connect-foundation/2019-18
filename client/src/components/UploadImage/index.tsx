import React, {
  useState,
} from 'react';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import { API_SERVER } from '../../utils/constants';
import Preview from '../Preview';
import * as S from './style';
import PopupWarn from '../../commons/Popup_warn';
import PopupDetail from '../Upload_detail_Popup';
import { ContentObject, DetailObject } from './type';

/**
 * 초기값을 반드시 설정해줘야한다는 에러때문에
 * initDetailObject 라는 초기값을 넣어줬습니다.
 * ccl 의 기본값은 ALL 이지만, field의 기본값은 
 * 정해지지 않았습니다. 
 * field의 값을 반드시 입력받아야한다는
 * 조건을 추가해야할것 같습니다.
 */
const initDetailObject = {
  commentsAllow: true,
  ccl: 'ALL',
  field: '회화', // default 값으로 적절하지 않음
  public: true,
};


function ImageUpload() {
  /**
   * 관리해야하는 state 들이 너무 많다고 생각합니다....
   * 해당 컴포넌트에서 사용하는 모든 변수는 useState를 이용해야하는 제약이 있나요?
   * rendering 할 필요없는 documents 는 '그냥 변수'로 사용하고 싶은데 
   * const documents = [];
   * push를 해줘도 값을 읽을 수 없다는, undefined 에러가 나서 useState로 변경했습니다.
   * style, type을 뺐는데도.. 파일 라인수가 200이 넘어가는데 .... 이건 별로 안 좋은거죠...?? 
   */
  const [previews, setPreviews] = useState<string[]>([]);
  const [documents, setDocumnets] = useState<ContentObject[]>([]);
  const [title, setTitle] = useState<string>('');
  const [showPopupWARN, setShowPopupWARN] = useState<boolean>(false);
  const [showPopupDETAIL, setShowPopupDETAIL] = useState<boolean>(false);
  const [detailInfo, setDetailInfo] = useState<DetailObject>(initDetailObject);

  const onDropWallPaper = (file: File[]) => {
    const newfile = file[file.length - 1];
    const tempDocuments:ContentObject[] = [...documents]; // copy by value
    const obj:ContentObject = {
      type: 'wallpapers',
      content: '',
      file: newfile,
    };
    tempDocuments.push(obj);
    setDocumnets(tempDocuments);

    /**
     * 기존에 사용했던, URL.createObjectURL() 이 에러가 났다 안났다해서, 찾아보니
     * Chrome browsers are disabling support for it (URL.createObjectURL)
     * 그래서 FileRead()함수로 대체했습니다.
     */
    const reader = new FileReader();
    reader.readAsDataURL(newfile);
    reader.onloadend = (e) => {
      if (typeof reader.result === 'string') {
        setPreviews([...previews, reader.result]); // copy by value
      }
    };
  };

  const onDropImage = (file: File[]) => {
    const newfile = file[file.length - 1];
    const tempDocuments:ContentObject[] = [...documents];
    const obj:ContentObject = {
      type: 'images',
      content: '',
      file: newfile,
    };
    tempDocuments.push(obj);
    setDocumnets(tempDocuments);

    const reader = new FileReader();
    reader.readAsDataURL(newfile);
    reader.onloadend = (e) => {
      if (typeof reader.result === 'string') {
        setPreviews([...previews, reader.result]);
      }
    };
  };

  const makeFormData = () => {
    const formdata = new FormData();
    let format:string;

    /**
     * 파일의 원래의 original name은 필요없고,
     * 파일이 image 인지, wallpaper 인지 구분하는게 중요하다고 생각해
     * image.jpg    --> 크라폴리오 서비스상에서 다운로드가 불가능한 작품
     * wallpaper.jpg   --> 크라폴리오 서비스상에서 다운로드가 가능한 작품
     * 로 파일명을 변경해 백엔드로 넘겨줬습니다.
     */
    documents.forEach((element) => {
      if (element.file !== null) {
        if (element.file.type === 'image/jpeg') {
          format = '.jpg';
        } else {
          format = '.png';
        }
        formdata.append('multi-files', element.file, element.type + format);
      }
    });
    return formdata;
  };

  const getImageUrl = async () => {
    const formdata = makeFormData();
    const { data } = await axios.post(`${API_SERVER}/upload/getImageUrl`, formdata);
    const { objectStorageUrls } = data;
    return objectStorageUrls;
  };

  /**
   * UploadImage에서 '업로드' 버튼을 클릭하면
   * Upload_detail_Popup 으로 넘어가 상세 정보를 입력받고 '업로드' 버튼을 또 눌러야
   * uploadHandler() 함수가 실행됩니다.
   */
  const uploadHandler = async () => {
    setShowPopupDETAIL(false);
    const urls = await getImageUrl();
    const dbContent = documents.map((element2) => {
      if (element2.type === 'images' || element2.type === 'wallpapers') {
        const obj = {
          type: element2.type,
          content: urls.shift(),
        };
        return obj;
      }
      const obj = {
        type: element2.type,
        content: element2.content,
      };
      return obj;
    });
    const obj = {
      title,
      content: dbContent,
      commentsAllow: detailInfo.commentsAllow,
      ccl: detailInfo.ccl,
      field: detailInfo.field,
      public: detailInfo.public,
      tags: [],
    };

    const { data } = await axios.post(`${API_SERVER}/upload/works-image`, obj);
    // 업로드 완료후 작품 상세 페이지로 refirect
  };

  const titleCheck = () => {
    if (title.length === 0) {
      setShowPopupWARN(true);
    } else {
      setShowPopupDETAIL(true);
    }
  };

  const addDescription: ()=> void = () => {
    const obj:ContentObject = {
      type: 'description',
      content: '아무말 아무말',
      file: null,
    };
    const temp2:ContentObject[] = [...documents];
    temp2.push(obj);
    setDocumnets(temp2);
  };

  const onChangetitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const togglePopup = () => {
    setShowPopupWARN(false);
  };

  const togglePopupDetail = () => {
    setShowPopupDETAIL(false);
  };

  return (
    <S.UploadMain>
      <S.Title>
        <S.TitleInput
          type="text"
          name="title"
          onChange={onChangetitle}
          value={title}
          placeholder="제목을 입력해 주세요."
        />
      </S.Title>
      <div>
        {previews && previews.map((element) => <Preview src={element} />)}
      </div>

      <S.SeleteBox>
        <S.Box>
          <ImageUploader
            withIcon={false}
            withLabel={false}
            buttonText="이미지"
            onChange={onDropImage}
            imgExtension={['.jpg', '.png', '.gif']}
            maxFileSize={5242880}
            buttonStyles={S.customButton}
            singleImage
          />
        </S.Box>
        <S.Box>
          <ImageUploader
            withIcon={false}
            withLabel={false}
            buttonText="배경화면"
            onChange={onDropWallPaper}
            imgExtension={['.jpg', '.png', '.gif']}
            // 13.5MB = 13481938, MAX SIZE is 20MB
            maxFileSize={20242880}
            buttonStyles={S.customButton}
            singleImage
          />
        </S.Box>
        <S.Box>
          <S.Button type="button" onClick={addDescription}>글씨 추가</S.Button>
        </S.Box>
      </S.SeleteBox>
      <S.UploadButton type="button" onClick={titleCheck}>업로드</S.UploadButton>
      {showPopupWARN && <PopupWarn text="제목을 입력해주세요." closePopup={togglePopup} />}
      {showPopupDETAIL && <PopupDetail text="추가 정보" cancleHandler={togglePopupDetail} aproveHandler={uploadHandler} setDetailInfo={setDetailInfo} />}
    </S.UploadMain>
  );
}

export default ImageUpload;
