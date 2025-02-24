const autho = (roles = []) => {
	return (req, res, next) => {
		const { role } = req.user;
		try {
			if (roles.includes(role)) {
				next();
			} else {
				res.status(403).json({ message: "Access Denied -- Not Authorized." });
			}
		} catch (error) {
			res.status(500).json({ message: "Server Error", error: error });
		}
	};
};

module.exports = autho;
