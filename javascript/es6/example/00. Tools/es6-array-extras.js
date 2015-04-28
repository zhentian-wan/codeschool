/*
 * es6-array-extras
 * https://github.com/rwldrn/es6-array-extras
 *
 * Copyright (c) 2012 Rick Waldron
 * Licensed under the MIT license.
 */

(function() {

  // The implementations shown here reflect the algorithms defined
  // by the latest ECMAScript 262, 6th Edition DRAFT.


  function isConstructor( C ) {
    try {
      new C();
      return true;
    } catch ( e ) {
      return false;
    }
  }

  Array.from = function( arrayLike ) {
    var items, len, C, A, k, Pk, kPresent, kValue;

    // 1.  Let items be ToObject(arrayLike).
    items = Object(arrayLike);

    // 3. Let lenValue be the result of calling the [[Get]]
    // internal method of items with the argument "length".
    // 4. Let len be ToInteger(lenValue).
    len = +items.length;

    // 6.  Let C be the |this| value.
    C = this;

    // 7.  If isConstructor(C) is true, then
    if ( isConstructor(C) ) {
      // a.  Let newObj be the result of calling the
      //     [[Construct]] internal method of C with an argument
      //     list containing the single item len.
      // b.  Let A be ToObject(newObj).
      A = Object(new C(len));
    } else {
      A = new Array(len);
    }

    // 10. Let k be 0.
    k = 0;

    // 11. Repeat, while k < len
    while ( k < len ) {
      // a. Let Pk be ToString(k).
      Pk = String(k);
      // b. Let kPresent be the result of calling the [[HasProperty]]
      //      internal method of items with argument Pk.
      kPresent = items.hasOwnProperty(Pk);
      // c. If kPresent is true, then...
      if ( kPresent ) {
        // i.  Let kValue be the result of calling the [[Get]]
        //      internal method of items with argument Pk.
        kValue = items[ Pk ];
        // ii.  ReturnIfAbrupt(kValue).
        // iii.  Let defineStatus be the result of calling the
        //      [[DefineOwnProperty]] internal method of A with
        //      arguments Pk, Property Descriptor
        //      {[[Value]]: kValue.[[value]],
        //      [[Writable]]: true,
        //      [[Enumerable]]: true,
        //      [[Configurable]]: true}, and true.
        A[ k ] = kValue;
      }

      // d. Increase k by 1.
      k++;
    }

    // 14. Return A.
    return A;
  };


  Array.of = function() {
    var items, len, C, A, k, Pk, kPresent, kValue;

    // X.  Let items be ToObject(arrayLike).
    items = Object(arguments);

    // 1. Let lenValue be the result of calling the [[Get]]
    // internal method of items with the argument "length".
    // 2. Let len be ToInteger(lenValue).
    len = +items.length;

    // 3.  Let C be the |this| value.
    C = this;

    // 4. If isConstructor(C) is true, then
    if ( isConstructor(C) ) {
      // a, b.
      A = Object(new C(len));
    } else {
    // 5. Else, a.
      A = new Array(len);
    }

    // 6. omitted
    // 7. Let k be 0.
    k = 0;

    // 8. Repeat, while k < len
    while ( k < len ) {
      // a. Let Pk be ToString(k).
      Pk = String(k);
      // b. Let kValue be the result of calling the [[Get]]
      //    internal method of items with argument Pk.
      kValue = items[ Pk ];
      // c. Let defineStatus be the result of calling the
      //    [[DefineOwnProperty]] internal method of A with
      //    arguments Pk, Property Descriptor
      //    {[[Value]]: kValue.[[value]],
      //    [[Writable]]: true,
      //    [[Enumerable]]: true,
      //    [[Configurable]]: true}, and true.
      A[ k ] = kValue;

      // d. omitted
      // e. Increase k by 1.
      k++;
    }

    // 9, 10. omitted
    // 11. Return A.
    return A;
  };


  Array.new = Array.of;
}());
