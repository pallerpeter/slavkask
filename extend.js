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
      document.getElementById("home").textContent = data.home;
      document.getElementById("about").textContent = data.about;
      document.getElementById("contact").textContent = data.contact;
      document.getElementById("home_mobil").textContent = data.home_mobil;
      document.getElementById("about_mobil").textContent = data.about_mobil;
      document.getElementById("contact_mobil").textContent = data.contact_mobil;
      document.getElementById("motto").textContent = data.motto;
      document.getElementById("description").textContent = data.description;
      document.getElementById("mission_title").textContent = data.mission_title;
      document.getElementById("mission").textContent = data.mission;
      document.getElementById("mission_summary").textContent =
        data.mission_summary;
      document.getElementById("vision_title").textContent = data.vision_title;
      document.getElementById("vision_1").textContent = data.vision_1;
      document.getElementById("vision_2").textContent = data.vision_2;
      document.getElementById("vision_3").textContent = data.vision_3;
      document.getElementById("vision_4").textContent = data.vision_4;
      document.getElementById("closing_text").textContent = data.closing_text;
      document.getElementById("citation2").textContent = data.citation2;
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
