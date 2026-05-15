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

form?.addEventListener("submit", (event) => {
  if (!window.location.hostname.endsWith("github.io")) return;

  event.preventDefault();

  const data = new FormData(form);
  const lines = [
    `Name: ${data.get("name") || ""}`,
    `Artist / DJ name: ${data.get("artist") || ""}`,
    `Email: ${data.get("email") || ""}`,
    `Membership interest: ${data.get("plan") || ""}`,
    "",
    data.get("message") || "",
  ];

  const subject = encodeURIComponent("Rotate Studios founding member reservation");
  const body = encodeURIComponent(lines.join("\n"));
  window.location.href = `mailto:dan@rotate.studio?subject=${subject}&body=${body}`;
});
