module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "maticjs"
var external_maticjs_ = __webpack_require__("Z9oj");
var external_maticjs_default = /*#__PURE__*/__webpack_require__.n(external_maticjs_);

// CONCATENATED MODULE: ./utils/store.js

const from = "0x87b917F40f7a031e13577200801b5f2f0D3E1b91"; // from address

const token = "0xc82c13004c06E4c627cF2518612A55CE7a3Db699"; // test token address

let matic = null; // Create sdk instance

function initMatic() {
  if (!matic) {
    matic = new external_maticjs_default.a({
      maticProvider: "https://testnet2.matic.network/",
      parentProvider: "https://ropsten.infura.io/v3/4d3a490d16f640fc9c9e40e0b299b79e",
      rootChainAddress: "0x60e2b19b9a87a3f37827f2c8c8306be718a5f9b4",
      maticWethAddress: "0x3dDc41e43cf77cdC10CE7a57421994a12cc4163c",
      syncerUrl: "https://matic-syncer2.api.matic.network/api/v1",
      watcherUrl: "https://ropsten-watcher2.api.matic.network/api/v1",
      withdrawManagerAddress: "0x4ef2b60cdd4611fa0bc815792acc14de4c158d22"
    }); // your private key, prefixed with '0x'

    matic.wallet = "0x6D55D9CEF711DC010CF46086CC5FD337026C5147FE7B13E1EE743DFC59505BF7";
  }
}

const Store = () => {
  initMatic();
  return {
    matic,
    from,
    token
  };
};

/* harmony default export */ var store = (new Store());
// CONCATENATED MODULE: ./components/transfer.js



const recepient = "0x7ed7f36694153ba6eff6ca6726b60f6e2bb17fcf"; // test recepient address

const amount = "1";

function Transfer() {
  const [hash, setHash] = Object(external_react_["useState"])(null);

  const transferTokens = () => {
    // Send Tokens
    store.matic.transferTokens(store.token, recepient, amount, {
      from: store.from,
      onTransactionHash: hash => {
        // action on Transaction success
        // eslint-disable-next-line
        setHash(hash);
      }
    });
  };

  return external_react_default.a.createElement("div", {
    className: "col"
  }, external_react_default.a.createElement("button", {
    onClick: transferTokens,
    type: "button"
  }, "Transfer"), hash ? external_react_default.a.createElement("div", null, "Your latest transaction:", " ", external_react_default.a.createElement("a", {
    href: `https://explorer.testnet2.matic.network/tx/${hash}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, hash)) : null);
}

/* harmony default export */ var transfer = (Transfer);
// CONCATENATED MODULE: ./components/deposit.js



const deposit_amount = "1";

function Deposit() {
  const [approvedTxHash, setApprovedTxHash] = Object(external_react_["useState"])(null);
  const [depositTxHash, setDepositTxHash] = Object(external_react_["useState"])(null);

  const depositTokens = () => {
    // Approve token
    store.matic.approveERC20TokensForDeposit(store.token, deposit_amount, {
      from: store.from,
      onTransactionHash: approvedTxHash => {
        setApprovedTxHash(approvedTxHash);
      }
    }).then(() => {
      // Deposit tokens
      store.matic.depositERC20Tokens(store.token, store.from, deposit_amount, {
        from: store.from,
        onTransactionHash: depositTxHash => {
          setDepositTxHash(depositTxHash);
        }
      });
    });
  };

  return external_react_default.a.createElement("div", {
    className: "col"
  }, external_react_default.a.createElement("button", {
    onClick: depositTokens,
    type: "button"
  }, "Deposit"), approvedTxHash ? external_react_default.a.createElement("div", null, "Approved transaction:", " ", external_react_default.a.createElement("a", {
    href: `https://ropsten.etherscan.io/tx/${approvedTxHash}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, approvedTxHash)) : null, depositTxHash ? external_react_default.a.createElement("div", null, "Deposit success transaction:", " ", external_react_default.a.createElement("a", {
    href: `https://ropsten.etherscan.io/tx/${depositTxHash}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, depositTxHash)) : null);
}

/* harmony default export */ var deposit = (Deposit);
// CONCATENATED MODULE: ./pages/index.js



/* eslint-disable no-unused-vars */



function Home() {
  return external_react_default.a.createElement("div", {
    className: "jsx-329184512" + " " + "app"
  }, external_react_default.a.createElement("div", {
    className: "jsx-329184512"
  }, "Welcome to Matic.js!"), external_react_default.a.createElement("div", {
    className: "jsx-329184512" + " " + "parent"
  }, external_react_default.a.createElement(transfer, null), external_react_default.a.createElement(deposit, null)), external_react_default.a.createElement(style_default.a, {
    id: "2493882169"
  }, [".app.jsx-329184512{font-family:Helvetica,Arial,sans-serif;font-size:15px;margin:0;text-align:center;}", ".parent.jsx-329184512{-webkit-transition:100ms ease-in background;transition:100ms ease-in background;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]), external_react_default.a.createElement(style_default.a, {
    id: "3274982192"
  }, ["button{padding:15px 24px;font-size:16px;line-height:19px;font-weight:700;border:none;cursor:pointer;border-radius:5px;background-color:#2b6def;color:#fff;}", "button:hover{background-color:#2460da;}", ".col{-webkit-flex:1;-ms-flex:1;flex:1;padding:16px;}"]));
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "Z9oj":
/***/ (function(module, exports) {

module.exports = require("maticjs");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });