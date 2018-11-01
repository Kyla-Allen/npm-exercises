"use strict";
const $ = require('jquery');

const sayHello = () => console.log("Hello");
sayHello();

$("p").on('click', (e) => $("p").css("color", "red"));