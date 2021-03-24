let arr = [];

function add(arr) {
   let inp = document.getElementById("input").value;
   arr.push(inp)
   document.getElementById("output").innerHTML = arr.toString();

}

function remove(arr) {
  arr.shift();
  document.getElementById("output").innerHTML = arr.toString();
}

document.getElementById("add").addEventListener('click', function() {
   add(arr)
})

document.getElementById("remove").addEventListener('click', function() {
  remove(arr)
})