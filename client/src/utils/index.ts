import axios from 'axios';
import shortId from 'shortid';
import moment from 'moment';
import 'moment/locale/ko';

export const getTime = (t:number) => {
  function appendLeadingZeroes(n:number) {
    if (n <= 9) return `0${n}`;
    return n;
  }

  const currentDatetime = new Date(t);
  const formattedDate = `${currentDatetime.getFullYear()}-${appendLeadingZeroes(currentDatetime.getMonth() + 1)}-${appendLeadingZeroes(currentDatetime.getDate())} ${appendLeadingZeroes(currentDatetime.getHours())}:${appendLeadingZeroes(currentDatetime.getMinutes())}:${appendLeadingZeroes(currentDatetime.getSeconds())}`;

  return formattedDate;
};

export const getTimeFromNow = (t:number) => moment(t).fromNow();

export const getShortId = () => shortId.generate();

export const getFileUrl = (file:File) => window.URL.createObjectURL(file);
