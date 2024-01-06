// const mainContainer = document.getElementById('main-container');
// const formEl = document.getElementById('form');
// const lists = document.querySelector('.list');
// const inputText = document.getElementById('input-text');
// function handleEvent(event) {
//     event.preventDefault();
//     const task = inputText.value;
//     if (task === '') {
//         alert("Enter Value");
//     } else {
//         createElement(task);
//         inputText.value = '';
//     };
// };
// function createElement(eventValue) {
//     const divEl = document.createElement('div');
//     divEl.classList.add('list');
//     const pEl = document.createElement('p');
//     pEl.innerText = `${eventValue}`;
//     const editBtn = document.createElement('button');
//     editBtn.innerText = 'Edit';
//     // edit event listener
//     editBtn.addEventListener('click', function handleEditBtn() {
//         let getValue = prompt("Enter Your Edit Value");
//         pEl.innerText = `${getValue}`;

//     })
//     // delete event listener
//     const deletebtn = document.createElement('button');
//     deletebtn.addEventListener('click', function handleDeleteBtn(e) {
//         confirm('are you sure to delete this field');
//         divEl.remove();
//     });
//     deletebtn.innerText = 'Delete';
//     mainContainer.append(divEl);
//     divEl.append(pEl, editBtn, deletebtn);
// }
// // function handleEditBtn() {
// //     confirm('are you sure to edit this field');
// //     const task = inputText.value;
// //     inputText.innerText = task;
// // }
// // function handleDeleteBtn(val) {
// //     confirm('are you sure to delete');
// // }
// formEl.addEventListener('submit', handleEvent);

// // localStorage.setItem("My Data",);

// const bodyEl = document.getElementsByTagName('body');
// function createAndAppend(tag, attributeType, attributeName, parent, text, event) {
//     const tagEl = document.createElement(tag);
//     tagEl.setAttribute(attributeType, attributeName);
//     bodyEl.append(parent);
//     text.innerText = text;
//     event.addEventListener(event, listener);

// }

// let a = createAndAppend('div', 'id', 'hello', document.body.append(parent), 'hiiii');
// console.log(a)
// <div id="main-container"></div>
const bodyEl = document.querySelector('body');
const mainContainer = createAndAppend("div", "id", "main-container", null, bodyEl, null);
const mainForm = createAndAppend("form", "id", "form", null, mainContainer, null);
let inputEl = createAndAppend("input", "type", "text", "Enter Your Goal", mainForm, null, null, null);
function createAndAppend(tag, attributeType, attributeName, placeHolder, parent, text, eventType, listener) {
    const tagEl = document.createElement(tag);
    tagEl.setAttribute(attributeType, attributeName);
    tagEl.placeholder = placeHolder;
    parent.append(tagEl);
    tagEl.innerText = text;
    tagEl.addEventListener(eventType, listener);
    return tagEl;

}

// function formElments(tag,attributeType,attributeName) { 

// }