let div1 = document.getElementById("item1");
let div2 = document.getElementById("item2");
let div3 = document.getElementById("item3");
let div4 = document.getElementById("item4");
let div5 = document.getElementById("item5");
let div6 = document.getElementById("item6");

function colors() {
   let random1 = Math.random().toString(16).slice(2,8);
   let random2 = Math.random().toString(16).slice(2,8);
   let random3 = Math.random().toString(16).slice(2,8);
   let random4 = Math.random().toString(16).slice(2,8);
   let random5 = Math.random().toString(16).slice(2,8);
   let random6 = Math.random().toString(16).slice(2,8);
   
   div1.innerHTML = random1;
   div1.style.backgroundColor = `#${random1}` 

   div2.innerHTML = random1;
   div2.style.backgroundColor = `#${random2}` 

   div3.innerHTML = random1;
   div3.style.backgroundColor = `#${random3}` 

   div4.innerHTML = random1;
   div4.style.backgroundColor = `#${random4}` 

   div5.innerHTML = random1;
   div5.style.backgroundColor = `#${random5}` 

   div6.innerHTML = random1;
   div6.style.backgroundColor = `#${random6}` 
    
}

document.getElementById("generate").addEventListener('click', colors);