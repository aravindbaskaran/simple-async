simple-async
============

A very lightweight javascript library for async iteration. Very.

Everytime I needed to do async iteration (for e.g. loading content sequentially from web services), ended up writing different versions of same logic to help. So why not put it up for everyone who needs it.

This library is thin and light weight, easy-to-integrable with any other libraries. And most importantly very simple.

Usage
=====

```js
var a = ["a", "b", "c"];
// You could do a for-loop, but why do that when you can do it async!
new AsyncIterator(
    a, function(iterator){
      // step
      console.log("in step - " + iterator.current() + " - Remaining - " + iterator.remaining());
      iterator.step();
    }, function(iterator){
      // start
      console.log("Starting the iteration");
    }, function(iterator){
      // end
      console.log("Ending the iteration");
    }
).step();

```

Example
======

Check out two examples under examples folder

1. Dynamic content load from a web service and sequence it
2. Dynamic loading images sequentially and showing them on a page


#####Hope it helps in reducing your rewrites for every project!
Licensed under Apache v2 - aravind@cloudpact.com
