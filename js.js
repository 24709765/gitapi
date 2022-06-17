const btn =document.getElementById("btn");
btn.addEventListener("click", click);





function click(){
    const inpu= document.getElementById("inpu").value;
    api(inpu)
    
    
}



async function api(inpu){
   
    if(inpu === undefined){
      let response = await fetch(`https://api.github.com/users/24709765`);
      let usuarios = await response.json();
      console.log(usuarios);
      pintar(usuarios);
    }else{
      let response = await fetch(`https://api.github.com/users/${inpu}`);
      let usuarios = await response.json();
      console.log(usuarios);
      pintar(usuarios);
    }
}

api()

function pintar(usuarios){
   const foto = document.querySelector("#foto");
   foto.innerHTML=` 
   <img  
   src="${usuarios.avatar_url}" class="col-3" class=" img rounded-circle " id="hola" alt="">

  <div class=" col-6">
      <h2 class="guille">${usuarios.name}</h2>
      <h6>@${usuarios.bio}</h6>>
      <p class="fron"> front end- developer</p>
  
</div>
  <div class="col-2">
      <p>${usuarios.created_at}</p>
  </div>`
  
}

