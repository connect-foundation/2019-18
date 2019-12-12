import { Request, Response, NextFunction } from 'express';
import {
  findProfileId, findProfileFollowing, followingUpdate, followerUpdate,
} from '../services/user';

const addFollowing = async (req: Request, res: Response, next: NextFunction) => {
  const myId = '0000000378d0d3339413995e';
  // const targetId = req.params.id;
  const targetId = '0000000278d0d3339413995d';
  try {
    const user = await findProfileId(myId);
    if (user === null) {
      throw Error('NULL type1');
    }
    const profile = await findProfileFollowing(user.profile);
    if (profile === null) {
      throw Error('NULL type');
    }
    const newFollowing = [
      ...profile.following,
      targetId,
    ];
    await followingUpdate(profile.id, newFollowing);

    const targetUser = await findProfileId(targetId);
    if (targetUser === null) {
      throw Error('NULL type');
    }
    const targetProfile = await findProfileFollowing(targetUser.profile);
    if (targetProfile === null) {
      throw Error('NULL type');
    }
    const newFollwer = [
      ...targetProfile.follower,
      myId,
    ];
    await followerUpdate(targetProfile.id, newFollwer);
  } catch (e) {
    next(e);
  }
};

export {
  addFollowing,
};
