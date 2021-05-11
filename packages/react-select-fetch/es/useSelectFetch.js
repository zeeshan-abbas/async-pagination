import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import { useAsyncPaginate } from 'react-select-async-paginate';
import { useMapToAsyncPaginate } from './useMapToAsyncPaginate';
export var useSelectFetchPure = function useSelectFetchPure(useMapToAsyncPaginateParam, useAsyncPaginateParam, params) {
  var deps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var mappedParams = useMapToAsyncPaginateParam(params);
  var result = useAsyncPaginateParam(_objectSpread(_objectSpread({}, params), mappedParams), deps);
  return result;
};
export var useSelectFetch = function useSelectFetch(params) {
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return useSelectFetchPure(useMapToAsyncPaginate, useAsyncPaginate, params, deps);
};