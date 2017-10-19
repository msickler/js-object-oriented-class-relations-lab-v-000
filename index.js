let store = { drivers: [], trips: [], passengers: []}

let driverId = 0
class Driver {
  constructor (name) {
    this.id = ++driverId
    this.name = name
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
  }

  trips() {
    return store.strips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  drivers() {
    return store.drivers.find(function (driver) {
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
  }

  driver() {
    return store.drivers.find(function (driver) {
      return driver.id === this.driverId
    })
  }
}
