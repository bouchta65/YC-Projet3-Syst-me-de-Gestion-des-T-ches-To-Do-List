
document.querySelector("#btn-nav").addEventListener('click',function(){
    const navbarCta = document.getElementById('navbar-cta')
    navbarCta.classList.toggle('hidden');

});

document.querySelector("#button-nav").addEventListener('click',function(){
    const sidebar = document.getElementById('default-sidebar')
    sidebar.classList.toggle('show');
});

document.querySelector("#close-slidbar").addEventListener('click',function(){
    const sidebar = document.getElementById('default-sidebar')
    sidebar.classList.toggle('show');
});







