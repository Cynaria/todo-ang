describe('todosApp', function(){
  describe('todoListCtrl', function(){
    var scope = {};
    beforeEach(module('todosApp'));
    it("creates an items model with one item", inject(function($controller) {
      ctrl = $controller('TodoListCtrl', {$scope:scope});

      expect(scope.list.length).toBe(3);
    }));
  });
});