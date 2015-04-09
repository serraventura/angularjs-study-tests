angular.module('angularjsTestApp')
.filter('totalValueMustHave', function () {
    return function (listItem) {

        if (listItem == undefined) {
            return 0;
        };

        var sum = 0;
        for (var i = 0; i < listItem.length; i++) {

            if (listItem[i].must) {
                sum = sum + ( listItem[i].value * listItem[i].qty );                
            };

        };

        return sum;
    }
});