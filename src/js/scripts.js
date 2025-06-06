const menu = document.querySelector("#menu-hamburguer");
const nav = document.querySelector("#navegacao");
const remove = document.querySelector("#remove");

menu.addEventListener("click", toggleMenu);
remove.addEventListener("click", toggleMenu);

function toggleMenu() {
	nav.classList.toggle("aberto");
}
