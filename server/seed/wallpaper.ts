import mongoose from 'mongoose';
import IWallpaper from '../interfaces/wallpaper';
import users from './user';
import { workImage as wallpaperId, user as userId } from './ids';

const wallpapers = [
  {
    owner: wallpaperId[0],
    creator: userId[0],
    public: true,
    ref: [],
    url: '1.jpg',
  },
  {
    owner: wallpaperId[0],
    creator: userId[0],
    public: true,
    ref: [],
    url: '2.jpg',
  },
  {
    owner: wallpaperId[0],
    creator: userId[0],
    public: true,
    ref: [],
    url: '3.jpg',
  },
  {
    owner: wallpaperId[0],
    creator: userId[0],
    public: true,
    ref: [],
    url: '4.jpg',
  },
  {
    owner: wallpaperId[0],
    creator: userId[0],
    public: true,
    ref: [],
    url: '5.jpg',
  },
  {
    owner: wallpaperId[1],
    creator: userId[1],
    public: true,
    ref: [],
    url: '6.jpg',
  },
  {
    owner: wallpaperId[1],
    creator: userId[1],
    public: true,
    ref: [],
    url: '7.jpg',
  },
  {
    owner: wallpaperId[1],
    creator: userId[1],
    public: true,
    ref: [],
    url: '8.jpg',
  },
  {
    owner: wallpaperId[1],
    creator: userId[1],
    public: true,
    ref: [],
    url: '9.jpg',
  },
  {
    owner: wallpaperId[1],
    creator: userId[1],
    public: true,
    ref: [],
    url: '10.jpg',
  },
  {
    owner: wallpaperId[2],
    creator: userId[2],
    public: true,
    ref: [],
    url: '11.jpg',
  },
  {
    owner: wallpaperId[2],
    creator: userId[2],
    public: true,
    ref: [],
    url: '12.jpg',
  },
  {
    owner: wallpaperId[2],
    creator: userId[2],
    public: true,
    ref: [],
    url: '13.jpg',
  },
  {
    owner: wallpaperId[2],
    creator: userId[2],
    public: true,
    ref: [],
    url: '14.jpg',
  },
  {
    owner: wallpaperId[2],
    creator: userId[2],
    public: true,
    ref: [],
    url: '15.jpg',
  },
];


export default wallpapers;
