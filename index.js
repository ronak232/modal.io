const openBtn = document.getElementById("openBtn");

const container = document.getElementById("modal-container");

const hiddenModal = document.querySelector(".modal_hidden");

const close_button = document.querySelector(".close_modal");

openBtn.addEventListener("click", () => {
  hiddenModal.classList.add("modal_show");
  container.style.opacity = 1;
  if (hiddenModal.className === "modal_hidden") {
    container.style.opacity = 0;
  }
});

close_button.addEventListener("click", () => {
  hiddenModal.classList.remove("modal_show");
});

// close_button.addEventListener('click', ()=>{
//     console.log("Clicked close button.");
// });

// openBtn.addEventListener('click', ()=>{
//     hiddenModal.classList.remove('modal_hidden');
//     hiddenModal.classList.add('model_show');

// })
