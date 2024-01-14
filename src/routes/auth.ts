import { Router, Request, Response, NextFunction } from 'express';

const route = Router();

// @route GET /auth
// @desc Authentice a user
// @access PUBLIC

route.get('/', function(req: Request, res: Response){
    res.status(200).json({ status: true, message: "Auth API is working ok!" });
})

export default route;