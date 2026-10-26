const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Fechar menu" : "Abrir menu"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuToggle.textContent = "☰";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#whatsapp-btn").addEventListener("click", (event) => {
  event.preventDefault();
  alert("Projeto demonstrativo: adicione o WhatsApp da empresa para ativar os orçamentos.");
});