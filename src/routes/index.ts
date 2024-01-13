import { Router, Request, Response, NextFunction } from 'express';

const route = Router();

route.get('/', function(req: Request, res: Response, next: NextFunction){
    res.status(200).send({ status: true, message: "Home API is working ok!" });
})

export default route;