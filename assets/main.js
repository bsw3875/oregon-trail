// class Dog {
//     constructor(name, breed) {
//         this.name = name
//         this.breed = breed
//         this.isGoodBoy = Boolean("of course")
//     }
//     sit() {

//         // sitting code goes here
//         return this.sit
//     }
//     fetch() {
//         // fetching code goes here
//         return this.fetch
//     }
// }

//Traveler class has these properties: name, food (initialized to 1), 
//isHealthy (initialized to true)



class Traveler {
    constructor(name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true
    }


    //Traveler prototype has these methods: hunt, and eat

    hunt() {
        this.food += 2

    }

    //     let hunt = 'true'
    //     for (let index = 0; index < length; index++) {
    // if (traveler.isHungry === true, hunt =true){
    //    // return('The hunt was successful', + hunt)
    //     }
    //    // return('Everyone is full')
    // }

    eat() {
        if (this.food > 0) {
            this.food -= 1

        } else {
            this.isHealthy = false
        }



    }

    //consumes 1 unit of the traveler's food. If the traveler doesn't have any 
    //food left to eat, the traveler is no longer healthy (set isHealthy
    // to false).

    // The console.log statements are present and match the expected values.

}


//wagon class has these properties: capacity, 
//and passengers(initialized to an empty array)
class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = new Array()
        //wagon prototype has these methods: 
        //getAvailableSeatCount, join, shouldQuarantine, 
        //and totalFood


    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length


    }


    join(traveler) {
        if (this.getAvailableSeatCount() > 0)
            this.passengers.push(traveler)

    }


    shouldQuarantine() {
        for (let index = 0; index < this.passengers.length; index++) {
            let traveler = this.passengers[index]
            if (traveler.isHealthy === false) {
                return true;
            }


        }
        return false;
    }

    totalFood() {
        let total = 0
        for (let index = 0; index < this.passengers.length; index++) {
            let traveler = this.passengers[index]
            total += traveler.food

        }
        return total
        // The console.log statements are present and match the expected values.
    }
}





