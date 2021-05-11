import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import { useComponents } from 'react-select-async-paginate';
import { useSelectFetch } from './useSelectFetch';
export var withSelectFetch = function withSelectFetch(SelectComponent) {
  var WithSelectFetch = function WithSelectFetch(props) {
    var components = props.components,
        selectRef = props.selectRef,
        useComponentsProp = props.useComponents,
        useSelectFetchProp = props.useSelectFetch,
        cacheUniqs = props.cacheUniqs,
        rest = _objectWithoutProperties(props, ["components", "selectRef", "useComponents", "useSelectFetch", "cacheUniqs"]);

    var asyncPaginateProps = useSelectFetchProp(rest, cacheUniqs);
    var processedComponents = useComponentsProp(components);
    return /*#__PURE__*/React.createElement(SelectComponent, _objectSpread(_objectSpread(_objectSpread({}, props), asyncPaginateProps), {}, {
      components: processedComponents,
      ref: selectRef
    }));
  };

  WithSelectFetch.defaultProps = {
    selectRef: null,
    cacheUniqs: [],
    components: {},
    useComponents: useComponents,
    useSelectFetch: useSelectFetch
  };
  return WithSelectFetch;
};