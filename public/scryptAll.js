document.querySelector("#btn-nav").addEventListener('click',function(){
    const navbarCta = document.getElementById('navbar-cta')
    navbarCta.classList.toggle('hidden');

});

document.querySelector("#btn-modal").addEventListener('click',function(){
    const crudmodal = document.getElementById('crud-modal')
    crudmodal.classList.toggle('hidden') 

})

document.querySelector("#btn-close").addEventListener('click',function(){
    const crudmodal = document.getElementById('crud-modal')
    crudmodal.classList.toggle('hidden')
})

//just for navigation et fermeture 