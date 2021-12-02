/**
 * @description user controller
 */

const { User } = require("../models/index");

/**
 * 登录
 * @param {String} username
 * @param {String} password
 */
async function login(username, password) {
  const user = await User.findOne({ username, password });
  if (user != null) {
    // 登录成功
    return true;
  }
  // 登录失败
  return false;
}

module.exports = {
  login,
};
