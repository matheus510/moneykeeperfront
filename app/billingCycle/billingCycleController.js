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

        // cycle functions

        vm.refresh = function () {
            $http.get(url).then(function(res) {
                tabs.show(vm, {tabList: true, tabAdd: true})
                vm.billingCycle = {credits: [{}], debts: [{}]}
                vm.billingCycles = res.data
            })
        }

        vm.create = function () {
           
            $http.post(url, vm.billingCycle).then(function (response) {
                vm.refresh()
                msgs.addSuccess('Entry added successfully')
            }).catch(function (data) {
                msgs.addError(data.error)
            })
        }

        vm.delete = function () {
            const deleteUrl = `${url}/${vm.billingCycle._id}`
            $http.delete(deleteUrl, vm.billingCycle).then(function (res) {
                vm.refresh()
                msgs.addSuccess('Entry deleted with successfully')
            }).catch(function(data) {
                msgs.addError('data.error')
            })
        }

        vm.update = function () {
            const updateUrl = `${url}/${vm.billingCycle._id}`
            $http.put(updateUrl, vm.billingCycle).then(function (res) {
                vm.refresh()
                msgs.addSuccess('Entry updated successfully')
            }).catch(function(data) {
                msgs.addError('data.error')
            })
        }

        // cycle functions _ end
        
        // credit/debt related functions

        vm.addCredit = function(index) {
            vm.billingCycle.credits.splice(index + 1, 0, {})
        }

        vm.cloneCredit = function(index, name, value) {
            vm.billingCycle.credits.splice(index + 1, 0, {name, value})
        }

        vm.deleteCredit = function(index) {
            if(vm.billingCycle.credits.length > 1) {
                vm.billingCycle.credits.splice(index, 1)
            }
        }

        vm.addDebt = function(index) {
            vm.billingCycle.debts.splice(index + 1, 0, {})
        }

        vm.cloneDebt = function(index, name, value) {
            vm.billingCycle.debts.splice(index + 1, 0, {name, value})
        }

        vm.deleteDebt = function(index) {
            if(vm.billingCycle.debts.length > 1) {
                vm.billingCycle.debts.splice(index, 1)
            }
        }


        // credit/debt related functions _ end

        // tab functions
        vm.showTabEdit = function (billingCycle) {
            tabs.show(vm, {tabEdit: true})
            vm.billingCycle = billingCycle
        }

        vm.showTabDelete = function (billingCycle) {
            tabs.show(vm, {tabDelete: true})
            vm.billingCycle = billingCycle
        }
        // tab functions _ end

        vm.refresh()
    }
})()