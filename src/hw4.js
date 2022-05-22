const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];
//***MAP***
//1. Get array of all names

 const getNames = (listNames)=>{
   return listNames.map(current => {
    return current.name 

    })
    
 }


console.log(getNames(characters))

//2. Get array of all heights

const getHeights = (listHeight)=>{
    return listHeight.map(current => {
        return current.height
 
     })
     
  }
 console.log(getHeights(characters))

//3. Get array of objects with just name and height properties
 const getNameHeights = (listNameHeight)=>{
    return listNameHeight.map(current => {
        return {name: current.name, height: current.height}
 
     })
     
  }
 console.log(getNameHeights(characters))

//4. Get array of all first names


 const getFirstNames = characters.map(current =>{ 
        
   return current.name.split(' ')[0]
   
    
    
    
    
      
 })


 console.log(getFirstNames)





//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, current) =>{
    return acc + current.mass
},0)
console.log(totalMass)
  
//2. Get total height of all characters
const totalHeight = characters.reduce((acc, current) =>{
    return acc + current.height
},0)
console.log(totalHeight)
//3. Get total number of characters by eye color
const charactersEyeColor = characters.reduce((acc, current)=>{
const color = current.eye_color;
    if(acc[color]){
    acc[color]++; 
} else {
    acc[color] = 1;
} return acc;
},{})
console.log(charactersEyeColor)
//4. Get total number of characters in all the character names
const charactersTotalNames = characters.reduce((acc, current)=>{
return acc + current.name.length
},0)
console.log(charactersTotalNames)
//***FILTER***
//1. Get characters with mass greater than 100
const GetMass = (getHighMass) =>{
 return getHighMass.filter(current =>{
    if(current.mass >= 100)
    return {current}
    
    }) 
   
  



}
console.log(GetMass(characters))
   
    
//2. Get characters with height less than 200
const GetHeight = (GetHighLow)=>{
    return GetHighLow.filter(current =>{
        if(current.height <= 200)
        return {current}
    })
}
console.log(GetHeight(characters))
//3. Get all male characters
const GetMale = (getMaleCharacters) =>{
return getMaleCharacters.filter(current =>{
    if(current.gender == 'male')
    return {current}
    
})

}
console.log(GetMale(characters))
//4. Get all female characters
const GetFemale = (getFemaleCharacters) =>{
    return getFemaleCharacters.filter(current =>{
        if(current.gender == 'female')
        return {current}
        
    })
    
    }
    console.log(GetFemale(characters))

//***SORT***
//1. Sort by mass
const sortMass = characters.sort((a,b) =>{
return a.mass - b.mass;
})
console.log(sortMass)
//2. Sort by height
const sortHeight = characters.sort((a,b) =>{
    return a.height - b.height;
    })
    console.log(sortHeight)
//3. Sort by name
const sortName = characters.sort((a,b) =>{
    if(a.name < b.name) return -1;
   return 1
})
    console.log(sortName)
//4. Sort by gender
const sortGender = characters.sort((a,b) =>{
    if(a.gender === 'male') return -1;
   return 1
})
console.log(sortGender)
//***EVERY***
//1. Does every character have blue eyes?
const HaveBlue =  characters.every((characters) =>{
   
      return characters.eye_color === 'blue';
       
        
    })

console.log(HaveBlue)
//2. Does every character have mass more than 40?
const massMore =  characters.every((characters) =>{
   
    return characters.mass >= 40;
     
      
  })

console.log(massMore)
//3. Is every character shorter than 200?
const shortThan =  characters.every((characters) =>{
   
    return characters.height < 200;
     
      
  })
  console.log(shortThan)
//4. Is every character male?
const areMale =  characters.every((characters) =>{
   
    return characters.gender === 'male';
     
      
  })
  console.log(areMale)

//***SOME***
//1. Is there at least one male character?
const oneMale = characters.some((current)=>{
    return current.gender === 'male';
})
console.log(oneMale)
//2. Is there at least one character with blue eyes?
const oneBlue = characters.some((current)=>{
    return current.eye_color === 'blue';
})
console.log(oneBlue)
//3. Is there at least one character taller than 210?
const oneTaller = characters.some((current)=>{
    return current.height > 210;
})
console.log(oneTaller)
//4. Is there at least one character that has mass less than 50?
const oneMass = characters.some((current)=>{
    return current.mass < 50;
})
console.log(oneMass)

//***Bonus***/
// come up with your own
