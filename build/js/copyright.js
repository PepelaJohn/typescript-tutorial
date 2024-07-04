"use strict";
// usecase for type casting
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
