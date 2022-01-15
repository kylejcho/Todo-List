import initialPageLoad from "./modules/ui";
import Task from "./modules/task";
import createTask from "./modules/create-task";
import buttonClicked from "./modules/event-handlers"

initialPageLoad();
buttonClicked();
createTask("Exercise", "Workout out for 45 minutes", "today", '');
createTask("Read", "Read two chapter", "tomorrow", '');