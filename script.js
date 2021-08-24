let taskStorage=[];

document.addEventListener('click',function(event){
    let target =event.target;
    let emptyTextChecker = document.getElementById("textfornewtask");
    if(target.id=="addtaskbutton" && emptyTextChecker.value=="" ){
        alert("Add some text for your new task!")
    }
    if(target.id=="addtaskbutton" && emptyTextChecker.value!=""){
       let textForNewTask = document.getElementById("textfornewtask").value;
       let tempIdForNewTask = Date.now()
        let tempObjectForNewTask = {
            text : textForNewTask,
            status: false,
            id: tempIdForNewTask
        }
        taskStorage.push(tempObjectForNewTask)
       render();
       emptyTextChecker.value="" ;
       emptyTextChecker.placeholder="Add text for you new task" ;
    }
    if(target.type =="checkbox" ){
        let tempTaskHolder = taskStorage.find(Object=>Object.id==target.parentElement.id);
        if(tempTaskHolder.status==0){
            target.parentElement.classList.add("done-task-style")
            tempTaskHolder.status=true;
        }else{
            target.parentElement.classList.remove("done-task-style")
            tempTaskHolder.status=false;
        }
        
    }
    if(target.id=="deliteButton"){
        taskStorage = taskStorage.filter(Object=>Object.id!=target.parentElement.id)
        render()
    }
});
const taskBuilder = function(taskText,status,id){
    let listItem = document.createElement("li")
    let checkBox = document.createElement("input")
    let textBox = document.createElement('input')
    let deliteButton= document.createElement("img")
    listItem.classList.add("list-elm")
    textBox.classList.add("task-text-area")
    deliteButton.src="delpic.png"
    deliteButton.id = "deliteButton"
    textBox.value=taskText;
    checkBox.type="checkbox"
    if(status==1){
        listItem.classList.add("done-task-style");
        checkBox.setAttribute('checked', true);

    }
    listItem.id=id;
    listItem.appendChild(checkBox)
    listItem.appendChild(textBox)
    listItem.appendChild(deliteButton)
    
    return(listItem)
}
const render = function(){
    let startTaskList = document.getElementById("starttasklist");
    startTaskList.textContent = '';
    taskStorage.forEach(element => {
        let newTask = taskBuilder(element.text,element.status,element.id);
        startTaskList.appendChild(newTask);

    });
}
document.addEventListener('keypress',function(event){
    if(event.code== "Enter"){
        let addNewTaskButtonTrigger = document.getElementById("addtaskbutton");
        addNewTaskButtonTrigger.click();
    }
})
