import React, {
  useState, useRef,
} from 'react';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { API_SERVER, MAXSIZE_OF_UPLOADIMAGE } from '../../utils/constants';
import Preview from '../Preview';
import * as S from './style';
import PopupWarn from '../../commons/Popup_warn';
import PopupDetail from '../Upload_detail_Popup';
import { ContentObject } from './type';
import { getShortId } from '../../utils';

axios.defaults.withCredentials = true;

function ImageUpload() {
  const [documents, setDocumnets] = useState<ContentObject[]>([]);
  const [title, setTitle] = useState<string>('');
  const [showPopupWARN, setShowPopupWARN] = useState<boolean>(false);
  const [showPopupDETAIL, setShowPopupDETAIL] = useState<boolean>(false);

  const [field, setField] = useState('');
  const [ccl, setCcl] = useState('');
  const [ispublic, setIspublic] = useState(true);
  const [canComments, setCanComments] = useState(true);

  const [canRedirect, setCanRedirect] = useState<boolean>(false);
  const [workId, setWorkId] = useState<string>('');
  const [fileTypeWarn, setFileTypeWarn] = useState<string>('');
  const errorCheck = useRef(0);

  const updateContent = (type:string, file: File[]) => {
    if (file.length === errorCheck.current) {
      setFileTypeWarn('지원하지 않은 파일 형식입니다.');
      return;
    }
    setFileTypeWarn('');
    errorCheck.current += 1;
    const newfile = file[file.length - 1];
    const reader = new FileReader();
    reader.readAsDataURL(newfile);
    reader.onloadend = (e) => {
      if (typeof reader.result === 'string') {
        const obj = {
          key: getShortId(),
          type,
          content: '',
          file: newfile,
          preview: reader.result,
        };
        setDocumnets((prevDocument) => [...prevDocument, obj]);
      }
    };
  };

  const onDropWallPaper = (file: File[]) => {
    updateContent('wallpapers', file);
  };

  const onDropImage = (file: File[]) => {
    updateContent('images', file);
  };

  const makeFormData = () => {
    const formdata = new FormData();
    let format:string;

    documents.forEach((element) => {
      const { file, type } = element;
      if (file !== null && file.type === 'image/jpeg') {
        format = '.jpg';
        formdata.append('multi-files', file, type + format);
      } else if (file !== null) {
        format = '.png';
        formdata.append('multi-files', file, type + format);
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
      field,
      ccl,
      ispublic,
      canComments,
      title,
      content: dbContent,
      tags: [],
    };

    const { data } = await axios.post(`${API_SERVER}/upload/works-image`, obj);
    const { workImageId } = data;
    setWorkId(workImageId);
    setCanRedirect(true);
  };

  const renderRedirect = () => {
    if (canRedirect) {
      return <Redirect to={`/home/detail-image/${workId}`} />;
    }
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
      key: getShortId(),
      type: 'description',
      content: '아무말 아무말',
      file: null,
      preview: '',
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
      <div>
        {renderRedirect()}
      </div>
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
        {documents
          && documents.map(({
            key, type, content, preview,
          }) => {
            if (type === 'images' || type === 'wallpapers') {
              return <Preview key={key} src={preview} />;
            }
            return (
              <div key={key}>
                {content}
              </div>
            );
          })}
      </div>

      <S.SeleteBox>
        <S.Box>
          <ImageUploader
            withIcon={false}
            withLabel={false}
            buttonText="이미지"
            onChange={onDropImage}
            imgExtension={['.jpg', '.png', '.gif']}
            maxFileSize={MAXSIZE_OF_UPLOADIMAGE}
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
            maxFileSize={MAXSIZE_OF_UPLOADIMAGE}
            buttonStyles={S.customButton}
            singleImage
            fileTypeError="is not supported file extension"
          />
        </S.Box>
        <S.Box>
          <S.Button type="button" onClick={addDescription}>글씨 추가</S.Button>
        </S.Box>
      </S.SeleteBox>
      <S.NotiText>
        <div> 업로드할 수 있는 사진의 최대 용량은 20MB입니다. </div>
        <div className="tyep-error">{fileTypeWarn}</div>
      </S.NotiText>
      <S.UploadButton type="button" onClick={titleCheck}>업로드</S.UploadButton>
      {showPopupWARN && <PopupWarn text="제목을 입력해주세요." closePopup={togglePopup} />}
      {showPopupDETAIL && <PopupDetail text="추가 정보" cancleHandler={togglePopupDetail} aproveHandler={uploadHandler} setField={setField} setCcl={setCcl} setIspublic={setIspublic} setCanComments={setCanComments} field={field} ccl={ccl} />}
    </S.UploadMain>
  );
}

export default ImageUpload;
