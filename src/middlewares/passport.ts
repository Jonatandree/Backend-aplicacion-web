
import  config  from "../config/config";
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import { UsuarioSchema } from "../model/usuario.schema";


const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey:config.jwtSecret
};

export default new Strategy(opts, async (payload, done) => {
  try {
    const user = await UsuarioSchema.findById(payload.id);
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    console.log(error);
  }
});