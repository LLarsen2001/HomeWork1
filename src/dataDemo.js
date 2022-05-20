const { user1, user2, user3, user4, user5, user6 } = require("./data");


//addFriends 
const addFriends = ()=>{
    user1.friends.push(user2, user3, user4);
    user2.friends.push(user1, user3);
    user3.friends.push(user1, user2);
    user4.friends.push(user1);
    console.log(user1.friends.length);
}
//user1: {
   // id: number;
    //dateJoined: Date;
    //name: string;
    //friends: any[];
    //posts: {
      //  text: string;
        //likes: number;
        //comments: string[];
    //}[];
//}
function userInfo (userParam){
    //TODO
    return{name:userParam.name, postCount: userParam.posts.length}
}
//expecting user []:user
function getNames(users){
    //.mapgoes through each thing in the array and performs a fincton on that thing
    // what that function is pushed into a new array, which is returned once
  if(user.length === 0){
      return 'no users'
  }  // the map call is done
let infos = users.map(user=>{
    return user.name
})
return info
}
//bob is an array users
const manyPost=(users) =>{
    users.filter((user))
    return user.posts.length >= 2  // true or false!

}
module.exports = {
    userInfo,
    manyPost,
    getNames
}
