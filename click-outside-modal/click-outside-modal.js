const buttons = document.querySelectorAll(".card button");
const modal = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");

function handleButtonClick(e) {
  const img = e.target.parentElement.querySelector("img");
  modalInner.innerHTML = `
    <img src="${img.src}" width=500 />
    <table>
      <tr>
        <td>Nazwa:</td>
        <td>${img.dataset.name}</td>
      </tr>
      <tr>
        <td>Typ:</td>
        <td>${img.dataset.type}</td>
      </tr>
      <tr>
        <td>Waga:</td>
        <td>${img.dataset.mass}</td>
      </tr>
      <tr>
        <td>Długość lufy:</td>
        <td>${img.dataset.barrel}</td>
      </tr>
      <tr>
        <td>Kaliber:</td>
        <td>${img.dataset.caliber}</td>
      </tr>
      <tr>
        <td>Prędkość wylotowa:</td>
        <td>${img.dataset.velocity}</td>
      </tr>
        <tr>
          <td>Efektywny zasięg:</td>
          <td>${img.dataset.range}</td>
        </tr>
        <tr>
        <td>Liczba amunicji:</td>
        <td>${img.dataset.feed}</td>
      </tr>
    </table>
  `;
  modal.classList.add("show");
}

function handleModalClick(e) {
  const isOutside = e.target.classList.contains("modal-outer");
  if (isOutside) modal.classList.remove("show");
}

buttons.forEach((button) =>
  button.addEventListener("click", handleButtonClick)
);

modal.addEventListener("click", handleModalClick);
