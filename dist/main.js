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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/style.css?");

/***/ }),

/***/ "./src/Twitter/index.js":
/*!******************************!*\
  !*** ./src/Twitter/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newElement\": () => /* binding */ newElement,\n/* harmony export */   \"reactDOM\": () => /* binding */ reactDOM\n/* harmony export */ });\nconst newElement = (type, props, ...children) =>{\n    const element = document.createElement(type);\n    children.forEach(child => {\n        if(typeof child === 'object') {\n            if(Array.isArray(child)) {\n                child.forEach(innerChild => {\n                    element.appendChild(innerChild);\n                })\n            }else{\n                element.appendChild(child);\n            }\n        }else{\n            element.innerHTML = children;\n        }\n    }) \n    return handleProps(element, props);\n}\n\nconst handleProps = (element, props) => {\n    if(props) {\n        Object.keys(props).forEach(prop => {\nif(prop){\n    if(/^on.*$/.test(prop)){\n        element.addEventListener(prop.substring(2), props[prop])\n    } else {\n        element.setAttribute(prop, props[prop])\n    }\n}            \n        });\n    } return element;\n}\n\nconst reactDOM = {\n    render: (element, rootElement) => {\n        rootElement.appendChild(element);\n    }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/Twitter/index.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => /* binding */ footer,\n/* harmony export */   \"footerpostSecondary\": () => /* binding */ footerpostSecondary\n/* harmony export */ });\n/* harmony import */ var _Twitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Twitter */ \"./src/Twitter/index.js\");\n\n\nconst footer = () => {\n  let a = [\n    { name: \"About\", link: \"https://about.instagram.com/\" },\n    { name: \"Blog\", link: \"https://about.instagram.com/en_US/blog\" },\n    { name: \"Jobs\", link: \"https://www.instagram.com/about/jobs/\" },\n    { name: \"Help\", link: \"https://help.instagram.com/\" },\n    { name: \"Api\", link: \"https://www.instagram.com/developer/\" },\n    { name: \"Privacy\", link: \"https://help.instagram.com/519522125107875\" },\n    { name: \"Terms\", link: \"https://help.instagram.com/581066165581870\" },\n    {\n      name: \"Top Accounts\",\n      link: \"https://www.instagram.com/directory/profiles/\",\n    },\n    { name: \"Hashtags\", link: \"https://www.instagram.com/directory/hashtags/\" },\n    { name: \"Locations\", link: \"https://www.instagram.com/explore/locations/\" },\n    { name: \"Beauty\", link: \"https://about.instagram.com/\" },\n    {\n      name: \"Dance & Performance\",\n      link: \"https://about.instagram.com/en_US/blog\",\n    },\n    { name: \"Fitness\", link: \"https://www.instagram.com/about/jobs/\" },\n    { name: \"Food & Drink\", link: \"https://help.instagram.com/\" },\n    { name: \"Home & Garden\", link: \"https://www.instagram.com/developer/\" },\n    { name: \"Music\", link: \"https://help.instagram.com/519522125107875\" },\n    { name: \"Visual Arts\", link: \"https://help.instagram.com/581066165581870\" },\n  ];\n\n  let b = [];\n\n  a.forEach((e) => {\n    const links = (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)(\n      \"a\",\n      {\n        style:\n          \"font-size:14px; color: grey; font-weight:500; text-decoration:none;\",\n        href: e.link,\n      },\n      e.name\n    );\n\n    const linksDiv = (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"div\", { class: \"link-div\" }, links);\n\n    b.push(linksDiv);\n  });\n\n  const main = (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"div\", { class: \"footer-div\" }, b);\n  return (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"footer\", { class: \"footer-main\" }, main);\n};\n\nconst footerpostSecondary = () => {\n  let a3 = [\n    {\n      name: \"@ 2021  Twitter,  Inc.\",\n      link: \"https://about.instagram.com/en-us/en_US/blog\",\n    },\n  ];\n\n  let b3 = [];\n\n  a3.forEach((e) => {\n    const links3 = (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)(\n      \"a\",\n      {\n        style:\n          \"font-size:14px; color: grey; font-weight:500; text-decoration:none;\",\n        href: e.link,\n      },\n      e.name\n    );\n\n    const linksDiv3 = (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)(\n      \"div\",\n      { class: \"link-post-secoondary\" },\n      links3\n    );\n\n    b3.push(linksDiv3);\n  });\n\n  const main3 = (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)(\n    \"div\",\n    {\n      class: \"footer-post-secondary\",\n      style:\n        \"display:flex; flex-wrap:wrap; justify-content:center; align-content:center; ; \",\n    },\n    b3\n  );\n\n  return (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)(\n    \"footer\",\n    {\n      class: \"footer-post-secondary\",\n      style: \"margin:auto; width:100%; height:2% ; \",\n    },\n    main3\n  );\n};\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => /* binding */ Home\n/* harmony export */ });\n/* harmony import */ var _Twitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Twitter */ \"./src/Twitter/index.js\");\n\n\nconst Home = () => {\n    return (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:'Homepage-main'},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"home-grid-container\"},\n    \n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"home-sidebar\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"home-sidebar-flex\"},\n\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"sidebar-items-container\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"fab fa-twitter hellow-twitter\"})),\n\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"sidebar-items-container\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"fa fa-home\"}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('a', null, \"Home\")),\n   \n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"sidebar-items-container\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"fa fa-hashtag\"}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('a', null, \"Explore\")),\n   \n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"sidebar-items-container\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"fa fa-bell\"}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('a', null, \"Notifications\")),\n   \n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"sidebar-items-container\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"fa fa-envelope\"}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('a', null, \"Messages\")),\n   \n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"sidebar-items-container\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"fa fa-user\"}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('a', null, \"Profile\")),\n   \n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"sidebar-items-container\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"fa fa-ellipsis-h\"}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('a', null, \"More\")),\n\n    \n    ),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"tweet-btn-container\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('a', {class:\"btn-primary-tweet\",\n    onclick:()=> {\n        let popupModel = document.querySelector('.tweet-model-container');\n        popupModel.style.borderRadius = \"8px\";\n        popupModel.style.backgroundColor = \"white\";\n        popupModel.style.boxShadow = \"0px 0px 4px 0px\";\n        popupModel.style.width = \"100%\";    \n        popupModel.style.height = \"200px\";\n        popupModel.style.marginTop = \"1em\";\n        let main = document.querySelector('.hidden-content');\n        main.style.display = \"flex\";\n       \n\n}\n}, \"Tweet\")),\n\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"sidebar-profile-container\", \n\n    onclick:()=> {\n        let x = document.querySelector('.popup-model-container');\n        x.style.display = \"block\";\n    }\n},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div',{class:\"pic-container\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('img', {src:\"https://static-cse.canva.com/image/63430/nip4.jpg\"})),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div',{class:\"name-container\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('h6', null, \"Arshadgulbasti\"),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('p', null, \"@arshadgulbasti\")),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div',{class:'dots'},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"fa fa-ellipsis-h\"}))),\n\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"popup-model-container\"},\n    \n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"popup-profile-container\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div',{class:\"pic-container\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('img', {src:\"https://static-cse.canva.com/image/63430/nip4.jpg\"})),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div',{class:\"name-container\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('h6', null, \"Arshadgulbasti\"),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('p', null, \"@arshadgulbasti\")),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div',{class:'dots'},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"fa fa-ellipsis-h\"}))),\n\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('a', null, \"Add an existing account\"),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('a', null, \"Log out @username\"),\n    \n    )\n    ),\n\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"home-centerbar\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div',{class:\"home-center-inner\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"home-text-container\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('h2', null, \"Home\"),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"fa fa-star\"})\n    ),\n\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"tweet-model-container\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"tweet-model-p1\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('img', {src:\"https://static-cse.canva.com/image/63430/nip4.jpg\"}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('input', {placeholder:\"What's happening?\",\n    onclick:() =>{\n        let hey = document.querySelector('.hidden-content');\n        hey.style.display = \"flex\";\n        // hey.style.borderBottom = \"solid 1px rgb(224, 223, 223)\";\n\n        let btn = document.querySelector('.btn-tweet')\n        btn.style.backgroundColor = \"rgba(29, 161, 242, 1)\";\n        btn.style.marginTop = \"2.5em\";\n    }}\n    )\n\n    ),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"hidden-content\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"fa fa-globe\"}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('p', null, \"Everyone can reply\")),\n\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"tweet-model-p2\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"icons-container\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"far fa-images\"}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"far fa-square\"}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"far fa-chart-bar\"}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"far fa-smile\"}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"far fa-calendar-check\"}),\n    ),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('a', {class:\"btn-tweet\"}, \"Tweet\")\n    )\n    )\n    )\n    ),\n\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"home-trendsbar\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"search-bar\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('input', {placeholder:\"Search Twitter\",\n    onclick:()=>{\n        let eee = document.querySelector('.hidden-para');\n        eee.style.display = \"block\";\n    }\n}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"hidden-para\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('p', null, \"Try searching for people, topics, or keywords\")) )),\n\n    \n    ))\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/components/home.js?");

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => /* binding */ Layout\n/* harmony export */ });\n/* harmony import */ var _Twitter_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Twitter/index */ \"./src/Twitter/index.js\");\n/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start */ \"./src/components/start.js\");\n/* harmony import */ var _sign_up__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up */ \"./src/components/sign-up.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ \"./src/components/login.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ \"./src/components/home.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/style.css */ \"./src/styles/style.css\");\n\n\n\n\n\n\n\n\nconst Layout = () => {\n  if (location.pathname === \"/\") {\n    return (0,_start__WEBPACK_IMPORTED_MODULE_1__.Start)();\n  } else if (location.pathname === \"/sign-up\") {\n    return (0,_sign_up__WEBPACK_IMPORTED_MODULE_2__.Signup)();\n  } else if (location.pathname === \"/login\") {\n    return (0,_login__WEBPACK_IMPORTED_MODULE_3__.Login)();\n  }\n  else if (location.pathname === \"/home\") {\n    return (0,_home__WEBPACK_IMPORTED_MODULE_4__.Home)();\n  }\n};\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/layout.js?");

/***/ }),

/***/ "./src/components/login.js":
/*!*********************************!*\
  !*** ./src/components/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Login\": () => /* binding */ Login\n/* harmony export */ });\n/* harmony import */ var _Twitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Twitter */ \"./src/Twitter/index.js\");\n\n\nconst Login = () => {\n    return (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"login-page-main-container\"},\n\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"Model-main-container\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"Model-container-inner\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"fab fa-twitter\"}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('a', {class:\"btn btn-primary btn-next\"}, \"next\"),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('h5', {class:\"create\"}, \"Create your account\"),\n\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('input', { class:\"signup-input name-input\", placeholder:\"Name \"}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('input', { class:\"signup-input phone-input\",placeholder:\"Phone\"}),\n\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('a', {class:\"use-email\"}, \"Use email instead\"),\n\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('h6', {class:\"DOB\"}, \"Date of birth\"),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('p', null, \"This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.\"),\n\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"grid-items\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('input', {placeholder:\"Month\"}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('input', {placeholder:\"Day\"}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('input', {placeholder:\"Year\"}),\n    )\n    \n\n    )),\n\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('form', {class:\"login-form\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"fab fa-twitter\"}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('h2', null, \"Log in to twitter\"),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('input', {placeholder:\"Phone, email or username\"}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('input', {placeholder:\"Password\"}),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('a', {class:\"btn btn-primary\", href:\"http://localhost:9090/home\"}, \"Log in\"),\n    \n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"flex-center\"},\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('a', {class:\"forgot\", href:\"https://twitter.com/account/begin_password_reset\"}, \"Forgot password?\"),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('p', {class:\"dot\"}, \".\"),\n    (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('a', {class:\"sign-up-twitter\",\n\n    onclick:()=>{\n        let a = document.querySelector(\".Model-main-container\")\n\n        a.style.display = \"block\";\n        a.style.height = \"80vh\";\n        a.style.marginTop = \"10px\"\n\n        let b = document.querySelector(\".login-form\")\n        b.style.display = \"none\"\n    }\n\n\n}, \"Sign up with Twitter\"),\n    ))\n    )\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/components/login.js?");

/***/ }),

/***/ "./src/components/sign-up.js":
/*!***********************************!*\
  !*** ./src/components/sign-up.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Signup\": () => /* binding */ Signup\n/* harmony export */ });\n/* harmony import */ var _Twitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Twitter */ \"./src/Twitter/index.js\");\n\n\nconst Signup = () => {\n    return (0,_Twitter__WEBPACK_IMPORTED_MODULE_0__.newElement)('h1', null, \"This is Signup page of twitter\")\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/components/sign-up.js?");

/***/ }),

/***/ "./src/components/start.js":
/*!*********************************!*\
  !*** ./src/components/start.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Start\": () => /* binding */ Start\n/* harmony export */ });\n/* harmony import */ var _Twitter_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Twitter/index */ \"./src/Twitter/index.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/components/footer.js\");\n\n\n\n\n\nconst Start = () => {\n\n    return (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('h1', {class:\"home-page-main-container\"},\n\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"Model-main-container\"},\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"Model-container-inner\"},\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"fab fa-twitter\"}),\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('a', {class:\"btn btn-primary btn-next\"}, \"next\"),\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('h5', {class:\"create\"}, \"Create your account\"),\n\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('input', { class:\"signup-input name-input\", placeholder:\"Name \"}),\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('input', { class:\"signup-input phone-input\",placeholder:\"Phone\"}),\n\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('a', {class:\"use-email\"}, \"Use email instead\"),\n\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('h6', {class:\"DOB\"}, \"Date of birth\"),\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('p', null, \"This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.\"),\n\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"grid-items\"},\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('input', {placeholder:\"Month\"}),\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('input', {placeholder:\"Day\"}),\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('input', {placeholder:\"Year\"}),\n    )\n    \n\n    )),\n\n\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"home-page-main-flex-container\"},\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"left-main-container\"},\n    \n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"row-flex-container\"},\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"fa fa-search\"}),\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('h6', null, \"Follow your interests.\")\n    ),\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"row-flex-container different\"},\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"fa fa-users\"}),\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('h6', null, \"Hear what people are talking about.\")\n    ),\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"row-flex-container\"},\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"far fa-comment\"}),\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('h6', null, \"Join the conversation.\")\n    )\n    ),\n\n\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"right-main-container\"},\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', {class:\"right-secondary-container\"},\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('i', {class:\"fab fa-twitter\"}),\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('h3', null, \"See what's happening in the world right now\"),\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('h6', {class:\"join-twitter\"}, \"Join Twitter today.\"),\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('a', {class:\"btn btn-primary\",\n\n    onclick:()=>{\n        let a = document.querySelector(\".Model-main-container\")\n\n        a.style.display = \"block\";\n\n\n    }\n\n}, \"Sign up\"),\n\n    (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('a', {class:\"btn btn-secondary\", href:\"http://localhost:9090/login\"}, \"Log in\"))\n    )\n    ),(0,_footer__WEBPACK_IMPORTED_MODULE_1__.footer)(), (0,_footer__WEBPACK_IMPORTED_MODULE_1__.footerpostSecondary)(),\n    );\n    \n}\n\n//# sourceURL=webpack://my-webpack-project/./src/components/start.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Twitter_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Twitter/index */ \"./src/Twitter/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout */ \"./src/components/layout.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\n\n\n\nconst App = () => {\n    const main = (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', null);\n    const twitterLayout = (0,_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', null, (0,_components_layout__WEBPACK_IMPORTED_MODULE_1__.Layout)()) \n    main.appendChild(twitterLayout);\n    return main;\n\n}\n_Twitter_index__WEBPACK_IMPORTED_MODULE_0__.reactDOM.render(App(), document.getElementById('root'));\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;