import mongoose from 'mongoose';

export interface IUser{
    email: string,
    pwd: string,
    name: string,
    thumbnailUrl?: string,
    originUrl?: string,
    profile?: mongoose.Types.ObjectId,
}
export type User={
    email: string,
    pwd: string,
    name: string,
    thumbnailUrl?: string,
    originUrl?: string,
    profile?: mongoose.Types.ObjectId,
};
