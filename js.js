const btn =document.getElementById("btn");
btn.addEventListener("click", click);





function click(){
    const inpu= document.getElementById("inpu").value;
    api(inpu)
    
    
}



async function api(inpu){
    let response = await fetch('https://api.github.com/users/maxsoll159');
    let usuarios = await response.json();
    console.log(usuarios);

}


