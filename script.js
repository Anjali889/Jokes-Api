const btnEl =document.getElementById("btn");
const apikey = "KR6dtsweIol5//CL516C2g==YQHwZrs4UtizkcVX";
const jokeEl = document.getElementById("joke"); 
const options = {
    method:"GET",
    headers:{
        "X-Api-Key":apikey,
    },
 };
 const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

 async function getjoke(){
    //console.log("clicked")
    try {
    jokeEl.innerText= "Updating.."
    btnEl.disabled = true;
    btnEl.innerText = "Loading.."
    const response =  await fetch(apiURL,options)
    const data = await response.json()
    btnEl.disabled = false;
    btnEl.innerText = "Tell Me a Joke"

    jokeEl.innerText = data[0].joke
        
    } catch (error) {
        console.log(error);
        jokeEl.innerText="Try again later"
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me a Joke"
    
    }
    
    // console.log(data[0]);
}
btnEl.addEventListener("click",getjoke);
 

//  const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
