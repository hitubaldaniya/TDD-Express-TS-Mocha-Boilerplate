import { Router, Request, Response } from 'express';

const route = Router();

// @route GET /dashboard
// @desc Admin Deshboard
// @access PUBLIC

route.get('/', function(req: Request, res: Response){
    res.status(200).json({ status: true, message: "Dashboard API is working ok!" });
})

export default route;