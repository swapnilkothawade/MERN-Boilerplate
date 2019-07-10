const User = require('../../models/User');

module.exports = (app) => {

  app.post('/api/createUser', function (req, res, next) {
    const user = new User(req.body);
    user.save()
      .then(() => res.json("User Created Successfully"))
      .catch((err) => next(err));
  });
};
