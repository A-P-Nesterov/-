const showDialog = document.querySelector('.show-dialog-button');
const dialogBox = document.querySelector('.dialog-box');
const closeDialog = document.querySelector('.close-dialog-button');
showDialog.addEventListener('click', () => {
    dialogBox.showModal();
});
  closeDialog.addEventListener('click', () => {
    dialogBox.close();
});
