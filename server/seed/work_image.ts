import mongoose from 'mongoose';
import faker from 'faker';
import users from './user';
import { IWorkImage, IWorkImageContent } from '../interfaces/workImage';
import images from './image';
import wallpaper from './wallpaper';
import { workImage as workImageId, user as userId } from './ids';

const workImages = [
  {
    _id: workImageId[0],
    owner: userId[0],
    title: faker.name.title(),
    content: [
      {
        type: 'images',
        content: images[0].url,
      },
      {
        type: 'images',
        content: images[1].url,
      },
      {
        type: 'description',
        content: faker.lorem.sentence(),
      },
      {
        type: 'images',
        content: images[2].url,
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: '알러스트',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
  {
    _id: workImageId[1],
    owner: userId[0],
    title: faker.name.title(),
    content: [
      {
        type: 'images',
        content: images[3].url,
      },
      {
        type: 'images',
        content: images[4].url,
      },
      {
        type: 'description',
        content: faker.lorem.sentence(),
      },
      {
        type: 'images',
        content: images[5].url,
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: '알러스트',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
  {
    _id: workImageId[2],
    owner: userId[1],
    title: faker.name.title(),
    content: [
      {
        type: 'images',
        content: images[6].url,
      },
      {
        type: 'images',
        content: images[7].url,
      },
      {
        type: 'description',
        content: faker.lorem.sentence(),
      },
      {
        type: 'images',
        content: images[8].url,
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: '알러스트',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
  {
    _id: workImageId[3],
    owner: userId[1],
    title: faker.name.title(),
    content: [
      {
        type: 'images',
        content: images[9].url,
      },
      {
        type: 'images',
        content: images[10].url,
      },
      {
        type: 'description',
        content: faker.lorem.sentence(),
      },
      {
        type: 'images',
        content: images[11].url,
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: 'this is field',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
  {
    _id: workImageId[4],
    owner: userId[2],
    title: faker.name.title(),
    content: [{
      type: 'images',
      content: images[12].url,
    },
    {
      type: 'images',
      content: images[13].url,
    },
    {
      type: 'description',
      content: faker.lorem.sentence(),
    },
    {
      type: 'images',
      content: images[14].url,
    },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: 'this is field',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },


  
  //wallpaper
  {
    _id: workImageId[5],
    owner: userId[0],
    title: faker.name.title(),
    content: [
      {
        type: 'wallpapers',
        content: wallpaper[0].url,
      },
      {
        type: 'description',
        content: faker.lorem.sentence(),
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: '배경화면',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
  {
    _id: workImageId[6],
    owner: userId[0],
    title: faker.name.title(),
    content: [
      {
        type: 'wallpapers',
        content: wallpaper[1].url,
      },
      {
        type: 'description',
        content: faker.lorem.sentence(),
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: '배경화면',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
  {
    _id: workImageId[7],
    owner: userId[0],
    title: faker.name.title(),
    content: [
      {
        type: 'wallpapers',
        content: wallpaper[2].url,
      },
      {
        type: 'description',
        content: faker.lorem.sentence(),
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: '배경화면',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
  {
    _id: workImageId[8],
    owner: userId[0],
    title: faker.name.title(),
    content: [
      {
        type: 'wallpapers',
        content: wallpaper[3].url,
      },
      {
        type: 'description',
        content: faker.lorem.sentence(),
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: '배경화면',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
  {
    _id: workImageId[9],
    owner: userId[0],
    title: faker.name.title(),
    content: [
      {
        type: 'wallpapers',
        content: wallpaper[4].url,
      },
      {
        type: 'description',
        content: faker.lorem.sentence(),
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: '배경화면',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
  {
    _id: workImageId[10],
    owner: userId[0],
    title: faker.name.title(),
    content: [
      {
        type: 'wallpapers',
        content: wallpaper[5].url,
      },
      {
        type: 'description',
        content: faker.lorem.sentence(),
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: '배경화면',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
  {
    _id: workImageId[11],
    owner: userId[0],
    title: faker.name.title(),
    content: [
      {
        type: 'wallpapers',
        content: wallpaper[6].url,
      },
      {
        type: 'description',
        content: faker.lorem.sentence(),
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: '배경화면',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
  {
    _id: workImageId[12],
    owner: userId[0],
    title: faker.name.title(),
    content: [
      {
        type: 'wallpapers',
        content: wallpaper[7].url,
      },
      {
        type: 'description',
        content: faker.lorem.sentence(),
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: '배경화면',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
  {
    _id: workImageId[13],
    owner: userId[0],
    title: faker.name.title(),
    content: [
      {
        type: 'wallpapers',
        content: wallpaper[8].url,
      },
      {
        type: 'description',
        content: faker.lorem.sentence(),
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: '배경화면',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
  {
    _id: workImageId[14],
    owner: userId[0],
    title: faker.name.title(),
    content: [
      {
        type: 'wallpapers',
        content: wallpaper[9].url,
      },
      {
        type: 'description',
        content: faker.lorem.sentence(),
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: '배경화면',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },




  {
    _id: workImageId[15],
    owner: userId[2],
    title: faker.name.title(),
    content: [
      {
        type: 'wallpapers',
        content: wallpaper[10].url,
      },
      {
        type: 'description',
        content: faker.lorem.sentence(),
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: '배경화면',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
  {
    _id: workImageId[16],
    owner: userId[2],
    title: faker.name.title(),
    content: [
      {
        type: 'wallpapers',
        content: wallpaper[11].url,
      },
      {
        type: 'description',
        content: faker.lorem.sentence(),
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: '배경화면',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
  {
    _id: workImageId[17],
    owner: userId[2],
    title: faker.name.title(),
    content: [
      {
        type: 'wallpapers',
        content: wallpaper[12].url,
      },
      {
        type: 'description',
        content: faker.lorem.sentence(),
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: '배경화면',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
  {
    _id: workImageId[18],
    owner: userId[2],
    title: faker.name.title(),
    content: [
      {
        type: 'wallpapers',
        content: wallpaper[13].url,
      },
      {
        type: 'description',
        content: faker.lorem.sentence(),
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: '배경화면',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
  {
    _id: workImageId[19],
    owner: userId[2],
    title: faker.name.title(),
    content: [
      {
        type: 'wallpapers',
        content: wallpaper[14].url,
      },
      {
        type: 'description',
        content: faker.lorem.sentence(),
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: '배경화면',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
];

export default workImages;
