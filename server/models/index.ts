import User, { associate as associateUser } from './user';
import Comment, { associate as associateComment } from './comment';
import Image, { associate as associateImage } from './image';
import Post, { associate as associatePost } from './post';
import Hashtag, { associate as associateHashtag } from './hashtag';
export * from './sequelize'; // import와 동시에 export

const db = {
  User,
  Comment,
  Hashtag,
  Image,
  Post,
};

export type dbType = typeof db;

associateUser(db);
associatePost(db);
associateComment(db);
associateImage(db);
associateHashtag(db);