const bodyEl = document.getElementsByTagName('body');

const mainContainer = createAndAppend('div', 'id', 'main-container', bodyEl);
const mainForm = createAndAppend('form', 'id', 'form', mainContainer);
let input = createAndAppend('input', 'type', 'text', mainForm);
const submit = createAndAppend('input', 'type', 'submit', mainForm);



function createAndAppend(tag, attType, attName, parent, text, event) {
    const element = createElement(tag);
    if (!!(attType && attName)) {
        element.setAttribute(attType, attName)
    }
    if (!!parent) {
        parent.append(element)
    }
    if (!!text) {
        element.innerText = text
    }
    // event 
    if (!!event) {
        element.addEventListener(event, listsner);
        function listsner(element) {
            element.preventDefault();
            element.stopPropagation();
            if (element.type === "submit") {
                if (e.target.classList[0] === "mainForm") {
                    const todoContainer = createAndAppend("div", "class", "todoContainer", mainContainer);
                    const para = createAndAppend("p", "class", "para", todoContainer, input.value);
                    const editBtn = createAndAppend("button", "class", "editBtn", todoContainer, "Edit", "click")
                    const deleteBtn = createAndAppend("button", "class", "deleteBtn", todoContainer, "Delete", "click")
                }
                if (e.target.classList[0] === "innerForm") {
                    const inputOfInnerForm = document.querySelector(".innerFormInput")
                    const paraOfOutput = document.querySelector(".todoContainer")
                    const checkingTask = paraOfOutput.querySelectorAll("p")
                    console.log(checkingTask);
                    const task = inputOfInnerForm.value;
                    const innerForm = document.querySelector(".innerForm")
                    paraOfOutput.innerText = task
                    innerForm.remove()
                }
            }
        }
    }
}