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
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.siblingsSpouses = siblingsSpouses;
        this.parentsChildren - parentsChildren;
        this.fare =  fare;

    }
}


