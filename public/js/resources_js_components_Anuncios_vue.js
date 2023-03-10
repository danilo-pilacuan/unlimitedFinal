"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Anuncios_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Anuncios.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Anuncios.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      tablaDatos: [],
      showModalCreateEdit: false,
      isEdit: false,
      isAdd: false,
      anuncio: {
        id: 1,
        descripcionCorta: "",
        descripcionLarga: "",
        urlFoto: "C:",
        urlAccion: "https://",
        estado: 1
      }
    };
  },
  mounted: function mounted() {
    this.fetchDatos();
  },
  methods: {
    cancelForm: function cancelForm() {
      this.anuncio = {
        id: 1,
        descripcionCorta: "",
        descripcionLarga: "",
        urlFoto: "C:",
        urlAccion: "https://",
        estado: 1
      };
      this.showModalCreateEdit = false; //this.$buefy.dialog.alert("Usuario agregado correctamente");
    },
    addFunction: function addFunction() {
      this.showModalCreateEdit = true;
      this.isAdd = true;
      this.isEdit = false;
    },
    confirmDelete: function confirmDelete(data) {
      var _this = this;

      this.$buefy.dialog.confirm({
        message: 'Est?? seguro de eliminar?',
        onConfirm: function onConfirm() {
          return _this.deleteFunction(data);
        }
      });
    },
    deleteFunction: function deleteFunction(data) {
      var _this2 = this;

      fetch("https://unlimitedstorequito.site/" + "api/anuncios/" + data.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        var resp = data.message;
        console.log(resp);

        _this2.$buefy.dialog.alert("Anuncio eliminado correctamente");
      });
      this.fetchDatos();
      this.cancelForm();
    },
    editFunction: function editFunction(data) {
      this.anuncio = data;
      this.showModalCreateEdit = true;
      this.isAdd = false;
      this.isEdit = true;
    },
    submit: function submit() {
      var _this3 = this;

      if (this.isAdd) {
        fetch("https://unlimitedstorequito.site/" + "api/anuncios", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify(this.anuncio)
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          var resp = data.message;
          console.log(resp);

          _this3.$buefy.dialog.alert("Anuncio registrado correctamente");
        });
        this.cancelForm();
        this.fetchDatos();
      }

      if (this.isEdit) {
        fetch("https://unlimitedstorequito.site/" + "api/anuncios/" + this.anuncio.id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify(this.anuncio)
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          var resp = data.message;
          console.log(resp);

          _this3.$buefy.dialog.alert("Anuncio editado correctamente");
        });
        this.fetchDatos();
        this.cancelForm();
      }
    },
    fetchDatos: function fetchDatos() {
      var _this4 = this;

      try {
        fetch("https://unlimitedstorequito.site/" + "api/anuncios", {
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
            _this4.tablaDatos = data.respuesta;
            console.log("this.tablaDatos");
            console.log(_this4.tablaDatos);
          } else {
            //this.$router.push("/login")
            _this4.tablaDatos = [];
          }
        });
      } catch (e) {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Anuncios.vue?vue&type=template&id=07b5d28a&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Anuncios.vue?vue&type=template&id=07b5d28a& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "has-text-left"
  }, [_c("b-button", {
    attrs: {
      type: "is-primary"
    },
    on: {
      click: _vm.addFunction
    }
  }, [_vm._v("Registrar")])], 1), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "block"
  }, [_c("b-table", {
    attrs: {
      data: _vm.tablaDatos,
      bordered: true,
      striped: true,
      narrowed: true,
      hoverable: false,
      loading: false,
      focusable: false,
      "mobile-cards": false,
      searchable: true,
      paginated: true,
      "per-page": 20
    }
  }, [_c("b-table-column", {
    attrs: {
      label: "Descripci??n",
      field: "descripcionCorta",
      searchable: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_vm._v("\n          " + _vm._s(props.row.descripcionCorta) + "\n        ")];
      }
    }])
  }), _vm._v(" "), _c("b-table-column", {
    attrs: {
      label: "Foto",
      field: "urlFoto",
      searchable: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_vm._v("\n          " + _vm._s(props.row.urlFoto) + "\n        ")];
      }
    }])
  }), _vm._v(" "), _c("b-table-column", {
    attrs: {
      label: "Acci??n",
      field: "urlAccion",
      searchable: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_vm._v("\n          " + _vm._s(props.row.urlAccion) + "\n        ")];
      }
    }])
  }), _vm._v(" "), _c("b-table-column", {
    attrs: {
      label: "Estado",
      field: "estado",
      searchable: ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(props) {
        return [_vm._v("\n          " + _vm._s(props.row.estado ? "Activo" : "Inactivo") + "\n        ")];
      }
    }])
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
            type: "is-warning",
            "icon-left": "pencil"
          },
          on: {
            click: function click($event) {
              return _vm.editFunction(props.row);
            }
          }
        }), _vm._v(" "), _c("b-button", {
          attrs: {
            rounded: "",
            type: "is-danger",
            "icon-left": "delete"
          },
          on: {
            click: function click($event) {
              return _vm.confirmDelete(props.row);
            }
          }
        })], 1)];
      }
    }])
  })], 1)], 1)]), _vm._v(" "), _c("b-modal", {
    model: {
      value: _vm.showModalCreateEdit,
      callback: function callback($$v) {
        _vm.showModalCreateEdit = $$v;
      },
      expression: "showModalCreateEdit"
    }
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "modal-card",
    staticStyle: {
      width: "auto"
    }
  }, [_c("header", {
    staticClass: "modal-card-head"
  }, [_c("p", {
    staticClass: "modal-card-title"
  }, [_vm._v("Registrar Anuncio")]), _vm._v(" "), _c("button", {
    staticClass: "delete",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.cancelForm
    }
  })]), _vm._v(" "), _c("section", {
    staticClass: "modal-card-body"
  }, [_c("div", {
    staticClass: "columns"
  }, [_c("div", {
    staticClass: "column"
  }, [_c("b-field", {
    attrs: {
      label: "Descripci??n corta"
    }
  }, [_c("b-input", {
    attrs: {
      maxlength: "50"
    },
    model: {
      value: _vm.anuncio.descripcionCorta,
      callback: function callback($$v) {
        _vm.$set(_vm.anuncio, "descripcionCorta", $$v);
      },
      expression: "anuncio.descripcionCorta"
    }
  })], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "columns"
  }, [_c("div", {
    staticClass: "column"
  }, [_c("b-field", {
    attrs: {
      label: "Descripci??n Detallada"
    }
  }, [_c("b-input", {
    attrs: {
      type: "textarea"
    },
    model: {
      value: _vm.anuncio.descripcionLarga,
      callback: function callback($$v) {
        _vm.$set(_vm.anuncio, "descripcionLarga", $$v);
      },
      expression: "anuncio.descripcionLarga"
    }
  })], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "columns"
  }, [_c("div", {
    staticClass: "column"
  }, [_c("b-field", {
    attrs: {
      label: "Estado"
    }
  }, [_c("b-select", {
    attrs: {
      placeholder: "Seleccionar Estado"
    },
    model: {
      value: _vm.anuncio.estado,
      callback: function callback($$v) {
        _vm.$set(_vm.anuncio, "estado", $$v);
      },
      expression: "anuncio.estado"
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Activo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("Inactivo")])])], 1)], 1)])]), _vm._v(" "), _c("footer", {
    staticClass: "modal-card-foot"
  }, [_c("div", {
    staticClass: "columns"
  }, [_c("div", {
    staticClass: "column"
  }, [_c("b-button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isEdit,
      expression: "isEdit"
    }],
    attrs: {
      type: "is-primary",
      label: "Actualizar"
    },
    on: {
      click: _vm.submit
    }
  }), _vm._v(" "), _c("b-button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isAdd,
      expression: "isAdd"
    }],
    attrs: {
      type: "is-primary",
      label: "Registrar"
    },
    on: {
      click: _vm.submit
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "column"
  }, [_c("b-button", {
    attrs: {
      type: "is-danger",
      label: "Cancelar"
    },
    on: {
      click: _vm.cancelForm
    }
  })], 1)])])])])])], 1);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "has-text-centered"
  }, [_c("h1", {
    staticClass: "title"
  }, [_vm._v("Anuncios")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Anuncios.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Anuncios.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Anuncios_vue_vue_type_template_id_07b5d28a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Anuncios.vue?vue&type=template&id=07b5d28a& */ "./resources/js/components/Anuncios.vue?vue&type=template&id=07b5d28a&");
/* harmony import */ var _Anuncios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Anuncios.vue?vue&type=script&lang=js& */ "./resources/js/components/Anuncios.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Anuncios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Anuncios_vue_vue_type_template_id_07b5d28a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Anuncios_vue_vue_type_template_id_07b5d28a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Anuncios.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Anuncios.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Anuncios.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Anuncios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Anuncios.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Anuncios.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Anuncios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Anuncios.vue?vue&type=template&id=07b5d28a&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Anuncios.vue?vue&type=template&id=07b5d28a& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Anuncios_vue_vue_type_template_id_07b5d28a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Anuncios_vue_vue_type_template_id_07b5d28a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Anuncios_vue_vue_type_template_id_07b5d28a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Anuncios.vue?vue&type=template&id=07b5d28a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Anuncios.vue?vue&type=template&id=07b5d28a&");


/***/ })

}]);