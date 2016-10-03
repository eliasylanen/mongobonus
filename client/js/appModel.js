(() => {
  'use strict';

  angular
   .module('app')
   .factory('appModel', appModel);

  appModel.$inject = ['$resource'];

  function appModel($resource) {
    const chars = $resource('/characters/');
    const poems = $resource('/poems/');

    return {
      get chars() {
        return chars;
      },
      get poems() {
        return poems;
      },
      arrToString,
      iterateThroughPoem,
      checkExists,
    };

    function arrToString(arr) {
      let str = '';
      arr.forEach((value) => {
        for (const i of value) {
          if (i !== '，' && i !== '。' && i !== '；') {
            str += i;
          }
        }
      });
      return str.trim();
    }

    function iterateThroughPoem(str, characters) {
      const missing = [];

      for (const i of str) {
        if (checkExists(i, characters)) missing.push(i);
      }
      return missing;
    }

    function checkExists(char, characters) {
      return characters.every(
        value => value.traditional !== char && value.simplified !== char
      );
    }
  }
})();
