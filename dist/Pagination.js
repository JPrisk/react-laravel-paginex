var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState, useEffect } from 'react';
var Pagination = function (props) {
    var data = props.data, requestParams = props.requestParams, changePage = props.changePage, passedOptions = props.options, rest = __rest(props, ["data", "requestParams", "changePage", "options"]);
    var _a = useState({
        containerClass: 'pagination',
        buttonIcons: false,
        prevButtonClass: 'page-item',
        prevButtonText: 'Prev',
        prevButtonIcon: 'fa fa-chevron-left',
        nextButtonClass: 'page-item',
        nextButtonText: 'Next',
        nextButtonIcon: 'fa fa-chevron-right',
        numberButtonClass: 'page-item',
        numberClass: 'page-link',
        numbersCountForShow: 2,
        activeClass: 'active',
    }), options = _a[0], setOptions = _a[1];
    useEffect(function () {
        setOptions(__assign(__assign(__assign({}, options), passedOptions), rest));
    }, [props]);
    // Check if page is active
    var isCurrent = function (page) {
        var currentPage = data.meta ? data.meta.current_page : data.current_page;
        return currentPage === page;
    };
    // Handle pagination buttons click event
    var handleClick = function (page) {
        var parameters = {};
        if (requestParams) {
            parameters = requestParams;
        }
        parameters.page = page;
        changePage && changePage(parameters);
    };
    // Generate Prev Icon Or Text Buttons
    var generateButtonsPrev = function () {
        if (options.buttonIcons) {
            return React.createElement("i", { className: options.prevButtonIcon });
        }
        return options.prevButtonText;
    };
    // Generate Next Icon Or Text Buttons
    var generateButtonsNext = function () {
        if (options.buttonIcons) {
            return React.createElement("i", { className: options.nextButtonIcon });
        }
        return options.nextButtonText;
    };
    // Generate pagination buttons
    var generatePagination = function () {
        var paginationData = data;
        var pagination;
        if (Object.keys(paginationData).length) {
            var current_1 = paginationData.hasOwnProperty('current_page')
                ? paginationData.current_page
                : paginationData.meta.current_page, last = paginationData.hasOwnProperty('last_page')
                ? paginationData.last_page
                : paginationData.meta.last_page, delta = options.numbersCountForShow, left = current_1 - delta, right = current_1 + delta + 1, range = [], rangeWithDots = [], l = void 0;
            for (var i = 1; i <= last; i++) {
                if (i === 1 || i === last || (i >= left && i < right)) {
                    range.push(i);
                }
            }
            for (var _i = 0, range_1 = range; _i < range_1.length; _i++) {
                var i = range_1[_i];
                if (l) {
                    if (i - l === 2) {
                        rangeWithDots.push(l + 1);
                    }
                    else if (i - l !== 1) {
                        rangeWithDots.push('...');
                    }
                }
                rangeWithDots.push(i);
                l = i;
            }
            var nextPageUrl = paginationData.hasOwnProperty('next_page_url')
                ? paginationData.next_page_url
                : paginationData.links.next;
            var prevPageUrl = paginationData.hasOwnProperty('prev_page_url')
                ? paginationData.prev_page_url
                : paginationData.links.prev;
            pagination = (React.createElement("ul", { className: options.containerClass },
                prevPageUrl ? (React.createElement("li", { className: options.prevButtonClass, onClick: function (event) {
                        event.preventDefault();
                        handleClick(current_1 - 1);
                    } },
                    React.createElement("a", { href: "", className: options.numberClass }, generateButtonsPrev()))) : (''),
                rangeWithDots.map(function (page, index) { return generateNumber(page, index); }),
                nextPageUrl ? (React.createElement("li", { className: options.nextButtonClass, onClick: function (event) {
                        event.preventDefault();
                        handleClick(current_1 + 1);
                    } },
                    React.createElement("a", { href: "", className: options.numberClass }, generateButtonsNext()))) : ('')));
        }
        return pagination;
    };
    // Generate pagination numbers
    var generateNumber = function (page, index) { return (React.createElement("li", { className: isCurrent(page)
            ? options.numberButtonClass + ' ' + options.activeClass
            : options.numberButtonClass, key: index },
        React.createElement("a", { href: "", className: options.numberClass, onClick: function (event) {
                event.preventDefault();
                handleClick(page === '...' ? index + 1 : page);
            } }, page))); };
    return React.createElement(React.Fragment, null, generatePagination());
};
export default Pagination;
//# sourceMappingURL=Pagination.js.map