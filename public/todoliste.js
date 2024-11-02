window.onload = function() {
    includData(dataOfTach);
};


let nom = document.querySelector("#nomTache");
let dateTache = document.querySelector("#dateTache");
let statue = document.querySelector("#statueTache");
let description = document.querySelector("#descriptionTache");
let preioriteTache = document.querySelector("#preioriteTache");
let mood = "create";
let tmpI;
document.querySelector("#ajoutTache").addEventListener('click', () => {
    const tacheModal = document.querySelector("#ajouteTacheModal");
    tacheModal.classList.toggle("hidden");
});

document.querySelector("#buttonClose").addEventListener('click', () => {
    const tacheModal = document.querySelector("#ajouteTacheModal");
    tacheModal.classList.add("hidden");
    console.log("good");
});

let dataOfTach = JSON.parse(localStorage.getItem("tache")) || [];

function includData(taskData) {
    let priorityClass;
    let priorityColor;

    let TODO = "";
    let DOING = "";
    let DONE = "";

    for (let i = 0; i < taskData.length; i++) {
        switch (taskData[i].preioriteTache) {
            case 'P1':
                priorityClass = 'text-red-600';
                priorityColor = 'bg-red-600';
                break;
            case 'P2':
                priorityClass = 'text-orange-400';
                priorityColor = 'bg-orange-400';
                break;
            case 'P3':
                priorityClass = 'text-green-600';
                priorityColor = 'bg-green-600';
                break;
        }

        let tableT = `<li class="border-t border-gray-200">
                        <div class="flex items-center px-4 py-5 sm:px-6">
                            <div class="w-1 h-12 ${priorityColor}"></div>
                            <div class="ml-2 w-full"> 
                                <div class="flex items-center justify-between w-full"> 
                                    <h3 class="text-lg leading-6 font-medium text-gray-900">${taskData[i].nom}</h3>
                                    <p class="mt-1 max-w-2xl text-sm text-gray-500">${taskData[i].dateTache}</p>
                                </div>
                                <div class="mt-4 flex items-center justify-between w-full"> 
                                    <p class="text-sm font-medium text-gray-500">Priorité: <span class="${priorityClass}">${taskData[i].preioriteTache}</span></p>
                                    <div class="flex items-center space-x-3"> 
                                        <a href="#" class="text-indigo-600 hover:text-indigo-500 flex items-center" onclick="updateData(${i})">
                                            <i class="fas fa-edit fa-lg"></i> 
                                        </a>
                                        <a href="#" class="text-red-600 hover:text-red-500 flex items-center" onclick="deleteData(${i})">
                                            <i class="fas fa-trash fa-lg"></i> 
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>`;


        if (taskData[i].statue === "To DO") {
            TODO += tableT;
        } else if (taskData[i].statue === "Doing") {
            DOING += tableT;
        } else {
            DONE +=tableT;
        }
    }

    document.querySelector("#tachesTodo").innerHTML = TODO;
    document.querySelector("#tachesDoing").innerHTML = DOING;
    document.querySelector("#tachesDone").innerHTML = DONE;
}





document.querySelector("#buttonAjouteTache").addEventListener('click', () => {

    let tache = {
        nom: nom.value,
        dateTache: dateTache.value,
        statue: statue.value,
        description: description.value,
        preioriteTache: preioriteTache.value
    };

    if (mood === "create") {
        dataOfTach.push(tache);
    } else {
        dataOfTach[tmpI] = tache;
        buttonAjouteTache.innerHTML = "Ajouter votre tâche";
    }

    localStorage.setItem('tache', JSON.stringify(dataOfTach));
    console.log(dataOfTach);

  
    includData(dataOfTach);
    contTach()
    clearData();
    location.reload();
});

function clearData() {
    nom.value = '';
    dateTache.value = '';
    statue.value = '';
    description.value = '';
}

function deleteData(i) {
    dataOfTach.splice(i, 1);
    localStorage.setItem('tache', JSON.stringify(dataOfTach)); 
    includData(dataOfTach); 
}

function updateData(i) {
    const tacheModal = document.querySelector("#ajouteTacheModal");
    tacheModal.classList.toggle("hidden");
    nom.value = dataOfTach[i].nom;
    dateTache.value = dataOfTach[i].dateTache;
    statue.value = dataOfTach[i].statue;
    description.value = dataOfTach[i].description;
    preioriteTache.value = dataOfTach[i].preioriteTache;
    buttonAjouteTache.innerHTML = "Mise a jour votre tâche";
    mood = "update";
    tmpI = i;
}











document.querySelector("#recherchebut").addEventListener('click',()=>{
    let rechercherTach = document.querySelector("#rechercheTache").value;
    let result = [];
    for(i=0;i<dataOfTach.length;i++){
        if (dataOfTach[i].nom.toLowerCase().includes(rechercherTach.toLowerCase())){
            result.push(dataOfTach[i])
            includData(result)
        }
    }
   
})


function contTach(){
    let countTaches = document.querySelector("#countTaches")    
    countTaches.innerHTML = dataOfTach.length
}
contTach()