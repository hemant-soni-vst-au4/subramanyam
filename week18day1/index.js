function add() {
    let x = parseInt(document.getElementById('number1').value);
    let y = parseInt(document.getElementById('number2').value);
    console.log(x+y)

    document.getElementById('output').innerHTML = x+y;
    return false;
}

document.getElementById('sum').addEventListener('click', add);