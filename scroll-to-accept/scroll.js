const terms = document.querySelector(".terms__text");
const button = document.querySelector(".terms__button");

function enableButton(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      button.disabled = false;
      observer.unobserve(terms.lastElementChild);
    }
  });
}

const observer = new IntersectionObserver(enableButton, {
  root: terms,
  threshold: 1.0,
});

observer.observe(terms.lastElementChild);
