let input__photo = document.querySelector(".input-photo")
let input__name = document.querySelector(".input-name")
let input__job = document.querySelector(".input-job")
let form = document.querySelector("form")




form.addEventListener("submit",function () {
  let url = "http://localhost:3000/Persons"
if (input__name.value && input__job.value && input__photo.value) {
  
  history.back()
  fetch(url,{
      
    
    method: "POST",
    body: JSON.stringify({
      name: input__name.value,
      job: input__job.value,
      photo: input__photo.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
   
    
} )

alert("Form submitted succsessfully")






}
else{
  alert("Can't create a new card please fill the values")
  
}
    
    
    
} )

  
  




  // location.replace("adminPanel.html")
  
