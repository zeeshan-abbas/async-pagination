"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelectFetchBase = exports.useSelectFetchBasePure = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _reactSelectAsyncPaginate = require("react-select-async-paginate");

var _useMapToAsyncPaginate = require("./useMapToAsyncPaginate");

var useSelectFetchBasePure = function useSelectFetchBasePure(useMapToAsyncPaginateParam, useAsyncPaginateParam, params) {
  var deps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var mappedParams = useMapToAsyncPaginateParam(params);
  var result = useAsyncPaginateParam((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, params), mappedParams), deps);
  return result;
};

exports.useSelectFetchBasePure = useSelectFetchBasePure;

var useSelectFetchBase = function useSelectFetchBase(params) {
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return useSelectFetchBasePure(_useMapToAsyncPaginate.useMapToAsyncPaginate, _reactSelectAsyncPaginate.useAsyncPaginateBase, params, deps);
};

exports.useSelectFetchBase = useSelectFetchBase;