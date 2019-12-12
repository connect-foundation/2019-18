import { Request, Response, NextFunction } from 'express';
import {
  findById, findProfile, followingUpdate, followerUpdate, findProfilePopulate,
} from '../services/user';

const addFollowing = async (req: Request, res: Response, next: NextFunction) => {
  const myId = '5df1992c3f9892105636735a';
  // const targetId = req.params.id;
  const targetId = '5df19bd2e947f714a40eb9dd';
  const myProfileId = '5df1992c3f98921056367359';

  try {
    const profile = await findProfile(myProfileId);
    if (profile === null) {
      throw Error('NULL type');
    }
    const newFollowing = [
      ...profile.following,
      targetId,
    ];
    await followingUpdate(myProfileId, newFollowing);

    const targetUser = await findById(targetId);
    if (targetUser === null) {
      throw Error('NULL type');
    }
    const targetProfile = await findProfile(targetUser.profile);
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

const deleteFollowing = async (req: Request, res:Response, next:NextFunction) => {
  const myId = '5df1992c3f9892105636735a';
  // const targetId = req.params.id;
  const targetId = '5df19bd2e947f714a40eb9dd';
  const myProfileId = '5df1992c3f98921056367359';

  try {
    const profile = await findProfile(myProfileId);
    if (profile === null) {
      throw Error('NULL type');
    }
    const newFollowing = profile.following.filter((e) => !e.equals(targetId));
    await followingUpdate(myProfileId, newFollowing);

    const targetUser = await findById(targetId);
    if (targetUser === null) {
      throw Error('NULL type');
    }
    const targetProfile = await findProfile(targetUser.profile);
    if (targetProfile === null) {
      throw Error('NULL type');
    }
    const newFollwer = targetProfile.follower.filter((e) => !e.equals(myId));
    await followerUpdate(targetProfile.id, newFollwer);
    res.json({ success: true });
  } catch (e) {
    next(e);
  }
};

const getAllFollow = async (req: Request, res: Response, next: NextFunction) => {
  const myProfileId = '5df1992c3f98921056367359';

  try {
    const profile = await findProfilePopulate(myProfileId);
    if (profile === null) {
      throw Error('NULL type');
    }
    res.json({ result: profile });
  } catch (e) {
    next(e);
  }
};

export {
  addFollowing,
  deleteFollowing,
  getAllFollow,
};
