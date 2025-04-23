const jwt = require("jsonwebtoken");

exports.authenticate = (req, res, next) => {
    const token = req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return res.status(401).json({ message: "No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Token verification error:", error.message);
        res.status(400).json({ message: "Invalid token." });
    }
};

exports.isAdmin = (req, res, next) => {
    // Check if the user is authenticated
    if (!req.user) {
        console.warn("User not authenticated.");
        return res.status(401).json({ message: "Unauthorized. Please log in." });
    }
    // Check if the user has admin role
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: "Access denied. Admins only." });
    }
};

