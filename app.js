/**
 * Created by Аня on 17.06.2015.
 */
(function() {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function(){
        this.products=gems;
    });

    var gems = [
        { name: 'Azurite', price: 2.95 },
        { name: 'Bloodstone', price: 5.95 },
        { name: 'Zircon', price: 3.95 }
    ];
})();