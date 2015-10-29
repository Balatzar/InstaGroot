// config/database.js

module.exports = {
  url : process.env.MONGOLAB_URI || 'mongodb://localhost/todoyes'
};
