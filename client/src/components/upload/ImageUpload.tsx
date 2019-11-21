import React, {
  useState, useEffect,
} from 'react';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import uuidv4 from 'uuid/v4';
import Preview from './Preview';

interface ContentObject {
  type: string,
  content: string,
}

function ImageUpload() {
  const [pictures, setPictures] = useState <File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [contents, setContents] = useState<ContentObject[]>([]);
  const naniContent: Array<ContentObject> = [];

  useEffect(() => {

  });
  const onDrop = (picture: File[]) => {
    const newpicture = picture[picture.length - 1];
    const temp:File[] = pictures;
    if (!temp) {
      return;
    }
    temp.push(newpicture);
    setPictures(temp);
    const newUrls = temp.map((file) => URL.createObjectURL(file));
    setPreviews(newUrls);
    const obj:ContentObject = {
      type: 'image',
      content: '',
    };
    naniContent.push(obj);
    const temp2:ContentObject[] = contents;
    temp2.push(obj);
    setContents(temp2);
  };

  const onClickHandler = async () => {
    const urls = await getImageUrl();
    console.log(contents);

    const temp3 = contents.map((element2) => {
      if (element2.type === 'image') {
        element2.content = urls.shift();
      }
      return element2;
    });
    console.log(temp3);
  };

  const getImageUrl = async () => {
    const formdata = new FormData();
    pictures.forEach((element) => {
      let format;
      if (element.type === 'image/jpeg') {
        format = '.jpg';
      } else if (element.type === 'image/png') {
        format = '.png';
      }
      const nameUuid = uuidv4();
      formdata.append('multi-files', element, nameUuid + format);
    });
    const { data } = await axios.post('http://localhost:3050/upload', formdata);
    const { objectStorageUrls } = data;
    return objectStorageUrls;
  };

  const customButton = {
    color: 'white',
    width: '100px',
    height: '100px',
    fontSize: '16px',
    borderRadius: '2px',
    backgroundColor: 'palevioletred',
    fontWeight: '400',
  };

  const customFileContainer = {
    border: '2px solid palevioletred',
  };

  const addDescription: ()=> void = () => {
    const obj:ContentObject = {
      type: 'description',
      content: '아무말 아무말',
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
      <button type="button" className="upload-button" onClick={onClickHandler}>Upload</button>
      <div>
        <ImageUploader
          withIcon={false}
          withLabel={false}
          buttonText="이미지 선택"
          onChange={onDrop}
          imgExtension={['.jpg', '.png', '.gif']}
          maxFileSize={5242880}
          withPreview
          buttonStyles={customButton}
          fileContainerStyle={customFileContainer}
          singleImage
        />
      </div>
      <button onClick={addDescription}>글씨 추가</button>
    </div>
  );
}

export default ImageUpload;
