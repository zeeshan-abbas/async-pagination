import { useAsyncPaginate } from 'react-select-async-paginate';
import type { UseAsyncPaginateResult } from 'react-select-async-paginate';
import { useMapToAsyncPaginate } from './useMapToAsyncPaginate';
import type { UseSelectFetchParams } from './types';
export declare const useSelectFetchPure: <OptionType>(useMapToAsyncPaginateParam: typeof useMapToAsyncPaginate, useAsyncPaginateParam: typeof useAsyncPaginate, params: UseSelectFetchParams<OptionType>, deps?: ReadonlyArray<any>) => UseAsyncPaginateResult<OptionType>;
export declare const useSelectFetch: <OptionType = any>(params: UseSelectFetchParams<OptionType>, deps?: ReadonlyArray<any>) => UseAsyncPaginateResult<OptionType>;
