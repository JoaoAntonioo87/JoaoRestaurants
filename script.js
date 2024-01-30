// Header item

const lista = Array.from(document.querySelectorAll(".header li a"));

function ativo(item) {
  if (location.href.includes(item)) {
    item.classList.add("ativo");
  }
}

lista.forEach(ativo);
