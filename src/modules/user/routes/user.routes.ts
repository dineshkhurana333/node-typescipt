import express, { Request, Response, NextFunction } from 'express';
import create from '../controllers/create';

const router = express.Router();

// const asyncWrapper = (cb: any) => {
//   console.log('Im here')
//   return (req: express.Request, res: express.Response, next: NextFunction) => {
//     cb(req, res, next).catch((err: any) => {
//       console.log(err)
//       next(err)
//     })
//   };
// };

router.post('/', create);

export default router;
