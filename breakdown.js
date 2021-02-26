// breakdown the Array in an array of arrays
// Makes code easier to iterate through

let arrayOfStrings = titanicStr.split ("\n");


let arrayOfAttributes = [];

for ( let i = 0; i < arrayOfStrings.length ; i++) {
    arrayOfAttributes[i] = arrayOfStrings[i].split(',');
};
    console.table(arrayOfAttributes);

//Build a class

// Survived,Pclass,Name,Sex,Age,Siblings/Spouses Aboard,Parents/Children Aboard,Fare

class Passenger {
    constructor (survived, pclass, name, sex, age, siblingsSpouses , parentsChildren, fare) {
        this.survived = survived;
        this.pclass = pclass;
        // this.name =  //
        this.parseName(name);
        this.sex = sex;
        this.age = age;
        this.siblingsSpouses = siblingsSpouses;
        this.parentsChildren = parentsChildren;
        this.fare =  fare;

    }
    parseName (name){
        let nameArray = name.split(" ", 3);
        this.name = {
            title: nameArray[0],
            fname: nameArray[1],
            lname: nameArray[2]
        }
        // return this.name;
    }

}

// Survived,Pclass,Name,Sex,Age,Siblings/Spouses Aboard,Parents/Children Aboard,Fare
let manifest = [];

for ( let i = 0; i < arrayOfAttributes.length; i++){
    manifest[i] = new Passenger(arrayOfAttributes[i][0], arrayOfAttributes[i][1], arrayOfAttributes[i][2], arrayOfAttributes[i][3], arrayOfAttributes[i][4], arrayOfAttributes[i][5] , arrayOfAttributes[i][6], arrayOfAttributes[i][7])
    // manifest[i] = new Passenger(arrayOfAttributes[0]);
}

console.log(manifest);

// let bob = new Passenger(1, 3, "Mr. Bob Hardy", "male", 22, 1, 0, 7.25);

// console.log(bob);
