let counter = 0;
counter = Number(counter);
document.getElementById('result').textContent = counter;

document.getElementById('btn1').onclick = function () {
    counter--
    document.getElementById('result').textContent = counter;
}

document.getElementById('btn2').onclick = function () {
    counter=0
    document.getElementById('result').textContent = counter;
}

document.getElementById('btn3').onclick = function () {
    counter++
    document.getElementById('result').textContent = counter;
}