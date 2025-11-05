module.exports = function(requiredRole = 'user') {
  return (req, res, next) => {
    const role = (req.headers['x-role'] || 'anonymous').toLowerCase();
    if (requiredRole === 'user' || role === requiredRole || role === 'admin') return next();
    return res.status(403).json({ error: 'Forbidden' });
  };
};