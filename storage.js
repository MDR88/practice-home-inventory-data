// Define the database as an object
const gearCollectionInventory = {}

// Define the arrays (a.k.a. tables) in the database to store each type of items
gearCollectionInventory.guitars = []
gearCollectionInventory.amps = []
gearCollectionInventory.pedals = []


// guitars data item
const fenderTelecaster = {
    name: "Fender Telecaster",
    serialNumber: "USA334344334",
    description: "This guitar was purchased to add a guitar with wide range humbuckers to my collection",
}
const gibsonLesPaul = {
    name: "Fender Telecaster",
    serialNumber: "USA334344334",
    description: "Guitar purchased from Hollywood Guitar Center used.",
}
const Martin = {
    name: "Fender Telecaster",
    serialNumber: "USA33ddf445444",
    description: "This is my favoirte accoustic guitar",
}
const Rickenbacker350 = {
    name: "Fender Telecaster",
    serialNumber: "USA334344334",
    description: "This guitar is a full scale version of the 325 model",
}

// amplifer data item
const fenderDeluxeReverb = {
        name: "Fender 65 Deluxe Reverb",
        serialNumber: "XZXKDFKEED",
        description: "This is an amp that is my go to amp!"
    }
    //pedals
const tcElectronicAlterEgo = {
    name: "TC Electronics Alter Ego",
    serialNumber: "USAGKGKDKDKGKD",
    description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}



// Adding Data Items to the Database
// Next, place each object that you have defined into the appropriate database table.I'm going to add the two items I created above into the appropriate tables. Remember, I'm using the term table because we're building a database, but the collections are actually arrays, so I can use the push() method.


gearCollectionInventory.guitars.push(guitars, fenderTelecaster, gibsonLesPaul, martin, rickenbacker350)
gearCollectionInventory.amps.push(amplifiers, fenderDeluxeReverb)
gearCollectionInventory.pedals.push(pedals, tcElectronicAlterEgo)

// As your applications become more complex and you start accepting user input, you will need to change your database and then immediately save it to local storage.It only takes two lines of code to accomplish this, but we want to keep our code DRY, and never write the same line of code twice.

// Time to write a function.

const saveDatabase = function(databaseObject) {

}


const saveDatabase = function(databaseObject, localStorageKey) {
        /*
            Convert the Object into a string.
        */
        const stringifiedDatabase = JSON.stringify(databaseObject)

        /*
            Create a key in local storage, and store the string
            version of your inventory database as the value
        */
        localStorage.setItem(localStorageKey, stringifiedDatabase)
    }
    // JSON.parse to Read the Data
    // To get the value back out of local storage so that it can be used in our application as an actual object again, we need to use the localStorage.getItem() method.We send in an argument value that is the name of the key we want to retrieve.Let's put these instructions in a function named loadDatabase.

constc loadDatabase = function(localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

// Saving the Database

// Now you can use those two functions to save, and load, your home inventory database from localStorage.The only one that you're going to use right now is the saveDatabase function.

// Here's what your database.js file should look like.

/*
    Initialize the database in memory as an object
*/
const gearCollectionInventory = {}

/*
    Initilize all of the tables (i.e. arrays) that you want to
    use in your database.
*/
gearCollectionInventory.furniture = []
gearCollectionInventory.crafts = []
gearCollectionInventory.electronics = []

/*
    Time to create some data that will inserted into the database
*/

// The ink well is a craft data item
const vintageInkwell = {
    name: "Vintage Ink Well",
    location: "Writing desk",
    description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
}

// The writing desk is a furniture data item
const writingDesk = {
    name: "Shaker Writing Desk",
    location: "Bedroom",
    description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}

// Add the data to the appropriate tables
gearCollectionInventory.crafts.push(vintageInkwell)
gearCollectionInventory.furniture.push(writingDesk)

// Persist the database to localStorage
saveDatabase(gearCollectionInventory, "HomeInventory")