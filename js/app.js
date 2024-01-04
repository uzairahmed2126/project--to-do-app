const mainContainer = document.getElementById('main-container');
const formEl = document.getElementById('form');
const lists = document.querySelector('.list');
const inputText = document.getElementById('input-text');
function handleEvent(event) {
    event.preventDefault();
    const task = inputText.value;
    if (task === '') {
        alert("Enter Value");
    } else {
        createElement(task);
        inputText.value = '';
    };

};
let i = 1;
function createElement(eventValue) {
    const divEl = document.createElement('div');
    divEl.classList.add('list');
    const pEl = document.createElement('p');
    pEl.innerText = `${i++ + "." + eventValue}`;
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    // edit event listener
    editBtn.addEventListener('click', function handleEditBtn() {
        confirm('are you sure to edit this field');
        const task = inputText.value;
        inputText.innerText = task;
    })
    // delete event listener
    const deletebtn = document.createElement('button');
    deletebtn.addEventListener('click',function handleDeleteBtn(e){
        console.log(e)
    });
    deletebtn.innerText = 'Delete';
    mainContainer.append(divEl);
    divEl.append(pEl, editBtn, deletebtn);
}
// function handleEditBtn() {
//     confirm('are you sure to edit this field');
//     const task = inputText.value;
//     inputText.innerText = task;
// }
// function handleDeleteBtn(val) {
//     confirm('are you sure to delete');
// }
formEl.addEventListener('submit', handleEvent);

// localStorage.setItem("My Data",);