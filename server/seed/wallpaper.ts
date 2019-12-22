import mongoose from 'mongoose';
import IWallpaper from '../interfaces/wallpaper';
import users from './user';
import { workImage as wallpaperId, user as userId } from './ids';

const wallpapers = [
  {
    owner: wallpaperId[5],
    creator: userId[0],
    public: true,
    ref: [],
    url: '1.jpg',
  },
  {
    owner: wallpaperId[6],
    creator: userId[0],
    public: true,
    ref: [],
    url: '2.jpg',
  },
  {
    owner: wallpaperId[7],
    creator: userId[0],
    public: true,
    ref: [],
    url: '3.jpg',
  },
  {
    owner: wallpaperId[8],
    creator: userId[0],
    public: true,
    ref: [],
    url: '4.jpg',
  },
  {
    owner: wallpaperId[9],
    creator: userId[0],
    public: true,
    ref: [],
    url: '5.png',
  },
  {
    owner: wallpaperId[10],
    creator: userId[1],
    public: true,
    ref: [],
    url: '6.jpg',
  },
  {
    owner: wallpaperId[11],
    creator: userId[1],
    public: true,
    ref: [],
    url: '7.jpg',
  },
  {
    owner: wallpaperId[12],
    creator: userId[1],
    public: true,
    ref: [],
    url: '8.jpg',
  },
  {
    owner: wallpaperId[13],
    creator: userId[1],
    public: true,
    ref: [],
    url: '9.jpg',
  },
  {
    owner: wallpaperId[14],
    creator: userId[1],
    public: true,
    ref: [],
    url: '10.jpg',
  },


  {
    owner: wallpaperId[15],
    creator: userId[2],
    public: true,
    ref: [],
    url: '11.jpg',
  },
  {
    owner: wallpaperId[16],
    creator: userId[2],
    public: true,
    ref: [],
    url: '12.jpg',
  },
  {
    owner: wallpaperId[17],
    creator: userId[2],
    public: true,
    ref: [],
    url: '13.jpg',
  },
  {
    owner: wallpaperId[18],
    creator: userId[2],
    public: true,
    ref: [],
    url: '14.jpg',
  },
  {
    owner: wallpaperId[19],
    creator: userId[2],
    public: true,
    ref: [],
    url: '15.jpg',
  },

];


export default wallpapers;
