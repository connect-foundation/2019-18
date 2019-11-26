import mongoose from 'mongoose';
import faker from 'faker';
import users from './user';
import { IWorkImage, IWorkImageContent } from '../interfaces/workImage';
import images from './image';
import { workImage as workImageId, user as userId } from './ids';

const workImages = [
  {
    _id: workImageId[0],
    owner: userId[0],
    title: faker.name.title(),
    content: [
      {
        type: 'image',
        content: images[0].url,
      },
      {
        type: 'image',
        content: images[1].url,
      },
      {
        type: 'text',
        content: faker.lorem.sentence(),
      },
      {
        type: 'image',
        content: images[2].url,
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [faker.lorem.sentences(), faker.lorem.sentences()],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: 'this is field',
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
        type: 'image',
        content: images[3].url,
      },
      {
        type: 'image',
        content: images[4].url,
      },
      {
        type: 'text',
        content: faker.lorem.sentence(),
      },
      {
        type: 'image',
        content: images[5].url,
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [faker.lorem.sentences(), faker.lorem.sentences()],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: 'this is field',
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
        type: 'image',
        content: images[6].url,
      },
      {
        type: 'image',
        content: images[7].url,
      },
      {
        type: 'text',
        content: faker.lorem.sentence(),
      },
      {
        type: 'image',
        content: images[8].url,
      },
    ],
    emoji: ['emoji', 'test'],
    comments: [faker.lorem.sentences(), faker.lorem.sentences()],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: 'this is field',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
  {
    _id: workImageId[3],
    owner: userId[1],
    title: faker.name.title(),
    content: [{
      type: 'image',
      content: images[9].url,
    },
    {
      type: 'image',
      content: images[10].url,
    },
    {
      type: 'text',
      content: faker.lorem.sentence(),
    },
    {
      type: 'image',
      content: images[11].url,
    },
    ],
    emoji: ['emoji', 'test'],
    comments: [faker.lorem.sentences(), faker.lorem.sentences()],
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
      type: 'music',
      content: images[12].url,
    },
    {
      type: 'music',
      content: images[13].url,
    },
    {
      type: 'text',
      content: faker.lorem.sentence(),
    },
    {
      type: 'image',
      content: images[14].url,
    },
    ],
    emoji: ['emoji', 'test'],
    comments: [faker.lorem.sentences(), faker.lorem.sentences()],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: 'this is field',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
];

export default workImages;
