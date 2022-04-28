import express, { Application, NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction): Response => {
    return res.send({ message: 'hello from typescript' })
});

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {


    let message = err.message || 'Something broke out!!';
    let status = err.statusCode || 500;

    if (res.headersSent) {
        return next(err)
    }

    res.status(status).send(message)

})

const port: Number = Number(process.env.port) || 3000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
