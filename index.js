let driverId = 0
class Driver {
  constructor (name) {
    this.id = ++ driverId
    this.name = name
  }

  trips() {
    return trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers() {
    return passengers.filter()
  }
}
