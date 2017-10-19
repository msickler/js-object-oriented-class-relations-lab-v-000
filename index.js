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
