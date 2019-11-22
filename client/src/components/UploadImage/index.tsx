import React, {
    useState,
  } from 'react';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import uuidv4 from 'uuid/v4';
import Preview from '../Preview';

import { customButton, customFileContainer } from './styles';

interface ContentObject {
    type: string,
    content: string,
}

function ImageUpload() {
    const [pictures, setPictures] = useState <File[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);
    const [contents, setContents] = useState<ContentObject[]>([]);

    const onDrop = (picture: File[]) => {
        const newpicture = picture[picture.length - 1];
        const tempPictures:File[] = pictures;
        tempPictures.push(newpicture);
        setPictures(tempPictures);

        const tempPreviews = tempPictures.map((file) => URL.createObjectURL(file));
        setPreviews(tempPreviews);

        const tempContents:ContentObject[] = contents;
        const obj:ContentObject = {
        type: 'image',
        content: '',
        };
        tempContents.push(obj);
        setContents(tempContents);
    };

    const makeFormData = () => {
        const formdata = new FormData();
        let format:string;
        pictures.forEach((element) => {
            if (element.type === 'image/jpeg') {
                format = '.jpg';
            } else if (element.type === 'image/png') {
                format = '.png';
            }
            const nameUuid = uuidv4();
            formdata.append('multi-files', element, nameUuid + format);
        });
        return formdata;
    };

    const getImageUrl = async () => {
        const formdata = makeFormData();
        const { data } = await axios.post('http://localhost:3050/upload/getImageUrl', formdata);
        const { objectStorageUrls } = data;
        return objectStorageUrls;
    };

    const uploadHandler = async () => {
        const urls = await getImageUrl();
        const dbContent = contents.map((element2) => {
            if (element2.type === 'image') {
                element2.content = urls.shift();
            }
            return element2;
        });
        const obj = {
            title: '임시 타이틀',
            content: dbContent,
            commemts_allow: true,
            ccl: '임시 CCL',
            field: '임시 field',
            public: true,
            tags: [],
        };

        const { data } = await axios.post('http://localhost:3050/upload/works-image', obj);
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
        <button type="button" className="upload-button" onClick={uploadHandler}>Upload</button>
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
  