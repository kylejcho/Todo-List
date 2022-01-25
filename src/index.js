import initialPageLoad from "./modules/ui";
import Task from "./modules/task";
import { exampleTasks } from "./modules/create-task";
import { checkClick, formAddButtonClicked, formCancel, selectTask} from "./modules/event-handlers";
import buttonClicked from "./modules/event-handlers";



initialPageLoad();
exampleTasks();
buttonClicked();
formAddButtonClicked();
formCancel();
selectTask()
checkClick()


