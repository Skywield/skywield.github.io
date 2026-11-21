(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    header.querySelectorAll(".site-nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var form = document.getElementById("signup-form");
  var note = document.getElementById("signup-note");
  if (form && note) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      note.hidden = false;
      note.classList.add("ok");
      note.textContent =
        "This signup is a mock for now — on the live site, it would save your email on our server. Nothing was sent.";
    });
  }
})();
