import { Request, Response } from 'express';
import  User from '../user.model';

const bcrypt = require('bcrypt');

export let allUsers = (req: Request, res: Response)=>{
    let users = User.find((err:any, users: any)=>{ 
        if(err){
            res.send(err);
        }else{
            res.send(users);
        }
    })
}

export let find = async (req: Request, res: Response, next: any)=>{
    let user = await User.findOne({email: req.body.email}, (err: any, user: any)=>{ 
        if(err){
            res.send(err);
        }else{
            let passwordAttempt = req.body.password
            if (bcrypt.compareSync(passwordAttempt, user.password)){
                console.log(user.firstName);
                res.status(200);
                // req.cookies.isAuth = true;
                req.cookies.isAdmin = true;
                req.cookies.isUser = true;
                req.cookies.user_id = user._id
                console.log('Cookies: ', req.cookies)
                return res.send(user);
            }
            else{
                console.log(err);
                console.log("Incorrect Password")
            }
        }
    })
}