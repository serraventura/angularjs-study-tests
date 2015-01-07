
angular.module('myTodo.directives', []).
directive('inlineEdit', function() {

    return {
        restrict: 'C',
        require: '^ngModel',
        link: function(scope, element, attrs) {

            element.bind('click', function(){
                element.toggleClass('inactive');
                if(element.hasClass('inactive')){
                    element.toggleClass('inactive');
                }
            });

            element.bind('blur', function(){
                element.toggleClass('inactive');
                // scope.todoList = scope.todoList;
                console.log(scope.todoList);
                console.log(scope);
            });

        }
    }




});