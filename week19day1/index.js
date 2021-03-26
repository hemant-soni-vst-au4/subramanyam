

const backSpace = () => {
    const input1 = document.querySelector("#input1").value;
    let arr = []
    console.log("input", input1);
    for (let i = 0; i < input1.length; i++) {
        if (input1[i] === "#") {
          arr.pop();
        } else {
          arr.push(input1[i]);
          console.log("arr", arr);
        }

      }
      document.getElementById("output").innerHTML = arr.join(" ")
}




document.querySelector("#submit").addEventListener('click', backSpace);