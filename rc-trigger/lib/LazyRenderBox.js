'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var LazyRenderBox = function (_Component) {
  (0, _inherits3['default'])(LazyRenderBox, _Component);

  function LazyRenderBox() {
    (0, _classCallCheck3['default'])(this, LazyRenderBox);
    return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));
  }

  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.hiddenClassName || nextProps.visible;
  };

  LazyRenderBox.prototype.render = function render() {
    var _props = this.props,
        hiddenClassName = _props.hiddenClassName,
        visible = _props.visible,
        props = (0, _objectWithoutProperties3['default'])(_props, ['hiddenClassName', 'visible']);


    if (hiddenClassName || _react2['default'].Children.count(props.children) > 1) {
      if (!visible && hiddenClassName) {
        props.className += ' ' + hiddenClassName;
      }
      return _react2['default'].createElement('div', props);
    }

    return _react2['default'].Children.only(props.children);
  };

  return LazyRenderBox;
}(_react.Component);

LazyRenderBox.propTypes = {
  children: _propTypes2['default'].any,
  className: _propTypes2['default'].string,
  visible: _propTypes2['default'].bool,
  hiddenClassName: _propTypes2['default'].string
};
exports['default'] = LazyRenderBox;
module.exports = exports['default'];