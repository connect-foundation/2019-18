import faker from 'faker';
import { user as userId, profile as profileId } from './ids';
import 'faker/locale/ko';

const profiles = [
  {
    _id: profileId[0],
    follower: [userId[1], userId[2]],
    following: [userId[1], userId[2]],
    introSimple: faker.name.jobTitle(),
    introDetail: faker.name.jobDescriptor(),
    activeFields: faker.name.jobType(),
    websiteUrl: faker.internet.url(),
  },
  {
    _id: profileId[1],
    follower: [userId[0], userId[2]],
    following: [userId[0], userId[2]],
    introSimple: faker.name.jobTitle(),
    introDetail: faker.name.jobDescriptor(),
    activeFields: faker.name.jobType(),
    websiteUrl: faker.internet.url(),
  },
  {
    _id: profileId[2],
    follower: [userId[0], userId[1]],
    following: [userId[0], userId[1]],
    introSimple: faker.name.jobTitle(),
    introDetail: faker.name.jobDescriptor(),
    activeFields: faker.name.jobType(),
    websiteUrl: faker.internet.url(),
  },
];

export default profiles;
