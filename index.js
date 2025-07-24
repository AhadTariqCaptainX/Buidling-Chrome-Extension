
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadFromLocalStorage) {
    myLeads = leadFromLocalStorage
    render(myLeads)
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

function render(leads){
    let listItems = " "
    for(let i=0; i<leads.length; i++){
        // listItems += "<li><a target = '_blank' href='"+ inputEl.value+ "'>"  + myLeads[i] + "</a></li>" 
        listItems += `
        <li>
            <a target="_blank" href="${leads[i]}">
                ${leads[i]}
            </a>
        </li>
        `
      
        // create element, set text content, append to ul
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems

}

