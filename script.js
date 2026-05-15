const header = document.querySelector("[data-header]");
const form = document.querySelector("[data-reserve-form]");
const planLinks = document.querySelectorAll("[data-plan]");

const updateHeader = () => {
  header.classList.toggle("is-solid", window.scrollY > 24);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

planLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const plan = link.dataset.plan;
    const select = form?.querySelector("select[name='plan']");
    if (select && plan) {
      select.value = `${plan} membership`;
    }
  });
});
