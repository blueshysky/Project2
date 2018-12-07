"use strict";
// strict mode
document.addEventListener("DOMContentLoaded", function(){
  var button = document.getElementById("menu");
  button.addEventListener('click', function(){
    document.getElementById("mydropdown").classList.toggle("show");
  });
});
