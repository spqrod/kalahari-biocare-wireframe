/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkkalahari_biocare"] = self["webpackChunkkalahari_biocare"] || []).push([["index"],{

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ (() => {

eval("// Reveal WhatsApp button on scroll\n\ndocument.addEventListener(\"scroll\", revealWhatsAppButton);\nfunction revealWhatsAppButton() {\n    console.log(window.scrollY);\n    const floatingWhatsAppButton = document.querySelector(\".floatingWhatsAppButton\");\n    if (window.scrollY > 200) {\n        floatingWhatsAppButton.classList.add(\"active\");\n        document.removeEventListener(\"scroll\", revealWhatsAppButton);\n    }\n};\n\n// Reveal divs in Beliefs section\nfunction scrollTrigger(selector, options = {}) {\n    let els = document.querySelectorAll(selector)\n    els = Array.from(els)\n    els.forEach(el => {\n        addObserver(el, options)\n    })\n};\nfunction addObserver(el, options) {\n    let observer = new IntersectionObserver((entries, observer) => {\n        entries.forEach(entry => {\n        if(entry.isIntersecting) {\n            entry.target.classList.add('active')\n            observer.unobserve(entry.target)\n        }\n        })\n    }, options)\n    observer.observe(el)\n};\nscrollTrigger('.feature', {\n    rootMargin: '-200px'\n});\n\n//# sourceURL=webpack://kalahari-biocare/./src/scripts/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/index.js"));
/******/ }
]);