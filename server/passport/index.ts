import * as passport from 'passport';
import User from "../models/user";

export default () => {
  passport.serializeUser((user: User, done) => {
    done(null, user.id); // 유저 정보를 메모리에 저장
  });

  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await User.findOne({
        where: { id },
      });

      return done(null, user); // req.user
    } catch (err) {
      console.error(err);
      return done(err);
    }
  });
}