import React from 'react';
declare type Options = {
    containerClass: string;
    buttonIcons: boolean;
    nextButtonClass: string;
    nextButtonText: string;
    nextButtonIcon: string;
    prevButtonClass: string;
    prevButtonText: string;
    prevButtonIcon: string;
    numberButtonClass: string;
    numberClass: string;
    numbersCountForShow: number;
    activeClass: string;
};
declare type PaginationType = Partial<Options> & {
    options?: Partial<Options>;
    data: {
        [key: string]: any;
    };
    requestParams?: any;
    changePage?: (page: unknown) => void;
};
declare const Pagination: React.FC<PaginationType>;
export default Pagination;
