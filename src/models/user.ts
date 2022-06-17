import { Types, Schema, model } from 'mongoose';

interface Iuser {
  name: string,
  email: string,
  password: string,
  // address: Array<Types.ObjectId>
}

interface IuserAddress {
  country: string,
  state: string,
  pincode: number,
  streetAdd1: string,
  streetAdd2: string,
  user_id: string
}

const userSchema = new Schema<Iuser>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  //address: { type: Schema.Types.ObjectId, ref: 'userAddressSchema' }
});

const userAddressSchema = new Schema<IuserAddress>({
  country: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: Number, required: true },
  streetAdd1: { type: String, required: true },
  streetAdd2: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User' }
})

const User = model<Iuser>('User', userSchema);
const UserAddress = model<IuserAddress>('UserAddress', userAddressSchema);

export {
  User,
  UserAddress,
  Iuser
};

