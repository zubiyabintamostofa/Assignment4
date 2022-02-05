
function picnicBudget(members){
    const First100members=100;
    //const animalDensitySecond10miles=50;
    //const animalDensitySRestmiles=100;
    if (members<=100){
        const count =members*First100members;
        return count;
    }
}
//     else if( miles<=20){
//         const firstDenseAnimals=10*animalDensityFirst10miles;
//         const restmiles= miles-10;
//         const secondDenseAnimals=restmiles*animalDensitySecond10miles;
//         const totalAnimals=firstDenseAnimals+secondDenseAnimals;
//         return totalAnimals;
//     }
//     else {const firstDenseAnimals=10*animalDensityFirst10miles;
//         secondDenseAnimals=10*animalDensitySecond10miles;
//      const restmiles=miles-20;
//      const RestDenseAnimal=restmiles*animalDensitySRestmiles;
//      const totalAnimals=firstDenseAnimals+secondDenseAnimals+RestDenseAnimal;
//      return totalAnimals;
//     }
// }
//const animals=animalCount(25);
// console.log(animals);

const all=picnicBudget(4);
console.log(all);
