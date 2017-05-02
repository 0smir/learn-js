/**
 * Created by Olga on 5/2/17.
 */
var salaryTable = {
    'Ivanov': 100,
    'Petrov': 200,
    'Sidorov': 300,
    'Vasukov': 400
};


console.log(salaryTable);


var salarSum = 0;


function isEmpty(){
    for(person in salaryTable){
        return false;
    }
    return true;
}

console.log(isEmpty());

function showSalar(){
    if(isEmpty() === true){
        console.log('Salary list empty!')
    } else {
        for(person in salaryTable){
            var salarIndividual = salaryTable[person];
            salarSum = salarSum + salarIndividual;
        }
        console.log(salarSum);
    }

}
showSalar();