
let calculate = () => {
    let minBox = document.querySelector('#min');
    let maxBox = document.querySelector('#max');
    
    minBox.value = rangeBox.value;
}

// ranege Box

let rangeBox = document.querySelector('#range');
rangeBox.addEventListener('input', function(){
    calculate();
});