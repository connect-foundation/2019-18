import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import httpStatus from 'http-status';
import {
  findProfile, followingUpdate, followerUpdate, findProfilePopulate,
} from '../services/profile';
import { findById } from '../services/user';
import { AUTH, PROFILE, USER } from '../utils/messages';

const addFollowing = async (req: Request, res: Response, next: NextFunction) => {
  // dev 용
  const targetId = '5df671be1bf9dc2bb1e940c6';
  const user = {
    profile: '5df676bf688d0e3471bdfa0a',
    id: '5df676bf688d0e3471bdfa0b',
  };
  try {
    // const user = req.decodedUser;
    // if (!user) {
    //   throw (createError(httpStatus.UNAUTHORIZED, AUTH.UNAUTHORIZED));
    // }
    // const targetId = req.params.id;
    const profile = await findProfile(user.profile);
    if (profile === null) {
      throw Error(PROFILE.NOT_MATCH);
    }
    const newFollowing = [
      ...profile.following,
      targetId,
    ];
    await followingUpdate(user.profile, newFollowing);

    const targetUser = await findById(targetId);
    if (targetUser === null) {
      throw Error(USER.NOT_MATCH);
    }
    const targetProfile = await findProfile(targetUser.profile);
    if (targetProfile === null) {
      throw Error(PROFILE.NOT_MATCH);
    }
    const newFollwer = [
      ...targetProfile.follower,
      user.id,
    ];
    await followerUpdate(targetProfile.id, newFollwer);
    res.json({ success: true });
  } catch (e) {
    next(e);
  }
};

const deleteFollowing = async (req: Request, res:Response, next:NextFunction) => {
  // dev 용
  const targetId = '5df671d31bf9dc2bb1e940c8';
  const user = {
    profile: '5df671be1bf9dc2bb1e940c5',
    id: '5df671be1bf9dc2bb1e940c6',
  };
  try {
    // const user = req.decodedUser;
    // if (!user) {
    //   throw (createError(httpStatus.UNAUTHORIZED, AUTH.UNAUTHORIZED));
    // }
    // const targetId = req.params.id;
    const profile = await findProfile(user.profile);
    if (profile === null) {
      throw Error(PROFILE.NOT_MATCH);
    }
    const newFollowing = profile.following.filter((e) => !e.equals(targetId));
    await followingUpdate(user.profile, newFollowing);

    const targetUser = await findById(targetId);
    if (targetUser === null) {
      throw Error(USER.NOT_MATCH);
    }
    const targetProfile = await findProfile(targetUser.profile);
    if (targetProfile === null) {
      throw Error(PROFILE.NOT_MATCH);
    }
    const newFollwer = targetProfile.follower.filter((e) => !e.equals(user.id));
    await followerUpdate(targetProfile.id, newFollwer);
    res.json({ success: true });
  } catch (e) {
    next(e);
  }
};

const getAllFollow = async (req: Request, res: Response, next: NextFunction) => {
  const user = {
    profile: '5df671be1bf9dc2bb1e940c5',
    id: '5df671be1bf9dc2bb1e940c6',
  };
  // 더미 민지 2
  try {
    const profile = await findProfilePopulate(user.profile);
    if (profile === null) {
      throw Error(PROFILE.NOT_MATCH);
    }
    res.json({ profile });
  } catch (e) {
    next(e);
  }
};

export {
  addFollowing,
  deleteFollowing,
  getAllFollow,
};
