/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/sass/js/index.js":
/*!*************************************!*\
  !*** ./src/assets/sass/js/index.js ***!
  \*************************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n  let out = document.querySelector('.root');\n  let template = '';\n  function getpost(id) {\n    return new Promise((resolve, reject) => {\n      fetch('http://api.weatherapi.com/v1/forecast.json?key=6fd361ff5b1d426d843174843231307&q=Poltava&days=7').then(respons => respons.json()).then(data => resolve(data)).catch(err => reject(err));\n    });\n  }\n  getpost(1).then(data => {\n    console.log(data);\n    let daysOfWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'];\n    let months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вереснь', 'Жоветнь', 'Листопад', 'Грудень'];\n    function getDayOfWeeks(dateString) {\n      const daysOfWeekShort = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];\n      const date = new Date(dateString);\n      const dayIndex = date.getDay();\n      return daysOfWeekShort[dayIndex];\n    }\n    let arr = [];\n    const currentEpochTime = Math.floor(Date.now() / 1000);\n    const test = data.forecast.forecastday;\n    for (let y in test) {\n      const tst = test[y].hour;\n      for (let key of tst) {\n        if (currentEpochTime <= key.time_epoch) {\n          arr.push(key);\n        }\n      }\n    }\n    const currentdaytime = [];\n    const times = [];\n    for (let i = 0; i <= 5; i++) {\n      if (i < arr.length) {\n        let date = new Date(arr[i].time_epoch * 1000);\n        let time = date.getHours();\n        currentdaytime.push(arr[i]);\n        times.push(time);\n      } else {\n        break;\n      }\n    }\n    const weatherimgday = {\n      '1000': './img/day/clear-day.svg',\n      '1003': './img/day/partly-cloudy-day.svg',\n      '1006': './img/day/cloudy.svg',\n      '1009': './img/day/overcast.svg',\n      '1030': './img/day/smoke.svg',\n      '1063': './img/day/partly-cloudy-day-rain.svg',\n      '1066': './img/day/partly-cloudy-day-snow.svg',\n      '1069': './img/day/partly-cloudy-day-sleet.svg',\n      '1072': './img/day/partly-cloudy-day-drizzle.svg',\n      '1087': './img/day/thunderstorms-day.svg',\n      '1240': './img/day/partly-cloudy-day-rain.svg',\n      '1192': './img/day/partly-cloudy-day-drizzle.svg',\n      '1183': './img/day/drizzle.svg'\n    };\n    const weatherimgnight = {\n      '1000': './img/night/clear-night.svg',\n      '1003': './img/night/partly-cloudy-night.svg',\n      '1006': './img/night/cloudy.svg',\n      '1009': './img/night/overcast.svg',\n      '1030': './img/night/smoke.svg',\n      '1063': './img/night/partly-cloudy-day-rain.svg',\n      '1066': './img/night/partly-cloudy-day-snow.svg',\n      '1069': './img/night/partly-cloudy-day-sleet.svg',\n      '1072': './img/night/partly-cloudy-day-drizzle.svg'\n    };\n    const icontempgradus = {\n      '1': './img/tempanim/thermometer-sun.svg',\n      '2': './img/tempanim/thermometer-moon.svg'\n    };\n    const moonicon = {\n      'Waxing Gibbous': './img/MoonPhases/moon-waxing-gibbous.svg',\n      '2': './img/MoonPhases/moon-waxing-crescent.svg',\n      '3': './img/MoonPhases/moon-waning-gibbous.svg',\n      '4': './img/MoonPhases/moon-waning-crescent.svg',\n      '5': './img/MoonPhases/moon-new.svg',\n      '6': './img/MoonPhases/moon-last-quarter.svg',\n      'Full Moon': './img/MoonPhases/moon-full.svg'\n    };\n    let moonicons = data.forecast.forecastday[0].astro.moon_phase;\n    let cloud = data.current.cloud;\n    let newmoon = moonicon[moonicons];\n    let codeOldimg = data.current.condition.code;\n    let day = weatherimgday[codeOldimg];\n    let night = weatherimgnight[codeOldimg];\n    let sun = icontempgradus[1];\n    let moon = icontempgradus[2];\n    let datehour = new Date();\n    const hours = datehour.getHours();\n    if (hours < 21 || hours < 6) {\n      hoursImgday = day;\n      icontemp = sun;\n    } else {\n      hoursImgday = night;\n      icontemp = moon;\n    }\n    for (let key in data) {\n      city = data[key].name;\n      region = data[key].region;\n      contry = data[key].country;\n      break;\n    }\n    const forecastData = data.forecast.forecastday.map(forecast => ({\n      curdays: forecast.date,\n      icon: forecast.day.condition.icon,\n      maxnnextemp: forecast.day.maxtemp_c.toFixed(),\n      minnexttemp: forecast.day.mintemp_c.toFixed(),\n      moonrise: forecast.astro.moonrise,\n      moonset: forecast.astro.moonset,\n      sunrise: forecast.astro.sunrise,\n      sunset: forecast.astro.sunset,\n      moon: forecast.astro.moon_phase,\n      avghumidity: forecast.day.avghumidity,\n      uv: forecast.day.uv\n    }));\n    let n = getDayOfWeeks(forecastData[1].curdays);\n    let y = getDayOfWeeks(forecastData[2].curdays);\n    const currentWeatherData = {\n      icon: data.current.condition.icon,\n      text: data.current.condition.text,\n      temp: data.current.temp_c.toFixed(),\n      filslike: data.current.feelslike_c.toFixed()\n    };\n    let date = new Date();\n    let dayIndex = date.getDay();\n    let monthIndex = date.getMonth();\n    let dayOfWeek = daysOfWeek[dayIndex]; //полные название дней\n    let month = months[monthIndex]; //название месяца\n    let currentDay = date.getDate(); //текущий день   \n    template += `\n                        <header class=\"header\">\n                            <div class=\"hero\">\n                                <div class=\"hero__container\">\n                                    <div class=\"hero__currentdate h3\">${dayOfWeek}, ${month}, ${currentDay}</div>\n                                    <div class=\"hero__localtion h2\">${city}, ${region} ${contry}</div>\n                                </div>\n                            </div>\n                        </header>\n                        <div class=\"mySwiper swiper\">\n                            <div class=\"swiper-wrapper\">\n                                <div class=\"swiper-slide\">\n                                    <main class=\"home\">\n                                        <div class=\"current\">\n                                            <div class=\"current__info\">\n                                                <img  class=\"current__img\" src=\"${hoursImgday}\">\n                                                <span class=\"current__description h3 \">${currentWeatherData.text}</span>\n                                                <div class=\"current__temp\">\n                                                    <div class=\"current__today\">${currentWeatherData.temp}</div>\n                                                    <img class=\"current__todayicon\" src=${icontemp}>\n                                                </div>\n                                                \n                                            </div>\n                                        </div>\n                                    </main>\n                                    <footer class=\"footer\">\n                                        <div class=\"weather\">\n                                            <nav class=\"weather__nav\">\n                                                <ul class=\"weather__container\">\n                                                    <li class=\"weather__item\">\n                                                        <img class=\"weather__item-img\" src=\"${forecastData[1].icon}\">\n                                                        <div class=\"weather__item-box\">\n                                                                <span class=\"weather__day h3\">${n}</span>\n                                                                <span class=\"weather__max h4\">${forecastData[1].maxnnextemp}</span>\n                                                                <img class=\"weather__miniiconsun\" src=\"${sun}\">\n                                                                <span class=\"weather__min h3\">${forecastData[1].minnexttemp}</span>\n                                                                <img class=\"weather__miniiconmoon\" src=\"${moon}\">\n                                                        </div>\n                                                    </li>\n                                                    <li class=\"weather__item\">\n                                                        <img class=\"weather__item-img\" src=\"${forecastData[2].icon}\">\n                                                        <div class=\"weather__item-box\">\n                                                            <span class=\"weather__day h3\">${y}</span>\n                                                            <span class=\"weather__max h4\">${forecastData[2].maxnnextemp}</span>\n                                                            <img class=\"weather__miniiconsun\" src=\"${sun}\">\n                                                            <span class=\"weather__min h3\">${forecastData[2].minnexttemp}</span>\n                                                            <img class=\"weather__miniiconmoon\" src=\"${moon}\">\n                                                        </div>\n                                                    </li>\n                                                </ul>\n                                            </nav>\n                                        </div>\n                                    </footer>\n                                </div>\n                                <div class=\"swiper-slide\">\n                                        <div class=\"info\">\n                                            <ul class=\"info__container\">\n                                                <li class=\"info__setrise\">\n                                                    <span class=\"info__text h3\">Moonrise</span>\n                                                    <span class=\"info__meaning h3\">${forecastData[0].moonrise}</span>\n                                                    <img  class=\"info__anim\" src=\"./img/riseset/night/moonrise.svg\">\n                                                </li>\n                                                <li class=\"info__setrise\">\n                                                    <span class=\"info__text h3\">Moonset</span>\n                                                    <span class=\"info__meaning h3\">${forecastData[0].moonset}</span>\n                                                    <img class=\"info__anim\" src=\"./img/riseset/night/moonset.svg\">\n                                                </li>\n                                                <li class=\"info__setrise\">\n                                                    <span class=\"info__text h3\">Sunrise</span>\n                                                    <span class=\"info__meaning h3\">${forecastData[0].sunrise}</span>\n                                                    <img class=\"info__anim\" src=\"./img/riseset/day/sunrise.svg\">\n                                                </li>\n                                                <li class=\"info__setrise\">\n                                                    <span class=\"info__text h3\">Sunset</span>\n                                                    <span class=\"info__meaning h3\">${forecastData[0].sunset}</span>\n                                                    <img class=\"info__anim\" src=\"./img/riseset/day/sunset.svg\">\n                                                </li>\n                                                <li class=\"info__setrise\">\n                                                    <div class=\"info__text h3\">Avg</div>\n                                                    <div class=\"info__meaning h3\">${forecastData[0].avghumidity}%</div>\n                                                    <img class=\"info__anim\" src=\"./img/tempanim/humidity.svg\">\n                                                </li>\n                                                <li class=\"info__setrise\">\n                                                    <div class=\"info__text h3\">Uv</div>\n                                                    <div class=\"info__meaning h3\">${forecastData[0].uv}</div>\n                                                </li>\n                                                <li class=\"info__setrise\">\n                                                    <div class=\"info__text h3\">Cloud</div>\n                                                    <div class=\"info__meaning h3\">${cloud}</div>\n                                                    <img class=\"info__anim\" src=\"./img/day/cloudy.svg\">\n                                                </li>\n                                            </ul>\n                                            <ul class=\"info__next\">\n                                                <li class=\"info__next-item\">\n                                                    <div class=\"info__box\">\n                                                        <img src='${currentdaytime[0].condition.icon}'>\n                                                        <div class=\"info__time h4\">Now</div>\n                                                        <div class=\"h3\">${currentdaytime[0].temp_c}</div>\n                                                    </div>\n                                                </li>\n                                                <li class=\"info__next-item\">\n                                                    <div class=\"info__box\">\n                                                        <img src='${currentdaytime[1].condition.icon}'>\n                                                        <div class=\"info__time h4\">${times[1]}:00</div>\n                                                        <div class=\"h3\">${currentdaytime[1].temp_c}</div>\n                                                    </div>\n                                                </li>\n                                                <li class=\"info__next-item\">\n                                                    <div class=\"info__box\">\n                                                        <img src='${currentdaytime[2].condition.icon}'>\n                                                        <div class=\"info__time h4\">${times[2]}:00</div>\n                                                        <div class=\"h3\">${currentdaytime[2].temp_c}</div>\n                                                    </div>\n                                                </li>\n                                                <li class=\"info__next-item\">\n                                                    <div class=\"info__box\">\n                                                        <img src='${currentdaytime[3].condition.icon}'>\n                                                        <div class=\"info__time h4\">${times[3]}:00</div>\n                                                        <div class=\"h3\">${currentdaytime[3].temp_c}</div>\n                                                    </div> \n                                                </li>\n                                                <li class=\"info__next-item\">\n                                                    <div class=\"info__box\">\n                                                        <img src='${currentdaytime[4].condition.icon}'>\n                                                        <div class=\"info__time h4\">${times[4]}:00</div>\n                                                        <div class=\"h3\">${currentdaytime[4].temp_c}</div>\n                                                    <div>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                </div>\n                                <div class=\"swiper-slide\">\n                                    <div class=\"moon\">\n                                        <div></div>\n                                        <img class=moon__icon src=\"${newmoon}\">\n                                    </div>\n                                </div>\n                            </div>    \n                            <div class=\"swiper-pagination\"></div>  \n                        </div>  \n                            `;\n    out.innerHTML = template;\n    new Swiper(\".mySwiper\", {\n      pagination: {\n        el: \".swiper-pagination\"\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack://webpackk/./src/assets/sass/js/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/sass/main.scss */ \"./src/assets/sass/main.scss\");\n/* harmony import */ var _assets_sass_js_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/sass/js/index */ \"./src/assets/sass/js/index.js\");\n/* harmony import */ var _assets_sass_js_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_js_index__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://webpackk/./src/index.js?");

/***/ }),

/***/ "./src/assets/sass/main.scss":
/*!***********************************!*\
  !*** ./src/assets/sass/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpackk/./src/assets/sass/main.scss?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;