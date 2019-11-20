import React, {
  useState, useEffect,
} from 'react';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import Preview from './Preview';

function ImageUpload() {
  const [pictures, setPictures] = useState <File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  useEffect(() => {
    console.dir(pictures);
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
  };

  const onClickHandler = () => {
    const data = new FormData();
    data.append('file', pictures[0]);
    axios.post('http://localhost:3050/upload', data, { // receive two parameter endpoint url ,form data
    })
      .then((res) => { // then print response status
        console.log(res.statusText);
      });
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
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
          withPreview
          buttonStyles={customButton}
          fileContainerStyle={customFileContainer}
          singleImage
        />
      </div>
    </div>
  );
}

export default ImageUpload;
