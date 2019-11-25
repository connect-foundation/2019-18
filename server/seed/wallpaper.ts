import mongoose from 'mongoose';
import IWallpaper from '../interfaces/wallpaper';
import users from './user';
import { wallpaper as wallpaperId, user as userId } from './ids';

const wallpapers:IWallpaper[] = [
  {
    owner: wallpaperId[0],
    creator: userId[0],
    public: true,
    ref: [],
    url: '35mm-6HTf3ZlGYHM-unsplash.jpg',
  },
  {
    owner: wallpaperId[1],
    creator: userId[0],
    public: true,
    ref: [],
    url: '35mm-IstXvxHGoA4-unsplash.jpg',
  },
  {
    owner: wallpaperId[2],
    creator: userId[0],
    public: true,
    ref: [],
    url: '35mm-tR-hmR1ZGmE-unsplash.jpg',
  },
  {
    owner: wallpaperId[3],
    creator: userId[0],
    public: true,
    ref: [],
    url: 'annie-spratt-6L_Jg8RMjmo-unsplash.jpg',
  },
  {
    owner: wallpaperId[4],
    creator: userId[0],
    public: true,
    ref: [],
    url: 'annie-spratt-T1u_zyWjKng-unsplash.jpg',
  },
  {
    owner: wallpaperId[5],
    creator: userId[1],
    public: true,
    ref: [],
    url: 'armin-hosseini-hNX1Qe4gksQ-unsplash.jpg',
  },
  {
    owner: wallpaperId[6],
    creator: userId[1],
    public: true,
    ref: [],
    url: ' armin-hosseini-rsg9k0FkfoM-unsplash.jpg',
  },
  {
    owner: wallpaperId[7],
    creator: userId[1],
    public: true,
    ref: [],
    url: 'dima-kosh-oT7LSYk6Ok4-unsplash.jpg',
  },
  {
    owner: wallpaperId[8],
    creator: userId[1],
    public: true,
    ref: [],
    url: 'gemma-evans-BVu7ej00PwA-unsplash.jpg',
  },
  {
    owner: wallpaperId[9],
    creator: userId[1],
    public: true,
    ref: [],
    url: 'gemma-evans-GU2nWOhDFAY-unsplash.jpg',
  },
  {
    owner: wallpaperId[10],
    creator: userId[2],
    public: true,
    ref: [],
    url: 'kai-wei-HiVnFped9vE-unsplash.jpg',
  },
  {
    owner: wallpaperId[11],
    creator: userId[2],
    public: true,
    ref: [],
    url: 'maite-recalde-Wti4g5E-Mw0-unsplash.jpg',
  },
  {
    owner: wallpaperId[12],
    creator: userId[2],
    public: true,
    ref: [],
    url: 'memories-on-35mm-SEHphg11Y1M-unsplash.jpg',
  },
  {
    owner: wallpaperId[13],
    creator: userId[2],
    public: true,
    ref: [],
    url: 'memories-on-35mm-ZS0ewed4_oU-unsplash.jpg',
  },
  {
    owner: wallpaperId[14],
    creator: userId[2],
    public: true,
    ref: [],
    url: 'ola-ciszewska-ZqKx1AV5laA-unsplash.jpg',
  },
];


export default wallpapers;
