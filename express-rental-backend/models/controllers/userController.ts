import { Request, Response } from 'express'
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

export let find = async (req: Request, res: Response)=>{
    let user = await User.findOne({email: req.body.email}, (err: any, user: any)=>{ 
        if(err){
            res.send(err);
        }else{
            let passwordAttempt = req.body.password
            if (bcrypt.compareSync(passwordAttempt, user.password)){
                console.log("Correct Boy wonder")
                res.status(200)
                res.send(user);
            }
            else{
                console.log("Incorrect Password")
            }
        }
    })
}