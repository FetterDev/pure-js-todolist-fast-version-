const taskStorage=[];

document.addEventListener('click',function(event){
    let target =event.target;
    if(target.id=="addtaskbutton"){
       let textForNewTask = document.getElementById("textfornewtask").value;
       let tempIdForNewTask = Date.now()
        let tempObjectForNewTask = {
            text : textForNewTask,
            status: false,
            id: tempIdForNewTask
        }
        taskStorage.push(tempObjectForNewTask)
       render();
    }

});
const taskBuilder = function(taskText){
    let listItem = document.createElement("li")
    let checkBox = document.createElement("input")
    let textBox = document.createElement('input')
    let deliteButton= document.createElement("img")
    listItem.classList.add("list-elm")
    textBox.classList.add("task-text-area")
    deliteButton.src="delpic.png"
    textBox.value=taskText;
    checkBox.type="checkbox"
    listItem.appendChild(checkBox)
    listItem.appendChild(textBox)
    listItem.appendChild(deliteButton)
    return(listItem)
}
const render = function(){
    let startTaskList = document.getElementById("starttasklist");
    startTaskList.textContent = '';
    taskStorage.forEach(element => {
        let newTask = taskBuilder(element.text);
        startTaskList.appendChild(newTask);

    });
}