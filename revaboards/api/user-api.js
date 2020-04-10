<<<<<<< HEAD
const userData = require('../userDB');
const User = require('../models/user')

const getAllUsers = (cb) => {
    setTimeout(() => {cb(userData),250});
}

const setUser = function( un, pw, fn, ln, email, dob) {
    let id = userData.length + 1;
    userData.push(new User(id, un, pw, fn, ln, email, dob));
    console.log(userData);
}

const getUserById = function(id, callback) {
    //using a timeout to simulate call latency
    setTimeout(function(){
        
        let retrievedUser = null;
            // very impertive approach
            console.log(userData);
        for(user of userData){
            if(user.id === id) {
                retrievedUser = user;
            }
=======
const userData = require('../userDb');

const getAllUsers = (cb) => setTimeout(() => cb(userData), 250);

const getUserById = function(id, callback) {

    console.log(`You are looking for id: ${id}`)

    // using a Timeout to simulate call latency
    setTimeout(function() {

        let retrievedUser = null;
        
        // very imperative-style logic
        // look into the difference between for..in and for..of
        for (user of userData) {

            // Differences between =, ==, === (strict equality)
            // 5 == '5' true
            // 5 === '5' false
            if (user.id == id) {
                retrievedUser = user;
            }
            
>>>>>>> 5489cd5c84195769ed6ae426bd081c47efd5a1b8
        }

        callback(retrievedUser);

<<<<<<< HEAD
    },250);
=======
    }, 2500);
>>>>>>> 5489cd5c84195769ed6ae426bd081c47efd5a1b8
}

const getUserByCredentials = (un, pw, cb) => {
    setTimeout(() => {
<<<<<<< HEAD

        //validation to ensure we do not waster resources
        if(!un || !pw) throw Error('Oh no! You gave me bad data');

        //fetch the sought user (declarative-style logic)
        const user = userData.filter(user => user.username === un && user.password == pw).pop();

        //other "functional" methods for arrays include: -filter -map -reduce
        //validate that we actually obtained a user
        if(!user) throw new Error('Invalid credentials provided!');
=======
        
        // validation to ensure we do not waste resources
        if (!un || !pw) throw Error('Oh no! You gave me bad data'); // truthy/falsy in use here

        // fetch the sought user (declarative-style logic)
        const user = userData.filter(user => user.username === un && user.password == pw).pop();

        /* 
            other "functional" methods for arrays include: 
                - filter
                - map
                - reduce
        */

        // validate that we actually obtained a user
        if (!user) throw new Error('Invalid credentials provided!');
>>>>>>> 5489cd5c84195769ed6ae426bd081c47efd5a1b8

        // invoke the provided callback function
        cb(user);

<<<<<<< HEAD
    },250);
}

module.exports = {
    getUserByCredentials,
    getUserById,
    setUser,
    getAllUsers
}
=======
    }, 250);
}

const addNewUser = (newUser, cb) => {

    // validate the user
    if(!newUser) throw Error('Oh no! You gave me bad data!');

    // get the next id (would not be necessary with a real DB)
    newUser.id = (userData.length) + 1;

    // add user user to data source
    userData.push(newUser);

    cb(newUser);

}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByCredentials,
    addNewUser
};
>>>>>>> 5489cd5c84195769ed6ae426bd081c47efd5a1b8
