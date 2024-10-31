document.querySelector("#ajoutTacheToDo").addEventListener('click',()=>{
    const tacheModal = document.querySelector("#ajouteTacheModal")
    tacheModal.classList.toggle("hidden")
})

document.querySelector("#buttonClose").addEventListener('click',()=>{
    const tacheModal = document.querySelector("#ajouteTacheModal")
    tacheModal.classList.add("hidden")
    console.log("good")
})