import { useCallback, useMemo } from 'react';
import type { UseAsyncPaginateParams } from 'react-select-async-paginate';
import type { Additional, MapResponse, UseSelectFetchMapParams } from './types';
export declare const defaultResponseMapper: MapResponse;
export declare const useMapToAsyncPaginatePure: <OptionType>(useCallbackParam: typeof useCallback, useMemoParam: typeof useMemo, selectFetchParams: UseSelectFetchMapParams<OptionType>) => UseAsyncPaginateParams<OptionType, Additional>;
export declare const useMapToAsyncPaginate: <OptionType>(params: UseSelectFetchMapParams<OptionType>) => UseAsyncPaginateParams<OptionType, Additional>;
