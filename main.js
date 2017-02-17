const spring = new Spring(1, 350, 45);

const callback = x => document.querySelector('.item').style.left = x * 100 + '%';
