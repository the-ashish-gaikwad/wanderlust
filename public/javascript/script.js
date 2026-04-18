// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false,
    );
  });
})();

const wrapper = document.getElementById("scroll-wrapper");
const leftBtn = document.getElementById("slideLeft");
const rightBtn = document.getElementById("slideRight");

// Adjust the scroll amount based on your card width
const scrollAmount = 300;

if (wrapper && leftBtn && rightBtn) {
  rightBtn.addEventListener("click", () => {
    wrapper.scrollLeft += scrollAmount;
  });

  leftBtn.addEventListener("click", () => {
    wrapper.scrollLeft -= scrollAmount;
  });
}

let taxSwitch = document.getElementById("switchCheckDefault");
if (taxSwitch) {
  taxSwitch.addEventListener("click", () => {
    let taxInfo = document.getElementsByClassName("tax-info");

    for (const info of taxInfo) {
      if (info.style.display != "inline") {
        info.style.display = "inline";
      } else {
        info.style.display = "none";
      }
    }
  });
}

const flashAlerts = document.querySelectorAll(".flash.alert");
flashAlerts.forEach((alertEl) => {
  setTimeout(() => {
    if (!alertEl.isConnected) return;

    if (window.bootstrap && window.bootstrap.Alert) {
      const bsAlert = window.bootstrap.Alert.getOrCreateInstance(alertEl);
      bsAlert.close();
    } else {
      alertEl.remove();
    }
  }, 3000);
});
