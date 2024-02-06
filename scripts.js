function numKey(key){
    document.getElementById('readout').innerHTML += key
};
function backSpace(){
    let content = document.getElementById('readout').innerHTML.split('')
    delete content[content.length-1];
    document.getElementById('readout').innerHTML = content.join("");
};