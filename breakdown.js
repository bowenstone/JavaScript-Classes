// breakdown the Array in an array of arrays
// Makes code easier to iterate through

let arrayOfStrings = titanicStr.split ("\n");


let arrayOfAttributes = [];

for ( let i = 0; i < arrayOfStrings.length ; i++) {
    arrayOfAttributes[i] = arrayOfStrings[i].split(',');
};
    // console.table(arrayOfAttributes);

//Build a class

// Survived,Pclass,Name,Sex,Age,Siblings/Spouses Aboard,Parents/Children Aboard,Fare

class Passenger {
    constructor (survived, pclass, name, sex, age, siblingsSpouses , parentsChildren, fare) {
        this.survived = survived;
        this.pclass = pclass;
        this.name =  this.parseName(name);
        this.sex = sex;
        this.age = age;
        this.siblingsSpouses = siblingsSpouses;
        this.parentsChildren - parentsChildren;
        this.fare =  fare;

    }
    parseName (name){
        this.name = name.split(" ", 3);
        this.title = this.name[0];
        return this.name;
    }

}

let bob = new Passenger(1, 3, "Mr. Bob Hardy", "male", 22, 1, 0, 7.25);

console.log(bob);
