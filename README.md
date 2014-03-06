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
    }, function(iterator){
      // start
    }, function(iterator){
      // end
    }
).step();

```
