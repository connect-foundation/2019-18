import {
  findProfile, followingUpdate, followerUpdate, findProfilePopulate,
} from '../services/profile';
import { findById } from '../services/user';
import { AUTH, PROFILE, USER, PARAMS } from '../utils/messages';
import {
  Request, Response, NextFunction,
} from 'express';
import createError from 'http-errors';
import httpStatus from 'http-status';
import mongoose from 'mongoose';
import {
  findById, findFollower, findFollowing,
} from '../services/user';
import response from '../utils/response';

const addFollowing = async (req: Request, res: Response, next: NextFunction) => {
  // dev 용
  // const targetId = '5df671be1bf9dc2bb1e940c6';
  // const user = {
  //   profile: '5df676bf688d0e3471bdfa0a',
  //   id: '5df676bf688d0e3471bdfa0b',
  // };
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
    res.json({ success: true });
  } catch (e) {
    next(e);
  }
};

const deleteFollowing = async (req: Request, res:Response, next:NextFunction) => {
  // dev 용
  // const targetId = '5df671d31bf9dc2bb1e940c8';
  // const user = {
  //   profile: '5df671be1bf9dc2bb1e940c5',
  //   id: '5df671be1bf9dc2bb1e940c6',
  // };
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
    res.json({ success: true });
  } catch (e) {
    next(e);
  }
};

const getAllFollow = async (req: Request, res: Response, next: NextFunction) => {
  // const user = {
  //   profile: '5df671be1bf9dc2bb1e940c5',
  //   id: '5df671be1bf9dc2bb1e940c6',
  // };
  try {
    const user = req.decodedUser;
    if (!user) {
      throw (createError(httpStatus.UNAUTHORIZED, AUTH.UNAUTHORIZED));
    }
    const profile = await findProfilePopulate(user.profile);
    if (profile === null) {
      throw Error(PROFILE.NOT_MATCH);
    }
    res.json({ profile });
  } catch (e) {
    next(e);
  }
};

const getFollowers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      throw (createError(httpStatus.BAD_REQUEST, PARAMS.NOT_CORRECT_PARAMS));
    }
    const result = await findFollower(id);
    if (!result) {
      throw (createError(httpStatus.NOT_FOUND, LOGIN.ID_NOT_MATCH));
    }
    const { follower } = result.profile! as any;
    const filteredFollowers = follower.map((user) => {
      const {
        _id, email, name, thumbnailUrl, ...rest
      } = user;

      return {
        _id, email, name, thumbnailUrl,
      };
    });
    response(res, filteredFollowers);
  } catch (e) {
    next(e);
  }
};

const getFollowing = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      throw (createError(httpStatus.BAD_REQUEST, PARAMS.NOT_CORRECT_PARAMS));
    }
    const result = await findFollowing(id);
    if (!result) {
      throw (createError(httpStatus.BAD_REQUEST, PARAMS.NOT_CORRECT_PARAMS));
    }
    const { following } = result.profile! as any;
    const filteredFollowings = following.map((user) => {
      const {
        _id, email, name, thumbnailUrl, ...rest
      } = user;

      return {
        _id, email, name, thumbnailUrl,
      };
    });
    response(res, filteredFollowings);
  } catch (e) {
    next(e);
  }
};

export {
  addFollowing,
  deleteFollowing,
  getAllFollow,
  getFollowers,
  getFollowing,
};
