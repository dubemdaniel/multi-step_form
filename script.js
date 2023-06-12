
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

    // if (currentPage === 1){
    //   validate()
    // }
    if (currentPage === 2) {
      enableTogable();
      selectArcade()
      selectAdvance()
      selectPro()
 
    }

    if(currentPage === 3) {
      addon()
    }

    if(currentPage === 4){
      console.log(database?.getData());
      Summary()
      
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
    const arcade = document.getElementById("arcadePriceWrapper");
    const advanced = document.getElementById("advancedPriceWrapper");  
    const pro = document.getElementById("proPriceWrapper");
    const arcadeKind = document.getElementById("arcadeKind");
    const advancedKind = document.getElementById("advancedKind");
    const proKind = document.getElementById("proKind");
    

    // const addon1 = getElementById('addOns-price_1')
    
    if (toggle.checked) {
      // console.log("checkBox is checked");
      arcade.innerHTML = `<span id="arcadePriceUnit">90</span>/<span class="MonthYearUnit">yr</span>`;
      
      advanced.innerHTML = `  <span id="advancedPriceUnit">120</span>/<span class="MonthYearUnit">yr</span>`;
      
      pro.innerHTML = `  <span id="proPriceUnit">150</span>/<span class="MonthYearUnit">yr</span>`;
      
      arcadeKind.classList.remove("hidden");
      advancedKind.classList.remove("hidden");
      proKind.classList.remove("hidden");

      // addon1.innerText = 'kjdiuohjuhj'
    } else {
      // console.log("checkBox is not checked");
      arcade.innerHTML = `<span id="arcadePriceUnit">9</span>/<span class="MonthYearUnit">mo</span>`;
      
      advanced.innerHTML = `  <span id="advancedPriceUnit">12</span>/<span class="MonthYearUnit">mo</span>`;
      
      pro.innerHTML = `  <span id="proPriceUnit">15</span>/<span class="MonthYearUnit">mo</span>`;
      
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
  
  const arcadePriceUnit = document.querySelector('.monthYearUnit').textContent
  const arcadeInput = document.getElementById('arcade')
  
  // const arcadeInput = document.getElementById('arcade')

  arcadeLabel.addEventListener('click', () => {
    
    // e.preventDefault()
    const arcadeName = document.getElementById('arcadeName').textContent
    
    const arcadePrice = document.getElementById('arcadePriceUnit').textContent

    let arcadeKind = document.getElementById('arcadeKind')
    
    let arcadeKind2 = document.getElementById('arcadeKind').textContent

    if(arcadeKind.classList.contains('hidden')){
      
        console.log(arcadeName, arcadePrice)
        
        const data = {
          planTitle : arcadeName,
          planPrice : arcadePrice,
          planPriceUnit : arcadePriceUnit
        }
        
        database.setData(data)
        
  
      }else {
        
        arcadeKind = arcadeKind2

        console.log(arcadeName, arcadePrice, arcadeKind)

        const data = {
          planTitle : arcadeName,
          planPrice : arcadePrice,
          planPriceUnit : 'yr'
        }
      // database.updateData('isPlanYearly', true)
      database.setData(data)
    }
      console.log(database.getData());
      
  })

}


const selectAdvance = () => {
  const advanceLabel = document.getElementById('advancePlan')
  
  const advancePriceUnit = document.querySelector('.monthYearUnit').textContent

  advanceLabel.addEventListener('click', () => {
    const advanceName = document.getElementById('advanceName').textContent

    const advancePrice = document.getElementById('advancedPriceUnit').textContent

    let advanceKind = document.getElementById('advancedKind')

    let advanceKind2 = document.getElementById('advancedKind').textContent

    if(advanceKind.classList.contains('hidden')){
      
      console.log(advanceName, advancePrice)
      
      const data = {
        planTitle : advanceName,
        planPrice : advancePrice,
        planPriceUnit : advancePriceUnit

      }
      
      database.setData(data)

    }else {
      
      advanceKind = advanceKind2

      console.log(advanceName, advancePrice, advanceKind)

      const data = {
        planTitle : advanceName,
        planPrice : advancePrice,
        planPriceUnit : 'yr'
      }

    database.setData(data)
  }
  
    console.log(database.getData());
    console.log(database.getSingleData('isPlanYearly'));
  })
  
}

const selectPro = () => {
  const proLabel = document.getElementById('proPlan')
  
  const proPriceUnit = document.querySelector('.monthYearUnit').textContent

  proLabel.addEventListener('click', () => {
    const proName = document.getElementById('proName').textContent
    
    const proPrice = document.getElementById('proPriceUnit').textContent

    let proKind = document.getElementById('proKind')
    
    let proKind2 = document.getElementById('proKind').textContent

     if(proKind.classList.contains('hidden')){
      
      console.log(proName, proPrice)

      const data = {
        planTitle : proName,
        planPrice : proPrice,
        planPriceUnit : proPriceUnit
      }
      
      database.setData(data)

   }else {
     
    proKind = proKind2

     console.log(proName, proPrice, proKind)

     
     const data = {
      planTitle : proName,
      planPrice : proPrice,
      planPriceUnit : 'yr'
      
    }
    database.setData(data)

   }
   console.log(database.getData());
   
  })
  
}


  const addon = () => {

    const addonCheck = document.querySelectorAll('.addonCheck')
    
    let addonMonthYearUnit = document.querySelectorAll('.addonMonthYearUnit')
    let addonMonthYearDigit1 = document.querySelector('.addonMonthYearDigit1')
    let addonMonthYearDigit2 = document.querySelector('.addonMonthYearDigit2')
    let addonMonthYearDigit3 = document.querySelector('.addonMonthYearDigit3')

    addonMonthYearUnit.forEach(my => {
      if(database.getSingleData('planPriceUnit') === 'yr'){
        console.log('shebedishebedishebedi')
        my.innerText = 'yr'

        addonMonthYearDigit1.innerText = '10'
        addonMonthYearDigit2.innerText = '20'
        addonMonthYearDigit3.innerText = '20'
      }else {
        my.innertext = 'mo'

        addonMonthYearDigit1.innerText = '1'
        addonMonthYearDigit2.innerText = '2'
        addonMonthYearDigit3.innerText = '2'
      }
    })
    
    addonCheck.forEach(check => {
      check.addEventListener('change', (e) => {
        e.preventDefault()
        const addonNames = check.parentElement.firstElementChild.nextElementSibling.firstElementChild.textContent;
         
        const addonPrices = check.parentElement.nextElementSibling.firstElementChild.textContent

        
        let addonArr = database.getSingleData('addon')
        
        if (check.checked) {
          console.log('it is checked')
              
          addonArr.push({name: addonNames, price: addonPrices})

          console.log(addonArr)

          database.updateData('addon', addonArr)
           
          console.log(database.getData());

           check.parentElement.parentElement.classList.add('border-MarineBlue', 'bg-Magnolia')
          
         
        }
        else{
          console.log('it is not checked at all')
          addonArr = addonArr.filter(el => el.name !== addonNames);
          database.updateData('addon', addonArr)
          console.log(addonArr)
          check.parentElement.parentElement.classList.remove('border-MarineBlue', 'bg-Magnolia')
        }      
      })         
    })   
  }

  
  const Summary = () => {

    const section = document.getElementById('section')
    
    let addonArr = database.getSingleData('addon')
    
    const totalWrapper = document.querySelector('.totalWrapper')

    const planPriceUnit = database.getSingleData('planPriceUnit')


    database.getSingleData('addon').forEach(item => {

      
      const div = document.createElement('div')
      
      div.classList.add('flex', 'items-center', 'justify-between', 'mt-4')
      
      div.innerHTML = `
      <p class="text-slate-400">${item.name}</p>
      <p class="font-light" id="unitPrice">$${item.price}/${planPriceUnit === 'yr' ? 'yr' : 'mo'}</p>`

      section.appendChild(div)
    })
    
    
    let planPrice = parseInt(database.getSingleData('planPrice'))

    const totalPrice = addonArr.reduce((sum, item) => {
      
      if (typeof(item.price) == "string"){

        let str = item.price;
        let num = parseInt(str);
        return sum + num
      }
    }, 0);
    console.log(addonArr)
    console.log(totalPrice)
    console.log(`total = ${totalPrice + planPrice}`)

    totalWrapper.innerHTML = `
      <p class="text-slate-400">Total (${planPriceUnit === 'yr' ? 'per year' : 'per month'})</p>
      <p class="font-bold text-blue-500">+$${totalPrice + planPrice}/${planPriceUnit === 'yr' ? 'yr' : 'mo'}</p>
    `
    
  }