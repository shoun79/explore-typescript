"use strict";
var submitBtn = document.getElementById('submit-btn');
var input = document.getElementById('input');
var handleSubmit = function (e) {
    var _a;
    console.log('clicked', input === null || input === void 0 ? void 0 : input.value);
    var target = e.target;
    var p = document.createElement('p');
    p.innerText = input === null || input === void 0 ? void 0 : input.value;
    (_a = target === null || target === void 0 ? void 0 : target.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(p);
};
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener('click', handleSubmit);
