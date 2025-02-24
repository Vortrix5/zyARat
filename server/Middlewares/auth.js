const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
	let token = req.header("Authorization");

	if (!token) {
		res.status(401).json({ message: "Access Denied -- No Token Provided" });
	}

	try {
		token = token.replace("Bearer ", "");
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded;
		console.log(decoded);
		next();
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error });
	}
};

module.exports = auth;
