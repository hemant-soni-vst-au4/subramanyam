let loan_amount = document.querySelector("#month");
loan_amount.oninput = (e) => {
    let amount = parseInt(document.getElementById("amount").value);
    console.log(amount);
    let rate = parseInt(document.getElementById('interest').value);
    console.log(rate)
    let month = parseInt(e.target.value);
    console.log(month);
    let sum = amount + (amount*(rate/100)*month)

    document.getElementById('output').innerHTML = sum;
}
