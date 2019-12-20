import {
  Request, Response, NextFunction,
} from 'express';
import createError from 'http-errors';
import httpStatus from 'http-status';
import {
  AUTH, PROFILE, USER, PARAMS,
} from '../utils/messages';
import { findById } from '../services/user';
import {
  findProfile, followingUpdate, followerUpdate, findProfileByUserId,
} from '../services/profile';

import response from '../utils/response';

const addFollowing = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.decodedUser;
    if (!user) {
      throw (createError(httpStatus.UNAUTHORIZED, AUTH.UNAUTHORIZED));
    }
    const targetId = req.params.id;
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
    response(res);
  } catch (e) {
    next(e);
  }
};

const deleteFollowing = async (req: Request, res:Response, next:NextFunction) => {
  try {
    const user = req.decodedUser;
    if (!user) {
      throw (createError(httpStatus.UNAUTHORIZED, AUTH.UNAUTHORIZED));
    }
    const targetId = req.params.id;
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
    response(res);
  } catch (e) {
    next(e);
  }
};

export {
  addFollowing,
  deleteFollowing,
};
