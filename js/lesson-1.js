'use strict'
{
 let test = document.querySelector('h1');
 let btn = document.querySelector('button');

 btn.addEventListener('click', ()=> {
   let name = prompt('名前を入力：');
   let result = test.innerText = 'Hello!! ' + name;
   test.style.fontSize = '50px';
   test.style.color = "red";
   return result+=1;
 });


function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw--Yee');
    }
  };
}
const circle = createCircle(1);
circle.draw();

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log(radius * 3.14)
  }
}

Circle.call({}, 1)
Circle.apply({}, [1,2,3]);

const another = new Circle(3);
another.draw();


//オブジェクト
let obj = { value: 10};

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);


let x = { fruits: function() {
  return 'Banana';
}};
console.log(x);



}


// https://www.youtube.com/watch?v=PFmuCDHHpwk&t=1092s