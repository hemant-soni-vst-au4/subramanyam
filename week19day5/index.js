let change = document.querySelector(".btn");

let count = 0;
async function fetchImage() {
    const data = await fetch('https://dog.ceo/api/breeds/image/random');
    console.log("response", data)
    const image = await data.json();
    console.log("image", image);
    document.getElementById("random").setAttribute("src", image.message);
}
change.onclick = () => {
    count++;
    console.log(count);
    if (count % 2 == 0) {
        console.log("from async await")
        //async await
        fetchImage()

    } else {
        // then and catch
        console.log("from fetch and then")
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                document.getElementById("random").setAttribute("src", data.message);
            })
            .catch((error) => {
                console.error('Error:', error);
              });
    }
}