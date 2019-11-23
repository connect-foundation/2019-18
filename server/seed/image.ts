import mongoose from 'mongoose';
import IImage from '../interfaces/image';
import users from './user';

const images:IImage[] = [
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[0]._id,
    public: true,
    ref: [],
    url: 'https://kr.object.ncloudstorage.com/crafolio/works/prescott-horn-4j-y6rpohFI-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[0]._id,
    public: true,
    ref: [],
    url: 'https://kr.object.ncloudstorage.com/crafolio/works/prescott-horn-RIguu7kJqLM-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[0]._id,
    public: true,
    ref: [],
    url: 'https://kr.object.ncloudstorage.com/crafolio/works/prescott-horn-yoO8xot8pKY-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[0]._id,
    public: true,
    ref: [],
    url: 'https://kr.object.ncloudstorage.com/crafolio/works/randy-laybourne-h5MBEIV3t1s-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[0]._id,
    public: true,
    ref: [],
    url: 'https://kr.object.ncloudstorage.com/crafolio/works/ruslan-petrov--9cV7wTi--Y-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[1]._id,
    public: true,
    ref: [],
    url: 'https://kr.object.ncloudstorage.com/crafolio/works/ruslan-petrov-9ljUUBK6jNQ-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[1]._id,
    public: true,
    ref: [],
    url: 'https://kr.object.ncloudstorage.com/crafolio/works/ruslan-petrov-E7sVm7fOZmY-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[1]._id,
    public: true,
    ref: [],
    url: 'https://kr.object.ncloudstorage.com/crafolio/works/ruslan-petrov-bmJSjYjo-Fo-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[1]._id,
    public: true,
    ref: [],
    url: 'https://kr.object.ncloudstorage.com/crafolio/works/stanislav-rozhkov-7O5L2R31Lv4-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[1]._id,
    public: true,
    ref: [],
    url: 'https://kr.object.ncloudstorage.com/crafolio/works/the-joy-of-film-74HpE9VOEQU-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[2]._id,
    public: true,
    ref: [],
    url: 'https://kr.object.ncloudstorage.com/crafolio/works/the-new-york-public-library-8J5rVKRuBTY-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[2]._id,
    public: true,
    ref: [],
    url: 'https://kr.object.ncloudstorage.com/crafolio/works/victor-ballesteros-XNlYz25pzII-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[2]._id,
    public: true,
    ref: [],
    url: 'https://kr.object.ncloudstorage.com/crafolio/works/yang-deng-W_mPpR35kWo-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[2]._id,
    public: true,
    ref: [],
    url: 'https://kr.object.ncloudstorage.com/crafolio/works/yining-liu-g-x7C_B0zwM-unsplash.jpg',
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: users[2]._id,
    public: true,
    ref: [],
    url: 'https://kr.object.ncloudstorage.com/crafolio/works/yining-liu-g_4G8MxFZTw-unsplash.jpg',
  },
];

export default images;
