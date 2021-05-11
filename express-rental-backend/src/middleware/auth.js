
const isLoggedIn = ( req, res, next ) =>{
    if( req.session.userInfo ){
        next();
    }
    else{
        res.redirect("/Registration/login");
    }
}
module.exports = isLoggedIn;