'use strict';

$(document).ready(function () {
  $('small').text(moment());
  // localforage.setItem('hi', {hello: 'world'}).then(()=> console.log('saved'))
  // localforage.getItem('hello', (error, value)=> value !== null ? console.log(value) : console.log('something went wrong'))
});