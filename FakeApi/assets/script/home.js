let container = document.querySelector(".container")
fetch("http://localhost:3000/Persons")
.then((res) => res.json())
.then(data =>{
    console.log(data);
    data.forEach(element => {
        CreateCards(element.photo,element.name,element.job)  
        function CreateCards(name,job,photo) {
            let card = document.createElement("div")
            let card_name = document.createElement("div")
            let card_job = document.createElement("div")
            let card_photo = document.createElement("img")

            card.classList.add("card")

            card_photo.setAttribute("src",element.photo)
        
            card_name.textContent = element.name
            card_job.textContent = element.job     
        
           
            card.append(card_photo,card_name,card_job)
            container.appendChild(card)
            
            
        } 
    });
    
    
    
    
})



