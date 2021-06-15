import { Request, Response } from 'express';
import User from '../user.model';

const bcrypt = require('bcrypt');

export let allUsers = (req: Request, res: Response) => {
    let users = User.find((err: any, users: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(users);
        }
    });
};

export let find = async (req: Request, res: Response) => {
    const theUser = await User.findOne({ email: req.body.email }, (err: any, user: any) => {
        if (err) {
            res.send(err);
        } else {
            let passwordAttempt = req.body.password;
            if (bcrypt.compareSync(passwordAttempt, user.password)) {
                req.cookies.isAdmin = false;
                req.cookies.isUser = true;
                req.cookies.user_id = user._id;
                console.log('Cookies: ', req.cookies);
                return res.send(user);
            } else {
                console.log(err);
                console.log('Incorrect Password');
            }
        }
    });
};
