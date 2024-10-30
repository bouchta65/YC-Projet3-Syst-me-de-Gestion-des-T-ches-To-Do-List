document.querySelector("#btn-nav").addEventListener('click',function(){
    const navbarCta = document.getElementById('navbar-cta')
    navbarCta.classList.toggle('hidden');

});



//just for navigation et fermeture 


// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelector("#myForm").addEventListener("submit", function(e) {
//         e.preventDefault(); // Prevent form submission

//         let table = document.querySelector("#myTable");
//         let row = table.insertRow();
//         var cel1 = row.insertCell();
//         var cel2 = row.insertCell();
//         var cel3 = row.insertCell();

//         // Accessing input values
//         cel1.innerText = document.querySelector("#input1").value;
//         cel2.innerText = document.querySelector("#input2").value;
//         cel3.innerText = document.querySelector("#input3").value;
//     });
// });


document.getElementById("buttonAjouteTache").addEventListener("click", () => {
    let table = document.getElementById("tableTache").getElementsByTagName("tbody")[0];
    
    let row = table.insertRow();
    row.classList.add("bg-white", "border-b", "dark:bg-gray-800", "dark:border-gray-700", "hover:bg-gray-50", "dark:hover:bg-gray-600"); // Add classes to <tr>

    let cell1 = row.insertCell();
    cell1.classList.add("px-6", "py-4", "font-medium", "text-gray-900", "whitespace-nowrap", "dark:text-white"); // Add classes to <td>
    cell1.textContent = document.getElementById("nomTache").value;

    let cell2 = row.insertCell();
    cell2.classList.add("px-6", "py-4");
    cell2.textContent = document.getElementById("dateTache").value;

    let cell3 = row.insertCell();
    cell3.classList.add("px-6", "py-4");
    cell3.textContent = document.getElementById("statueTache").value;

    let cell4 = row.insertCell();
    cell4.classList.add("px-6", "py-4");
    cell4.textContent = document.getElementById("descriptionTache").value;

    let cell5 = row.insertCell();
    cell5.classList.add("px-6", "py-4", "flex", "items-center");
    cell5.innerHTML = `
        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
    `;
});


