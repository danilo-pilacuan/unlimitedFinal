"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_PedidosUsuario_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PedidosUsuario.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PedidosUsuario.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      tablaPedidos: []
    };
  },
  watch: {
    '$route': function $route() {
      var _this = this;

      if (this.$route.query.pedido) {
        console.log("🚀 ~ file: PedidosUsuario.vue ~ line 91 ~ this.$route.query.pedido", this.$route.query.pedido);
        this.$buefy.dialog.alert({
          message: "Pedido realizado correctamente",
          title: "Pedido Completado",
          onConfirm: function onConfirm() {
            console.log("confirm ok......");

            _this.$router.push("/usuario/pedidos");
          }
        });
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    console.log("Mounted pedidos ++++++++++++++++++");

    if (this.$route.query.pedido) {
      console.log("🚀 ~ file: PedidosUsuario.vue ~ line 100 ~ mounted ~ this.$route.query.pedido", this.$route.query.pedido);
      this.$buefy.dialog.alert({
        message: "Pedido realizado correctamente",
        title: "Pedido Completado",
        onConfirm: function onConfirm() {
          console.log("confirm ok......");

          _this2.$router.push("/usuario/pedidos");
        }
      });
    }

    this.fetchOrdenesByUserId();
  },
  computed: {
    authenticated: function authenticated() {
      return this.$store.state.authenticated;
    },
    cartList: function cartList() {
      return this.$store.state.cartList;
    },
    currentUser: function currentUser() {
      return this.$store.state.currentUser;
    }
  },
  methods: {
    verPedido: function verPedido(id) {
      console.log("🚀 ~ file: PedidosUsuario.vue ~ line 55 ~ id", id);
      this.$router.push("/usuario/pedidos/" + id);
    },
    fetchOrdenesByUserId: function fetchOrdenesByUserId() {
      var _this3 = this;

      try {
        fetch("https://unlimitedstorequito.site/" + "api/ordenes/user/" + this.currentUser.id, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include"
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          var resp = data;

          if (data) {
            _this3.tablaPedidos = data.respuesta;
            console.log("tablaPedidos");
            console.log(_this3.tablaPedidos);
          } else {
            //this.$router.push("/login")
            _this3.tablaPedidos = [];
          }
        });
      } catch (e) {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PedidosUsuario.vue?vue&type=template&id=bfa33eaa&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PedidosUsuario.vue?vue&type=template&id=bfa33eaa& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.tablaPedidos ? _c("div", [_c("h1", {
    staticClass: "title"
  }, [_vm._v("Pedidos")]), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "block"
  }, [_c("div", {
    staticClass: "columns"
  }, [_c("div", {
    staticClass: "column"
  }, [_c("b-table", {
    attrs: {
      data: _vm.tablaPedidos,
      bordered: true,
      striped: false,
      hoverable: false,
      loading: false,
      focusable: false,
      "mobile-cards": true,
      paginated: true,
      "per-page": 5
    }
  }, [_c("b-table-column", {
    staticClass: "is-vcentered",
    attrs: {
      label: "Fecha Pedido",
      field: "producto.descripcionCorta",
      centered: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_vm._v("\n                    " + _vm._s(props.row.fechaOrden) + "\n\n                ")];
      }
    }], null, false, 2137481876)
  }), _vm._v(" "), _c("b-table-column", {
    staticClass: "is-vcentered",
    attrs: {
      label: "Estado",
      field: "producto.descripcionCorta",
      centered: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_vm._v("\n                    " + _vm._s(props.row.estadoOrden == 1 ? "Entregado" : "No entregado") + "\n\n                ")];
      }
    }], null, false, 462716352)
  }), _vm._v(" "), _c("b-table-column", {
    attrs: {
      label: "Valor Total",
      field: "precio",
      centered: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_vm._v("\n                    $" + _vm._s(props.row.valorTotal.toFixed(2)) + "\n                ")];
      }
    }], null, false, 453820109)
  }), _vm._v(" "), _c("b-table-column", {
    attrs: {
      field: "actions",
      label: "Acciones"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "buttons"
        }, [_c("b-button", {
          attrs: {
            rounded: "",
            type: "is-primary",
            "icon-left": "eye"
          },
          on: {
            click: function click($event) {
              return _vm.verPedido(props.row.id);
            }
          }
        })], 1)];
      }
    }], null, false, 4255046010)
  })], 1)], 1)])])])]) : _vm._e();
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PedidosUsuario.vue?vue&type=style&index=0&id=bfa33eaa&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PedidosUsuario.vue?vue&type=style&index=0&id=bfa33eaa&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.entregado\n{\n    background-color: rgb(38, 141, 47);\n}\n.noentregado\n{\n    background-color: rgb(150, 97, 87);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PedidosUsuario.vue?vue&type=style&index=0&id=bfa33eaa&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PedidosUsuario.vue?vue&type=style&index=0&id=bfa33eaa&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosUsuario_vue_vue_type_style_index_0_id_bfa33eaa_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PedidosUsuario.vue?vue&type=style&index=0&id=bfa33eaa&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PedidosUsuario.vue?vue&type=style&index=0&id=bfa33eaa&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosUsuario_vue_vue_type_style_index_0_id_bfa33eaa_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosUsuario_vue_vue_type_style_index_0_id_bfa33eaa_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/PedidosUsuario.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/PedidosUsuario.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PedidosUsuario_vue_vue_type_template_id_bfa33eaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PedidosUsuario.vue?vue&type=template&id=bfa33eaa& */ "./resources/js/components/PedidosUsuario.vue?vue&type=template&id=bfa33eaa&");
/* harmony import */ var _PedidosUsuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PedidosUsuario.vue?vue&type=script&lang=js& */ "./resources/js/components/PedidosUsuario.vue?vue&type=script&lang=js&");
/* harmony import */ var _PedidosUsuario_vue_vue_type_style_index_0_id_bfa33eaa_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PedidosUsuario.vue?vue&type=style&index=0&id=bfa33eaa&lang=css& */ "./resources/js/components/PedidosUsuario.vue?vue&type=style&index=0&id=bfa33eaa&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PedidosUsuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PedidosUsuario_vue_vue_type_template_id_bfa33eaa___WEBPACK_IMPORTED_MODULE_0__.render,
  _PedidosUsuario_vue_vue_type_template_id_bfa33eaa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PedidosUsuario.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/PedidosUsuario.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/PedidosUsuario.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosUsuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PedidosUsuario.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PedidosUsuario.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosUsuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PedidosUsuario.vue?vue&type=template&id=bfa33eaa&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/PedidosUsuario.vue?vue&type=template&id=bfa33eaa& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosUsuario_vue_vue_type_template_id_bfa33eaa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosUsuario_vue_vue_type_template_id_bfa33eaa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosUsuario_vue_vue_type_template_id_bfa33eaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PedidosUsuario.vue?vue&type=template&id=bfa33eaa& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PedidosUsuario.vue?vue&type=template&id=bfa33eaa&");


/***/ }),

/***/ "./resources/js/components/PedidosUsuario.vue?vue&type=style&index=0&id=bfa33eaa&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/PedidosUsuario.vue?vue&type=style&index=0&id=bfa33eaa&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosUsuario_vue_vue_type_style_index_0_id_bfa33eaa_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PedidosUsuario.vue?vue&type=style&index=0&id=bfa33eaa&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PedidosUsuario.vue?vue&type=style&index=0&id=bfa33eaa&lang=css&");


/***/ })

}]);