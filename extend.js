function setLanguage(language) {
  // Az összes nyelvi elem kikapcsolása
  document.querySelectorAll("#language-selector .language").forEach((el) => {
    el.classList.remove("active");
  });

  // Aktív nyelv kiemelése
  document
    .querySelector(
      "#language-selector .language[onclick=\"setLanguage('" +
        language +
        "')\"]"
    )
    .classList.add("active");

  // Itt hozzáadhatod a nyelvváltás logikáját, például az oldal újratöltését a kiválasztott nyelvvel
}

function loadLanguage(language) {
  fetch("i18n/" + language + ".json")
    .then((response) => response.json())
    .then((data) => {
      //document.getElementById("greeting").textContent = data.greeting;
      document.getElementById("motto").textContent = data.motto;
      document.getElementById("description").textContent = data.description;
      document.getElementById("mission_title").textContent = data.mission_title;
      document.getElementById("mission").textContent = data.mission;
      document.getElementById("mission_summary").textContent =
        data.mission_summary;
      updateActiveLanguage(language);
    });
}

function updateActiveLanguage(activeLanguage) {
  document.querySelectorAll("#language-selector .language").forEach((el) => {
    el.classList.remove("active");
    if (el.textContent.toLowerCase() === activeLanguage) {
      el.classList.add("active");
    }
  });
}

// Alapértelmezett nyelv betöltése
loadLanguage("en");
