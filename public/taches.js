
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
    showData(dataOfTach);

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
        dataOfTach.push(tache);   
    }else{
        dataOfTach[tmpI] = tache
        buttonAjouteTache.innerHTML = "Ajouter votre tâche";
    }
  

    localStorage.setItem('tache', JSON.stringify(dataOfTach));

    clearData();
    showData(dataOfTach);
    contTach()
    location.reload();

});
function clearData(){
    nom.value = '';
    dateTache.value = '';
    statue.value=''
    description.value='';
}
function showData(taskArray) {
    let table = '';
    for (let i = 0; i < taskArray.length; i++) {
        table += `        
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ${taskArray[i].nom}
            </th>
            <td class="px-6 py-4">
                ${taskArray[i].dateTache}
            </td>
            <td class="px-6 py-4">
                ${taskArray[i].statue}
            </td>
            <td class="px-6 py-4">
                ${taskArray[i].description}
            </td>
            <td class="px-6 py-4 ${taskArray[i].preioriteTache === "P1" ? 'text-red-600' : taskArray[i].preioriteTache === "P2" ? 'text-blue-600' : taskArray[i].preioriteTache === "P3" ? 'text-yellow-600' : ''}">
                ${taskArray[i].preioriteTache}
            </td>
            <td class="flex items-center px-6 py-4">
                <a href="#" onClick="updateData(${i})" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Modifier</a>
                <a href="#" onClick="deleteData(${i})" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Supprimer</a>
            </td>
        </tr>`;
    }
    document.querySelector("#tbodyTache").innerHTML = table;
}

function deleteData(i){
    if (result.length > 0) {
        result.splice(i, 1); 

        const originalIndex = dataOfTach.indexOf(result[i]); 

        dataOfTach.splice(originalIndex, 1); 
        
        localStorage.setItem('tache', JSON.stringify(dataOfTach));
        location.reload()
       
    } else {
        dataOfTach.splice(i, 1); 
        localStorage.setItem('tache', JSON.stringify(dataOfTach));
        showData(dataOfTach)
        contTach();
    }
}

function updateData(i){
    let task;
    let originalIndex;

    if (result.length > 0) {
        originalIndex = dataOfTach.indexOf(result[i]); 
        task = dataOfTach[originalIndex];
    } else {
        task = dataOfTach[i];
        originalIndex = i; 
    }

    nom.value = task.nom;
    dateTache.value = task.dateTache;
    statue.value = task.statue;
    description.value = task.description;
    preioriteTache.value = task.preioriteTache;

    buttonAjouteTache.innerHTML = "Mise a jour votre tâche";
    mood = "update";
    tmpI = originalIndex; 

    if (result.length === 0) {
        showData(dataOfTach);
        contTach();
    }
    
}
function contTach(){
    let countTaches = document.querySelector("#countTaches")    
    countTaches.innerHTML = dataOfTach.length
}



contTach()


let result = [];

document.querySelector("#recherchebut").addEventListener('click',()=>{
    result = [];
    let rechercherTach = document.querySelector("#rechercheTache").value;
    
    for(let i=0;i<dataOfTach.length;i++){
        
        if (dataOfTach[i].nom.toLowerCase().includes(rechercherTach.toLowerCase())){
            result.push(dataOfTach[i])
            showData(result)
            
        }
    }
   
})



window.onload = function() {
    showData(dataOfTach);
    contTach()
};






