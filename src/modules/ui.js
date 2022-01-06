const initialPageLoad = () => {
    const allTasksContainer = document.createElement(div);
    allTasksContainer.id = "allTasksContainer";

    const titleContainer = document.createElement(div);
    titleContainer.id = titleContainer;
    titleContainer.innerText = "All Tasks";
    allTasksContainer.append(titleContainer);

    const body = document.querySelector('body');
    body.append(allTasksContainer);
}





export default initialPageLoad