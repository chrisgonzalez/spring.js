# Spring.js

This class provides a simple spring physics engine for use in client-side JavaScript.  

Simply, the spring accepts some values for mass, springConstant (springyness), and dampening,
and can be animated between normalized integer values.  

That sounds fancy, but let's look at a useful example.

## How to Spring

First, let's set up our spring:

`const spring = new Spring(1, 400, 50);`

This returns a new Spring instance that we can now manipulate and animate.  

Let's say we want to animate something from the left side of the screen (0%), to the right side of the screen (100%).
To start, let's set our spring to 0.

`spring.snap(0);`

`spring.snap` let's us immediately set the value of the spring

Now let's set where the spring should end up, and animate it.

```
spring.setEnd(1);
spring.animate(function(x) {
    console.log(x);
});```

This will give us a series of console values from 0 to 1 over time. Try adjusting the `dampening` to a lower value (10), and observe the increase in springyness.  

Now to actually animate our fake div, all we have to do is multiply!

```
spring.snap(0);
spring.setEnd(1);
spring.animate(function(x) {
    document.querySelector('.thing').style.left = `${100 * x%}`;
})
```

The source code is pretty small, check it out!

## Credits!

Thanks to Ralph Thomas for the initial Gravitas library and simplifying the great mysteries of physics.

https://github.com/iamralpht/gravitas
