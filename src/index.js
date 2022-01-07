import initialPageLoad from "./modules/ui";
import Task from "./modules/task";
import createTask from "./modules/create-task"

initialPageLoad();


const newTask = new Task("Exercise", "You gotta do it", "1/6/22")

createTask(newTask);