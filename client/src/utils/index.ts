import shortId from 'shortid';
import moment from 'moment';
import 'moment/locale/ko';
import Swal from 'sweetalert2';
import { theme } from '../style/theme';

export const getTime = (t:number) => {
  function appendLeadingZeroes(n:number) {
    if (n <= 9) return `0${n}`;
    return n;
  }

  const currentDatetime = new Date(t);
  const formattedDate = `${currentDatetime.getFullYear()}-${appendLeadingZeroes(currentDatetime.getMonth() + 1)}-${appendLeadingZeroes(currentDatetime.getDate())} ${appendLeadingZeroes(currentDatetime.getHours())}:${appendLeadingZeroes(currentDatetime.getMinutes())}:${appendLeadingZeroes(currentDatetime.getSeconds())}`;

  return formattedDate;
};

export const getTimeSimple = (t: number) => {
  function appendLeadingZeroes(n:number) {
    if (n <= 9) return `0${n}`;
    return n;
  }

  const currentDatetime = new Date(t);
  const formattedDate = `${currentDatetime.getFullYear()}-${appendLeadingZeroes(currentDatetime.getMonth() + 1)}-${appendLeadingZeroes(currentDatetime.getDate())}`;

  return formattedDate;
};

export const getTimeFromNow = (t:number) => moment(t).fromNow();

export const getShortId = () => shortId.generate();

export const getFileUrl = (file:File) => window.URL.createObjectURL(file);

export const Alert = (title: string) => Swal.fire({
  position: 'top',
  title,
  showClass: {
    popup: 'animated fadeInDown faster',
  },
  hideClass: {
    popup: 'animated fadeOutUp faster',
  },
  confirmButtonColor: theme.CRA_MINT_FIRST,
});
