//function it(str, callbackFunction)
   // console.log(type str) //str
    //callbackFunction
    //doing stuff......
//it(name: string, fn?: jest.ProvidesCallback, timeout?: number): void
it('test equality array', ()=>{
 //do my test
 let num = 1
 expect(num).toBe(1)
 let nums = [1,2,3,4]
 let nums1 = nums
 let nums2 = [1,2,3,4]
 expect(nums).toBe(nums1)
 expect(nums).not.toBe(nums2)
 expect(nums).not.toBe([1,2,3,4]) //passes (same memory access)
 expect(nums).toEqual([1,2,3,4]) // that they have the same value

});
it('looks at mutations/side effect',()=>{
    let nums = [10,20,30]
    let originalNums = [90,100,110]
    //add item to array at the end
    // this one does change the array
    

    nums.push(40)
    expect(nums).toEqual([10,20,30,40])    
    let clone = [...originalNums]

    clone.push(120)
    expect(originalNums).toEqual([90,100,110])
    expect(clone).toEqual([90,100,110,120])
})

it('test equality objects', ()=>{
    function compareKeys(a,b) {
        // keys
        //(method) ObjectConstructor.keys(o:{}), string[] (+1 overload)
        
        // TODO sort
        var aKey = Object.keys(a).sort();
        var bKey = Object.keys(b).sort();
        return JSON.stringify(aKey)=== JSON.stringify(bKeys);
    
    }
    
    
    let x = compareKeys({name:'sdf'},{x:'sfd'})
    console.log(x)
    let y = compareKeys({name:'sdf'},{x:'sfd'})
    console.log(y)
    let person1 = {name:'bob dole', age:88}
    let person2 = {name:'bob dole', age:88}
    let person3 = {name:'jim dole', age:18}
    let person4 = {name:'jim dole', dob:'12/12/24'}

    expect(person1).toBe(person1)
    expect(person1).not.toBe(person2)
    expect(person1).toEqual(person2)
    expect(person1).not.toEqual(person3)
    expect(compareKeys(person1, person2)).toBe(true)
    expect(compareKeys(person3, person4)).toBe(true)
})

it('looks at mutation in objects', ()=>{
    let per1 ={name:'john', age:12}
    let per2 ={name:'bill', age:15}

    // add key:pair to object
    //mutate objects
    per1.eyeColor = 'brown'
    expect(per1).toEqual({name:'john', age:12, eyeColor:'blue'})
    // without mutation
    let per2Clone = {...per2,eyeColor:'blue'}
    expect(per2).toEqual({name:'bill',age:15})
    expect(per2Clone).toEqual({name:'bill', age:15, eyeColor:'blue'})
     // update
       // mutation
    per1.eyeColor = 'Hazel'
    expect(per1).toEqual( {name:'john', age:12, eyeColor:'Hazel'})

    // with out mutating
    let anotherclone = {...per2Clone, eyeColor:'red'}
    expect(per2Clone).toEqual({name:'bill', age:15, eyeColor:'blue'})
    expect(anotherclone).toEqual({name:'bill', age:15, eyeColor:'red'})

})