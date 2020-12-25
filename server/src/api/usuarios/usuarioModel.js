const { Schema, model } = require("mongoose");

const rolesValidos = {
  values : ['AUTH_ROLE', 'PRE_ROLE', 'ADMIN_ROLE', 'USER_ROLE'],
  message: "{VALUE} no es un rol valido ",
}

const usuarioSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    estado: {
      type: Boolean,
      default: true
    },
    role: {
      type: String,
      default: 'USER_ROLE',
      enum: rolesValidos
    },
  },
  {
    timestamps: true,
  }
);




//FUNCION PARA NO MOSTRAR EL PASSWORD EN EL JSON DEL BACK-END
// usuarioSchema.methods.toJSON = function() {
//   let user = this;
//   let userObject = user.toObject();
//   delete userObject.password;

//   return userObject;
// }


module.exports = model("Usuarios", usuarioSchema);
