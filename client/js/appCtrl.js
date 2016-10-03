(() => {
  'use strict';

  angular
    .module('app')
    .controller('appCtrl', appCtrl);

  appCtrl.$inject = ['appModel'];

  function appCtrl(appModel) {
    const vm = this;
    const poems = appModel.poems.query({});
    const chars = appModel.chars.query({});
    const arrToString = appModel.arrToString;
    const iterateThroughPoem = appModel.iterateThroughPoem;

    vm.missing = [];
    vm.test = test;

    function test() {
      for (const i of poems) {
        vm.missing.push(...iterateThroughPoem(arrToString(i.content), chars));
      }
      unique(vm.missing);
      chars.forEach((value => {
        console.log(`${value.traditional} ${value.simplified}`);
      }));
    }
  }
})();
