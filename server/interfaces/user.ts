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

export interface INotifications {
    sender: mongoose.Types.ObjectId,
    ref: mongoose.Types.ObjectId,
    type: 'works' | 'wallpapers' | 'musics' | 'comment'
    createdAt: mongoose.Schema.Types.Date,
}
