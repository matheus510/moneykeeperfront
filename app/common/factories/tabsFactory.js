(function() {
    angular.module('moneyKeeper').factory('tabs', [ TabsFactory ])

    function TabsFactory() {

        function show(owner, {
            tabList = false,
            tabAdd = false,
            tabEdit = false,
            tabDelete = false
        }) {
            owner.tabList = tabList
            owner.tabAdd = tabAdd
            owner.tabEdit = tabEdit
            owner.tabDelete = tabDelete
        }

        return { show }

    }

})()