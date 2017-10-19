let store = { drivers: [], trips: [], passengers: []}

let driverId = 0
class Driver {
  constructor (name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers() {
    return store.passengers.filter(passenger => {
      return passenger.driverId === this.id
    })
  }
}

let passengerId = 0
class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++ passengerId
    store.passengers.push(this)
  }

  trips() {
    return store.strips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  drivers() {
    return store.drivers.filter(driver => {
      return driver.id === this.driverId
    })
  }
}

let tripId = 0
class Trip {
  constructor(driverId, passengerId) {
    this.id =++ tripId
    this.driverId = driverId
    this.passengerId = passengerId
    store.trips.push(this)
  }

  driver() {
    return store.drivers.find(function (driver) {
      return driver.id === this.driverId
    }.bind(this))
  }

  passenger() {
    return store.passengers.find(function (passenger) {
      return passenger.id === this.passengerId
    }.bind(this))
  }
}
