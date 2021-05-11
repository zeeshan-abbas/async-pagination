import React from 'react';
import type { FC, ComponentType } from 'react';
import type { Props as SelectProps } from 'react-select';
import { useComponents } from 'react-select-async-paginate';
import type { ComponentProps } from 'react-select-async-paginate';
import { useSelectFetch } from './useSelectFetch';
import type { UseSelectFetchParams } from './types';
export declare type Props<OptionType = any> = SelectProps<OptionType> & UseSelectFetchParams<OptionType> & ComponentProps & {
    useComponents?: typeof useComponents;
    useSelectFetch?: typeof useSelectFetch;
};
export declare const withSelectFetch: <OptionType = any>(SelectComponent: React.ComponentType<SelectProps<OptionType>>) => React.FC<Props<OptionType>>;
