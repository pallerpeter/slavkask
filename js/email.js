(function () {
  emailjs.init({
    //publicKey: "RJqSCe3a4wXVXl3E1", //ignadevelopers
    publicKey: "vzwtOWJOTYN0u-vjU", //slavkasknonprofit
  });
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("sender_function enter");

      if (validateForm()) {
        var messageContainer = document.getElementById(
          "emailResponseContainer"
        );
        var success = document.getElementById("email_success");
        var failed = document.getElementById("email_failed");

        //emailjs.sendForm("service_tqlmvti", "template_ufnjo8f", this) //ignadevelopers
        emailjs.sendForm("service_ikm9hnw", "template_ugfkll8", this) //slavkasknonprofit
        .then(
          () => {
            if (messageContainer) {
              success.classList.remove("hidden");
              console.log("success_remove_hidden");
              messageContainer.classList.remove("hidden");
              this.reset();
            }
          },
          (error) => {
            failed.classList.remove("hidden");
            messageContainer.classList.add("danger");
            messageContainer.classList.remove("hidden");
          }
        );
      }
    });
};

function validateForm() {
  var form = document.getElementById("contact-form");
  var inputs = form.querySelectorAll("input, textarea");

  var isValid = true;

  inputs.forEach(function (input) {
    var rule = input.getAttribute("data-rule");
    var msg = input.getAttribute("data-msg");
    var value = input.value.trim();

    if (rule === "required" && value === "") {
      showError(input, msg);
      isValid = false;
    } else if (rule === "email" && !validateEmail(value)) {
      showError(input, msg);
      isValid = false;
    } else if (
      rule.startsWith("minlen") &&
      value.length < parseInt(input.getAttribute("data-rule").split(":")[1], 10)
    ) {
      showError(input, msg);
      isValid = false;
    } else {
      hideError(input);
    }
  });

  return isValid;
}

function showError(input, message) {
  var parent = input.parentElement;
  var validationMsg = parent.querySelector(".validation");
  validationMsg.innerHTML = message;
  validationMsg.style.display = "block";
}

function hideError(input) {
  var parent = input.parentElement;
  var validationMsg = parent.querySelector(".validation");
  validationMsg.innerHTML = "";
  validationMsg.style.display = "none";
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
