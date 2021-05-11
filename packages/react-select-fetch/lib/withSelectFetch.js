"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSelectFetch = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactSelectAsyncPaginate = require("react-select-async-paginate");

var _useSelectFetch = require("./useSelectFetch");

var withSelectFetch = function withSelectFetch(SelectComponent) {
  var WithSelectFetch = function WithSelectFetch(props) {
    var components = props.components,
        selectRef = props.selectRef,
        useComponentsProp = props.useComponents,
        useSelectFetchProp = props.useSelectFetch,
        cacheUniqs = props.cacheUniqs,
        rest = (0, _objectWithoutProperties2["default"])(props, ["components", "selectRef", "useComponents", "useSelectFetch", "cacheUniqs"]);
    var asyncPaginateProps = useSelectFetchProp(rest, cacheUniqs);
    var processedComponents = useComponentsProp(components);
    return /*#__PURE__*/_react["default"].createElement(SelectComponent, (0, _objectSpread2["default"])((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, props), asyncPaginateProps), {}, {
      components: processedComponents,
      ref: selectRef
    }));
  };

  WithSelectFetch.defaultProps = {
    selectRef: null,
    cacheUniqs: [],
    components: {},
    useComponents: _reactSelectAsyncPaginate.useComponents,
    useSelectFetch: _useSelectFetch.useSelectFetch
  };
  return WithSelectFetch;
};

exports.withSelectFetch = withSelectFetch;