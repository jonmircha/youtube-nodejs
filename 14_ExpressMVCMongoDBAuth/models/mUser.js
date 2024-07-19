import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Middleware para hash de contraseña antes de guardar
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);

const mUser = {
  create: async (user) => {
    try {
      const newUser = new User(user);
      await newUser.save();
      return newUser;
    } catch (err) {
      throw {
        status: 500,
        message: `Error al crear el usuario ${user.username}`,
      };
    }
  },
  getOne: async (username) => {
    try {
      const user = await User.findOne({ username });
      return user;
    } catch (err) {
      throw {
        status: 500,
        message: `Error al obtener el usuario ${username}`,
      };
    }
  },
};

export default mUser;
