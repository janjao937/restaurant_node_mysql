import e from "express";
import rateLimit from "express-rate-limit";

const rateLimitMiddleware = rateLimit({
    windowMs: 15*60*1000,//15 min
    limit: 100,//limit request ip,
    message: {message: "too many request from this ip"}
});

export default rateLimitMiddleware;

  // standardHeaders: "draft-8", // Use the latest RateLimit headers
  // legacyHeaders: false, // Disable X-RateLimit headers