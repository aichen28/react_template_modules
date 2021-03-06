import React from 'react';
import SwipeoutPropType from './PropTypes';
export default class Swipeout extends React.Component<SwipeoutPropType, any> {
    static defaultProps: {
        prefixCls: string;
        autoClose: boolean;
        disabled: boolean;
        left: never[];
        right: never[];
        onOpen(): void;
        onClose(): void;
    };
    openedLeft: boolean;
    openedRight: boolean;
    content: any;
    cover: any;
    left: any;
    right: any;
    btnsLeftWidth: number;
    btnsRightWidth: number;
    swiping: boolean;
    needShowLeft: boolean;
    needShowRight: boolean;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onCloseSwipe: (ev: any) => void;
    onPanStart: (e: any) => void;
    onPanMove: (e: any) => void;
    onPanEnd: (e: any) => void;
    doOpenLeft: () => void;
    doOpenRight: () => void;
    onBtnClick(ev: any, btn: any): void;
    _getContentEasing(value: any, limit: any): any;
    _setStyle: (value: any) => void;
    open: (value: any, openedLeft: any, openedRight: any) => void;
    close: () => void;
    renderButtons(buttons: any, ref: any): JSX.Element | null;
    onTouchMove: (e: any) => void;
    render(): JSX.Element;
}
