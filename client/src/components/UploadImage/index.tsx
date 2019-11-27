import React, {
  useState, useEffect,
} from 'react';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import { API_SERVER } from '../../utils/constants';
import Preview from '../Preview';
import * as S from './style';
import PopupWarn from '../../commons/Popup_warn';

interface ContentObject {
  type: string,
  content: string,
  file: File | null,
}

function ImageUpload() {
  const [previews, setPreviews] = useState<string[]>([]);
  const [documents, setDocumnets] = useState<ContentObject[]>([]);
  const [title, setTitle] = useState<string>('');
  const [showPopupWARN, setShowPopupWARN] = useState<boolean>(false);

  const onDropWallPaper = (file: File[]) => {
    const newfile = file[file.length - 1];
    const tempDocuments:ContentObject[] = [...documents];
    const obj:ContentObject = {
      type: 'wallpapers',
      content: '',
      file: newfile,
    };
    tempDocuments.push(obj);
    setDocumnets(tempDocuments);

    const reader = new FileReader();
    const url = reader.readAsDataURL(newfile);
    reader.onloadend = (e) => {
      if (typeof reader.result === 'string') {
        setPreviews([...previews, reader.result]);
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
    const url = reader.readAsDataURL(newfile);
    reader.onloadend = (e) => {
      if (typeof reader.result === 'string') {
        setPreviews([...previews, reader.result]);
      }
    };
  };

  const makeFormData = () => {
    const formdata = new FormData();
    let format:string;

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

  const uploadHandler = async () => {
    if (title.length === 0) {
      console.log('제목은 필수 입력 사항입니다.');
      setShowPopupWARN(true);
      return;
    }
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
      title: '임시 타이틀22',
      content: dbContent,
      commemtsAllow: true,
      ccl: '임시 CCL',
      field: '임시 field',
      public: true,
      tags: [],
    };

    const { data } = await axios.post(`${API_SERVER}/upload/works-image`, obj);
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


  return (
    <S.UploadMain>
      <S.Title>
        <S.TitleInput type="text" name="title" onChange={onChangetitle} value={title} placeholder="제목을 입력해 주세요." />
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
      <S.UploadButton type="button" onClick={uploadHandler}>업로드</S.UploadButton>
      {showPopupWARN && <PopupWarn text="제목을 입력해주세요." closePopup={togglePopup} />}
    </S.UploadMain>
  );
}

export default ImageUpload;
