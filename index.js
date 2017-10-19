let store = { drivers: [], trips: [], passengers: []}

let driverId = 0
class Driver {
  constructor (name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(function (trip) {
      return driverId === this.id;
    }.bind(this))
  }


  passengers() {
    return store.passengers.filter(function (passenger) {
      return driverId === this.id
    }.bind(this))
  }
}

let passengerId = 0
class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++ passengerId
    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter((trip)=> {
      return trip.passengerId == this.id
    })
  }
  drivers(){
    return this.trips().map((trip)=> {
      return trip.driver()
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

  driver(){
   return store.drivers.find((driver) => { return driver.id === this.driverId })
 }
 passenger(){
   return store.passengers.find((passenger) => { return passenger.id === this.passengerId })
 }
  }

