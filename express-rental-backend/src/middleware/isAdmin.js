const isAdmin = ( req, res, next ) =>{
    if(req.session.userInfo.Employee){
        next();
    }
    else{
        res.render("Registration/login",{
            title: "Home",
            pageHeader: "Home",
            msg: "Please Sign In as an Employee",
        });
    }
}
module.exports = isAdmin;