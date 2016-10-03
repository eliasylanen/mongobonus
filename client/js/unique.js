/*!
 * array-unique <https://github.com/jonschlinkert/array-unique>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

function unique(arr) {
  'use strict';

  if (!Array.isArray(arr)) {
    throw new TypeError('array-unique expects an array.');
  }

  const len = arr.length;
  let i = -1;

  while (i++ < len) {
    let j = i + 1;

    for (; j < arr.length; ++j) {
      if (arr[i] === arr[j]) {
        arr.splice(j--, 1);
      }
    }
  }
  return arr;
}
