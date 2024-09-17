/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "./static/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./markup/static/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./markup/components/members/members.js":
/*!**********************************************!*\
  !*** ./markup/components/members/members.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var members = document.querySelector('#members');

  if (!members) {
    return;
  }

  var btnPrev = members.querySelector('#btn-prev');
  var btnNext = members.querySelector('#btn-next');
  var num = members.querySelector('#nums span:first-of-type');
  var sliderItems = members.querySelectorAll('#slider-members .members__item');
  var firstElement = 0;
  var lastElement = 2;
  var steps = 3;
  var lastLoopElement = 2;
  var firstLoopElement = 3;
  var interval = null;

  if (window.innerWidth <= 1024) {
    lastLoopElement = 1;
    firstLoopElement = 2;
    lastElement = 1;
    steps = 2;
  }

  if (window.innerWidth <= 768) {
    lastLoopElement = 0;
    firstLoopElement = 1;
    lastElement = 0;
    steps = 1;
  }

  var hideSlides = function hideSlides() {
    sliderItems.forEach(function (slide) {
      slide.classList.remove('show');
    });
  };

  var switchSlider = function switchSlider() {
    interval = setInterval(function () {
      btnNext.click();
    }, 4000);
  };

  var showSlides = function showSlides() {
    sliderItems.forEach(function (slide, i) {
      if (i >= firstElement && i <= lastElement) {
        slide.classList.add('show');
      }
    });
  };

  var setNumerSlides = function setNumerSlides() {
    num.textContent = lastElement + 1;
  };

  var setupSlider = function setupSlider() {
    hideSlides();
    showSlides();
    setNumerSlides();
    clearInterval(interval);
    switchSlider();
  };

  btnNext.addEventListener('click', function () {
    if (lastElement >= sliderItems.length - 1) {
      firstElement = 0;
      lastElement = lastLoopElement;
    } else {
      firstElement += steps;
      lastElement += steps;
    }

    setupSlider();
  });
  btnPrev.addEventListener('click', function () {
    if (firstElement <= 0) {
      firstElement = sliderItems.length - firstLoopElement;
      lastElement = sliderItems.length - 1;
    } else {
      firstElement -= steps;
      lastElement -= steps;
    }

    setupSlider();
  });
  switchSlider();
  setNumerSlides();
  showSlides();
})();

/***/ }),

/***/ "./markup/components/price/price.js":
/*!******************************************!*\
  !*** ./markup/components/price/price.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var picture = document.querySelector('.price__pic');

  if (!picture) {
    return;
  }

  var setClass = function setClass(entries) {
    if (entries[0].isIntersecting) {
      picture.classList.add('anim');
    }
  };

  var observer = new IntersectionObserver(setClass, {
    threshold: 1
  });
  observer.observe(picture);
})();

/***/ }),

/***/ "./markup/components/stages/stages.js":
/*!********************************************!*\
  !*** ./markup/components/stages/stages.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var slider = document.querySelector('#slider-stages');

  if (window.innerWidth <= 768 && !slider) {
    return;
  }

  var btnPrev = slider.querySelector('#btn-prev-stages');
  var btnNext = slider.querySelector('#btn-next-stages');
  var slides = slider.querySelectorAll('.stages__item');
  var dots = slider.querySelectorAll('#dots span');
  var firstElement = 0;
  var steps = 1;

  var hideSlides = function hideSlides() {
    slides.forEach(function (slide) {
      slide.classList.remove('show');
    });
    dots.forEach(function (slide) {
      slide.classList.remove('active');
    });
  };

  var showSlides = function showSlides() {
    slides.forEach(function (slide, i) {
      if (i === firstElement) {
        slide.classList.add('show');
        dots[i].classList.add('active');
      }

      if (firstElement >= slides.length - 1) {
        btnNext.setAttribute('disabled', true);
      } else {
        btnNext.removeAttribute('disabled');
      }

      if (firstElement <= 0) {
        btnPrev.setAttribute('disabled', true);
      } else {
        btnPrev.removeAttribute('disabled');
      }
    });
  };

  btnNext.addEventListener('click', function () {
    firstElement += steps;
    hideSlides();
    showSlides();
  });
  btnPrev.addEventListener('click', function () {
    firstElement -= steps;
    hideSlides();
    showSlides();
  });
  showSlides();
})();

/***/ }),

/***/ "./markup/static/js/main.js":
/*!**********************************!*\
  !*** ./markup/static/js/main.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_members_members_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/members/members.js */ "./markup/components/members/members.js");
/* harmony import */ var components_members_members_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(components_members_members_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_price_price_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/price/price.js */ "./markup/components/price/price.js");
/* harmony import */ var components_price_price_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(components_price_price_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_stages_stages_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/stages/stages.js */ "./markup/components/stages/stages.js");
/* harmony import */ var components_stages_stages_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(components_stages_stages_js__WEBPACK_IMPORTED_MODULE_2__);






/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2NvbXBvbmVudHMvbWVtYmVycy9tZW1iZXJzLmpzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL3ByaWNlL3ByaWNlLmpzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL3N0YWdlcy9zdGFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbIm1lbWJlcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidG5QcmV2IiwiYnRuTmV4dCIsIm51bSIsInNsaWRlckl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZpcnN0RWxlbWVudCIsImxhc3RFbGVtZW50Iiwic3RlcHMiLCJsYXN0TG9vcEVsZW1lbnQiLCJmaXJzdExvb3BFbGVtZW50IiwiaW50ZXJ2YWwiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGlkZVNsaWRlcyIsImZvckVhY2giLCJzbGlkZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInN3aXRjaFNsaWRlciIsInNldEludGVydmFsIiwiY2xpY2siLCJzaG93U2xpZGVzIiwiaSIsImFkZCIsInNldE51bWVyU2xpZGVzIiwidGV4dENvbnRlbnQiLCJzZXR1cFNsaWRlciIsImNsZWFySW50ZXJ2YWwiLCJhZGRFdmVudExpc3RlbmVyIiwibGVuZ3RoIiwicGljdHVyZSIsInNldENsYXNzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJzbGlkZXIiLCJzbGlkZXMiLCJkb3RzIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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c291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL3N0YXRpYy9qcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9tYXJrdXAvc3RhdGljL2pzL21haW4uanNcIik7XG4iLCIoKCkgPT4ge1xyXG4gICAgY29uc3QgbWVtYmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW1iZXJzJyk7XHJcblxyXG4gICAgaWYoIW1lbWJlcnMpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnRuUHJldiA9IG1lbWJlcnMucXVlcnlTZWxlY3RvcignI2J0bi1wcmV2Jyk7XHJcbiAgICBjb25zdCBidG5OZXh0ID0gbWVtYmVycy5xdWVyeVNlbGVjdG9yKCcjYnRuLW5leHQnKTtcclxuICAgIGNvbnN0IG51bSA9IG1lbWJlcnMucXVlcnlTZWxlY3RvcignI251bXMgc3BhbjpmaXJzdC1vZi10eXBlJyk7XHJcbiAgICBjb25zdCBzbGlkZXJJdGVtcyA9IG1lbWJlcnMucXVlcnlTZWxlY3RvckFsbCgnI3NsaWRlci1tZW1iZXJzIC5tZW1iZXJzX19pdGVtJyk7XHJcblxyXG4gICAgbGV0IGZpcnN0RWxlbWVudCA9IDA7XHJcbiAgICBsZXQgbGFzdEVsZW1lbnQgPSAyO1xyXG4gICAgbGV0IHN0ZXBzID0gMztcclxuICAgIGxldCBsYXN0TG9vcEVsZW1lbnQgPSAyO1xyXG4gICAgbGV0IGZpcnN0TG9vcEVsZW1lbnQgPSAzO1xyXG4gICAgbGV0IGludGVydmFsID0gbnVsbDtcclxuXHJcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDI0KSB7XHJcbiAgICAgICAgbGFzdExvb3BFbGVtZW50ID0gMTtcclxuICAgICAgICBmaXJzdExvb3BFbGVtZW50ID0gMjtcclxuICAgICAgICBsYXN0RWxlbWVudCA9IDE7XHJcbiAgICAgICAgc3RlcHMgPSAyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2OCkge1xyXG4gICAgICAgIGxhc3RMb29wRWxlbWVudCA9IDA7XHJcbiAgICAgICAgZmlyc3RMb29wRWxlbWVudCA9IDE7XHJcbiAgICAgICAgbGFzdEVsZW1lbnQgPSAwO1xyXG4gICAgICAgIHN0ZXBzID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoaWRlU2xpZGVzID0gKCkgPT4ge1xyXG4gICAgICAgIHNsaWRlckl0ZW1zLmZvckVhY2goKHNsaWRlKSA9PiB7XHJcbiAgICAgICAgICAgIHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN3aXRjaFNsaWRlciA9ICgpID0+IHtcclxuICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgYnRuTmV4dC5jbGljaygpO1xyXG4gICAgICAgIH0sIDQwMDApO1xyXG4gICAgfSBcclxuXHJcbiAgICBjb25zdCBzaG93U2xpZGVzID0gKCkgPT4ge1xyXG4gICAgICAgIHNsaWRlckl0ZW1zLmZvckVhY2goKHNsaWRlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGkgPj0gZmlyc3RFbGVtZW50ICYmIGkgPD0gbGFzdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0TnVtZXJTbGlkZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgbnVtLnRleHRDb250ZW50ID0gbGFzdEVsZW1lbnQgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldHVwU2xpZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGhpZGVTbGlkZXMoKTtcclxuICAgICAgICBzaG93U2xpZGVzKCk7XHJcbiAgICAgICAgc2V0TnVtZXJTbGlkZXMoKTtcclxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICBzd2l0Y2hTbGlkZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBidG5OZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmKGxhc3RFbGVtZW50ID49IHNsaWRlckl0ZW1zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgZmlyc3RFbGVtZW50ID0gMDtcclxuICAgICAgICAgICAgbGFzdEVsZW1lbnQgPSBsYXN0TG9vcEVsZW1lbnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmlyc3RFbGVtZW50ICs9IHN0ZXBzO1xyXG4gICAgICAgICAgICBsYXN0RWxlbWVudCArPSBzdGVwcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldHVwU2xpZGVyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBidG5QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmKGZpcnN0RWxlbWVudCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGZpcnN0RWxlbWVudCA9IHNsaWRlckl0ZW1zLmxlbmd0aCAtIGZpcnN0TG9vcEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGxhc3RFbGVtZW50ID0gc2xpZGVySXRlbXMubGVuZ3RoIC0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaXJzdEVsZW1lbnQgLT0gc3RlcHM7XHJcbiAgICAgICAgICAgIGxhc3RFbGVtZW50IC09IHN0ZXBzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0dXBTbGlkZXIoKTtcclxuICAgIH0pXHJcblxyXG4gICAgc3dpdGNoU2xpZGVyKCk7XHJcbiAgICBzZXROdW1lclNsaWRlcygpO1xyXG4gICAgc2hvd1NsaWRlcygpO1xyXG59KSgpOyIsIigoKSA9PiB7XHJcbiAgICBjb25zdCBwaWN0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNlX19waWMnKTtcclxuXHJcbiAgICBpZighcGljdHVyZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRDbGFzcyA9IChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgaWYoZW50cmllc1swXS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICBwaWN0dXJlLmNsYXNzTGlzdC5hZGQoJ2FuaW0nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihzZXRDbGFzcywge3RocmVzaG9sZDogMX0pO1xyXG5cclxuICAgIG9ic2VydmVyLm9ic2VydmUocGljdHVyZSlcclxufSkoKSIsIigoKSA9PiB7XHJcbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xpZGVyLXN0YWdlcycpO1xyXG5cclxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2OCAmJiAhc2xpZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ0blByZXYgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignI2J0bi1wcmV2LXN0YWdlcycpO1xyXG4gICAgY29uc3QgYnRuTmV4dCA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcjYnRuLW5leHQtc3RhZ2VzJyk7XHJcbiAgICBjb25zdCBzbGlkZXMgPSBzbGlkZXIucXVlcnlTZWxlY3RvckFsbCgnLnN0YWdlc19faXRlbScpO1xyXG4gICAgY29uc3QgZG90cyA9IHNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCcjZG90cyBzcGFuJyk7XHJcblxyXG4gICAgbGV0IGZpcnN0RWxlbWVudCA9IDA7XHJcbiAgICBsZXQgc3RlcHMgPSAxO1xyXG5cclxuICAgIGNvbnN0IGhpZGVTbGlkZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XHJcbiAgICAgICAgICAgIHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBkb3RzLmZvckVhY2goKHNsaWRlKSA9PiB7XHJcbiAgICAgICAgICAgIHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd1NsaWRlcyA9ICgpID0+IHtcclxuICAgICAgICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGkpID0+IHtcclxuICAgICAgICAgICAgaWYoaSA9PT0gZmlyc3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICBkb3RzW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihmaXJzdEVsZW1lbnQgPj0gc2xpZGVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIGJ0bk5leHQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnRuTmV4dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGZpcnN0RWxlbWVudCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBidG5QcmV2LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ0blByZXYucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgYnRuTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBmaXJzdEVsZW1lbnQgKz0gc3RlcHM7XHJcblxyXG4gICAgICAgIGhpZGVTbGlkZXMoKTtcclxuICAgICAgICBzaG93U2xpZGVzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBidG5QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGZpcnN0RWxlbWVudCAtPSBzdGVwcztcclxuXHJcbiAgICAgICAgaGlkZVNsaWRlcygpO1xyXG4gICAgICAgIHNob3dTbGlkZXMoKTtcclxuICAgIH0pXHJcblxyXG4gICAgc2hvd1NsaWRlcygpO1xyXG59KSgpOyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdjb21wb25lbnRzL21lbWJlcnMvbWVtYmVycy5qcyc7XG5pbXBvcnQgJ2NvbXBvbmVudHMvcHJpY2UvcHJpY2UuanMnO1xuaW1wb3J0ICdjb21wb25lbnRzL3N0YWdlcy9zdGFnZXMuanMnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==