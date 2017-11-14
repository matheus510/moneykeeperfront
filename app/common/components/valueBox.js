(function () {
    angular.module('moneyKeeper').component('valueBox', {
        bindings: {
            grid: '@',
            color: '@',
            value: '@',
            type: '@',
            icon: '@',
        },
        controller: [
            'gridSystem',
            function (gridSystem) {
                this.$onInit = function () {
                    this.gridClasses = gridSystem.toCssClasses(this.grid)
                }
            }
        ],        
        template: `
            <div class="{{ $ctrl.gridClasses }}">
                <div class="small-box {{ $ctrl.color }}">
                    <div class="inner">
                        <h3>{{ $ctrl.value }}</h3>
                        <p>{{ $ctrl.type }}</p>
                    </div>
                    <div class="icon">
                        <i class="fa {{ $ctrl.icon }}"></i>
                    </div>
                </div>
            </div>
        `
    })
})()