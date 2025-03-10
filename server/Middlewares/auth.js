const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    let token = req.header('Authorization');

    if(!token){
        res.status(401).json({message: "Access Denied -- No Token Provided"});
    }

    try{
        token = token.replace("Bearer ", "");
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log(decoded)
        next();
    }catch(error){
        res.status(500).json({message: "Server Error", error: error});
    }
};

const jwksClient = require('jwks-rsa');

const client = jwksClient({
  jwksUri: 'https://api.clerk.dev/v1/jwks',  // Clerk's JWKS endpoint
});

const getKey = (header, callback) => {
  client.getSigningKey(header.kid, (err, key) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, key.publicKey || key.rsaPublicKey);
    }
  });
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token is missing, authorization denied' });
  }

  jwt.verify(token, getKey, { algorithms: ['RS256'] }, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token is not valid', error: err.message });
    }

    req.institutionId = decoded.institutionId;
    next();
  });
};


module.exports = {auth, verifyToken};