// var jwt=require('jsonwebtoken');
// var JWT_SECRET='TumseNaHoPayega';
// fetchuser=(req,res,next)=>{
//     const token=req.header('auth-token');
//     if(!token){
//         res.status(401).send({ error: 'Please authenticate using valid token' });
//     }
//     try {
//         const data=jwt.verify(token,JWT_SECRET);
//         req.user=data.user;
//         next();
//     } catch (error) {
//         res.status(401).send({ error: 'Please authenticate using valid token' });
//     }
// }
// module.exports=fetchuser;

const jwt = require('jsonwebtoken');
const JWT_SECRET = 'TumseNaHoPayega';

const fetchuser = (req, res, next) => {
  // Get the token from the request headers
  const token = req.header('auth-token');
  
  if (!token) {
    return res.status(401).json({ error: 'Access denied, please login' });
  }

  try {
    // Verify the token and extract user information
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = fetchuser;
