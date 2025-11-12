exports.requireLogin = (req, res, next) => {
    if (!req.session.user) return res.redirect('/users/login');
    next();
};

const { requireLogin } = require('../middleware/auth');
router.use(requireLogin);
