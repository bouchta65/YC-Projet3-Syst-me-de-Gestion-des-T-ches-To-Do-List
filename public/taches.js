

// let nom = document.querySelector("#nomTache")
// let date = document.querySelector("#datetache")
// let statue = document.querySelector("#statueTach")
// let description = document.querySelector("#descriptionTache")

// console.log(nom,date,statue,description)

// let dataOfTach = []
// document.querySelector("#buttonAjouteTache").addEventListener('click',()=>{
//     let tache = {
//         nom:nom.value,
//         date:date.value,
//         statue:statue.value,
//         description:description.value
//     }

//     dataOfTach.push(tache)
//     localStorage.setItem('tache',JSON.stringify(dataOfTach))
//     console.log(dataOfTach)
// })

// Corrected selectors with correct IDs
let nom = document.querySelector("#nomTache");
let dateTache = document.querySelector("#dateTache");
let statue = document.querySelector("#statueTache");
let description = document.querySelector("#descriptionTache");
let preioriteTache = document.querySelector("#preioriteTache");
let mood = "create";
let tmpI;

let dataOfTach = [];


if(localStorage.tache != null){
    dataOfTach = JSON.parse(localStorage.tache) ;

}else{
    dataOfTach = [];
}


document.querySelector("#formTache").addEventListener('submit' , function(e){
        e.preventDefault(); 
    let tache = {
        nom: nom.value,
        dateTache: dateTache.value,
        statue: statue.value,
        description: description.value,
        preioriteTache:preioriteTache.value
    };
    if(mood === "create"){
        // Add a new task 
        dataOfTach.push(tache);   
    }else{
        dataOfTach[tmpI] = tache
        buttonAjouteTache.innerHTML = "Ajouter votre tâche";
    }
  

    //save updated array to local storage
    localStorage.setItem('tache', JSON.stringify(dataOfTach));
    console.log(dataOfTach);

    clearData();
    showData();
    contTach()

});
function clearData(){
    nom.value = '';
    dateTache.value = '';
    statue.value=''
    description.value='';
}
function showData(){
    let table = '';
    for(let i = 0;i<dataOfTach.length; i++){
     
    table += `        
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    ${dataOfTach[i].nom}
    </th>
    <td class="px-6 py-4">
    ${dataOfTach[i].dateTache}
    </td>
    <td class="px-6 py-4">
    ${dataOfTach[i].statue}
    </td>
    <td class="px-6 py-4">
    ${dataOfTach[i].description}
    </td>
      <td class="px-6 py-4 ${dataOfTach[i].preioriteTache === "P1" ? 'text-red-600' : dataOfTach[i].preioriteTache === "P2" ? 'text-blue-600' : dataOfTach[i].preioriteTache === "P3" ? 'text-yellow-600' : ''}">
    ${dataOfTach[i].preioriteTache}
    </td>
    <td class="flex items-center px-6 py-4">
        <a href="#" onClick="updateData(${i})" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Modifier</a>
        <a href="#" onClick="deleteData(${i})" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Supprimer</a>
    </td>
</tr>`
}
document.querySelector("#tbodyTache").innerHTML = table;

    
}

function deleteData(i){
dataOfTach.splice(i,1);
localStorage.tache = JSON.stringify(dataOfTach)
showData();
contTach()
}

function updateData(i){
    nom.value = dataOfTach[i].nom;
    dateTache.value = dataOfTach[i].dateTache;
    statue.value = dataOfTach[i].statue;
    description.value = dataOfTach[i].description;
    buttonAjouteTache.innerHTML = "Mise a jour votre tâche";
    mood = "update";
    tmpI = i;
    
}
function contTach(){
    let countTaches = document.querySelector("#countTaches")    
    countTaches.innerHTML = dataOfTach.length
}


showData()
contTach()






