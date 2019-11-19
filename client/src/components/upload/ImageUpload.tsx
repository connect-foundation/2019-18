import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import { EEXIST } from 'constants';

function ImageUpload() {
  const [pictures, setPictures] = useState([]);
  const [preview, setPreview] = useState('');

  //   const onDrop = (picture: File) => {
  //     const newPictures = [...pictures, picture];
  //     setPictures(newPictures);
  //     setPreview(URL.createObjectURL(picture));
  //   };


  const getFileFromInput = (file: File) => new Promise(((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = function () { resolve(reader.result); };
    reader.readAsBinaryString(file); // here the file can be read in different way Text, DataUrl, ArrayBuffer
  }));

  const manageUploadedFile = (binary: String, file: File) => {
    // do what you need with your file (fetch POST, ect ....)
    if (binary) {
      console.log(`The file size is ${binary.length}`);
    }
  };

  const handleChange = async (event: HTMLInputElement) => {
    if (event.files) {
      console.log(event.files.item);
      console.log(event.files.length);
      const binary = await getFileFromInput(event.files[0]);
    } else {
      console.log('empty');
    }
    // Array.from(event.files).forEach((file) => {
    //   getFileFromInput(file)
    //     .then((binary) => {
    //       this.manageUploadedFile(binary, file);
    //     }).catch((reason) => {
    //       console.log(`Error during upload ${reason}`);
    //       event.target.value = ''; // to allow upload of same file if error occurs
    //     });
    // });
  };

  return (
    <div className="ImageUpload-container">
      <p>ImageUpload</p>
      <div>
        {/* <ImageUploader
          withIcon
          buttonText="Choose images"
          onChange={onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
        /> */}
      </div>
      <div>
        <input type="file" onChange={(e) => handleChange(e.target)} />
      </div>
      <div>
        <img src={preview} alt="preview_image" />
      </div>
    </div>
  );
}

export default ImageUpload;
