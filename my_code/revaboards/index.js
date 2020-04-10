const userApi = require('./api/user-api');
const postApi = require('./api/post-api');
const User = require('./models/user');
const Post = require('./models/post');

// when you fetch a user by id, also, grab their posts and add them to the user obj
 //userApi.getUserById(1, user => {
//     postApi.getPostsByPosterId(user.id, posts => {
//         user.posts = posts;
//         console.log(user);
//     });
// });

let username = 'aanderson';
userApi.getUserByUsername(username, retrievedUser => console.log(retrievedUser));

//(delete)userApi.getAllUsers(retrievedUser => console.log(retrievedUser));
//});


// let user = new User(0, 'test', 'test', 'test', 'test', 'test', new Date('01/01/2000'));
// userApi.addNewUser(user, addedUser => {
//     userApi.getAllUsers(users => console.log(users));
// });

// let post = new Post(0, 'test', 'test', 'test', new Date('01/01/2000'));
// postApi.addNewPost(post, addedPost => {
//     postApi.getAllPosts(posts => console.log(posts));
// });

