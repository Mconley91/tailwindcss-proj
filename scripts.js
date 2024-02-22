let readyToAdd = false;
let readyToSubtract = false;
let readyToMultiply = false;
let readyToDivide = false;
let resultGot = false;
let result;

function numKey(key){
    if (resultGot === true){
        document.getElementById('readout').innerHTML = '';
        resultGot = false;
    };
    document.getElementById('readout').innerHTML += key
};
function backSpace(){
    let content = document.getElementById('readout').innerHTML.split('')
    delete content[content.length-1];
    document.getElementById('readout').innerHTML = content.join("");
};
function clearReadout(){
    document.getElementById('readout').innerHTML = "";
    document.getElementById('results-readout').innerHTML = "";
    result = "";
    sessionStorage.clear();
};
function additionButton(){
    sessionStorage.setItem('storedNumber',document.getElementById('readout').innerHTML);
    document.getElementById('results-readout').innerHTML = document.getElementById('readout').innerHTML + " +";
    document.getElementById('readout').innerHTML = '';
    readyToAdd = true;
    resultGot = false;
};
function subtractionButton(){
    sessionStorage.setItem('storedNumber',document.getElementById('readout').innerHTML);
    document.getElementById('results-readout').innerHTML = document.getElementById('readout').innerHTML + " -";
    document.getElementById('readout').innerHTML = '';
    readyToSubtract = true;
    resultGot = false;
};
function multiplicationButton(){
    sessionStorage.setItem('storedNumber',document.getElementById('readout').innerHTML);
    document.getElementById('results-readout').innerHTML = document.getElementById('readout').innerHTML + " x";
    document.getElementById('readout').innerHTML = '';
    readyToMultiply = true;
    resultGot = false;
};
function divisionButton(){
    sessionStorage.setItem('storedNumber',document.getElementById('readout').innerHTML);
    document.getElementById('results-readout').innerHTML = document.getElementById('readout').innerHTML + " /";
    document.getElementById('readout').innerHTML = '';
    readyToDivide = true;
    resultGot = false;
};
function getResult(){
    if (readyToAdd === true) {
        result = parseInt(sessionStorage.getItem('storedNumber')) + parseInt(document.getElementById('readout').innerHTML);
        readyToAdd = false;
    }
    if (readyToSubtract === true) {
        result = parseInt(sessionStorage.getItem('storedNumber')) - parseInt(document.getElementById('readout').innerHTML);
        readyToSubtract = false;
    }
    if (readyToMultiply === true) {
        result = parseInt(sessionStorage.getItem('storedNumber')) * parseInt(document.getElementById('readout').innerHTML);
        readyToMultiply = false;
    }
    if (readyToDivide === true) {
        result = parseInt(sessionStorage.getItem('storedNumber')) / parseInt(document.getElementById('readout').innerHTML);
        readyToDivide = false;
    }
    document.getElementById('results-readout').innerHTML = result;
    document.getElementById('readout').innerHTML = result;
    resultGot = true;
};