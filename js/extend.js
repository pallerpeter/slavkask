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
      document.getElementById("cooperation").textContent = data.cooperation;
      document.getElementById("plastic_processing").textContent =
        data.plastic_processing;
      document.getElementById("clean_world").textContent = data.clean_world;
      document.getElementById("vision_title").textContent = data.vision_title;
      document.getElementById("vision_1").textContent = data.vision_1;
      document.getElementById("vision_2").textContent = data.vision_2;
      document.getElementById("vision_3").textContent = data.vision_3;
      document.getElementById("vision_4").textContent = data.vision_4;

      document.getElementById("leadership").textContent = data.leadership;
      document.getElementById("chairman").textContent = data.chairman;
      document.getElementById("chairman_name").textContent = data.chairman_name;
      document.getElementById("pr_director").textContent = data.pr_director;
      document.getElementById("pr_director_name").textContent =
        data.pr_director_name;
      document.getElementById("domc").textContent = data.domc;
      document.getElementById("domc_name").textContent = data.domc_name;
      document.getElementById("cio").textContent = data.cio;
      document.getElementById("cio_name").textContent = data.cio_name;

      document.getElementById("email_contact").textContent = data.email_contact;
      document.getElementById("feel_free").textContent = data.feel_free;
      document.getElementById("name_label").textContent = data.name_label;
      document.getElementById("name").placeholder = data.name;
      document.getElementById("email_label").textContent = data.email_label;
      document.getElementById("email").placeholder = data.email;

      document.getElementById("message_label").textContent = data.message_label;
      document.getElementById("message").placeholder = data.message;
      document.getElementById("submit").textContent = data.submit;
      document.getElementById("email_success").textContent = data.email_success;
      document.getElementById("email_failed").textContent = data.email_failed;
      document.getElementById("closing_text").textContent = data.closing_text;
      document.getElementById("citation").textContent = data.citation;
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
