import initialPageLoad from "./modules/ui";
import Task from "./modules/task";
import { exampleTasks } from "./modules/create-task";
import runEventHandlers from "./modules/event-handlers";
import {updateCounter} from "./modules/ui"

initialPageLoad();
exampleTasks();
runEventHandlers();


updateCounter()