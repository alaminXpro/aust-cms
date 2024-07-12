const adminMiddleware = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send('User not authenticated');
  }
  if (req.user.role !== 'admin') {
    return res.status(403).send('Access denied');
  }
  next();
};
  
export default adminMiddleware;