import { Request, Response } from "express";
import { UserDao } from '../dao';

async function create(req: Request, res: Response) {

  try {
    const { body } = req;

    await UserDao.createUser(body);

    res.json({ message: 'User created' });

  } catch (error) {
    console.log('Error: ', error)
    res.status(500).json({ message: 'Something broke out!!' })
  }
}

export default create;