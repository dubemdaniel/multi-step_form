

  const ui = new UI();

  const database = new Database();

window.onload = () => {
  const pages = document.querySelectorAll(".wrapper");

  let prevButton = document.querySelector(".back_btn");

  let nextButton = document.querySelector(".next_btn");

  let circles = document.querySelectorAll(".stp");


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

  const syncUI = (pageNo) => {
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
    showPage(database.getData());

    if (currentPage === 2) {
      enableTogable();
      selectArcade()
      selectAdvance()
      selectPro()
      // RenderPlan()
      // enablePlan()
    }

    if(currentPage === 3) {
      addon()
      // taa()
    }

    if(currentPage === 4){
      console.log(database?.getData());
      // ui.renderSummaryPage(database.getData())
      
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

const selectArcade = () => {
  const arcadeLabel = document.getElementById('arcadePlan')

  arcadeLabel.addEventListener('click', () => {
    // e.preventDefault()
    const arcadeName = document.getElementById('arcadeName').textContent
    
    const arcadePrice = document.getElementById('arcadePrice').textContent

    let arcadeKind = document.getElementById('arcadeKind')
    
    let arcadeKind2 = document.getElementById('arcadeKind').textContent

    if(arcadeKind.classList.contains('hidden')){
      
        console.log(arcadeName, arcadePrice)
        
        const data = {
          planTitle : arcadeName,
          planPrice : arcadePrice,
        }
        
        database.setData(data)
  
      }else {
        
        arcadeKind = arcadeKind2

        console.log(arcadeName, arcadePrice, arcadeKind)

        const data = {
          planTitle : arcadeName,
          planPrice : arcadePrice,
        }

      database.updateData('isPlanYearly', true)
      database.setData(data)
    }
      console.log(database.getData());
      
  })

}


const selectAdvance = () => {
  const advanceLabel = document.getElementById('advancePlan')

  advanceLabel.addEventListener('click', () => {
    const advanceName = document.getElementById('advanceName').textContent

    
    const advancePrice = document.getElementById('advancedPrice').textContent

    let advanceKind = document.getElementById('advancedKind')

    let advanceKind2 = document.getElementById('advancedKind').textContent

    if(advanceKind.classList.contains('hidden')){
      
      console.log(advanceName, advancePrice)
      
      const data = {
        planTitle : advanceName,
        planPrice : advancePrice,
        isPlanYearly : true

      }
      
      database.setData(data)

    }else {
      
      advanceKind = advanceKind2

      console.log(advanceName, advancePrice, advanceKind)

      const data = {
        planTitle : advanceName,
        planPrice : advancePrice,
        isPlanYearly : true
      }

    database.setData(data)
  }
    
    console.log(database.getData());
    console.log(database.getSingleData('isPlanYearly'));
  })
  
}

const selectPro = () => {
  const proLabel = document.getElementById('proPlan')

  proLabel.addEventListener('click', () => {
    const proName = document.getElementById('proName').textContent
    
    const proPrice = document.getElementById('proPrice').textContent

    let proKind = document.getElementById('proKind')
    
    let proKind2 = document.getElementById('proKind').textContent

     if(proKind.classList.contains('hidden')){
      
      console.log(proName, proPrice)

      const data = {
        planTitle : proName,
        planPrice : proPrice,
      }
      
      database.setData(data)

   }else {
     
    proKind = proKind2

     console.log(proName, proPrice, proKind)

     
     const data = {
      planTitle : proName,
      planPrice : proPrice,
      isPlanYearly : true,
      monthYear : 'Yearly'
    }
   }
  })
  
}


  const addon = () => {

    const addonCheck = document.querySelectorAll('.addonCheck')
    
    addonCheck.forEach(check => {
      check.addEventListener('change', (e) => {
        e.preventDefault()
        const addonNames = check.parentElement.firstElementChild.nextElementSibling.firstElementChild.textContent;
         
        const addonPrices = check.parentElement.nextElementSibling.textContent
        
        let addonArr = database.getSingleData('addon')
        
        // addonArr = []
        // let taa = document.getElementById('taa')

        if (check.checked) {
          console.log('it is checked')
              
          addonArr.push({name: addonNames, price: addonPrices})

          console.log(addonArr)

          database.updateData('addon', addonArr)
           
          console.log(database.getData());
                   

          // database.renderAddonItems()

          // const taa = () => {
            // const element = document.getElementById("taa");
            const element = database.renderAddonItems()
            if (element !== null) {
              element.innerHTML = "New content";
            } else {
              console.log("Element not found.");
            }
  
          // }
        }
        else{
          console.log('it is not checked at all')
          addonArr = addonArr.filter(el => el.name !== addonNames);
          database.updateData('addon', addonArr)
          console.log(addonArr)
        }
       
      })     
     
    })

   
    
  }
  
 
          // console.log(addonArr);

          // const index = addonArr.findIndex(item => item.name === addonNames);
          
          // for (let i = 0; i < addonArr.length; i++) {
          //   const element = addonArr[i];
          //   console.log(element)
          //   if(element.name !== addonNames){
          //     console.log("ur papa")
          //   }
            
