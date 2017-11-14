(function () {
    angular.module('moneyKeeper').factory('msgs', [
        'toastr',
        MsgsFactory
    ])

    function MsgsFactory(toastr) {

        function addMsg(msgs, title, method) {
            if(msgs instanceof Array) {
                msgs.foreach(msg => toastr[method](msg, title))
            } else {
                toastr[method](msgs, title)
            }
        }

        function addSuccess(msgs) {
            addMsg(msgs, 'Success', 'success')
        }

        function addError(msgs) {
            addMsg(msgs, 'Error', 'error')
        }

        return { addSuccess, addError }
    }
})()