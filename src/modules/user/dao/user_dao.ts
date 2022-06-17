import { Iuser, User, UserAddress } from "../../../models/user"

const createUser = async (attr: any): Promise<Iuser> => {

  const model = new User(attr);
  await model.save();

  if (attr.address) {
    attr.address.map((ele: any) => ele.user_id = model._id);
    await UserAddress.create(attr.address);
  }

  return model;
}

export {
  createUser
}