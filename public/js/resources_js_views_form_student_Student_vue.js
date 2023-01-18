(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_form_student_Student_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Student.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Student.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Assets_formIcons_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Assets/formIcons/index */ "./resources/js/Assets/formIcons/index.js");
/* harmony import */ var _stores_loginInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../stores/loginInfo */ "./resources/js/stores/loginInfo.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      students: [],
      icons: {
        First_name: _Assets_formIcons_index__WEBPACK_IMPORTED_MODULE_0__.First_name,
        Last_name: _Assets_formIcons_index__WEBPACK_IMPORTED_MODULE_0__.Last_name,
        Phone: _Assets_formIcons_index__WEBPACK_IMPORTED_MODULE_0__.Phone,
        Email: _Assets_formIcons_index__WEBPACK_IMPORTED_MODULE_0__.Email,
        Dob: _Assets_formIcons_index__WEBPACK_IMPORTED_MODULE_0__.Dob,
        Address: _Assets_formIcons_index__WEBPACK_IMPORTED_MODULE_0__.Address,
        Country: _Assets_formIcons_index__WEBPACK_IMPORTED_MODULE_0__.Country,
        State: _Assets_formIcons_index__WEBPACK_IMPORTED_MODULE_0__.State
      },
      student: {
        First_name: "",
        Last_name: "",
        Phone: "",
        Email: "",
        Dob: "",
        Country: ""
      },
      dynamicParentList: [{
        First_name: "",
        Last_name: "",
        Phone: "",
        Email: "",
        parent_id: 1
      }]
    };
  },
  props: {
    mode: String
  },
  computed: _objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_2__.mapState)(_stores_loginInfo__WEBPACK_IMPORTED_MODULE_1__.loginInfoStore, ["getLoginInfo"])),
  mounted: function mounted() {
    this.getStudents();
  },
  methods: {
    checkSubject: function checkSubject(val) {
      var results = [];
      if (this.getLoginInfo.user.role == "teacher") {
        results = this.getLoginInfo.teacher_info.subject.filter(function (sub) {
          return sub.name === val.name;
        });
        if (results.length > 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    callBack: function callBack() {
      this.save();
    },
    addStudent: function addStudent() {
      this.checkValidation(this.callBack);
    },
    save: function save() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var dynamic_parent_list, formData, postResponse, urlText;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              dynamic_parent_list = _this.dynamicParentList.map(function (data) {
                return {
                  first_name: data.First_name,
                  last_name: data.Last_name,
                  full_name: data.First_name + " " + data.Last_name,
                  role: "parent",
                  phone: data.Phone,
                  email: data.Email,
                  password: "1234"
                };
              });
              formData = new FormData();
              formData.append("user_info[first_name]", _this.student.First_name);
              formData.append("user_info[last_name]", _this.student.Last_name);
              formData.append("user_info[role]", "student");
              formData.append("user_info[password]", "1234");
              formData.append("user_info[email]", _this.student.Email);
              formData.append("student_info[phone]", _this.student.Phone);
              formData.append("student_info[dob]", _this.student.Dob);
              formData.append("student_info[full_name]", _this.student.First_name + " " + _this.student.Last_name);
              formData.append("student_info[country]", _this.student.Country);
              formData.append("parent_info", JSON.stringify(dynamic_parent_list));
              postResponse = {};
              urlText = "addStudent";
              _context.next = 16;
              return _this.post(urlText, formData);
            case 16:
              postResponse = _context.sent;
              _this.student = {};
              _this.dynamicParentList = [{
                First_name: "",
                Last_name: "",
                Phone: "",
                Email: "",
                parent_id: 1
              }];
              _this.$router.push({
                name: "student"
              });
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    changeField: function changeField(event, type, parent) {
      var dynamicParentList = _toConsumableArray(this.dynamicParentList);
      var item = dynamicParentList.find(function (parentItem) {
        return parentItem.parent_id === parent;
      });
      var updatedItem = _objectSpread(_objectSpread({}, item), {}, {
        type: event.target.value
      });
      item = updatedItem;
      this.dynamicParentList = dynamicParentList;
    },
    addGuardian: function addGuardian() {
      var dynamicList = _toConsumableArray(this.dynamicParentList);
      dynamicList.push({
        parent_id: this.dynamicParentList.length + 1,
        first_name: "",
        last_name: "",
        phone: "",
        email: ""
      });
      this.dynamicParentList = dynamicList;
    },
    removeParent: function removeParent(parent_id) {
      this.dynamicParentList = this.dynamicParentList.filter(function (parentItem) {
        return parentItem.parent_id !== parent_id;
      });
    },
    getStudents: function getStudents() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var urlText, getResponse;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              urlText = "";
              if (_this2.getLoginInfo.user.role == "teacher") {
                urlText = "teacher/" + _this2.getLoginInfo.teacher_info.id + "/student";
              } else {
                urlText = "getStudents";
              }
              _context2.next = 4;
              return _this2.get(urlText, 1, false);
            case 4:
              getResponse = _context2.sent;
              _this2.students = getResponse.data.data;
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/student/Student.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/student/Student.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_form_Student_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/form/Student.vue */ "./resources/js/components/form/Student.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      mode: 'fetch-students'
    };
  },
  components: {
    Student: _components_form_Student_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Student.vue?vue&type=template&id=219bb0ca&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Student.vue?vue&type=template&id=219bb0ca& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_vm.mode == "fetch-students" ? _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "add-item"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v("Student List")]), _vm._v(" "), _vm.getLoginInfo.user.role == "admin" ? _c("button", {
    staticClass: "btn btn-add",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.$root.changeRoute("/add-student");
      }
    }
  }, [_c("i", {
    staticClass: "bi bi-plus"
  }), _vm._v(" ADD STUDENT\n                    ")]) : _vm._e()]), _vm._v(" "), _c("hr", {
    staticClass: "hr-color"
  }), _vm._v(" "), _c("table", {
    staticClass: "table table-hover user-list"
  }, [_c("thead", [_c("tr", [_c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Phone")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Subject")]), _vm._v(" "), _vm.getLoginInfo.user.role == "admin" ? _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("\n                                Teacher\n                            ")]) : _vm._e(), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Parent")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.students, function (std, index) {
    return _c("tr", {
      key: index
    }, [_c("th", {
      attrs: {
        scope: "row"
      }
    }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", {
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.$root.changeRoute("/student/" + std.id + "/detail");
        }
      }
    }, [_vm._v("\n                                " + _vm._s(std.full_name) + "\n                            ")]), _vm._v(" "), _c("td", {
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.$root.changeRoute("/student/" + std.id + "/detail");
        }
      }
    }, [_vm._v("\n                                " + _vm._s(std.email) + "\n                            ")]), _vm._v(" "), _c("td", {
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.$root.changeRoute("/student/" + std.id + "/detail");
        }
      }
    }, [_vm._v("\n                                " + _vm._s(std.phone) + "\n                            ")]), _vm._v(" "), _c("td", {
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.$root.changeRoute("/student/" + std.id + "/detail");
        }
      }
    }, [_c("b-list-group", _vm._l(std.subject, function (sb) {
      return _vm.checkSubject(sb) ? _c("b-list-group-item", {
        key: sb.id
      }, [_vm._v(_vm._s(sb.name))]) : _vm._e();
    }), 1)], 1), _vm._v(" "), _vm.getLoginInfo.user.role == "admin" ? _c("td", {
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.$root.changeRoute("/student/" + std.id + "/detail");
        }
      }
    }, [_c("b-list-group", _vm._l(std.teacher, function (tec) {
      return _c("b-list-group-item", {
        key: tec.id
      }, [_vm._v(_vm._s(tec.full_name))]);
    }), 1)], 1) : _vm._e(), _vm._v(" "), _c("td", {
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.$root.changeRoute("/student/" + std.id + "/detail");
        }
      }
    }, [_c("b-list-group", _vm._l(std.guardian, function (gu) {
      return _c("b-list-group-item", {
        key: gu.id
      }, [_vm._v(_vm._s(gu.full_name))]);
    }), 1)], 1)]);
  }), 0)])])]) : _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "add-item"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v("Student Info")]), _vm._v(" "), _vm.$route.name == "addStudent" ? _c("button", {
    staticClass: "btn btn-back",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.$router.go(-1);
      }
    }
  }, [_vm._v("\n                        BACK\n                    ")]) : _vm._e()]), _vm._v(" "), _c("hr", {
    staticClass: "hr-color"
  }), _vm._v(" "), _c("form", {
    staticClass: "row g-3 needs-validation",
    attrs: {
      novalidate: ""
    }
  }, [_c("div", {
    staticClass: "col-md-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "student_first_name"
    }
  }, [_c("img", {
    attrs: {
      src: _vm.icons.First_name
    }
  }), _vm._v(" First\n                            name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student.First_name,
      expression: "student.First_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "student_first_name",
      required: ""
    },
    domProps: {
      value: _vm.student.First_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student, "First_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                            Please choose a fist name.\n                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "student_last_name"
    }
  }, [_c("img", {
    attrs: {
      src: _vm.icons.Last_name
    }
  }), _vm._v(" Last\n                            name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student.Last_name,
      expression: "student.Last_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "student_last_name",
      required: ""
    },
    domProps: {
      value: _vm.student.Last_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student, "Last_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                            Please choose a last name.\n                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "student_phone"
    }
  }, [_c("img", {
    attrs: {
      src: _vm.icons.Phone
    }
  }), _vm._v(" Phone")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student.Phone,
      expression: "student.Phone"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "student_phone",
      required: ""
    },
    domProps: {
      value: _vm.student.Phone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student, "Phone", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                            Please choose a phone.\n                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "student_email"
    }
  }, [_c("img", {
    attrs: {
      src: _vm.icons.Email
    }
  }), _vm._v(" Email")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student.Email,
      expression: "student.Email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "student_email",
      required: ""
    },
    domProps: {
      value: _vm.student.Email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student, "Email", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                            Please choose a email.\n                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "Student_dob"
    }
  }, [_c("img", {
    attrs: {
      src: _vm.icons.Dob
    }
  }), _vm._v(" DOB")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student.Dob,
      expression: "student.Dob"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      id: "Student_dob",
      required: ""
    },
    domProps: {
      value: _vm.student.Dob
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student, "Dob", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                            Please choose a date of birth.\n                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "student_country"
    }
  }, [_c("img", {
    attrs: {
      src: _vm.icons.Address
    }
  }), _vm._v(" Country")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.student.Country,
      expression: "student.Country"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "student_country",
      required: ""
    },
    domProps: {
      value: _vm.student.Country
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.student, "Country", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                            Please choose a country.\n                        ")])]), _vm._v(" "), _c("h5", {
    staticClass: "add-parent-title card-title ml-3"
  }, [_vm._v("\n                        Parent Info\n                    ")]), _vm._v(" "), _c("hr", {
    staticClass: "hr-parent ml-3"
  }), _vm._v(" "), _vm._l(_vm.dynamicParentList, function (_input, index) {
    return _c("div", {
      key: index,
      staticClass: "parent-info col-12"
    }, [_c("div", {
      staticClass: "col-md-4"
    }, [_c("label", {
      staticClass: "form-label",
      attrs: {
        "for": "parent_first_name"
      }
    }, [_c("img", {
      attrs: {
        src: _vm.icons.First_name
      }
    }), _vm._v(" First\n                                name")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _input.First_name,
        expression: "input.First_name"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        id: "parent_first_name",
        required: ""
      },
      domProps: {
        value: _input.First_name
      },
      on: {
        change: function change($event) {
          return _vm.changeField($event, "first_name", _input.parent_id);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_input, "First_name", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "invalid-feedback"
    }, [_vm._v("\n                                Please choose a fist name.\n                            ")])]), _vm._v(" "), _c("div", {
      staticClass: "col-md-4"
    }, [_c("label", {
      staticClass: "form-label",
      attrs: {
        "for": "parent_last_name"
      }
    }, [_c("img", {
      attrs: {
        src: _vm.icons.Last_name
      }
    }), _vm._v(" Last\n                                name")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _input.Last_name,
        expression: "input.Last_name"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        id: "parent_last_name",
        required: ""
      },
      domProps: {
        value: _input.Last_name
      },
      on: {
        change: function change($event) {
          return _vm.changeField($event, "last_name", _input.parent_id);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_input, "Last_name", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "invalid-feedback"
    }, [_vm._v("\n                                Please choose a last name.\n                            ")])]), _vm._v(" "), _c("div", {
      staticClass: "col-md-4"
    }, [_c("label", {
      staticClass: "form-label",
      attrs: {
        "for": "parent_phone"
      }
    }, [_c("img", {
      attrs: {
        src: _vm.icons.Phone
      }
    }), _vm._v(" Phone")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _input.Phone,
        expression: "input.Phone"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        id: "parent_phone",
        required: ""
      },
      domProps: {
        value: _input.Phone
      },
      on: {
        change: function change($event) {
          return _vm.changeField($event, "phone", _input.parent_id);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_input, "Phone", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "invalid-feedback"
    }, [_vm._v("\n                                Please choose a phone.\n                            ")])]), _vm._v(" "), _c("div", {
      staticClass: "col-md-4"
    }, [_c("label", {
      staticClass: "form-label",
      attrs: {
        "for": "parent_email"
      }
    }, [_c("img", {
      attrs: {
        src: _vm.icons.Email
      }
    }), _vm._v(" Email")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _input.Email,
        expression: "input.Email"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        id: "parent_email",
        required: ""
      },
      domProps: {
        value: _input.Email
      },
      on: {
        change: function change($event) {
          return _vm.changeField($event, "email", _input.parent_id);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_input, "Email", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "invalid-feedback"
    }, [_vm._v("\n                                Please choose a email.\n                            ")])]), _vm._v(" "), index == 0 ? _c("div", {
      staticClass: "col-md-4 add-guardian"
    }, [_vm._v("\n                            Add Guardians  \n                            "), _c("i", {
      staticClass: "bi bi-plus-circle add-guardian-icon",
      staticStyle: {
        color: "#8bc34a"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.addGuardian.apply(null, arguments);
        }
      }
    })]) : _c("div", {
      staticClass: "col-md-4 remove-guardian"
    }, [_vm._v("\n                            Remove Guardians  \n                            "), _c("i", {
      staticClass: "bi bi-dash-circle remove-guardian-icon",
      staticStyle: {
        color: "red"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.removeParent(_input.parent_id);
        }
      }
    })]), _vm._v(" "), _vm._m(0, true)]);
  }), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("button", {
    staticClass: "btn btn-success",
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.addStudent.apply(null, arguments);
      }
    }
  }, [_vm._v("\n                            Save\n                        ")])])], 2)])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12 mt-4"
  }, [_c("hr", {
    staticClass: "hr-color"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/student/Student.vue?vue&type=template&id=4f4f1e7b&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/student/Student.vue?vue&type=template&id=4f4f1e7b& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("student", {
    attrs: {
      mode: _vm.mode
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/Assets/formIcons/index.js":
/*!************************************************!*\
  !*** ./resources/js/Assets/formIcons/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Address": () => (/* reexport default from dynamic */ _address_svg__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "Call": () => (/* reexport default from dynamic */ _call_svg__WEBPACK_IMPORTED_MODULE_1___default.a),
/* harmony export */   "Country": () => (/* reexport default from dynamic */ _country_svg__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   "Dob": () => (/* reexport default from dynamic */ _dob_svg__WEBPACK_IMPORTED_MODULE_3___default.a),
/* harmony export */   "Email": () => (/* reexport default from dynamic */ _email_svg__WEBPACK_IMPORTED_MODULE_4___default.a),
/* harmony export */   "First_name": () => (/* reexport default from dynamic */ _first_name_svg__WEBPACK_IMPORTED_MODULE_5___default.a),
/* harmony export */   "Guardian_name": () => (/* reexport default from dynamic */ _guardian_name_svg__WEBPACK_IMPORTED_MODULE_6___default.a),
/* harmony export */   "Last_name": () => (/* reexport default from dynamic */ _last_name_svg__WEBPACK_IMPORTED_MODULE_7___default.a),
/* harmony export */   "Mailing": () => (/* reexport default from dynamic */ _mailing_svg__WEBPACK_IMPORTED_MODULE_8___default.a),
/* harmony export */   "Phone": () => (/* reexport default from dynamic */ _phone_svg__WEBPACK_IMPORTED_MODULE_9___default.a),
/* harmony export */   "Postal_code": () => (/* reexport default from dynamic */ _postal_code_svg__WEBPACK_IMPORTED_MODULE_10___default.a),
/* harmony export */   "State": () => (/* reexport default from dynamic */ _state_svg__WEBPACK_IMPORTED_MODULE_11___default.a),
/* harmony export */   "Up": () => (/* reexport default from dynamic */ _up_svg__WEBPACK_IMPORTED_MODULE_12___default.a),
/* harmony export */   "Upload_form": () => (/* reexport default from dynamic */ _upload_form_svg__WEBPACK_IMPORTED_MODULE_13___default.a)
/* harmony export */ });
/* harmony import */ var _address_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address.svg */ "./resources/js/Assets/formIcons/address.svg");
/* harmony import */ var _address_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_address_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _call_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./call.svg */ "./resources/js/Assets/formIcons/call.svg");
/* harmony import */ var _call_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_call_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _country_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country.svg */ "./resources/js/Assets/formIcons/country.svg");
/* harmony import */ var _country_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_country_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dob_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dob.svg */ "./resources/js/Assets/formIcons/dob.svg");
/* harmony import */ var _dob_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dob_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _email_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email.svg */ "./resources/js/Assets/formIcons/email.svg");
/* harmony import */ var _email_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_email_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _first_name_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./first_name.svg */ "./resources/js/Assets/formIcons/first_name.svg");
/* harmony import */ var _first_name_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_first_name_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _guardian_name_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guardian_name.svg */ "./resources/js/Assets/formIcons/guardian_name.svg");
/* harmony import */ var _guardian_name_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_guardian_name_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _last_name_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./last_name.svg */ "./resources/js/Assets/formIcons/last_name.svg");
/* harmony import */ var _last_name_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_last_name_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mailing_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mailing.svg */ "./resources/js/Assets/formIcons/mailing.svg");
/* harmony import */ var _mailing_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mailing_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _phone_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./phone.svg */ "./resources/js/Assets/formIcons/phone.svg");
/* harmony import */ var _phone_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_phone_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _postal_code_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./postal_code.svg */ "./resources/js/Assets/formIcons/postal_code.svg");
/* harmony import */ var _postal_code_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_postal_code_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _state_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state.svg */ "./resources/js/Assets/formIcons/state.svg");
/* harmony import */ var _state_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_state_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _up_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./up.svg */ "./resources/js/Assets/formIcons/up.svg");
/* harmony import */ var _up_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_up_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _upload_form_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./upload_form.svg */ "./resources/js/Assets/formIcons/upload_form.svg");
/* harmony import */ var _upload_form_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_upload_form_svg__WEBPACK_IMPORTED_MODULE_13__);
















/***/ }),

/***/ "./resources/js/Assets/formIcons/address.svg":
/*!***************************************************!*\
  !*** ./resources/js/Assets/formIcons/address.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/address.svg?98f40e8557665ca2da63104f400a140a";

/***/ }),

/***/ "./resources/js/Assets/formIcons/call.svg":
/*!************************************************!*\
  !*** ./resources/js/Assets/formIcons/call.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/call.svg?ba11041d609b92bcf6943448047c696c";

/***/ }),

/***/ "./resources/js/Assets/formIcons/country.svg":
/*!***************************************************!*\
  !*** ./resources/js/Assets/formIcons/country.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/country.svg?4958cc75de90bb8022cfa8fa934a375f";

/***/ }),

/***/ "./resources/js/Assets/formIcons/dob.svg":
/*!***********************************************!*\
  !*** ./resources/js/Assets/formIcons/dob.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "/images/dob.svg?870b24be80d08d57c066e6b4a7bac393";

/***/ }),

/***/ "./resources/js/Assets/formIcons/email.svg":
/*!*************************************************!*\
  !*** ./resources/js/Assets/formIcons/email.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "/images/email.svg?c6ef5c6134621077a072d7835c265567";

/***/ }),

/***/ "./resources/js/Assets/formIcons/first_name.svg":
/*!******************************************************!*\
  !*** ./resources/js/Assets/formIcons/first_name.svg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/first_name.svg?a349793c89d4a58c54fb1c6adde2f7e3";

/***/ }),

/***/ "./resources/js/Assets/formIcons/guardian_name.svg":
/*!*********************************************************!*\
  !*** ./resources/js/Assets/formIcons/guardian_name.svg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/guardian_name.svg?5be61c1ee819d69522c85165422a49e2";

/***/ }),

/***/ "./resources/js/Assets/formIcons/last_name.svg":
/*!*****************************************************!*\
  !*** ./resources/js/Assets/formIcons/last_name.svg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/last_name.svg?cce732a52bc924ae4cbcb24b99cfe6d7";

/***/ }),

/***/ "./resources/js/Assets/formIcons/mailing.svg":
/*!***************************************************!*\
  !*** ./resources/js/Assets/formIcons/mailing.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/mailing.svg?7eff0988d81e7ab17c4a260b267d6ceb";

/***/ }),

/***/ "./resources/js/Assets/formIcons/phone.svg":
/*!*************************************************!*\
  !*** ./resources/js/Assets/formIcons/phone.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "/images/phone.svg?b5a13626982c76c16517f7391373c87e";

/***/ }),

/***/ "./resources/js/Assets/formIcons/postal_code.svg":
/*!*******************************************************!*\
  !*** ./resources/js/Assets/formIcons/postal_code.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/postal_code.svg?8ed5639b19e0cb6c29017a42f496f5c8";

/***/ }),

/***/ "./resources/js/Assets/formIcons/state.svg":
/*!*************************************************!*\
  !*** ./resources/js/Assets/formIcons/state.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "/images/state.svg?54b04c3f22cd1e21370eb505af9d1916";

/***/ }),

/***/ "./resources/js/Assets/formIcons/up.svg":
/*!**********************************************!*\
  !*** ./resources/js/Assets/formIcons/up.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "/images/up.svg?7b9b8f41be40ae1cd87d517a2e3c4b2a";

/***/ }),

/***/ "./resources/js/Assets/formIcons/upload_form.svg":
/*!*******************************************************!*\
  !*** ./resources/js/Assets/formIcons/upload_form.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/upload_form.svg?3817464e69506a71cac1eaa45c6aca4e";

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Student.vue?vue&type=style&index=0&id=219bb0ca&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Student.vue?vue&type=style&index=0&id=219bb0ca&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\r\n    padding: 1rem;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Student.vue?vue&type=style&index=0&id=219bb0ca&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Student.vue?vue&type=style&index=0&id=219bb0ca&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_style_index_0_id_219bb0ca_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Student.vue?vue&type=style&index=0&id=219bb0ca&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Student.vue?vue&type=style&index=0&id=219bb0ca&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_style_index_0_id_219bb0ca_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_style_index_0_id_219bb0ca_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/form/Student.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/form/Student.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Student_vue_vue_type_template_id_219bb0ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Student.vue?vue&type=template&id=219bb0ca& */ "./resources/js/components/form/Student.vue?vue&type=template&id=219bb0ca&");
/* harmony import */ var _Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Student.vue?vue&type=script&lang=js& */ "./resources/js/components/form/Student.vue?vue&type=script&lang=js&");
/* harmony import */ var _Student_vue_vue_type_style_index_0_id_219bb0ca_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Student.vue?vue&type=style&index=0&id=219bb0ca&lang=css& */ "./resources/js/components/form/Student.vue?vue&type=style&index=0&id=219bb0ca&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Student_vue_vue_type_template_id_219bb0ca___WEBPACK_IMPORTED_MODULE_0__.render,
  _Student_vue_vue_type_template_id_219bb0ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form/Student.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/form/student/Student.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/form/student/Student.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Student_vue_vue_type_template_id_4f4f1e7b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Student.vue?vue&type=template&id=4f4f1e7b& */ "./resources/js/views/form/student/Student.vue?vue&type=template&id=4f4f1e7b&");
/* harmony import */ var _Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Student.vue?vue&type=script&lang=js& */ "./resources/js/views/form/student/Student.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Student_vue_vue_type_template_id_4f4f1e7b___WEBPACK_IMPORTED_MODULE_0__.render,
  _Student_vue_vue_type_template_id_4f4f1e7b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/form/student/Student.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/form/Student.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/form/Student.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Student.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Student.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/form/student/Student.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/form/student/Student.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Student.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/student/Student.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form/Student.vue?vue&type=template&id=219bb0ca&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/form/Student.vue?vue&type=template&id=219bb0ca& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_template_id_219bb0ca___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_template_id_219bb0ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_template_id_219bb0ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Student.vue?vue&type=template&id=219bb0ca& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Student.vue?vue&type=template&id=219bb0ca&");


/***/ }),

/***/ "./resources/js/views/form/student/Student.vue?vue&type=template&id=4f4f1e7b&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/form/student/Student.vue?vue&type=template&id=4f4f1e7b& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_template_id_4f4f1e7b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_template_id_4f4f1e7b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_template_id_4f4f1e7b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Student.vue?vue&type=template&id=4f4f1e7b& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/student/Student.vue?vue&type=template&id=4f4f1e7b&");


/***/ }),

/***/ "./resources/js/components/form/Student.vue?vue&type=style&index=0&id=219bb0ca&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/form/Student.vue?vue&type=style&index=0&id=219bb0ca&lang=css& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Student_vue_vue_type_style_index_0_id_219bb0ca_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Student.vue?vue&type=style&index=0&id=219bb0ca&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Student.vue?vue&type=style&index=0&id=219bb0ca&lang=css&");


/***/ })

}]);