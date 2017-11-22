(function(window) {
  'use strict'

  var App = window.App || {}

  function Truck(truckId, db) {
    this.truckId = truckId
    this.db = db
  }

  Truck.prototype.createOrder = function(order) {
    console.log('Adding order of ' + order.emailAddress)
    return this.db.add(order.emailAddress, order)
  }

  Truck.prototype.deliveOrder = function(customerId) {
    console.log('Delivering order for ' + customerId)
    return this.db.remove(customerId)
  }

  Truck.prototype.printOrders = function() {
    var customerIdArray = Object.keys(this.db.getAll())
    console.log('Truck # ' + this.truckId + ' has pending orders:')
    customerIdArray.forEach(function (id) {
      console.log(this.db.get(id))
    }.bind(this))
  }

  App.Truck = Truck
  window.App = App
})(window)