//libraries
import express, { Application, NextFunction, Request, Response, Router } from 'express';
import { HttpError } from 'http-errors';
import glob from 'glob';
import routes from './modules/user/routes/user.routes';

//Configuration
import './config/dbConfig';
import path from 'path';

const app: Application = express();

const router = express.Router();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req: Request, res: Response): Response => {
    return res.send({ message: 'hello from typescript' })
});

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {

    console.log('In Error handler')

    let message = err.message || 'oops!! Something broke out';
    let status = err.statusCode || 500;

    if (res.headersSent) {
        return next(err)
    }

    res.status(status).send(message)
});

app.use('/v1/api', router.use(routes));
// glob(path.resolve('src/**/routes/*.ts'), (er, files) => {

//     files.forEach(file => {
//         require(`${file}`)
//     })

//     // Promise.all(files.map(async file => {
//     //     import(file).then(route => {
//     //         if (route instanceof (Router)) {
//     //             console.log(route)
//     //             app.use(`/v1/api/${file.length}`, router.use(routes));
//     //         }
//     //     });
//     // }))
//     // Promise.all(files.map((entry) => import(`${entry}`)));
// })

const port: Number = Number(process.env.PORT) || 3000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
