const pages = document.querySelectorAll(".wrapper");

const prevButton = document.querySelectorAll(".back_btn");

const nextButton = document.querySelectorAll(".next_btn");

const circles = document.querySelectorAll(".stp");

const toggleLable = document.getElementById("toggleLabel");

let currentPage = 1;

let currentCircle = 1;

prevButton.forEach(backBtn => {
  backBtn.addEventListener("click", () => {
    if (backBtn) {
      document.querySelector(`.step-${currentPage}`).classList.add("hidden");
      console.log(`back ${currentPage}`);
      currentPage--;
      document.querySelector(`.step-${currentPage}`).classList.remove("hidden");
      console.log(`back ${currentPage}`);

      circles[currentCircle].className =
        "flex items-center justify-center w-10 h-10 border-2 rounded-full md:m-auto md:w-12 md:h-12 stp";
      currentCircle--;
    }
  });
});

console.log(` this is ${currentPage}th page`);

nextButton.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentPage < 5 || validate()) {
      document.querySelector(`.step-${currentPage}`).classList.add("hidden");

      console.log(currentPage);

      currentPage++;

      document.querySelector(`.step-${currentPage}`).classList.remove("hidden");

      if (currentCircle !== 3) {
        circles[currentCircle + 1].className =
          "flex items-center justify-center w-10 h-10 border-2 rounded-full md:m-auto md:w-12 md:h-12 stp bg-Magnolia text-MarineBlue";
      } else {
        circles[currentCircle + 2].className =
          "flex items-center justify-center w-10 h-10 border-2 rounded-full md:m-auto md:w-12 md:h-12 stp bg-Magnolia text-MarineBlue";
      }
      currentCircle++;
    }
    
  });
});

// form validation function

function validate() {
  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value;

  const phone = document.getElementById("phone").value;

  const nameErr = document.getElementById("nameErr");

  const emailErr = document.getElementById("emailErr");

  const phoneErr = document.getElementById("phoneErr");

  if (name || email || phone) {
    nameErr.innerText = "";
    emailErr.innerText = "";
    phoneErr.innerText = "";
  }

  if (name.length == 0) {
    nameErr.innerText = "Name is Required";
    return false;
  } else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameErr.innerText = "Input complete name";
    return false;
  } else if (email.length == 0) {
    emailErr.innerText = "Input Email";
    return false;
  } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailErr.innerText = "invalid email";
    return false;
  } else if (phone.length == 0) {
    phoneErr.innerText = "Phone number required";
    return false;

    // } else if(phone.length !== 10){
    //     phoneErr.innerText = 'Invalid phone number'
    //     return false

    // }else if(!phone.match(/^[0-9]{10}$/)){
    //     phoneErr.innerText = 'Must be digit'
    //     return false
  }
  return true;
}
// functions for month/year toggle in plan slide

toggleLable.addEventListener("click", () => {
  const toggle = document.getElementById("monthYear");
  const arcade = document.getElementById("arcadePrice");
  const advanced = document.getElementById("advancedPrice");
  const pro = document.getElementById("proPrice");
  const arcadeKind = document.getElementById("arcadeKind");
  const advancedKind = document.getElementById("advancedKind");
  const proKind = document.getElementById("proKind");
  if (toggle.checked) {
    console.log("checkBox is checked");
    arcade.innerText = "$90/yr";
    advanced.innerText = "$120/yr";
    pro.innerText = "$150/yr";
    arcadeKind.classList.remove("hidden");
    advancedKind.classList.remove("hidden");
    proKind.classList.remove("hidden");
  } else {
    console.log("checkBox is not checked");
    arcade.innerText = "$9/mo";
    advanced.innerText = "$12/mo";
    pro.innerText = "$15/mo";
    arcadeKind.classList.add("hidden");
    advancedKind.classList.add("hidden");
    proKind.classList.add("hidden");
  }
});
console.log('e-tech my boss')