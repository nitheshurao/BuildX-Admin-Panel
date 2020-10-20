"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCategory = createCategory;
exports.setUserData = setUserData;
exports.register = register;
exports.UPDATE_PROFILE = exports.REGISTER = exports.LOGOUT = exports.SILENT_LOGIN = exports.LOGIN_FAILURE = exports.LOGIN_SUCCESS = exports.CREATE_CATEGORY_REQUEST = void 0;

var _axios = _interopRequireDefault(require("src/utils/axios"));

var _categoryService = _interopRequireDefault(require("src/services/categoryService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CREATE_CATEGORY_REQUEST = '@account/create-category-request';
exports.CREATE_CATEGORY_REQUEST = CREATE_CATEGORY_REQUEST;
var LOGIN_SUCCESS = '@account/login-success';
exports.LOGIN_SUCCESS = LOGIN_SUCCESS;
var LOGIN_FAILURE = '@account/login-failure';
exports.LOGIN_FAILURE = LOGIN_FAILURE;
var SILENT_LOGIN = '@account/silent-login';
exports.SILENT_LOGIN = SILENT_LOGIN;
var LOGOUT = '@account/logout';
exports.LOGOUT = LOGOUT;
var REGISTER = '@account/register';
exports.REGISTER = REGISTER;
var UPDATE_PROFILE = '@account/update-profile';
exports.UPDATE_PROFILE = UPDATE_PROFILE;

function createCategory(name, description) {
  return function _callee(dispatch) {
    var user;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            dispatch({
              type: CREATE_CATEGORY_REQUEST
            });
            _context.next = 4;
            return regeneratorRuntime.awrap(_categoryService["default"].createCategory(name, description));

          case 4:
            user = _context.sent;
            _context.next = 12;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log("Error", _context.t0);
            dispatch({
              type: LOGIN_FAILURE
            });
            throw _context.t0;

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
}

function setUserData(user) {
  return function (dispatch) {
    return dispatch({
      type: SILENT_LOGIN,
      payload: {
        user: user
      }
    });
  };
}

function register() {
  return true;
}