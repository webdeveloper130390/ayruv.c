var h1 = document.querySelector('#result');
var elSelect = document.querySelector('#selectNumber');
var elInp = document.querySelector('#inputNumber');

function calculator() {
    var selectValue = elSelect.value
    var inpValue = elInp.value
    var result = inpValue / selectValue

    h1.textContent = "Javob : " + result
}