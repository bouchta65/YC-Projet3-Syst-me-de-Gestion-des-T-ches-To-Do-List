document.querySelector("#ajoutTacheToDo").addEventListener('click',()=>{
    const tacheModal = document.querySelector("#ajouteTacheModal")
    tacheModal.classList.toggle("hidden")
})

document.querySelector("#buttonClose").addEventListener('click',()=>{
    const tacheModal = document.querySelector("#ajouteTacheModal")
    tacheModal.classList.add("hidden")
    console.log("good")
})

const tachesfromtables = JSON.parse(localStorage.getItem("tache")) || [];


function includData(){
    let TODO = ""
    let DOING = ""
    let DONE = ""
    for(let i = 0 ; i<tachesfromtables.length;i++){

        if(tachesfromtables[i].statue == "To DO"){
            TODO+=
            ` <li class="border-t border-gray-200">
              <div class="px-4 py-5 sm:px-6">
                  <div class="flex items-center justify-between">
                      <h3 class="text-lg leading-6 font-medium text-gray-900">${tachesfromtables[i].nom}</h3>
                      <p class="mt-1 max-w-2xl text-sm text-gray-500">${tachesfromtables[i].dateTache}</p>
                  </div>
                  <div class="mt-4 flex items-center justify-between">
                      <p class="text-sm font-medium text-gray-500">Status: <span class="text-yellow-600">${tachesfromtables[i].statue}</span></p>
                      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Modifier</a>
                  </div>
              </div>
       </li>
            `
          }else if(tachesfromtables[i].statue == "Doing"){
            DOING+=
            ` <li class="border-t border-gray-200">
              <div class="px-4 py-5 sm:px-6">
                  <div class="flex items-center justify-between">
                      <h3 class="text-lg leading-6 font-medium text-gray-900">${tachesfromtables[i].nom}</h3>
                      <p class="mt-1 max-w-2xl text-sm text-gray-500">${tachesfromtables[i].dateTache}</p>
                  </div>
                  <div class="mt-4 flex items-center justify-between">
                      <p class="text-sm font-medium text-gray-500">Status: <span class="text-yellow-600">${tachesfromtables[i].statue}</span></p>
                      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Modifier</a>
                  </div>
              </div>
       </li>
            `   
          }else{
            DONE+=
            `   <li class="border-t border-gray-200">
                            <div class="flex items-center px-4 py-5 sm:px-6">
                                <div class="bg-red-700 w-1 h-12"></div>
                                <div class="ml-2 w-full"> <!-- Added w-full here -->
                                    <div class="flex items-center justify-between w-full"> <!-- Added w-full here -->
                                        <h3 class="text-lg leading-6 font-medium text-gray-900">nom</h3>
                                        <p class="mt-1 max-w-2xl text-sm text-gray-500">dateTache</p>
                                    </div>
                                    <div class="mt-4 flex items-center justify-between w-full"> <!-- Added w-full here -->
                                        <p class="text-sm font-medium text-gray-500">Status: <span class="text-yellow-600">statue</span></p>
                                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Modifier</a>
                                    </div>
                                </div>
                            </div>
                </li>
            `
        
          }
        }

    document.querySelector("#tachesCard").innerHTML = TODO;
    // document.querySelector("#tachesCard").innerHTML = DOING;
    // document.querySelector("#tachesCard").innerHTML = DONE;
}

includData()

