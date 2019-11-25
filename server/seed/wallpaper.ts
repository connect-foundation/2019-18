import mongoose from 'mongoose';
import IWallpaper from '../interfaces/wallpaper';
import users from './user';

const wallpapers:IWallpaper[] = [
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[0]._id,
    public: true,
    ref: [],
    url: '35mm-6HTf3ZlGYHM-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[0]._id,
    public: true,
    ref: [],
    url: '35mm-IstXvxHGoA4-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[0]._id,
    public: true,
    ref: [],
    url: '35mm-tR-hmR1ZGmE-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[0]._id,
    public: true,
    ref: [],
    url: 'annie-spratt-6L_Jg8RMjmo-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[0]._id,
    public: true,
    ref: [],
    url: 'annie-spratt-T1u_zyWjKng-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[1]._id,
    public: true,
    ref: [],
    url: 'armin-hosseini-hNX1Qe4gksQ-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[1]._id,
    public: true,
    ref: [],
    url: ' armin-hosseini-rsg9k0FkfoM-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[1]._id,
    public: true,
    ref: [],
    url: 'dima-kosh-oT7LSYk6Ok4-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[1]._id,
    public: true,
    ref: [],
    url: 'gemma-evans-BVu7ej00PwA-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[1]._id,
    public: true,
    ref: [],
    url: 'gemma-evans-GU2nWOhDFAY-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[2]._id,
    public: true,
    ref: [],
    url: 'kai-wei-HiVnFped9vE-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[2]._id,
    public: true,
    ref: [],
    url: 'maite-recalde-Wti4g5E-Mw0-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[2]._id,
    public: true,
    ref: [],
    url: 'memories-on-35mm-SEHphg11Y1M-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[2]._id,
    public: true,
    ref: [],
    url: 'memories-on-35mm-ZS0ewed4_oU-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[2]._id,
    public: true,
    ref: [],
    url: 'ola-ciszewska-ZqKx1AV5laA-unsplash.jpg',
  },
];


export default wallpapers;
