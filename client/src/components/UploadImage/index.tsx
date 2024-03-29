import React, {
  useState, useRef,
} from 'react';
import ImageUploader from 'react-images-upload';
import { Redirect } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { useDispatch } from 'react-redux';
import {
  MAXSIZE_OF_UPLOADIMAGE, UPLOAD, IMAGEFORMAT,
} from '../../utils/constants';
import Preview from '../Preview';
import * as S from './style';
import PopupDetail from '../Upload_detail_Popup';
import { DocumentObject } from './type';
import { getShortId } from '../../utils';
import 'react-quill/dist/quill.snow.css';
import PurpleButton from '../../basics/PURPLE_Button';
import { login } from '../../modules/login/action';
import {
  CheckStringLength, CheckObjLength, imageUploadTitleChecker, imageUploadContentChecker,
} from '../../utils/check';
import {
  Axios, UPLOAD_IMAGE_URL, UPLOAD_IMAGE, LOGOUT,
} from '../../utils/request';

function ImageUpload() {
  const [documents, setDocumnets] = useState<DocumentObject[]>([]);
  const [title, setTitle] = useState<string>('');
  const [showPopupDETAIL, setShowPopupDETAIL] = useState<boolean>(false);

  const [field, setField] = useState('');
  const [ccl, setCcl] = useState('');
  const [ispublic, setIspublic] = useState(true);
  const [canComments, setCanComments] = useState(true);

  const [canRedirect, setCanRedirect] = useState<boolean>(false);
  const workId = useRef('');
  const [fileTypeWarn, setFileTypeWarn] = useState<string>('');
  const errorCheck = useRef(0);
  const [isAuthen, setIsAuthen] = useState<boolean>(true);
  const dispatch = useDispatch();
  const titleLengthChecker = CheckStringLength(imageUploadTitleChecker);
  const contentLengthChecker = CheckObjLength(imageUploadContentChecker);

  const updateContent = (type:string, file: File[]) => {
    if (file.length === errorCheck.current) {
      setFileTypeWarn(UPLOAD.UNSUPPORTED_TYPE);
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
    updateContent(UPLOAD.WALLPAPER, file);
  };

  const onDropImage = (file: File[]) => {
    updateContent(UPLOAD.IMAGE, file);
  };

  const makeFormData = () => {
    const formdata = new FormData();
    let format:string;

    documents.forEach((element) => {
      const { file, type } = element;
      if (file !== null && file.type === IMAGEFORMAT.JPEG) {
        format = IMAGEFORMAT._JPG;
        formdata.append(UPLOAD.MULTER_KEY, file, type + format);
      } else if (file !== null) {
        format = IMAGEFORMAT._PNG;
        formdata.append(UPLOAD.MULTER_KEY, file, type + format);
      }
    });
    return formdata;
  };

  const getImageUrl = async () => {
    const formdata = makeFormData();
    const reqConfig = UPLOAD_IMAGE_URL(formdata);
    const { data } = await Axios(reqConfig);
    const { objectStorageUrls } = data;
    return objectStorageUrls;
  };

  const logout = async () => {
    const reqConfig = LOGOUT();
    await Axios(reqConfig);
  };

  const uploadHandler = async () => {
    try {
      setShowPopupDETAIL(false);
      const urls = await getImageUrl();
      const isImageFiles = (type:string) => type === UPLOAD.IMAGE || type === UPLOAD.WALLPAPER;

      const dbContent = documents.map(({ type, content }) => ({
        type,
        content: isImageFiles(type) ? urls.shift() : content,
      }));
      const obj = {
        field,
        ccl,
        ispublic,
        canComments,
        title,
        content: dbContent,
        tags: [],
      };
      const reqConfig = UPLOAD_IMAGE(obj);
      const { data } = await Axios(reqConfig);
      const { workImageId } = data.data;
      workId.current = workImageId;
      setCanRedirect(true);
    } catch (e) {
      logout();
      dispatch(login());
      setIsAuthen(false);
    }
  };

  const renderRedirect = () => {
    if (canRedirect) {
      return <Redirect to={`/home/detail-image/${workId.current}`} />;
    }
  };

  const failToAuthen = () => {
    if (!isAuthen) {
      return <Redirect to="/login" />;
    }
  };

  const titleCheck = () => {
    if (!titleLengthChecker(title)) {
      return;
    }
    if (!contentLengthChecker(documents)) {
      return;
    }
    setShowPopupDETAIL(true);
  };

  const addDescription: ()=> void = () => {
    const obj:DocumentObject = {
      key: getShortId(),
      type: UPLOAD.DESCRIPTION,
      content: '',
      file: null,
      preview: '',
    };
    const temp2:DocumentObject[] = [...documents];
    temp2.push(obj);
    setDocumnets(temp2);
  };

  const onChangetitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const togglePopupDetail = () => {
    setShowPopupDETAIL(false);
  };

  const makeContent = (el: DocumentObject) => {
    if (el.type === UPLOAD.IMAGE || el.type === UPLOAD.WALLPAPER) {
      return (
        <S.ContentWrapper key={el.key}>
          <Preview src={el.preview} />
        </S.ContentWrapper>
      );
    }
    if (el.type === UPLOAD.DESCRIPTION) {
      return (
        <S.ContentWrapper key={el.key}>
          <ReactQuill
            value={el.content as string}
            onChange={(text) => {
              el.content = text;
              setDocumnets(documents.map((docu) => {
                if (docu.key === el.key) {
                  return {
                    ...el,
                    content: text,
                  };
                }
                return docu;
              }));
            }}
          />
        </S.ContentWrapper>
      );
    }
  };

  return (
    <S.UploadMain>
      <div>
        {renderRedirect()}
        {failToAuthen()}
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
        {
          documents.map((el:DocumentObject) => makeContent(el))
        }
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
      <PurpleButton buttonText="업로드" clickHandler={titleCheck} />
      {showPopupDETAIL && <PopupDetail text="추가 정보" cancleHandler={togglePopupDetail} aproveHandler={uploadHandler} setField={setField} setCcl={setCcl} setIspublic={setIspublic} setCanComments={setCanComments} field={field} ccl={ccl} />}
    </S.UploadMain>
  );
}

export default ImageUpload;
