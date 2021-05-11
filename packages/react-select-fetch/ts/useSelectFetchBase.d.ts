import { useAsyncPaginateBase } from 'react-select-async-paginate';
import type { UseAsyncPaginateBaseResult } from 'react-select-async-paginate';
import { useMapToAsyncPaginate } from './useMapToAsyncPaginate';
import type { UseSelectFetchBaseParams } from './types';
export declare const useSelectFetchBasePure: <OptionType>(useMapToAsyncPaginateParam: typeof useMapToAsyncPaginate, useAsyncPaginateParam: typeof useAsyncPaginateBase, params: UseSelectFetchBaseParams<OptionType>, deps?: ReadonlyArray<any>) => UseAsyncPaginateBaseResult<OptionType>;
export declare const useSelectFetchBase: <OptionType = any>(params: UseSelectFetchBaseParams<OptionType>, deps?: ReadonlyArray<any>) => UseAsyncPaginateBaseResult<OptionType>;
