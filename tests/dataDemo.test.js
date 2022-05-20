const { user1, user2, user3, user4, user5, user6 } = require("../src/data");
const { userInfo, manyPost } = require("../src/dataDemo");
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
it('test user1',()=>{
    expect(user1.id).toBe(1)
    expect(user1['id']).toBe(1)
    expect(user1.name).toBe("Forged Fire")
    // length of posts
    expect(user1.posts.length).toBe(2)
    expect(user1.posts[0].text).toBe("it will Keal")
    expect(user1.posts[1].likes).toBe(121)
    expect(user1.posts[1].comments).toEqual(["Noice", "COol"])
    expect(user1.posts[1].comments[0]).toEqual("Noice")
  })
  it("test userInfo", () => {
      let u1Info = userInfo(user1);
      expect(u1Info).toEqual({name: 'Forged Fire', postCount: 2})
  });
  it('gets users names', ()=>{
      let users = [user1, user2,user3]
      let cloneUsers = [...users]
      //dont mutate users
      expect(getNames(user)).toEqual([user1.name, user2.name, user3.name])
      expect(getNames([])).toEqual('no usrs')
      expect(users).toEqual(cloneUsers)    

  })
  it ('filter user with two or more posts',()=>{
      let user = [user1,user2,user3,user5,user4,user6]
      let userWith2post = manyPost(user)
      expect(userWith2post.length).toBe(4)


    })
    it('finds user with two or more post',(=>{
        let user = [user1,user2,user3,user5,user4,user6]
    }))
     it ('test basic sort', ()=>{
         let strings = ['b','d','a','c']
         expect(strings.sort()).toEqual(['a','b','c','d'])

         let nums =[4,3,2,1]
         expect(nums.sort()).toEqual([1,2,3,4])
     })
