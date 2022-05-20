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