let readyToAdd = false;
let readyToSubtract = false;
let readyToMultiply = false;
let readyToDivide = false;
let resultGot = false;

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
    sessionStorage.clear();
};
function additionButton(){
        sessionStorage.setItem('firstNumber',document.getElementById('readout').innerHTML);
        document.getElementById('readout').innerHTML = '';
        readyToAdd = true;
};
function subtractionButton(){
    sessionStorage.setItem('firstNumber',document.getElementById('readout').innerHTML);
    document.getElementById('readout').innerHTML = '';
    readyToSubtract = true;
};
function multiplicationButton(){
    sessionStorage.setItem('firstNumber',document.getElementById('readout').innerHTML);
    document.getElementById('readout').innerHTML = '';
    readyToMultiply = true;
};
function divisionButton(){
    sessionStorage.setItem('firstNumber',document.getElementById('readout').innerHTML);
    document.getElementById('readout').innerHTML = '';
    readyToDivide = true;
};
function getResult(){
    if (readyToAdd === true) {
        let result = parseInt(sessionStorage.getItem('firstNumber')) + parseInt(document.getElementById('readout').innerHTML)
        document.getElementById('readout').innerHTML = result
        readyToAdd = false;
        resultGot = true;
    }
    if (readyToSubtract === true) {
        let result = parseInt(sessionStorage.getItem('firstNumber')) - parseInt(document.getElementById('readout').innerHTML)
        document.getElementById('readout').innerHTML = result
        readyToSubtract = false;
        resultGot = true;
    }
    if (readyToMultiply === true) {
        let result = parseInt(sessionStorage.getItem('firstNumber')) * parseInt(document.getElementById('readout').innerHTML)
        document.getElementById('readout').innerHTML = result
        readyToMultiply = false;
        resultGot = true;
    }
    if (readyToDivide === true) {
        let result = parseInt(sessionStorage.getItem('firstNumber')) / parseInt(document.getElementById('readout').innerHTML)
        document.getElementById('readout').innerHTML = result
        readyToDivide = false;
        resultGot = true;
    }
};