import { Request, Response, NextFunction } from 'express';
import {
  findProfileId, findProfileFollowing, followingUpdate, followerUpdate,
} from '../services/user';

const addFollowing = async (req: Request, res: Response, next: NextFunction) => {
  const myId = '5df1992c3f9892105636735a';
  // const targetId = req.params.id;
  const targetId = '5df19bd2e947f714a40eb9dd';
  const myProfileId = '5df1992c3f98921056367359';

  try {
    const profile = await findProfileFollowing(myProfileId);
    if (profile === null) {
      throw Error('NULL type');
    }
    const newFollowing = [
      ...profile.following,
      targetId,
    ];
    await followingUpdate(myProfileId, newFollowing);

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
    res.json({ success: true });
  } catch (e) {
    next(e);
  }
};

export {
  addFollowing,
};
