'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _contains = require('rc-util/lib/Dom/contains');

var _contains2 = _interopRequireDefault(_contains);

var _addEventListener = require('rc-util/lib/Dom/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _Popup = require('./Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var IS_REACT_16 = !!_react2['default'].createPortal;
function noop() {}
function returnEmptyString() {
    return '';
}
function returnDocument() {
    return window.document;
}

var Trigger = function (_React$Component) {
    (0, _inherits3['default'])(Trigger, _React$Component);

    function Trigger() {
        (0, _classCallCheck3['default'])(this, Trigger);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Trigger.__proto__ || Object.getPrototypeOf(Trigger)).apply(this, arguments));

        _this.onDocumentClick = function (event) {
            if (_this.props.mask && !_this.props.maskClosable) {
                return;
            }
            var target = event.target;
            var root = (0, _reactDom.findDOMNode)(_this);
            var popupNode = _this.getPopupDomNode();
            if (!(0, _contains2['default'])(root, target) && !(0, _contains2['default'])(popupNode, target)) {
                _this.close();
            }
        };
        _this.getPopupAlign = function () {
            var props = _this.props;
            var popupPlacement = props.popupPlacement,
                popupAlign = props.popupAlign,
                builtinPlacements = props.builtinPlacements;

            if (popupPlacement && builtinPlacements) {
                return (0, _utils.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
            }
            return popupAlign;
        };
        _this.getRootDomNode = function () {
            return (0, _reactDom.findDOMNode)(_this);
        };
        _this.getPopupClassNameFromAlign = function (align) {
            var className = [];
            var props = _this.props;
            var popupPlacement = props.popupPlacement,
                builtinPlacements = props.builtinPlacements,
                prefixCls = props.prefixCls;

            if (popupPlacement && builtinPlacements) {
                className.push((0, _utils.getPopupClassNameFromAlign)(builtinPlacements, prefixCls, align));
            }
            if (props.getPopupClassNameFromAlign) {
                className.push(props.getPopupClassNameFromAlign(align));
            }
            return className.join(' ');
        };
        _this.close = function () {
            if (_this.props.onClose) {
                _this.props.onClose();
            }
        };
        _this.onAnimateLeave = function () {
            if (_this.props.destroyPopupOnHide) {
                var container = _this._container;
                if (container) {
                    _reactDom2['default'].unmountComponentAtNode(container);
                    container.parentNode.removeChild(container);
                }
            }
        };
        _this.removeContainer = function () {
            var container = document.querySelector('#' + _this.props.prefixCls + '-container');
            if (container) {
                _reactDom2['default'].unmountComponentAtNode(container);
                container.parentNode.removeChild(container);
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(Trigger, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.visible) {
                this.componentDidUpdate();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.visible) {
                if (!IS_REACT_16) {
                    this.renderDialog(false);
                }
            }
            this.clearOutsideHandler();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _this2 = this;

            if (!IS_REACT_16) {
                this.renderDialog(this.props.visible);
            }
            if (this.props.visible) {
                // always hide on mobile
                if (!this.touchOutsideHandler) {
                    // add setTimeout for preact
                    // prevent in here before setTimeout callback
                    this.touchOutsideHandler = setTimeout(function () {
                        var currentDocument = _this2.props.getDocument();
                        _this2.touchOutsideHandler = (0, _addEventListener2['default'])(currentDocument, 'touchend', _this2.onDocumentClick);
                    });
                }
                return;
            }
            this.clearOutsideHandler();
        }
    }, {
        key: 'clearOutsideHandler',
        value: function clearOutsideHandler() {
            if (this.touchOutsideHandler) {
                this.touchOutsideHandler.remove();
                this.touchOutsideHandler = null;
            }
        }
    }, {
        key: 'getPopupDomNode',
        value: function getPopupDomNode() {
            // for test
            if (this._component && this._component.getPopupDomNode) {
                return this._component.getPopupDomNode();
            }
            return null;
        }
    }, {
        key: 'saveRef',
        value: function saveRef(el, visible) {
            this.popupRef = el;
            this._component = el;
            this.props.afterPopupVisibleChange(visible);
        }
    }, {
        key: 'getComponent',
        value: function getComponent(visible) {
            var _this3 = this;

            var props = (0, _extends3['default'])({}, this.props);
            ['visible', 'onAnimateLeave'].forEach(function (key) {
                if (props.hasOwnProperty(key)) {
                    delete props[key];
                }
            });
            return _react2['default'].createElement(
                _Popup2['default'],
                { key: 'popup', ref: function ref(el) {
                        return _this3.saveRef(el, visible);
                    }, prefixCls: props.prefixCls, destroyPopupOnHide: props.destroyPopupOnHide, visible: visible, className: props.popupClassName, align: this.getPopupAlign(), onAlign: props.onPopupAlign, animation: props.popupAnimation, getClassNameFromAlign: this.getPopupClassNameFromAlign, getRootDomNode: this.getRootDomNode, style: props.popupStyle, mask: props.mask, zIndex: props.zIndex, transitionName: props.popupTransitionName, maskAnimation: props.maskAnimation, maskTransitionName: props.maskTransitionName, onAnimateLeave: this.onAnimateLeave },
                typeof props.popup === 'function' ? props.popup() : props.popup
            );
        }
    }, {
        key: 'getContainer',
        value: function getContainer() {
            if (!this._container) {
                var props = this.props;
                var popupContainer = document.createElement('div');
                // Make sure default popup container will never cause scrollbar appearing
                // https://github.com/react-component/trigger/issues/41
                popupContainer.style.position = 'absolute';
                popupContainer.style.top = '0';
                popupContainer.style.left = '0';
                popupContainer.style.width = '100%';
                var mountNode = props.getPopupContainer ? props.getPopupContainer((0, _reactDom.findDOMNode)(this)) : props.getDocument().body;
                mountNode.appendChild(popupContainer);
                this._container = popupContainer;
            }
            return this._container;
        }
    }, {
        key: 'renderDialog',
        value: function renderDialog(visible) {
            _reactDom2['default'].unstable_renderSubtreeIntoContainer(this, this.getComponent(visible), this.getContainer());
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            var children = props.children;
            var child = _react2['default'].Children.only(children);
            var newChildProps = {
                onClick: this.props.onTargetClick,
                key: 'trigger'
            };
            var trigger = _react2['default'].cloneElement(child, newChildProps);
            if (!IS_REACT_16) {
                return trigger;
            }
            var portal = void 0;
            // prevent unmounting after it's rendered
            if (props.visible || this._component) {
                portal = _reactDom2['default'].createPortal(this.getComponent(props.visible), this.getContainer());
            }
            return [trigger, portal];
        }
    }]);
    return Trigger;
}(_react2['default'].Component);

exports['default'] = Trigger;

Trigger.defaultProps = {
    prefixCls: 'rc-trigger-popup',
    getPopupClassNameFromAlign: returnEmptyString,
    getDocument: returnDocument,
    onPopupVisibleChange: noop,
    afterPopupVisibleChange: noop,
    onPopupAlign: noop,
    popupClassName: '',
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true
};
module.exports = exports['default'];