"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var superagent = _interopRequire(require("superagent"));

var constants = _interopRequire(require("../constants"));




var getRequest = function (endpoint, params, actionType) {
  return function (dispatch) {
    return superagent.get(endpoint).query(params).set("Accept", "application/json").then(function (data) {
      if (actionType != null) {
        dispatch({
          type: actionType,
          params: params,
          data: data
        });
      }
    })["catch"](function (err) {
      console.log("ERR: ", err);
      return;
    });
  };
};


var postRequest = function (endpoint, body, actionType) {
  return function (dispatch) {
    return superagent.post(endpoint).send(body).set("Accept", "application/json").then(function (data) {
      console.log("Async Post:", data);
      if (actionType != null) {
        dispatch({
          type: actionType,
          data: data.body
        });
      }
    })["catch"](function (err) {
      console.log("ERR: ", err);
      return err;
    });
  };
};


module.exports = {
  getRequest: getRequest,
  postRequest: postRequest
};