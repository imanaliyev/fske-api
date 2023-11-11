let url = "http://localhost:3000/Persons"
let container = document.querySelector(".container")
fetch(url)
.then((res) => res.json())
.then(data =>{
   
    data.forEach(element => {
        CreateCards(element.photo,element.name,element.job)  
        function CreateCards(id,name,job,photo) {
            let table_id = document.createElement("div")
            let table_img = document.createElement("div")
            let table_name = document.createElement("div")
            let table_job = document.createElement("div")
            let table_update = document.createElement("div")
            let table_delete = document.createElement("div")
            let table_header = document.createElement("div") 

            table_header.classList.add("table-header")
            table_id.classList.add("table-id")
            table_img.classList.add("table-img")
            table_name.classList.add("table-name")
            table_job.classList.add("table-job")
            table_update.classList.add("table-update")
            table_delete.classList.add("table-delete")

            let card_id = document.createElement("div")
            let card_name = document.createElement("div")
            let card_job = document.createElement("div")
            let card_photo = document.createElement("img")
            let update = document.createElement("button")
            let del = document.createElement("button")

            update.classList.add("go__homePage")
            del.classList.add("go__homePage")
            

            card_photo.classList.add("card_photo")

           

            table_id.append(card_id)
            table_img.append(card_photo)
            table_name.append(card_name)
            table_job.append(card_job)
            table_update.append(update)
            table_delete.append(del)

            table_header.append(table_id,table_img,table_name,table_job,table_update,table_delete);
            container.appendChild(table_header)

           

            card_photo.setAttribute("src",element.photo)
        
            card_name.textContent = element.name
            card_job.textContent = element.job   
            card_id.textContent = element.id
            update.innerHTML = `Update`
            del.innerHTML = "Delete"

            update.addEventListener("click",function () {
                location.href=`http://127.0.0.1:5500/updateUser.html#${element.id}`
               })

         

            function deleteItem() {
                del.addEventListener("click",function () {
                    fetch(`${url}/${element.id}`,{method:"Delete"})
                    .then(res=> res.json())
                    
                    
                })
                
            }
           
            
            deleteItem()
           
        
           
            
          
            
            
        } 
    });
    
    
    
    
})



