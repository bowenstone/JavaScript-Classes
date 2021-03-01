// breakdown the Array in an array of arrays
// Makes code easier to iterate through

let arrayOfStrings = titanicStr.split ("\n");

// console.log(arrayOfStrings);

let arrayOfAttributes = [];

for ( let i = 0; i < arrayOfStrings.length ; i++) {
    arrayOfAttributes[i] = arrayOfStrings[i].split(',');
};
    console.table(arrayOfAttributes[0][2]);

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

console.table(manifest);

// let bob = new Passenger(1, 3, "Mr. Bob Hardy", "male", 22, 1, 0, 7.25);

// console.log(bob);
// for (let i = 0; i < 2; i++) {
//     let tr = document.getElementsByTagName('tr')[1];
//     let td = document.createElement('td');
//     td.textContent = arrayOfAttributes[i][2];
//     tr.appendChild(td);
//     for( let j= 0; j < arrayOfAttributes.length; j++) {
//        if ( j !== 2 ){
//         let tr = document.getElementsByTagName('tr')[1];
//         let td = document.createElement('td');
//     	td.textContent = arrayOfAttributes[i][j];
//         tr.appendChild(td);
//         console.log(arrayOfAttributes[i][j]);
//        }
//     }
// }
let pssngrTable = document.getElementById("pssngrTable");

for(let i = 0; i < manifest.length; i++){
    let row = document.createElement("tr");
    let colNum = document.createElement("td");
    colNum.textContent = i + 1;
    
    let colName = document.createElement("td");
    colName.textContent = `${manifest[i].name.title} ${manifest[i].name.fname} ${manifest[i].name.lname}`

    let colData = document.createElement("td");
    colData.textContent = `${manifest[i].survived}, ${manifest[i].pclass}, ${manifest[i].sex}, ${manifest[i].age}, ${manifest[i].siblingsSpouses}, ${manifest[i].parentsChildren}, $${manifest[i].fare}`

    row.appendChild(colNum);
    row.appendChild(colName);
    row.appendChild(colData);
    
    pssngrTable.appendChild(row);
}