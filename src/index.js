import initialPageLoad from "./modules/ui";
import Task from "./modules/task";
import { exampleTasks } from "./modules/create-task";
import runEventHandlers from "./modules/event-handlers";
import {updateCounter} from "./modules/ui"
import makeCalendar from "./modules/calendar"

initialPageLoad();
exampleTasks();
runEventHandlers();


updateCounter();
makeCalendar();