const loader = (req,res,next)=>{
    const method = req.method
    const url = req.url
    const date = new Date().getFullYear()
    // console.log(method, url, date);
    next(); // call the next middleware function if it exists
    // res.send('Hello World!'); // send response if no middleware function exists
}

const loader2 = (req,res,next) =>{
    console.log('multiple middlewares');
    next(); // call the next middleware function if it exists
}
const loader3 = (req,res,next) =>{
    const {user} = req.query
    if(user === 'sriram'){
        console.log("success");
        next()  
    }
    else{
        res.status(401).send('Unauthorized')
    }
    // res.send('middleware 3 executed'); // send response if no middleware function exists
}

module.exports = {loader,loader2,loader3}