let arr = []
function push(arr) {
    let x = document.getElementById("stack").value;  
    arr.push(x)
    document.getElementById("output").innerHTML = arr.toString();
}

function pop(arr) {
    arr.pop();
    console.log(arr)
    document.getElementById("output").innerHTML = arr.toString();
}

document.getElementById('push').addEventListener('click', function() {
    push(arr);
});

document.getElementById("pop").addEventListener("click", function() {
   pop(arr)
})




