//form elements 
const bodyEl = document.querySelector('body');
const mainContainer = createAndAppend("div", "id", "main-container", null, null, null);
const mainForm = createAndAppend("form", "id", "form", null, null, 'submit', submitVal);
let inputEl = createAndAppend("input", "type", "text", "Enter Your Goal", null, null);
const submitBtn = createAndAppend("input", "type", "submit", null, null, null, null);
const dropDown = createAndAppend('select', 'id', 'drop-down', null, null, "click", dropDownOpt);
const option1 = createAndAppend('option', 'class', 'opts', null, 'All', null, null);
const option2 = createAndAppend('option', 'class', 'opts', null, 'Completed', null, null);
const option3 = createAndAppend('option', 'class', 'opts', null, 'Deleted', null, null);

// append
bodyEl.append(mainContainer);
mainContainer.append(mainForm);
mainForm.append(inputEl, submitBtn, dropDown);
dropDown.append(option1, option2, option3);

// drop Down

function dropDownOpt(e) {
    switch (e.target.value) {
        case 'All': alert('show all');
            break;
        case 'Completed': alert('show Completed');
            break;
        case 'Deleted': alert('show Deleted');

    };
};
// list elements
function submitVal(event) {
    event.preventDefault();
    event.stopPropagation();
    const task = inputEl.value;
    const listDiv = createAndAppend("div", "class", "list", null, null, null, null, null);
    const pEl = createAndAppend("p", null, null, null, null, null, null, null);
    const editBtn = createAndAppend("button", null, null, null, "Edit", "click", handleEditBtn);
    const deleteBtn = createAndAppend("button", null, null, null, "Delete", "click", handleDeleteBtn);
    const CompleteBtn = createAndAppend("button", null, null, null, "Complete", "click", handleCompleteBtn);
    mainContainer.append(listDiv);
    listDiv.append(pEl, editBtn, deleteBtn, CompleteBtn);
    if (task === '') {
        alert("Enter Value");
    } else {
        pEl.innerText = `${task}`;
    };
    inputEl.value = '';
    function handleEditBtn() {
        const popUpForEdit = createAndAppend("div", "id", "edit-pop", null, null, null, null, null);
        const closeBtn = createAndAppend("i", "id", "close-btn", null, 'X', "click", closeBtnEvent);
        const editForm = createAndAppend("form", "id", "edit-form", null, null, 'submit', submitEditVal);
        let editInput = createAndAppend("input", "type", "text", "Enter Your Edit Value", null, null);
        const submitBtn = createAndAppend("input", "type", "submit", null, null, null, null);

        function closeBtnEvent() {
            popUpForEdit.remove();
        };
        function submitEditVal(event) {
            event.preventDefault();
            const task = editInput.value;
            if (task === '') {
                alert("Enter Value");
                inputEl.value = '';
            } else {
                pEl.innerText = `${task}`;
                closeBtnEvent();
            };
        };
        bodyEl.append(popUpForEdit);
        popUpForEdit.append(editForm);
        editForm.append(editInput, submitBtn, closeBtn);
    };
    function handleDeleteBtn() {
        const popUpForDelete = createAndAppend("div", "id", "delete-pop", null, null, null, null, null);
        const paragraphEl = createAndAppend("p", null, null, null, "Are you sure to delete", null, null, null)
        const yesBtn = createAndAppend("button", 'class', 'yes', null, "Yes", "click", handleDeleteYesOpt);
        const noBtn = createAndAppend("button", 'class', 'no', null, "No", "click", handleDeleteNoOpt);
        const closeBtn = createAndAppend("span", "class", "material-symbols-outlined", null, 'close', "click", closeBtnEvent);
        closeBtn.classList.add('close-btn')
        function closeBtnEvent() {
            popUpForDelete.remove()
        }
        function handleDeleteYesOpt() {
            listDiv.classList.add('fall');
            listDiv.remove();
            closeBtnEvent();
        };
        function handleDeleteNoOpt(no) {
            closeBtnEvent();
        };
        bodyEl.append(popUpForDelete);
        popUpForDelete.append(paragraphEl, yesBtn, noBtn, closeBtn);
    };
    function handleCompleteBtn() {
        const doneBtn = createAndAppend('span','class' ,'material-symbols-outlined', null, 'done', null, null);
        doneBtn.classList.add('done-btn')
        CompleteBtn.remove();
        listDiv.append(doneBtn);
        // CompleteBtn = doneBtn;
        // e.target.value = doneBtn;
    }
};
function createAndAppend(tag, attributeType, attributeName, placeHolder, text, eventType, listener) {
    const tagEl = document.createElement(tag);
    tagEl.setAttribute(attributeType, attributeName);
    tagEl.placeholder = placeHolder;
    tagEl.innerText = text;
    tagEl.addEventListener(eventType, listener);
    return tagEl;
};