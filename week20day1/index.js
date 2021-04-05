const output = () => {
    let enter = document.getElementById('enter').value;
    let diffrent = enter.split(",");
    console.log(diffrent)
    let dist = 0
    if (diffrent.length !== 2) {
        document.getElementById("error").innerHTML = "Please enter two string seperated by comma";
    } else if (diffrent[0].length !== diffrent[1].length) {
        document.getElementById("error").innerHTML = "Strings are not of equal length"
    } else {

        for (let i = 0; i <= diffrent[0].length; i++) {
            if (diffrent[0][i] != diffrent[1][i]) {
                console.log("letter", diffrent[0][i])
                dist++
            }

        }
        document.getElementById("output").innerHTML = dist;
    }

}

document.getElementById("submit").addEventListener('click', output);