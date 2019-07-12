"use strict";Object.defineProperty(exports, "__esModule", { value: true });



var _logger = require("@reactioncommerce/logger");var _logger2 = _interopRequireDefault(_logger);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

function () {for (var _len = arguments.length, msg = Array(_len), _key = 0; _key < _len; _key++) {msg[_key] = arguments[_key];}return _logger2.default.debug("reaction-file-collections - " + msg.join(" "));}; // import debug from "debug";
// export default debug("reaction-file-collections");