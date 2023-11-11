let input__photo = document.querySelector(".input-photo")
let input__name = document.querySelector(".input-name")
let input__job = document.querySelector(".input-job")
let form = document.querySelector("form")



let url = "http://localhost:3000/Persons"

hash = window.location.hash.substring(1) 

form.addEventListener("submit",function (){
  
  history.go(-1)
    fetch(`${url}/${hash}`,{
      
    
        method: "PUT",
        body: JSON.stringify({
          name: input__name.value,
          job: input__job.value,
          photo: input__photo.value,
        }),
        headers: { 
          "Content-type": "application/json; charset=UTF-8"
        },
        
        
    },alert("Updates Changed") )
    
    
    
    
})

fetch(`${url}/${hash}`)
.then((res)=>res.json())
.then(data=>{
  

    input__photo.setAttribute("value",`${data.photo}`)
    input__name.setAttribute("value",`${data.name}`)
    input__job.setAttribute("value",`${data.job}`)
    
 
})
