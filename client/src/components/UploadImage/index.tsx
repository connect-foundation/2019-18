import React, {
  useState, useEffect,
} from 'react';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import { API_SERVER } from '../../utils/constants';

import Preview from '../Preview';
import * as S from './style';
// Documnet content
interface ContentObject {
  type: string,
  content: string,
  file: File | null,
}

function ImageUpload() {
  const [previews, setPreviews] = useState<string[]>([]);
  const [contents, setContents] = useState<ContentObject[]>([]);
  const [documents, setDocumnets] = useState<ContentObject[]>([]);


  useEffect(() => {

  });

  const onDropWallPaper = (file: File[]) => {
    const newfile = file[file.length - 1];
    const tempDocuments:ContentObject[] = [...documents];
    const obj:ContentObject = {
      type: 'wallpaper',
      content: '',
      file: newfile,
    };
    tempDocuments.push(obj);
    setDocumnets(tempDocuments);

    const tempPreviews = tempDocuments.filter((d) => d.type === 'wallpaper' || d.type === 'image').map((m) => URL.createObjectURL(m.file));
    setPreviews(tempPreviews);
  };

  const onDropImage = (file: File[]) => {
    const newfile = file[file.length - 1];
    const tempDocuments:ContentObject[] = [...documents];
    const obj:ContentObject = {
      type: 'image',
      content: '',
      file: newfile,
    };
    tempDocuments.push(obj);
    setDocumnets(tempDocuments);

    const tempPreviews = tempDocuments.filter((d) => d.type === 'wallpaper' || d.type === 'image').map((m) => URL.createObjectURL(m.file));
    setPreviews(tempPreviews);
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
    const urls = await getImageUrl();
    const dbContent = documents.map((element2) => {
      if (element2.type === 'image' || element2.type === 'wallpaper') {
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
      title: '임시 타이틀',
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
    const temp2:ContentObject[] = contents;
    temp2.push(obj);
    setContents(temp2);
  };

  return (
    <div className="ImageUpload-container">
      <div>
        {previews && previews.map((element) => <Preview src={element} />)}
      </div>
      <button type="button" className="upload-button" onClick={uploadHandler}>Upload</button>
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
            maxFileSize={5242880}
            buttonStyles={S.customButton}
            singleImage
          />
        </S.Box>
        <S.Box>
          <S.Button type="button" onClick={addDescription}>글씨 추가</S.Button>
        </S.Box>
      </S.SeleteBox>

    </div>
  );
}

export default ImageUpload;
