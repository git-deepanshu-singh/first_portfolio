var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

let box = document.querySelector(".sbox");

box.addEventListener("mousemove", (e) => {
  let x = e.offsetX;
  let y = e.offsetY;

  let BoxWidth = box.clientWidth;
  let BoxHeight = box.clientHeight;

  let moveX = (x - BoxWidth / 2);
  let moveY = y - BoxHeight / 2;

  box.style.transform = `translateX(${moveX}px)
translateY(${moveY}px)`;
});

box.addEventListener("mouseout", (e) => {
  box.style.transform = ``;
});



 const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Show button when user scrolls down
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) { 
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });

    // Scroll to top smoothly on click
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    // form submission to Google Sheets

   var form = document.getElementById('sheetdb-form');

form.addEventListener("submit", e => {
    e.preventDefault();

    // Create FormData object
    let formData = new FormData(form);

    // Add current date & time
    let now = new Date();
    let formattedDateTime = now.toLocaleString(); // e.g. "10/2/2025, 6:45:30 PM"
    formData.append("submission_time", formattedDateTime);

    fetch(form.action, {
        method: "POST",
        body: formData,
    }).then(
        response => response.json()
    ).then((html) => {
        // Clear form after submit
        form.reset();
    });
});
