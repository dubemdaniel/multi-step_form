window.onload = () => {
  const pages = document.querySelectorAll(".wrapper");

  let prevButton = document.querySelector(".back_btn");

  let nextButton = document.querySelector(".next_btn");

  let circles = document.querySelectorAll(".stp");

 

  const ui = new UI();

  const storage = new Storage();

  const uiPages = [
    ui.renderInfoPage,
    ui.renderSelectPlanPage,
    ui.renderAddOnspage,
    ui.renderSummaryPage,
    ui.renderThankYouPage,
  ];
  // console.log(data)

  let currentPage = 1;
  let currentCirle = 0;

  // this changes the ui according to the pages

  const syncUI = (pageNo, circleNo) => {
    circles.forEach((circle, index) => {
      if (index < pageNo) {
        circle.className =
          "flex items-center justify-center w-10 h-10 border-2 rounded-full md:m-auto md:w-12 md:h-12 stp bg-Magnolia text-MarineBlue";
      } else {
        circle.className =
          "flex items-center justify-center w-10 h-10 border-2 rounded-full md:m-auto md:w-12 md:h-12 stp";
      }
    });

    // this shows the html to the UI
    const showPage = uiPages[pageNo - 1];
    showPage();

    if (currentPage === 2) {
      enableTogable();
      RenderPlan()
      // enablePlan()
    }

    nextButton = document.querySelector(".next_btn");

    prevButton = document.querySelector(".back_btn");  
    
    nextButton.addEventListener("click", nextPage);
    
    prevButton.addEventListener("click", prevPage);
  };

  const nextPage = () => {
    // we will validate all the input
    if (currentPage === 1) {
      console.log("hello");
      currentPage++;
      currentCirle++;
      syncUI(currentPage, currentCirle);
      return;
    }

    if (currentPage > 1) {
      currentPage++;
      currentCirle++;
      syncUI(currentPage, currentCirle);
      // enablePlan()
    }

    // first we increase the current page
  };

  const prevPage = () => {
    // we will validate all the input

    // first we increase the current page
    currentPage--;

    currentCirle--;

    syncUI(currentPage, currentCirle);
  };

  nextButton.addEventListener("click", nextPage);
};

function validate() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const nameErr = document.getElementById("nameErr");
  const emailErr = document.getElementById("emailErr");
  const phoneErr = document.getElementById("phoneErr");
  
  console.log(name, email, phone);
  
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
  }
  
  // else if (phone.length !== 10) {
  //   phoneErr.innerText = "Invalid phone number";
  //   return false;
  // } else if (!phone.match(/^[0-9]{10}$/)) {
  //   phoneErr.innerText = "Must be digit";
  //   return false;
  // }
  return true;
}

const enableTogable = () => {

  const toggleLable = document.getElementById("toggleLabel");

  toggleLable.addEventListener("click", () => {
    const toggle = document.getElementById("monthYear");
    const arcade = document.getElementById("arcadePrice");
    const advanced = document.getElementById("advancedPrice");  
    const pro = document.getElementById("proPrice");
    const arcadeKind = document.getElementById("arcadeKind");
    const advancedKind = document.getElementById("advancedKind");
    const proKind = document.getElementById("proKind");
    
    // console.log(toggle);
    
    if (toggle.checked) {
      // console.log("checkBox is checked");
      arcade.innerText = "$90/yr";
      advanced.innerText = "$120/yr";
      pro.innerText = "$150/yr";
      arcadeKind.classList.remove("hidden");
      advancedKind.classList.remove("hidden");
      proKind.classList.remove("hidden");
    } else {
      // console.log("checkBox is not checked");
      arcade.innerText = "$9/mo";
      advanced.innerText = "$12/mo";
      pro.innerText = "$15/mo";
      arcadeKind.classList.add("hidden");
      advancedKind.classList.add("hidden");
      proKind.classList.add("hidden");
    }
    // console.log(`${arcade.innerHTML} : ${advanced.innerHTML} : ${pro.innerHTML}`)
    
    // enablePlan()

    // ui.renderSummaryPage()

  });

};

 const RenderPlan = () => {
  const labels = document.querySelectorAll('.label')

  labels.forEach(label => {
    label.addEventListener('click', (e) => {

      console.log('normally, u dey mad')

      const planName = e.target.children[1].children[0].textContent
      const planPrice = e.target.children[1].children[1].textContent

      console.log(`${planName} : ${planPrice}`)
      
      const discount = e.target.children[1].children[2].textContent

      const freePlan = document.querySelectorAll('div div h5')
     
      console.log(freePlan.e)
    })
    
  });
 }

// const enablePlan = () => {
//   const toggle = document.getElementById("monthYear");
//   const plans = document.querySelectorAll(".plans")
//   const planName = document.querySelectorAll(".planName")
//   plans.forEach(plan => plan.addEventListener)
//   const norms = Array.from(plans).find(plan => plan.checked)
//   // let isChecked = false
//   plans.forEach(plan => {
//     if(plan.checked && toggle.checked){
//       // isChecked = true
//   console.log(norms)
//     }
//   });

// }
