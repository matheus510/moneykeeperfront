(function() {
    angular.module('moneyKeeper').controller('BillingCycleCtrl', [
        '$http',
        'msgs',
        'tabs',
        BillingCycleController
    ])

    function BillingCycleController($http, msgs, tabs) {
        const vm = this
        const url = 'http://localhost:3003/api/billingCycles'

        vm.refresh = function () {
            $http.get(url).then(function(res) {
                vm.billingCycle = {}
                vm.billingCycles = res.data
                tabs.show(vm, {tabList: true, tabAdd: true})
            })
        }

        vm.create = function () {
           
            $http.post(url, vm.billingCycle).then(function (response) {
                vm.refresh()
                msgs.addSuccess('Entry added succesfully')
            }).catch(function (data) {
                msgs.addError(data.error)
            })
        }

        vm.showTabEdit = function (billingCycle) {
            vm.billingCycle = billingCycle
            tabs.show(vm, {tabEdit: true})
        }

        vm.showTabDelete = function (billingCycle) {
            vm.billingCycle = billingCycle
            tabs.show(vm, {tabDelete: true})
        }

        vm.refresh()
    }
})()