"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownMenuTrigger = exports.DropdownMenuSubTrigger = exports.DropdownMenuSubContent = exports.DropdownMenuSub = exports.DropdownMenuShortcut = exports.DropdownMenuSeparator = exports.DropdownMenuRadioItem = exports.DropdownMenuRadioGroup = exports.DropdownMenuPortal = exports.DropdownMenuLabel = exports.DropdownMenuItem = exports.DropdownMenuGroup = exports.DropdownMenuContent = exports.DropdownMenuCheckboxItem = exports.DropdownMenu = void 0;
var React = _interopRequireWildcard(require("react"));
var DropdownMenuPrimitive = _interopRequireWildcard(require("@radix-ui/react-dropdown-menu"));
var _reactIcons = require("@radix-ui/react-icons");
var _utils = require("@/lib/utils");
var _excluded = ["className", "inset", "children"],
  _excluded2 = ["className"],
  _excluded3 = ["className", "sideOffset"],
  _excluded4 = ["className", "inset"],
  _excluded5 = ["className", "children", "checked"],
  _excluded6 = ["className", "children"],
  _excluded7 = ["className", "inset"],
  _excluded8 = ["className"],
  _excluded9 = ["className"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var DropdownMenu = exports.DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = exports.DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = exports.DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = exports.DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = exports.DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = exports.DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = exports.DropdownMenuSubTrigger = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    inset = _ref.inset,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(DropdownMenuPrimitive.SubTrigger, _extends({
    ref: ref,
    className: (0, _utils.cn)('flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent', inset && 'pl-8', className)
  }, props), children, /*#__PURE__*/React.createElement(_reactIcons.ChevronRightIcon, {
    className: "ml-auto h-4 w-4"
  }));
});
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = exports.DropdownMenuSubContent = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/React.createElement(DropdownMenuPrimitive.SubContent, _extends({
    ref: ref,
    className: (0, _utils.cn)('z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', className)
  }, props));
});
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = exports.DropdownMenuContent = /*#__PURE__*/React.forwardRef(function (_ref3, ref) {
  var className = _ref3.className,
    _ref3$sideOffset = _ref3.sideOffset,
    sideOffset = _ref3$sideOffset === void 0 ? 4 : _ref3$sideOffset,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/React.createElement(DropdownMenuPrimitive.Portal, null, /*#__PURE__*/React.createElement(DropdownMenuPrimitive.Content, _extends({
    ref: ref,
    sideOffset: sideOffset,
    className: (0, _utils.cn)('z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md', 'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', className)
  }, props)));
});
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = exports.DropdownMenuItem = /*#__PURE__*/React.forwardRef(function (_ref4, ref) {
  var className = _ref4.className,
    inset = _ref4.inset,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/React.createElement(DropdownMenuPrimitive.Item, _extends({
    ref: ref,
    className: (0, _utils.cn)('relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', inset && 'pl-8', className)
  }, props));
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = exports.DropdownMenuCheckboxItem = /*#__PURE__*/React.forwardRef(function (_ref5, ref) {
  var className = _ref5.className,
    children = _ref5.children,
    checked = _ref5.checked,
    props = _objectWithoutProperties(_ref5, _excluded5);
  return /*#__PURE__*/React.createElement(DropdownMenuPrimitive.CheckboxItem, _extends({
    ref: ref,
    className: (0, _utils.cn)('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className),
    checked: checked
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
  }, /*#__PURE__*/React.createElement(DropdownMenuPrimitive.ItemIndicator, null, /*#__PURE__*/React.createElement(_reactIcons.CheckIcon, {
    className: "h-4 w-4"
  }))), children);
});
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = exports.DropdownMenuRadioItem = /*#__PURE__*/React.forwardRef(function (_ref6, ref) {
  var className = _ref6.className,
    children = _ref6.children,
    props = _objectWithoutProperties(_ref6, _excluded6);
  return /*#__PURE__*/React.createElement(DropdownMenuPrimitive.RadioItem, _extends({
    ref: ref,
    className: (0, _utils.cn)('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className)
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
  }, /*#__PURE__*/React.createElement(DropdownMenuPrimitive.ItemIndicator, null, /*#__PURE__*/React.createElement(_reactIcons.DotFilledIcon, {
    className: "h-4 w-4 fill-current"
  }))), children);
});
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = exports.DropdownMenuLabel = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
  var className = _ref7.className,
    inset = _ref7.inset,
    props = _objectWithoutProperties(_ref7, _excluded7);
  return /*#__PURE__*/React.createElement(DropdownMenuPrimitive.Label, _extends({
    ref: ref,
    className: (0, _utils.cn)('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)
  }, props));
});
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = exports.DropdownMenuSeparator = /*#__PURE__*/React.forwardRef(function (_ref8, ref) {
  var className = _ref8.className,
    props = _objectWithoutProperties(_ref8, _excluded8);
  return /*#__PURE__*/React.createElement(DropdownMenuPrimitive.Separator, _extends({
    ref: ref,
    className: (0, _utils.cn)('-mx-1 my-1 h-px bg-muted', className)
  }, props));
});
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = exports.DropdownMenuShortcut = function DropdownMenuShortcut(_ref9) {
  var className = _ref9.className,
    props = _objectWithoutProperties(_ref9, _excluded9);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: (0, _utils.cn)('ml-auto text-xs tracking-widest opacity-60', className)
  }, props));
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';