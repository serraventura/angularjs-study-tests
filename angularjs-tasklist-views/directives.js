
myApp.directive('editTask', function($compile) {


    return {
        restrict: 'A',
        scope: true,
        link: function(scope, element, attrs) {

            scope.editStatus = false;

            element.bind('click', function(){

                var elTitle = element.parent().parent().children()[1];
                var elDate = element.parent().parent().children()[2];

                if (scope.editStatus) {

                    //Title
                    $compile(angular.element(elTitle).text('{{todo.title}}'))(scope);

                    //Date
                    $compile(angular.element(elDate).text('{{todo.date}}'))(scope);

                    element.text('edit');
                    scope.editStatus = false;

                }else{

                    //title
                    angular.element(elTitle).text('');
                    angular.element(elTitle).append($compile('<input type="text" ng-model="todo.title">')(scope));

                    //date
                    angular.element(elDate).text('');
                    angular.element(elDate).append($compile('<input type="text" ng-model="todo.date">')(scope));

                    element.text('done');
                    scope.editStatus = true;

                }

                scope.$apply();

            });

        

        }
    }


});