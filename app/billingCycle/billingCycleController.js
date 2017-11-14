(function() {
    angular.module('moneyKeeper').controller('BillingCycleCtrl', [
        '$http',
        'msgs',
        BillingCycleController
    ])

    function BillingCycleController($http, msgs) {
        const vm = this

        vm.create = function () {
            debugger
            const url = 'http://localhost:3003/api/billingCycles'
            $http.post(url, vm.billingCycle).then(function (response) {
                vm.billingCycle = {}
                msgs.addSuccess('Entry added succesfully')
            }).catch(function(data) {
                msgs.addError(data.error)
            })
        }
    }
})()