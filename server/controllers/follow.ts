import {
  Request, Response, NextFunction,
} from 'express';
import createError from 'http-errors';
import httpStatus from 'http-status';
import {
  findById, findProfile, followingUpdate, followerUpdate, findProfilePopulate, findFollower, findFollowing,
} from '../services/user';
import response from '../utils/response';
import { AUTH, LOGIN } from '../utils/messages';

const addFollowing = async (req: Request, res: Response, next: NextFunction) => {
  const targetId = req.params.id;
  // dev 용
  // const myId = '5df1992c3f9892105636735a';
  // const targetId = '5df19bd2e947f714a40eb9dd';
  // const myProfileId = '5df1992c3f98921056367359';
  try {
    const user = req.decodedUser;
    if (!user) {
      throw (createError(httpStatus.UNAUTHORIZED, AUTH.UNAUTHORIZED));
    }
    const profile = await findProfile(user.profile);
    if (profile === null) {
      throw Error('NULL type');
    }
    const newFollowing = [
      ...profile.following,
      targetId,
    ];
    await followingUpdate(user.profile, newFollowing);

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
      user.id,
    ];
    await followerUpdate(targetProfile.id, newFollwer);
    res.json({ success: true });
  } catch (e) {
    next(e);
  }
};

const deleteFollowing = async (req: Request, res:Response, next:NextFunction) => {
  const targetId = req.params.id;
  // const myId = '5df1992c3f9892105636735a';
  // const targetId = '5df19bd2e947f714a40eb9dd';
  // const myProfileId = '5df1992c3f98921056367359';

  try {
    const user = req.decodedUser;
    if (!user) {
      throw (createError(httpStatus.UNAUTHORIZED, AUTH.UNAUTHORIZED));
    }
    const profile = await findProfile(user.profile);
    if (profile === null) {
      throw Error('NULL type');
    }
    const newFollowing = profile.following.filter((e) => !e.equals(targetId));
    await followingUpdate(user.profile, newFollowing);

    const targetUser = await findById(targetId);
    if (targetUser === null) {
      throw Error('NULL type');
    }
    const targetProfile = await findProfile(targetUser.profile);
    if (targetProfile === null) {
      throw Error('NULL type');
    }
    const newFollwer = targetProfile.follower.filter((e) => !e.equals(user.id));
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

const getFollowers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
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
    const result = await findFollowing(id);
    if (!result) {
      throw (createError(httpStatus.NOT_FOUND, LOGIN.ID_NOT_MATCH));
    }
    console.log(result);
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
