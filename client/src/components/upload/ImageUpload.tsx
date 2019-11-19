import React, { useState, ChangeEvent } from 'react';
import ImageUploader from 'react-images-upload';

function ImageUpload() {
  const [pictures, setPictures] = useState <File[]>([]);
  const [preview, setPreview] = useState('');
  let fileReader: FileReader;

  const handleFileRead = () => {
    const content = fileReader.result;
  };
  const onDrop = (picture: File[]) => {
    const temp:File[] = pictures;
    if (!temp) {
      return;
    }
    const newtemp = temp.concat(picture);
    if (typeof newtemp === 'number') {
      return;
    }
    setPictures(newtemp);
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(picture[0]);
    setPreview(URL.createObjectURL(picture[0]));
  };

  return (
    <div className="ImageUpload-container">
      <p>ImageUpload</p>
      <div>
        <ImageUploader
          withIcon
          buttonText="Choose images"
          onChange={onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
          withPreview
        />
      </div>
      <div>
        {/* <input type="file" onChange={handleChange} /> */}
      </div>
      <div>
        <img src={preview} alt="preview_image" />
      </div>
    </div>
  );
}

export default ImageUpload;
