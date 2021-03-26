const backSpace = () => {
    let input1 = document.querySelector('#input1').value;
    let arr = [];
    for (let i = 0; i < input1.length; i++) {
        if (input1[i] === '#') {
            arr.pop()
        } else {
            arr.push(input1[i])
        }
        console.log("arr", arr)
    }
    document.querySelector("#output").innerHTML = arr.join("")
}

document.querySelector("#submit").addEventListener('click', backSpace);










































