import type { OptionsList, Response, UseAsyncPaginateParams, UseAsyncPaginateBaseParams } from 'react-select-async-paginate';
export declare type Additional = {
    page: number;
};
export declare type MapResponsePayload<OptionType = any> = {
    search: string;
    prevPage: number;
    prevOptions: OptionsList<OptionType>;
};
export declare type MapResponse<OptionType = any> = (responseRaw: any, payload: MapResponsePayload<OptionType>) => Response<OptionType, Additional>;
export declare type Get = (url: string, params: {
    [key: string]: any;
}) => any;
export declare type UseSelectFetchMapParams<OptionType = any> = {
    url: string;
    queryParams?: {
        [key: string]: any;
    };
    searchParamName?: string;
    pageParamName?: string;
    offsetParamName?: string;
    mapResponse?: MapResponse<OptionType>;
    get?: Get;
    initialPage?: number;
    defaultInitialPage?: number;
};
export declare type UseSelectFetchParams<OptionType = any> = UseSelectFetchMapParams<OptionType> & Partial<UseAsyncPaginateParams<OptionType, Additional>>;
export declare type UseSelectFetchBaseParams<OptionType = any> = UseSelectFetchParams<OptionType> & Partial<UseAsyncPaginateBaseParams<OptionType, Additional>> & {
    inputValue: string;
    menuIsOpen: boolean;
};
