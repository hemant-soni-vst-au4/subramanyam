const add = () => {
    let x = parseInt(document.getElementById('number1').value);
    let y = parseInt(document.getElementById('number2').value);

    document.getElementById('output').innerHTML = x+y;
    return false;
}

document.getElementById('sum').addEventListener('click', add);


