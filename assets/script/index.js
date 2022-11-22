'use strict';

let blank1 = document.querySelector('.shape .blank');
let blank2 = document.querySelector('.color .blank');
let btn = document.querySelector('.create button');
let shape = document.querySelectorAll('.shape-01 li');
let color = document.querySelectorAll('.color-01 li');
let items = document.querySelectorAll('.grid-item');
let tip = document.querySelector('.tip span');


let arr = [];
let arry3 = [];

for(let i = 0; i < shape.length; i++) {
    shape[i].addEventListener('click', function() {
        blank1.innerHTML = shape[i].innerHTML;
    })  
};

for(let i = 0; i < color.length; i++) {
    color[i].addEventListener('click', function() {
        blank2.innerHTML = color[i].innerHTML;
    })
};

for(let i = 0; i < items.length; i++) {
    arry3.push(items[i]);
};
/* console.log(arry3); */


let i = 29;
btn.addEventListener('click', function() {
    let a = blank1.innerHTML;
    let b = blank2.innerHTML;
    arr.push(`${a} ${b}`);
  
    arry3[i].style.width = '110px';
    arry3[i].style.height = '110px';
    if(a == 'Circle') { 
        arry3[i].style.borderRadius = '50%'; 
        arry3[i].style.width = '110px';
        arry3[i].style.height = '110px';
          
    } else {
        arry3[i].style.borderRadius = ''; 
        arry3[i].style.width = '110px';
        arry3[i].style.height = '110px';
    };

    switch (b) {
        case 'Green':
            arry3[i].style.backgroundColor = '#9f0';
            break;
        case 'Orange':
            arry3[i].style.backgroundColor = '#f90';
            break;
        case 'Pink':
            arry3[i].style.backgroundColor = '#f09';
            break;
        case 'Blue':
            arry3[i].style.backgroundColor = '#0f90f9';
            break;
        case 'Purple':
            arry3[i].style.backgroundColor = '#90f';
            break;
    };
    i = i - 1;   
});

for (let j = 0; j < arry3.length; j++) {
    items[29 - j].addEventListener('click', function() {
        tip.innerHTML = `Unit ${j + 1}: ${arr[j]}`;
    })
};



















