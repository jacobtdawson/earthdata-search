/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./serverless/src/getRetrievalCollection/handler.js":
/*!**********************************************************!*\
  !*** ./serverless/src/getRetrievalCollection/handler.js ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _util_determineEarthdataEnvironment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/determineEarthdataEnvironment */ \"./serverless/src/util/determineEarthdataEnvironment.js\");\n/* harmony import */ var _sharedUtils_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../sharedUtils/config */ \"./sharedUtils/config.js\");\n/* harmony import */ var _util_database_getDbConnection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/database/getDbConnection */ \"./serverless/src/util/database/getDbConnection.js\");\n/* harmony import */ var _util_getJwtToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/getJwtToken */ \"./serverless/src/util/getJwtToken.js\");\n/* harmony import */ var _util_getVerifiedJwtToken__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/getVerifiedJwtToken */ \"./serverless/src/util/getVerifiedJwtToken.js\");\n/* harmony import */ var _util_obfuscation_obfuscateId__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/obfuscation/obfuscateId */ \"./serverless/src/util/obfuscation/obfuscateId.js\");\n/* harmony import */ var _sharedUtils_parseError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../sharedUtils/parseError */ \"./sharedUtils/parseError.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n/**\n * Retrieve a single retrieval collection from the database\n * @param {Object} event Details about the HTTP request that it received\n * @param {Object} context Methods and properties that provide information about the invocation, function, and execution environment\n */\n\nvar getRetrievalCollection = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(event, context) {\n    var _getApplicationConfig, defaultResponseHeaders, headers, pathParameters, earthdataEnvironment, providedRetrievalCollectionId, jwtToken, _getVerifiedJwtToken, userId, dbConnection, retrievalCollectionResponse, _retrievalCollectionR, retrievalCollectionObject, id, retrievalId, accessMethod, collectionId, collectionMetadata, granuleParams, granuleCount, retrievalOrderId, ursId, orders;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // https://stackoverflow.com/questions/49347210/why-aws-lambda-keeps-timing-out-when-using-knex-js\n            // eslint-disable-next-line no-param-reassign\n            context.callbackWaitsForEmptyEventLoop = false;\n            _getApplicationConfig = (0,_sharedUtils_config__WEBPACK_IMPORTED_MODULE_5__.getApplicationConfig)(), defaultResponseHeaders = _getApplicationConfig.defaultResponseHeaders;\n            _context.prev = 2;\n            headers = event.headers, pathParameters = event.pathParameters;\n            earthdataEnvironment = (0,_util_determineEarthdataEnvironment__WEBPACK_IMPORTED_MODULE_4__.determineEarthdataEnvironment)(headers);\n            providedRetrievalCollectionId = pathParameters.id;\n            jwtToken = (0,_util_getJwtToken__WEBPACK_IMPORTED_MODULE_7__.getJwtToken)(event);\n            _getVerifiedJwtToken = (0,_util_getVerifiedJwtToken__WEBPACK_IMPORTED_MODULE_8__.getVerifiedJwtToken)(jwtToken, earthdataEnvironment), userId = _getVerifiedJwtToken.id; // Retrieve a connection to the database\n\n            _context.next = 10;\n            return (0,_util_database_getDbConnection__WEBPACK_IMPORTED_MODULE_6__.getDbConnection)();\n\n          case 10:\n            dbConnection = _context.sent;\n            _context.next = 13;\n            return dbConnection('retrieval_collections').select('retrievals.id AS retrieval_id', 'retrievals.jsondata', 'retrievals.environment', 'retrieval_collections.id', 'retrieval_collections.access_method', 'retrieval_collections.collection_id', 'retrieval_collections.collection_metadata', 'retrieval_collections.granule_params', 'retrieval_collections.granule_count', 'retrieval_orders.id AS retrieval_order_id', 'retrieval_orders.type', 'retrieval_orders.order_number', 'retrieval_orders.order_information', 'retrieval_orders.state', 'retrieval_orders.error', 'users.urs_id').leftJoin('retrieval_orders', {\n              'retrieval_collections.id': 'retrieval_orders.retrieval_collection_id'\n            }).join('retrievals', {\n              'retrieval_collections.retrieval_id': 'retrievals.id'\n            }).join('users', {\n              'retrievals.user_id': 'users.id'\n            }).where({\n              'retrieval_collections.id': providedRetrievalCollectionId,\n              'users.id': userId\n            });\n\n          case 13:\n            retrievalCollectionResponse = _context.sent;\n\n            if (!(retrievalCollectionResponse !== null && retrievalCollectionResponse.length > 0)) {\n              _context.next = 20;\n              break;\n            }\n\n            // Pull out the retrieval data from the first row (they will all be the same due to the join)\n            _retrievalCollectionR = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(retrievalCollectionResponse, 1), retrievalCollectionObject = _retrievalCollectionR[0];\n            id = retrievalCollectionObject.id, retrievalId = retrievalCollectionObject.retrieval_id, accessMethod = retrievalCollectionObject.access_method, collectionId = retrievalCollectionObject.collection_id, collectionMetadata = retrievalCollectionObject.collection_metadata, granuleParams = retrievalCollectionObject.granule_params, granuleCount = retrievalCollectionObject.granule_count, retrievalOrderId = retrievalCollectionObject.retrieval_order_id, ursId = retrievalCollectionObject.urs_id;\n            orders = []; // We used a left join above because there won't me any matching rows for\n            // downloadable order types but using the left join will return null values\n            // for those orders, we can check that here by checking any of the values\n\n            if (retrievalOrderId) {\n              orders = retrievalCollectionResponse.map(function (_ref2) {\n                var id = _ref2.retrieval_order_id,\n                    type = _ref2.type,\n                    orderNumber = _ref2.order_number,\n                    orderInformation = _ref2.order_information,\n                    state = _ref2.state,\n                    error = _ref2.error;\n                return {\n                  id: id,\n                  type: type,\n                  order_number: orderNumber,\n                  order_information: orderInformation,\n                  state: state,\n                  error: error\n                };\n              });\n            }\n\n            return _context.abrupt(\"return\", {\n              isBase64Encoded: false,\n              statusCode: 200,\n              headers: defaultResponseHeaders,\n              body: JSON.stringify({\n                id: id,\n                retrieval_id: (0,_util_obfuscation_obfuscateId__WEBPACK_IMPORTED_MODULE_9__.obfuscateId)(retrievalId),\n                access_method: accessMethod,\n                collection_id: collectionId,\n                collection_metadata: collectionMetadata,\n                granule_params: granuleParams,\n                granule_count: granuleCount,\n                orders: orders,\n                urs_id: ursId\n              })\n            });\n\n          case 20:\n            return _context.abrupt(\"return\", {\n              isBase64Encoded: false,\n              statusCode: 404,\n              headers: defaultResponseHeaders,\n              body: JSON.stringify({\n                errors: [\"Retrieval Collection '\".concat(providedRetrievalCollectionId, \"' not found.\")]\n              })\n            });\n\n          case 23:\n            _context.prev = 23;\n            _context.t0 = _context[\"catch\"](2);\n            return _context.abrupt(\"return\", _objectSpread({\n              isBase64Encoded: false,\n              headers: defaultResponseHeaders\n            }, (0,_sharedUtils_parseError__WEBPACK_IMPORTED_MODULE_10__.parseError)(_context.t0)));\n\n          case 26:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 23]]);\n  }));\n\n  return function getRetrievalCollection(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar _default = getRetrievalCollection;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getRetrievalCollection, \"getRetrievalCollection\", \"/Users/rabbott3/Projects/earthdata-search/serverless/src/getRetrievalCollection/handler.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/rabbott3/Projects/earthdata-search/serverless/src/getRetrievalCollection/handler.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://earthdata-search/./serverless/src/getRetrievalCollection/handler.js?");

/***/ }),

/***/ "./serverless/src/util/aws/getSecretsManagerConfig.js":
/*!************************************************************!*\
  !*** ./serverless/src/util/aws/getSecretsManagerConfig.js ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSecretsManagerConfig\": () => (/* binding */ getSecretsManagerConfig)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/**\n * Returns an environment specific configuration object for Secrets Manager\n * @return {Object} A configuration object for Secrets Manager\n */\nvar getSecretsManagerConfig = function getSecretsManagerConfig() {\n  var productionConfig = {\n    apiVersion: '2017-10-17',\n    region: 'us-east-1'\n  };\n  return productionConfig;\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getSecretsManagerConfig, \"getSecretsManagerConfig\", \"/Users/rabbott3/Projects/earthdata-search/serverless/src/util/aws/getSecretsManagerConfig.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://earthdata-search/./serverless/src/util/aws/getSecretsManagerConfig.js?");

/***/ }),

/***/ "./serverless/src/util/database/getDbConnection.js":
/*!*********************************************************!*\
  !*** ./serverless/src/util/database/getDbConnection.js ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDbConnection\": () => (/* binding */ getDbConnection)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! knex */ \"knex\");\n/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(knex__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _getDbConnectionConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getDbConnectionConfig */ \"./serverless/src/util/database/getDbConnectionConfig.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\n\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n // Initalize a variable to be set once\n\nvar dbConnection;\n/**\n * Returns a Knex database connection object to the EDSC RDS database\n */\n\nvar getDbConnection = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var dbConnectionConfig;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!(dbConnection == null)) {\n              _context.next = 5;\n              break;\n            }\n\n            _context.next = 3;\n            return (0,_getDbConnectionConfig__WEBPACK_IMPORTED_MODULE_4__.getDbConnectionConfig)();\n\n          case 3:\n            dbConnectionConfig = _context.sent;\n            dbConnection = knex__WEBPACK_IMPORTED_MODULE_3___default()({\n              client: 'pg',\n              connection: dbConnectionConfig\n            });\n\n          case 5:\n            return _context.abrupt(\"return\", dbConnection);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getDbConnection() {\n    return _ref.apply(this, arguments);\n  };\n}();\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(dbConnection, \"dbConnection\", \"/Users/rabbott3/Projects/earthdata-search/serverless/src/util/database/getDbConnection.js\");\n  reactHotLoader.register(getDbConnection, \"getDbConnection\", \"/Users/rabbott3/Projects/earthdata-search/serverless/src/util/database/getDbConnection.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://earthdata-search/./serverless/src/util/database/getDbConnection.js?");

/***/ }),

/***/ "./serverless/src/util/database/getDbConnectionConfig.js":
/*!***************************************************************!*\
  !*** ./serverless/src/util/database/getDbConnectionConfig.js ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDbConnectionConfig\": () => (/* binding */ getDbConnectionConfig)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _getDbCredentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getDbCredentials */ \"./serverless/src/util/database/getDbCredentials.js\");\n/* harmony import */ var _sharedUtils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../sharedUtils/config */ \"./sharedUtils/config.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nvar connectionConfig;\n/**\n * Returns an object representing a database configuration\n */\n\nvar getDbConnectionConfig = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var dbCredentials, configObject, _getEnvironmentConfig, dbHost, dbName, dbPort;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!(connectionConfig == null)) {\n              _context.next = 9;\n              break;\n            }\n\n            _context.next = 3;\n            return (0,_getDbCredentials__WEBPACK_IMPORTED_MODULE_3__.getDbCredentials)();\n\n          case 3:\n            dbCredentials = _context.sent;\n            configObject = {\n              user: dbCredentials.username,\n              password: dbCredentials.password\n            };\n\n            if (false) {}\n\n            _getEnvironmentConfig = (0,_sharedUtils_config__WEBPACK_IMPORTED_MODULE_4__.getEnvironmentConfig)(), dbHost = _getEnvironmentConfig.dbHost, dbName = _getEnvironmentConfig.dbName, dbPort = _getEnvironmentConfig.dbPort;\n            return _context.abrupt(\"return\", _objectSpread(_objectSpread({}, configObject), {}, {\n              host: dbHost,\n              database: dbName,\n              port: dbPort\n            }));\n\n          case 8:\n            connectionConfig = _objectSpread(_objectSpread({}, configObject), {}, {\n              host: process.env.dbEndpoint,\n              database: process.env.dbName,\n              port: process.env.dbPort\n            });\n\n          case 9:\n            return _context.abrupt(\"return\", connectionConfig);\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getDbConnectionConfig() {\n    return _ref.apply(this, arguments);\n  };\n}();\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(connectionConfig, \"connectionConfig\", \"/Users/rabbott3/Projects/earthdata-search/serverless/src/util/database/getDbConnectionConfig.js\");\n  reactHotLoader.register(getDbConnectionConfig, \"getDbConnectionConfig\", \"/Users/rabbott3/Projects/earthdata-search/serverless/src/util/database/getDbConnectionConfig.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://earthdata-search/./serverless/src/util/database/getDbConnectionConfig.js?");

/***/ }),

/***/ "./serverless/src/util/database/getDbCredentials.js":
/*!**********************************************************!*\
  !*** ./serverless/src/util/database/getDbCredentials.js ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDbCredentials\": () => (/* binding */ getDbCredentials)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sharedUtils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../sharedUtils/config */ \"./sharedUtils/config.js\");\n/* harmony import */ var _aws_getSecretsManagerConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../aws/getSecretsManagerConfig */ \"./serverless/src/util/aws/getSecretsManagerConfig.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\n\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nvar dbCredentials;\nvar secretsmanager;\n/**\n * Returns the decrypted database credentials from Secrets Manager\n */\n\nvar getDbCredentials = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var _getSecretEnvironment, dbUsername, dbPassword, params, secretValue;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!(dbCredentials == null)) {\n              _context.next = 10;\n              break;\n            }\n\n            if (secretsmanager == null) {\n              secretsmanager = new (aws_sdk__WEBPACK_IMPORTED_MODULE_2___default().SecretsManager)((0,_aws_getSecretsManagerConfig__WEBPACK_IMPORTED_MODULE_4__.getSecretsManagerConfig)());\n            }\n\n            if (false) {}\n\n            _getSecretEnvironment = (0,_sharedUtils_config__WEBPACK_IMPORTED_MODULE_3__.getSecretEnvironmentConfig)(\"development\"), dbUsername = _getSecretEnvironment.dbUsername, dbPassword = _getSecretEnvironment.dbPassword;\n            return _context.abrupt(\"return\", {\n              username: dbUsername,\n              password: dbPassword\n            });\n\n          case 5:\n            // If not running in development mode fetch secrets from AWS\n            params = {\n              SecretId: process.env.configSecretId\n            };\n            _context.next = 8;\n            return secretsmanager.getSecretValue(params).promise();\n\n          case 8:\n            secretValue = _context.sent;\n            dbCredentials = JSON.parse(secretValue.SecretString);\n\n          case 10:\n            return _context.abrupt(\"return\", dbCredentials);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getDbCredentials() {\n    return _ref.apply(this, arguments);\n  };\n}();\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(dbCredentials, \"dbCredentials\", \"/Users/rabbott3/Projects/earthdata-search/serverless/src/util/database/getDbCredentials.js\");\n  reactHotLoader.register(secretsmanager, \"secretsmanager\", \"/Users/rabbott3/Projects/earthdata-search/serverless/src/util/database/getDbCredentials.js\");\n  reactHotLoader.register(getDbCredentials, \"getDbCredentials\", \"/Users/rabbott3/Projects/earthdata-search/serverless/src/util/database/getDbCredentials.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://earthdata-search/./serverless/src/util/database/getDbCredentials.js?");

/***/ }),

/***/ "./serverless/src/util/determineEarthdataEnvironment.js":
/*!**************************************************************!*\
  !*** ./serverless/src/util/determineEarthdataEnvironment.js ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"determineEarthdataEnvironment\": () => (/* binding */ determineEarthdataEnvironment)\n/* harmony export */ });\n/* harmony import */ var lowercase_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lowercase-keys */ \"lowercase-keys\");\n/* harmony import */ var lowercase_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lowercase_keys__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sharedUtils_deployedEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../sharedUtils/deployedEnvironment */ \"./sharedUtils/deployedEnvironment.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n/**\n * Determimine which environment to use for static config lookups\n * @param {Object} headers HTTP Request headers provided to the lambda\n */\n\nvar determineEarthdataEnvironment = function determineEarthdataEnvironment() {\n  var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  // Pull the default environment from the static application config\n  var defaultDeployedEnvironment = (0,_sharedUtils_deployedEnvironment__WEBPACK_IMPORTED_MODULE_1__.deployedEnvironment)(); // Default to production when developing locally\n\n  if (defaultDeployedEnvironment === 'dev') defaultDeployedEnvironment = 'prod';\n\n  var _lowercaseKeys = lowercase_keys__WEBPACK_IMPORTED_MODULE_0___default()(headers),\n      _lowercaseKeys$earthd = _lowercaseKeys['earthdata-env'],\n      earthdataEnvironment = _lowercaseKeys$earthd === void 0 ? defaultDeployedEnvironment : _lowercaseKeys$earthd;\n\n  return earthdataEnvironment.toLowerCase();\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(determineEarthdataEnvironment, \"determineEarthdataEnvironment\", \"/Users/rabbott3/Projects/earthdata-search/serverless/src/util/determineEarthdataEnvironment.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://earthdata-search/./serverless/src/util/determineEarthdataEnvironment.js?");

/***/ }),

/***/ "./serverless/src/util/getJwtToken.js":
/*!********************************************!*\
  !*** ./serverless/src/util/getJwtToken.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getJwtToken\": () => (/* binding */ getJwtToken)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n/**\n * Returns the JWT Token from our custom authorizer context\n * @param {Object} event Details about the HTTP request that it received\n */\nvar getJwtToken = function getJwtToken(event) {\n  var _event$requestContext = event.requestContext,\n      requestContext = _event$requestContext === void 0 ? {} : _event$requestContext;\n  var _requestContext$autho = requestContext.authorizer,\n      authorizer = _requestContext$autho === void 0 ? {} : _requestContext$autho;\n  var jwtToken = authorizer.jwtToken;\n  return jwtToken;\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getJwtToken, \"getJwtToken\", \"/Users/rabbott3/Projects/earthdata-search/serverless/src/util/getJwtToken.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://earthdata-search/./serverless/src/util/getJwtToken.js?");

/***/ }),

/***/ "./serverless/src/util/getVerifiedJwtToken.js":
/*!****************************************************!*\
  !*** ./serverless/src/util/getVerifiedJwtToken.js ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getVerifiedJwtToken\": () => (/* binding */ getVerifiedJwtToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sharedUtils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../sharedUtils/config */ \"./sharedUtils/config.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n/**\n * Verifies the JWT Token and returns the contents\n * @param {String} jwtToken\n */\n\nvar getVerifiedJwtToken = function getVerifiedJwtToken(jwtToken, earthdataEnvironment) {\n  var _getSecretEarthdataCo = (0,_sharedUtils_config__WEBPACK_IMPORTED_MODULE_1__.getSecretEarthdataConfig)(earthdataEnvironment),\n      secret = _getSecretEarthdataCo.secret;\n\n  var verifiedJwtToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(jwtToken, secret);\n  return verifiedJwtToken;\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getVerifiedJwtToken, \"getVerifiedJwtToken\", \"/Users/rabbott3/Projects/earthdata-search/serverless/src/util/getVerifiedJwtToken.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://earthdata-search/./serverless/src/util/getVerifiedJwtToken.js?");

/***/ }),

/***/ "./serverless/src/util/obfuscation/obfuscateId.js":
/*!********************************************************!*\
  !*** ./serverless/src/util/obfuscation/obfuscateId.js ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"obfuscateId\": () => (/* binding */ obfuscateId)\n/* harmony export */ });\n/* harmony import */ var scatter_swap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scatter-swap */ \"scatter-swap\");\n/* harmony import */ var scatter_swap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scatter_swap__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n/**\n * Obfuscate a database ID to hide its identity\n * @param {Integer} value The value to be obfuscated\n */\n\nvar obfuscateId = function obfuscateId(value) {\n  var spin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : process.env.obfuscationSpin;\n  return new (scatter_swap__WEBPACK_IMPORTED_MODULE_0___default())(value, spin).hash();\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(obfuscateId, \"obfuscateId\", \"/Users/rabbott3/Projects/earthdata-search/serverless/src/util/obfuscation/obfuscateId.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://earthdata-search/./serverless/src/util/obfuscation/obfuscateId.js?");

/***/ }),

/***/ "./sharedUtils/config.js":
/*!*******************************!*\
  !*** ./sharedUtils/config.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getApplicationConfig\": () => (/* binding */ getApplicationConfig),\n/* harmony export */   \"getEarthdataConfig\": () => (/* binding */ getEarthdataConfig),\n/* harmony export */   \"getEnvironmentConfig\": () => (/* binding */ getEnvironmentConfig),\n/* harmony export */   \"getSecretEarthdataConfig\": () => (/* binding */ getSecretEarthdataConfig),\n/* harmony export */   \"getSecretEnvironmentConfig\": () => (/* binding */ getSecretEnvironmentConfig),\n/* harmony export */   \"getSecretCypressConfig\": () => (/* binding */ getSecretCypressConfig),\n/* harmony export */   \"getSecretAdminUsers\": () => (/* binding */ getSecretAdminUsers)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _static_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static.config.json */ \"./static.config.json\");\n/* harmony import */ var _secret_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../secret.config.json */ \"./secret.config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar getConfig = function getConfig() {\n  try {\n    // eslint-disable-next-line global-require, import/no-unresolved\n    var overrideConfig = __webpack_require__(/*! ../overrideStatic.config.json */ \"./overrideStatic.config.json\");\n\n    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.merge)(_static_config_json__WEBPACK_IMPORTED_MODULE_1__, overrideConfig);\n  } catch (error) {\n    return _static_config_json__WEBPACK_IMPORTED_MODULE_1__;\n  }\n};\n\nvar getApplicationConfig = function getApplicationConfig() {\n  return getConfig().application;\n};\nvar getEarthdataConfig = function getEarthdataConfig(env) {\n  return getConfig().earthdata[env];\n};\nvar getEnvironmentConfig = function getEnvironmentConfig(env) {\n  return getConfig().environment[env || \"development\"];\n};\nvar getSecretEarthdataConfig = function getSecretEarthdataConfig(env) {\n  return _secret_config_json__WEBPACK_IMPORTED_MODULE_2__.earthdata[env];\n};\nvar getSecretEnvironmentConfig = function getSecretEnvironmentConfig() {\n  return _secret_config_json__WEBPACK_IMPORTED_MODULE_2__.environment[\"development\"];\n};\nvar getSecretCypressConfig = function getSecretCypressConfig() {\n  return _secret_config_json__WEBPACK_IMPORTED_MODULE_2__.cypress;\n};\nvar getSecretAdminUsers = function getSecretAdminUsers() {\n  return _secret_config_json__WEBPACK_IMPORTED_MODULE_2__.admins;\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getConfig, \"getConfig\", \"/Users/rabbott3/Projects/earthdata-search/sharedUtils/config.js\");\n  reactHotLoader.register(getApplicationConfig, \"getApplicationConfig\", \"/Users/rabbott3/Projects/earthdata-search/sharedUtils/config.js\");\n  reactHotLoader.register(getEarthdataConfig, \"getEarthdataConfig\", \"/Users/rabbott3/Projects/earthdata-search/sharedUtils/config.js\");\n  reactHotLoader.register(getEnvironmentConfig, \"getEnvironmentConfig\", \"/Users/rabbott3/Projects/earthdata-search/sharedUtils/config.js\");\n  reactHotLoader.register(getSecretEarthdataConfig, \"getSecretEarthdataConfig\", \"/Users/rabbott3/Projects/earthdata-search/sharedUtils/config.js\");\n  reactHotLoader.register(getSecretEnvironmentConfig, \"getSecretEnvironmentConfig\", \"/Users/rabbott3/Projects/earthdata-search/sharedUtils/config.js\");\n  reactHotLoader.register(getSecretCypressConfig, \"getSecretCypressConfig\", \"/Users/rabbott3/Projects/earthdata-search/sharedUtils/config.js\");\n  reactHotLoader.register(getSecretAdminUsers, \"getSecretAdminUsers\", \"/Users/rabbott3/Projects/earthdata-search/sharedUtils/config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://earthdata-search/./sharedUtils/config.js?");

/***/ }),

/***/ "./sharedUtils/deployedEnvironment.js":
/*!********************************************!*\
  !*** ./sharedUtils/deployedEnvironment.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deployedEnvironment\": () => (/* binding */ deployedEnvironment),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./sharedUtils/config.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n/**\n * Return the CMR environment to use\n */\n\nvar deployedEnvironment = function deployedEnvironment() {\n  var _getApplicationConfig = (0,_config__WEBPACK_IMPORTED_MODULE_0__.getApplicationConfig)(),\n      env = _getApplicationConfig.env;\n\n  if (env === 'dev') return 'prod';\n  return env;\n};\nvar _default = deployedEnvironment;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(deployedEnvironment, \"deployedEnvironment\", \"/Users/rabbott3/Projects/earthdata-search/sharedUtils/deployedEnvironment.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/rabbott3/Projects/earthdata-search/sharedUtils/deployedEnvironment.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://earthdata-search/./sharedUtils/deployedEnvironment.js?");

/***/ }),

/***/ "./sharedUtils/parseError.js":
/*!***********************************!*\
  !*** ./sharedUtils/parseError.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseError\": () => (/* binding */ parseError)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"@babel/runtime/helpers/typeof\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-xml-parser */ \"fast-xml-parser\");\n/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_xml_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n/**\n * Parse and return a lambda friendly response to errors\n * @param {Object} errorObj The error object that was thrown\n * @param {Boolean} shouldLog Whether or not to log the exceptions found\n */\n\nvar parseError = function parseError(errorObj) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$shouldLog = _ref.shouldLog,\n      shouldLog = _ref$shouldLog === void 0 ? true : _ref$shouldLog,\n      _ref$asJSON = _ref.asJSON,\n      asJSON = _ref$asJSON === void 0 ? true : _ref$asJSON,\n      _ref$reThrowError = _ref.reThrowError,\n      reThrowError = _ref$reThrowError === void 0 ? false : _ref$reThrowError,\n      logPrefix = _ref.logPrefix;\n\n  var _errorObj$name = errorObj.name,\n      name = _errorObj$name === void 0 ? 'Error' : _errorObj$name,\n      _errorObj$response = errorObj.response,\n      response = _errorObj$response === void 0 ? {} : _errorObj$response;\n  var errorArray = [];\n  var code = 500;\n\n  if (Object.keys(response).length) {\n    var _response$data = response.data,\n        data = _response$data === void 0 ? {} : _response$data,\n        _response$headers = response.headers,\n        headers = _response$headers === void 0 ? {} : _response$headers,\n        status = response.status,\n        statusText = response.statusText;\n    code = status;\n    var harmonyError = data.description,\n        hucError = data.error,\n        hucSocketError = data.message;\n    var _headers$contentType = headers['content-type'],\n        contentType = _headers$contentType === void 0 ? '' : _headers$contentType;\n\n    if (contentType.indexOf('application/opensearchdescription+xml') > -1) {\n      // OpenSearch collections can return errors in XML, ensure we capture them\n      var osddBody = (0,fast_xml_parser__WEBPACK_IMPORTED_MODULE_1__.parse)(data, {\n        ignoreAttributes: false,\n        attributeNamePrefix: ''\n      });\n      var _osddBody$feed = osddBody.feed,\n          feed = _osddBody$feed === void 0 ? {} : _osddBody$feed,\n          _osddBody$OpenSearchD = osddBody.OpenSearchDescription,\n          description = _osddBody$OpenSearchD === void 0 ? {} : _osddBody$OpenSearchD; // Granule errors will come from within a `feed` element\n\n      var subtitle = feed.subtitle;\n\n      if (description) {\n        var errorMessage = description.Description;\n        errorArray = [errorMessage];\n      }\n\n      if (subtitle) {\n        if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(subtitle) === 'object' && subtitle !== null) {\n          var text = subtitle['#text'];\n          errorArray = [text];\n        } else {\n          errorArray = [subtitle];\n        }\n      }\n    } else if (contentType.indexOf('text/xml') > -1) {\n      // OpenSearch collections can return errors in XML, ensure we capture them\n      var gibsError = (0,fast_xml_parser__WEBPACK_IMPORTED_MODULE_1__.parse)(data, {\n        ignoreAttributes: false,\n        attributeNamePrefix: ''\n      });\n      var report = gibsError.ExceptionReport;\n      var exception = report.Exception;\n      var _errorMessage = exception.ExceptionText;\n      errorArray = [_errorMessage];\n    } else if (harmonyError) {\n      // Harmony uses code/description object in the response\n      errorArray = [harmonyError];\n    } else if (hucError || hucSocketError) {\n      // HUC uses code/description object in the response\n      errorArray = [hucError || hucSocketError];\n    } else if (contentType.indexOf('text/html') > -1) {\n      // If the error is from Axios and the content type is html, build a string error using the status code and status text\n      errorArray = [\"\".concat(name, \" (\").concat(code, \"): \").concat(statusText)];\n    } else {\n      // Default to CMR error response body\n      var _data$errors = data.errors;\n      errorArray = _data$errors === void 0 ? ['Unknown Error'] : _data$errors;\n    }\n\n    if (shouldLog) {\n      // Log each error provided\n      errorArray.forEach(function (message) {\n        var logParts = [logPrefix, \"\".concat(name, \" (\").concat(code, \"): \").concat(message)];\n        console.log(logParts.filter(Boolean).join(' '));\n      });\n    }\n  } else {\n    var logParts = [logPrefix, errorObj.toString()];\n\n    if (shouldLog) {\n      console.log(logParts.filter(Boolean).join(' '));\n    }\n\n    errorArray = [logParts.filter(Boolean).join(' ')];\n  } // If the error needs to be thrown again, do so before returning\n\n\n  if (reThrowError) {\n    throw errorObj;\n  }\n\n  if (asJSON) {\n    return {\n      statusCode: code,\n      body: JSON.stringify({\n        statusCode: code,\n        errors: errorArray\n      })\n    };\n  }\n\n  return errorArray;\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(parseError, \"parseError\", \"/Users/rabbott3/Projects/earthdata-search/sharedUtils/parseError.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://earthdata-search/./sharedUtils/parseError.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/typeof":
/*!************************************************!*\
  !*** external "@babel/runtime/helpers/typeof" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "fast-xml-parser":
/*!**********************************!*\
  !*** external "fast-xml-parser" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("fast-xml-parser");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("knex");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "lowercase-keys":
/*!*********************************!*\
  !*** external "lowercase-keys" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lowercase-keys");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "scatter-swap":
/*!*******************************!*\
  !*** external "scatter-swap" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("scatter-swap");

/***/ }),

/***/ "./overrideStatic.config.json":
/*!************************************!*\
  !*** ./overrideStatic.config.json ***!
  \************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"application\":{\"defaultPortal\":\"edsc\"}}');\n\n//# sourceURL=webpack://earthdata-search/./overrideStatic.config.json?");

/***/ }),

/***/ "./secret.config.json":
/*!****************************!*\
  !*** ./secret.config.json ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"environment\":{\"test\":{\"apiHost\":\"http://localhost:3001\"},\"development\":{\"dbUsername\":\"\",\"dbPassword\":\"\",\"apiHost\":\"http://localhost:3001/dev\"},\"production\":{}},\"earthdata\":{\"sit\":{\"clientId\":\"kzAY1v0kVjQ7QVpwBw-kLQ\",\"password\":\"OpenSource_EDSC!2\",\"secret\":\"JWT_SIGNING_SECRET_KEY\",\"cmrSystemUsername\":\"edsc.sys\",\"cmrSystemPassword\":\"q4XuuVAHCk85PuxsJmsCgEdmxVtX28M4\"},\"uat\":{\"clientId\":\"K34r-9lYcLrog2soFrljlw\",\"password\":\"OpenSource_EDSC!2\",\"secret\":\"JWT_SIGNING_SECRET_KEY\",\"cmrSystemUsername\":\"edsc.sys\",\"cmrSystemPassword\":\"vgaCg3dV6h5C2b9L4YMDE8kGReGb5inY\"},\"prod\":{\"clientId\":\"0LDz2MRpxLhPK1rDQBf_KA\",\"password\":\"OpenSource_EDSC!2\",\"secret\":\"JWT_SIGNING_SECRET_KEY\",\"cmrSystemUsername\":\"edsc.sys\",\"cmrSystemPassword\":\"hyW2PeGC5zNVH554NHTQWzwuZxR7GcsY\"},\"test\":{\"secret\":\"JWT_SIGNING_SECRET_KEY\"}},\"cypress\":{\"user\":{\"id\":20,\"username\":\"macrouch\"},\"ursProfile\":{\"first_name\":\"Matthew\"}},\"admins\":[\"macrouch\",\"mreese84\",\"rabbott\",\"sarahrogers\",\"trevorlang\"]}');\n\n//# sourceURL=webpack://earthdata-search/./secret.config.json?");

/***/ }),

/***/ "./static.config.json":
/*!****************************!*\
  !*** ./static.config.json ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"application\":{\"version\":\"dev\",\"env\":\"dev\",\"defaultPortal\":\"default\",\"feedbackApp\":\"\",\"analytics\":{\"gtmPropertyId\":\"\",\"localIdentifier\":{\"enabled\":false,\"propertyId\":\"\"}},\"ciMode\":false,\"cmrTagNamespace\":\"edsc.extra.serverless\",\"thumbnailSize\":{\"height\":85,\"width\":85},\"orderStatusRefreshTime\":60000,\"eosdisTagKey\":\"gov.nasa.eosdis\",\"defaultCmrPageSize\":20,\"maxCmrPageSize\":2000,\"granuleLinksPageSize\":\"500\",\"defaultCmrSearchTags\":[\"edsc.*\",\"opensearch.granule.osdd\"],\"defaultMaxOrderSize\":1000000,\"defaultGranulesPerOrder\":2000,\"defaultSpatialDecimalSize\":5,\"ummGranuleVersion\":\"1.5\",\"ummServiceVersion\":\"1.2\",\"temporalDateFormatFull\":\"YYYY-MM-DD HH:mm:ss\",\"temporalDateFormatRange\":\"MM-DD HH:mm:ss\",\"minimumTemporalDateString\":\"1960-01-01 00:00:00\",\"defaultResponseHeaders\":{\"Access-Control-Allow-Origin\":\"*\",\"Access-Control-Allow-Headers\":\"*\",\"Access-Control-Allow-Credentials\":true},\"clientId\":{\"background\":\"eed-PORTAL-ENV-serverless-background\",\"client\":\"eed-PORTAL-ENV-serverless-client\",\"lambda\":\"eed-PORTAL-ENV-serverless-lambda\"}},\"environment\":{\"test\":{\"apiHost\":\"http://localhost:3000\",\"edscHost\":\"http://localhost:8080\",\"jwtToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImlhdCI6MTU3ODQzMzQ3NiwiZWFydGhkYXRhRW52aXJvbm1lbnQiOiJ0ZXN0In0.WPMuvg26HcYGxGYi7Hl9_FO6YiiJNHWalQ35_1oP5do\"},\"development\":{\"dbHost\":\"127.0.0.1\",\"dbName\":\"edsc_dev\",\"dbPort\":5432,\"apiHost\":\"http://localhost:3001/dev\",\"edscHost\":\"http://localhost:8080\"},\"production\":{\"apiHost\":\"http://localhost:3001/dev\",\"edscHost\":\"http://localhost:8080\"}},\"earthdata\":{\"dev\":{},\"test\":{\"cmrHost\":\"https://cmr.earthdata.nasa.gov\",\"echoRestRoot\":\"https://cmr.earthdata.nasa.gov/legacy-services/rest\",\"edlHost\":\"https://urs.earthdata.nasa.gov\",\"csdaHost\":\"https://auth.csdap.uat.earthdatacloud.nasa.gov\",\"graphQlHost\":\"https://graphql.earthdata.nasa.gov\",\"regionHost\":\"https://fts.podaac.earthdata.nasa.gov\",\"opensearchRoot\":\"https://cmr.earthdata.nasa.gov/opensearch\",\"redirectUriPath\":\"/urs_callback\"},\"sit\":{\"cmrHost\":\"https://cmr.sit.earthdata.nasa.gov\",\"echoRestRoot\":\"https://cmr.sit.earthdata.nasa.gov/legacy-services/rest\",\"edlHost\":\"https://sit.urs.earthdata.nasa.gov\",\"csdaHost\":\"https://auth.csdap.uat.earthdatacloud.nasa.gov\",\"graphQlHost\":\"https://graphql.sit.earthdata.nasa.gov\",\"regionHost\":\"https://d2dwjhzkooeayk.cloudfront.net\",\"opensearchRoot\":\"https://cmr.sit.earthdata.nasa.gov/opensearch\",\"redirectUriPath\":\"/urs_callback\"},\"uat\":{\"cmrHost\":\"https://cmr.uat.earthdata.nasa.gov\",\"echoRestRoot\":\"https://cmr.uat.earthdata.nasa.gov/legacy-services/rest\",\"edlHost\":\"https://uat.urs.earthdata.nasa.gov\",\"csdaHost\":\"https://auth.csdap.uat.earthdatacloud.nasa.gov\",\"graphQlHost\":\"https://graphql.uat.earthdata.nasa.gov\",\"regionHost\":\"https://fts.podaac.uat.earthdata.nasa.gov\",\"opensearchRoot\":\"https://cmr.uat.earthdata.nasa.gov/opensearch\",\"redirectUriPath\":\"/urs_callback\"},\"prod\":{\"cmrHost\":\"https://cmr.earthdata.nasa.gov\",\"echoRestRoot\":\"https://cmr.earthdata.nasa.gov/legacy-services/rest\",\"edlHost\":\"https://urs.earthdata.nasa.gov\",\"csdaHost\":\"https://auth.csdap.uat.earthdatacloud.nasa.gov\",\"graphQlHost\":\"https://graphql.earthdata.nasa.gov\",\"regionHost\":\"https://fts.podaac.earthdata.nasa.gov\",\"opensearchRoot\":\"https://cmr.earthdata.nasa.gov/opensearch\",\"redirectUriPath\":\"/urs_callback\"}}}');\n\n//# sourceURL=webpack://earthdata-search/./static.config.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./serverless/src/getRetrievalCollection/handler.js");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;