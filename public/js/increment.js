"use strict";var counter=document.getElementById("count-number"),limit=parseInt(counter.innerHTML),day=limit-30;counter.innerHTML="0";var pause=50,interval=setInterval(function(){day<limit?increment():clearInterval(interval)},pause);function increment(){day++,counter.innerHTML=day.toString()}