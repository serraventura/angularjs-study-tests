angular.module('angularjsTestApp')
.filter('totalValueQty', function () {
    return function (listItem) {

        if (listItem == undefined) {
            return 0;
        };

        var sum = 0;
        for (var i = 0; i < listItem.length; i++) {
            sum = sum + (listItem[i].qty * listItem[i].value);
        };

        return sum;
    }
});