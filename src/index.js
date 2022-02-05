import initialPageLoad from "./modules/ui";
import Task from "./modules/task";
import { exampleTasks } from "./modules/create-task";
import runEventHandlers from "./modules/event-handlers";

initialPageLoad();
exampleTasks();
runEventHandlers();


