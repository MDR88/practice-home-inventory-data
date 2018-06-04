// Define the database as an object
const HomeInventoryDatabase = {}

// Define the arrays (a.k.a. tables) in the database to store each type of items
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []


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


// Adding Data Items to the Database
// Next, place each object that you have defined into the appropriate database table.I'm going to add the two items I created above into the appropriate tables. Remember, I'm using the term table because we're building a database, but the collections are actually arrays, so I can use the push() method.


HomeInventoryDatabase.crafts.push(vintageInkwell)
HomeInventoryDatabase.furniture.push(writingDesk)

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
const HomeInventoryDatabase = {}

/*
    Initilize all of the tables (i.e. arrays) that you want to
    use in your database.
*/
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

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
HomeInventoryDatabase.crafts.push(vintageInkwell)
HomeInventoryDatabase.furniture.push(writingDesk)

// Persist the database to localStorage
saveDatabase(HomeInventoryDatabase, "HomeInventory")