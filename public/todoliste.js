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
    document.querySelector("#overlay").classList.remove("hidden");
    document.querySelector("#ajouteTacheModal").classList.remove("hidden");
});

document.querySelector("#buttonClose").addEventListener('click', () => {
    document.querySelector("#overlay").classList.add("hidden");
    document.querySelector("#ajouteTacheModal").classList.add("hidden");
    location.reload();
});

document.querySelector("#overlay").addEventListener('click', () => {
    document.querySelector("#overlay").classList.add("hidden");
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

        let tableT = `<li draggable="true" class="border-t border-gray-200 li-class" data-index="${i}">
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
                                        <a id="buttonUpdate' href="#" class="text-indigo-600 hover:text-indigo-500 flex items-center" onclick="updateData(${i})">
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


        if (taskData[i].statue === "ToDO") {
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
    draginDrop();
}



let titreModal = document.querySelector("#titreModall");
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
        titreModal.innerText = "Ajouter de tâche ";
        
    }

    localStorage.setItem('tache', JSON.stringify(dataOfTach));


  
    includData(dataOfTach);
    contTach(dataOfTach)
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
    if (result.length > 0) {
        const originalIndex = dataOfTach.indexOf(result[i]); 
        dataOfTach.splice(originalIndex, 1); 
        localStorage.setItem('tache', JSON.stringify(dataOfTach));
        location.reload()
       
    } else {
        dataOfTach.splice(i, 1); 
        localStorage.setItem('tache', JSON.stringify(dataOfTach));
        includData(dataOfTach)
        contTach(dataOfTach);
    }
}
function updateData(i) {
    const tacheModal = document.querySelector("#ajouteTacheModal");
    tacheModal.classList.toggle("hidden");
    document.querySelector("#overlay").classList.remove("hidden");

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
    titreModal.innerText = "Mise a jour de tâche";
    mood = "update";
    tmpI = originalIndex; 

    if (result.length === 0) {
        includData(dataOfTach);
        contTach(dataOfTach);
    }
}



let result = [];

document.querySelector("#recherchebut").addEventListener('click',()=>{
    result = [];
    let rechercherTach = document.querySelector("#rechercheTache").value;
    
    for(let i=0;i<dataOfTach.length;i++){
        
        if (dataOfTach[i].nom.toLowerCase().includes(rechercherTach.toLowerCase())){
            result.push(dataOfTach[i])
            includData(result)
            contTach(result)
        }
    }
   
})


function contTach(table){
    let countTaches = document.querySelector("#countTaches")    
    let countTODO = 0;
    let countDoing = 0;
    let countDone = 0;
    for(let i = 0;i<table.length;i++){
        if(table[i].statue === "ToDO"){
            countTODO++;
        }else if(table[i].statue === "Doing"){
            countDoing++;
        }else if(table[i].statue === "Done"){
            countDone++  ;
        }
    }

    countTaches.innerHTML = table.length
    document.querySelector("#countTodo").innerHTML = countTODO
    document.querySelector("#countDoing").innerHTML = countDoing
    document.querySelector("#countDone").innerHTML = countDone

}
contTach(dataOfTach)





function filtrage(){
    
    document.querySelector("#prioriteFilter").addEventListener('click',()=>{
        prioriteFilter.style.backgroundColor = '#ebeded'
        prioriteFilter.style.color = 'black'
        dateFilter.style.backgroundColor = ''
        dateFilter.style.color = ''
        alphabetFilter.style.backgroundColor = ''
        alphabetFilter.style.color = ''

        let tableP1 =[];
        let tableP2 =[];
        let tableP3 =[];
        let tacheFiltre = [];
    
        for(let i = 0 ; i<dataOfTach.length;i++){
            if(dataOfTach[i].preioriteTache === "P1"){
                tableP1.push(dataOfTach[i]);    
            }else if(dataOfTach[i].preioriteTache === "P2"){
                tableP2.push(dataOfTach[i]);   
            }else{
                tableP3.push(dataOfTach[i]);   
            }
        }
        dataOfTach = [...tableP1, ...tableP2, ...tableP3];
        includData(dataOfTach)
    })



    
    document.querySelector("#dateFilter").addEventListener('click',()=>{
        dateFilter.style.backgroundColor = '#ebeded'
        dateFilter.style.color = 'black'
         prioriteFilter.style.backgroundColor = ''
        prioriteFilter.style.color = ''
         alphabetFilter.style.backgroundColor = ''
        alphabetFilter.style.color = ''
   
        for(let i =0 ;i<dataOfTach.length;i++){
            for(let j = i+1 ; j<dataOfTach.length;j++){
                if(dataOfTach[i].dateTache < dataOfTach[j].dateTache){
                    let tmp = dataOfTach[i];
                    dataOfTach[i] = dataOfTach[j];
                    dataOfTach[j] = tmp;
                }
            }
        }
        includData(dataOfTach)
    })




    document.querySelector("#alphabetFilter").addEventListener('click',()=>{
        alphabetFilter.style.backgroundColor = '#ebeded'
        alphabetFilter.style.color = 'black'
        dateFilter.style.backgroundColor = ''
        dateFilter.style.color = ''
         prioriteFilter.style.backgroundColor = ''
        prioriteFilter.style.color = ''
        for(let i = 0 ; i<dataOfTach.length;i++){
             for(let j = i+1 ; j<dataOfTach.length;j++){
                if(dataOfTach[i].nom.toLowerCase() > dataOfTach[j].nom.toLowerCase()){
                let tmp = dataOfTach[i];
                dataOfTach[i] = dataOfTach[j];
                dataOfTach[j] = tmp;
              }}
        }
        includData(dataOfTach)
    })
}
filtrage()




let drag = null;
let dragIndex = null;
function draginDrop() {
    const taches = document.querySelectorAll(".li-class");
    const boxs = document.querySelectorAll(".ul-class");

    taches.forEach(tache => {
        tache.addEventListener('dragstart', function() {
            drag = tache;
            tache.style.opacity = '0.5';
        });

        tache.addEventListener('dragend', function() {
            drag = null;
            tache.style.opacity = '1';
        });
    });

    for (let i = 0; i < boxs.length; i++) {
        boxs[i].addEventListener('dragover', function(e) {
            e.preventDefault();
        });

        boxs[i].addEventListener('dragleave', function() { });

        boxs[i].addEventListener('drop', function() {
            this.append(drag);
            const ulId = this.id;
            const dragIndex = parseInt(drag.getAttribute("data-index"));

            if (ulId === "tachesTodo") {
                dataOfTach[dragIndex].statue = "ToDO";
                localStorage.setItem('tache', JSON.stringify(dataOfTach));
            } else if (ulId === "tachesDoing") {
                dataOfTach[dragIndex].statue = "Doing";
                localStorage.setItem('tache', JSON.stringify(dataOfTach));
            } else if(ulId === "tachesDone"){
                dataOfTach[dragIndex].statue = "Done";
                localStorage.setItem('tache', JSON.stringify(dataOfTach));
            }
            includData(dataOfTach);
            contTach(dataOfTach)

     
            
        });
    }
}