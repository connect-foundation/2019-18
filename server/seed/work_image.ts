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
    comments: [
      {
        owner: userId[1],
        content: faker.lorem.sentences(),
        createdAt: Date.now(),
      },
      {
        owner: userId[2],
        content: faker.lorem.sentences(),
        createdAt: Date.now(),
      },
    ],
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
    comments: [
      {
        owner: userId[1],
        content: faker.lorem.sentences(),
        createdAt: Date.now(),
      },
      {
        owner: userId[2],
        content: faker.lorem.sentences(),
        createdAt: Date.now(),
      },
    ],
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
    comments: [
      {
        owner: userId[0],
        content: faker.lorem.sentences(),
        createdAt: Date.now(),
      },
      {
        owner: userId[2],
        content: faker.lorem.sentences(),
        createdAt: Date.now(),
      },
    ],
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
    comments: [
      {
        owner: userId[0],
        content: faker.lorem.sentences(),
        createdAt: Date.now(),
      },
      {
        owner: userId[2],
        content: faker.lorem.sentences(),
        createdAt: Date.now(),
      },
    ],
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
    comments: [
      {
        owner: userId[0],
        content: faker.lorem.sentences(),
        createdAt: Date.now(),
      },
      {
        owner: userId[1],
        content: faker.lorem.sentences(),
        createdAt: Date.now(),
      },
    ],
    commentsAllow: true,
    ccl: 'all rights reserved',
    field: 'this is field',
    public: true,
    tags: ['t', 'a', 'g', 's'],
    views: faker.random.number(234),
  },
];

export default workImages;
