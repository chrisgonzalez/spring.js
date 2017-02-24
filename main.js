const spring = new Spring(1, 150, 5);

const callback = x => document.querySelector('.item').style.left = x * 100 + '%';

spring.onComplete = () => { console.log('animation complete!') }

spring.snap(.25);
spring.setEnd(.75);
spring.animate(callback);
