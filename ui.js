class UI {
  constructor() {
    this.wrapper = document.querySelector("#overall");
  }

  renderInfoPage() {
    document.querySelector("#overall").innerHTML = `
    <div class=" mb-[8rem] wrapper md:mb-[4rem] step-1" id="info_wrapper"> 
    <h2 class="mt-4 text-3xl font-bold text-MarineBlue md:text-4xl">Personal info</h2>
    <p class="mt-4 mb-4 text-base text-slate-500 md:text-xl">Please provide your name, email, address, and phone number...</p>
  <div class="mt-6 ">
   <div class="flex items-center justify-between">
    <label for="name" class=" text-MarineBlue"> Name </label>
    <span class="text-StrawberryRed" id="nameErr"></span>
   </div>
    <input type="text" id="name" class="w-full px-2 py-2 text-xl font-medium border rounded-md border-slate-400 focus:outline-MarineBlue text-MarineBlue md:p-3" placeholder="e.g. Dubem Daniel "> 
  </div>
  <div class="mt-6 ">
    <div class="flex items-center justify-between">
      <label for="email" class="block text-MarineBlue"> Email Address</label>
      <span class="text-StrawberryRed" id="emailErr"></span>
     </div>
    <input type="text" id="email" class="w-full px-2 py-2 text-xl font-medium border rounded-md border-slate-400 focus:outline-MarineBlue text-MarineBlue md:p-3" placeholder="e.g. balablue@townhall.com"> 
  </div>
  <div class="mt-6 mb-4">
    <div class="flex items-center justify-between">
      <label for="phone" class="block text-MarineBlue"> Phone Number</label>
      <span class="text-StrawberryRed" id="phoneErr"></span>
     </div>
   
    <input type="text" id="phone" class="w-full px-2 py-2 text-xl font-medium border rounded-md border-slate-400 focus:outline-MarineBlue text-MarineBlue md:p-3" placeholder="e.g. +2 345 678 909">
  </div>
  <footer class="fixed inset-x-0 bottom-0 flex justify-between px-4 py-3 align-middle bg-white md:relative md:bottom-0 md:-mb-24 md:py-2 md:mt-24 shadow-myShadow md:shadow-none"  >
    <button class="invisible px-3 py-2 text-md text-slate-500 md:px-4 md:py-2 md:text-xl back_btn" id="">Go Back</button>
    <button class="px-3 py-2 mr-2 font-medium text-white rounded-md text-md bg-MarineBlue md:px-4 md:py-2 md:text-xl next_btn" id="" type="submit"> Next Step </button>
  </footer>
 </div >
    `;
  }

  renderSelectPlanPage() {
    document.querySelector("#overall").innerHTML = `
    <div class=" mb-[6rem]  wrapper md:mb-0 step-2" id="plan_wrapper">
    <h2 class="mt-4 text-[1.7rem] font-extrabold text-MarineBlue">Select your plan</h2>
    <p class="mt-4 mb-4 text-sm text-slate-500 md:text-xl">You have the option of monthly or yearly billing</p>
    <form class="">
      <div class="block md:flex md:gap-4">
      <label for="arcade" class="block mt-3 md:w-full" id="label">
        <input type="radio" id="arcade" class="hidden peer plans" name="plan">
        <div class="grid grid-cols-4 p-3 border-2 rounded-lg text-MarineBlue focus:outline-MarineBlue border-slate-300 md:flex-col md:justify-center md:flex md:items-start peer-checked:border-MarineBlue peer-checked:bg-Magnolia">
          <img src="assets/images/icon-arcade.svg" alt="arcade icon" class="w-12 my-auto">
          <div class="col-span-3 md:mt-8">
            <h4 class="text-base md:text-lg md:font-bold ">Arcade</h4>
            <p id="arcadePrice" class="my-[.2rem] text-slate-500 tracking-normal text-sm md:text-base">$9/mo</p>
            <h5 class="hidden text-xs font-bold" id="arcadeKind">2 months free</h5>
          </div>
        </div>
      </label>
      <label for="advanced" class="block mt-3 md:w-full" id="label">
        <input type="radio" id="advanced" class="hidden peer plans" name="plan">
          <div class="grid grid-cols-4 p-3 border-2 rounded-lg text-MarineBlue focus:outline-MarineBlue border-slate-300 md:flex-col md:justify-center md:items-start md:flex peer-checked:border-MarineBlue peer-checked:bg-Magnolia">
            <img src="assets/images/icon-advanced.svg" alt="advanced icon" class="w-12 my-auto">
            <div class="col-span-3 md:mt-8 ">
              <h4 class="text-base md:text-lg md:font-bold">Advanced</h4>
              <p id="advancedPrice" class="my-[.2rem] text-slate-500 tracking-normal text-sm md:text-base">$12/mo</p>
              <h5 class="hidden text-xs font-bold" id="advancedKind">2 months free</h5>
            </div>
          </div>
      </label>
      <label for="pro" class="block mt-3 md:w-full" id="label">
        <input type="radio" id="pro" class="hidden peer plans" name="plan">
        <div class="grid grid-cols-4 p-3 border-2 rounded-lg text-MarineBlue focus:outline-MarineBlue border-slate-300 md:flex-col md:justify-center md:items-start md:flex peer-checked:border-MarineBlue peer-checked:bg-Magnolia ">
          <img src="assets/images/icon-pro.svg" alt="pro icon" class="w-12 my-auto">
          <div class="col-span-3 md:mt-8">
            <h4 class="text-base md:text-lg md:font-bold">Pro</h4>
            <p id="proPrice" class="my-[.2rem] text-slate-500 tracking-normal text-sm md:text-base">$15/mo</p>
            <h5 class="hidden text-xs font-bold" id="proKind">2 months free</h5>
          </div>
        </div>
      </label>
      </div>
    </form>
    <!-- toggle switch for monthly and yearly payment starts here -->
     <label for="monthYear" class="flex items-center justify-between px-8 py-4 mt-6 rounded-lg bg-Alabaster" id="toggleLabel">
      <h4 class="font-black text-MarineBlue">Monthly</h4>
        <div class="relative inline-block w-[52px] h-[28px] md:w-[60] md:h-[34]">
          <input type="checkbox" class="hidden peer" id="monthYear">
          <span class="absolute top-0 bottom-0 left-0 right-0 bg-slate-200 rounded-[34px] before:absolute before:cursor-pointer before:content before:h-[20px] before:w-[40%] before:left-1 before:bottom-1 before:bg-white before:rounded-full peer peer-checked:before:translate-x-[24px] transition-all peer-checked:bg-MarineBlue duration-500 before:duration-500 md:before:h-[24px] md:before:w-[26px] md:before:top-[.1rem] md:peer-checked:before:translate-x-[18px] " ></span>
        </div>
      <h4 class="font-black text-slate-400">Yearly</h4>
     </label>
     <footer class="fixed inset-x-0 bottom-0 flex justify-between px-4 py-3 align-middle bg-white md:relative md:bottom-0 md:mt-36 shadow-myShadow md:shadow-none md:-mb-8"  >
      <button class="px-3 py-2 text-md text-slate-500 md:px-4 md:py-2 md:text-xl back_btn" id="">Go Back</button>
      <button class="px-3 py-2 mr-2 font-medium text-white rounded-md text-md bg-MarineBlue md:px-4 md:py-2 md:text-xl next_btn" id="" type="submit"> Next Step </button>
    </footer>
    <!-- toggle switch for monthly and yearly payment ends here -->
   </div >
    `;
  }

  renderAddOnspage() {
    document.querySelector("#overall").innerHTML = `
    <div class=" mb-[8rem]  wrapper step-3 md:mb-0">
    <h2 class="mt-4 text-3xl font-bold text-MarineBlue md:text-4xl">Pick add-ons</h2>
    <p class="mt-3 mb-4 text-sm text-slate-400 md:text-xl">Add-ons help enhance your gaming experience.</p>
    <form action="#">
      <label for="service_inp" class="block mb-3" id="service_label">
        <!-- <label for="pick"> -->
          <!-- <input type="checkbox" class="peer" id="pick" name="pick_check"> -->
          <div class="flex items-center justify-between px-3 py-1 align-middle border-2 rounded-lg gap-x-3 peer-checked:border-MarineBlue focus:border-MarineBlue md:flex md:px-4 md:py-2 ">
            <div class="flex gap-x-4">
              <input type="checkbox"  class="peer-checked:checked" id="service_inp">
              <div class="">
                <h4 class="text-MarineBlue md:text-xl">Online service</h4>
                <p class="text-sm font-medium text-slate-400 md:text-lg">Access to multiplayer games</p>
              </div>
            </div>
            <p id="addOns-price_1" class="text-sm text-indigo-400"> +$1/mo</p>
          </div>
        <!-- </label> -->
      </label>
      <label for="storage_inp" class="block mb-3" id="storage_label">
        <!-- <label for="pick"> -->
          <!-- <input type="checkbox" class="peer" id="pick" name="pick_check"> -->
          <div class="flex items-center justify-between px-3 py-1 align-middle border-2 rounded-lg gap-x-3 peer-checked:border-MarineBlue focus:border-MarineBlue md:flex md:px-4 md:py-2 ">
            <div class="flex gap-x-4">
              <input type="checkbox"  class="peer-checked:checked" id="storage_inp">
              <div class="">
                <h4 class="text-MarineBlue md:text-xl">Larger storage</h4>
                <p class="text-sm font-medium text-slate-400 md:text-lg">Extra 1TB of cloud save</p>
              </div>
            </div>
            <p id="addOns-price_1" class="text-sm text-indigo-400"> +$2/mo</p>
          </div>
        <!-- </label> -->
      </label>
        <label for="customizable_inp" class="block" id="customizable_label">
        <!-- <label for="pick"> -->
          <!-- <input type="checkbox" class="peer" id="pick" name="pick_check"> -->
          <div class="flex items-center justify-between px-3 py-1 align-middle border-2 rounded-lg gap-x-3 peer-checked:border-MarineBlue focus:border-MarineBlue md:flex md:px-4 md:py-2 ">
            <div class="flex gap-x-4">
              <input type="checkbox"  class=" peer-checked:checked" id="customizable_inp">
              <div class="">
                <h4 class="text-base text-MarineBlue md:text-xl">Customizable profile</h4>
                <p class="text-sm font-medium text-slate-400 md:text-lg">Custome theme on your profile</p>
              </div>
            </div>
            <p id="addOns-price_1" class="text-sm text-indigo-400"> +$2/mo</p>
          </div>
        <!-- </label> -->
      </label>
       <footer class="fixed inset-x-0 bottom-0 flex justify-between px-4 py-3 align-middle bg-white md:relative md:bottom-0 md:mt-36 shadow-myShadow md:shadow-none md:-mb-8 md:pt-8"  >
        <button class="px-3 py-2 text-md text-slate-500 md:px-4 md:py-2 md:text-xl back_btn" id="">Go Back</button>
        <button class="px-3 py-2 mr-2 font-medium text-white rounded-md text-md bg-MarineBlue md:px-4 md:py-2 md:text-xl next_btn" id="" type="submit"> Next Step </button>
      </footer>
  </form>     
</div >
    `;
  }

  renderSummaryPage() {
    document.querySelector("#overall").innerHTML = `
    <div class=" mb-[2rem] md:mb-0  wrapper step-4">
    <h2 class="mt-4 text-3xl font-bold text-MarineBlue md:text-4xl">Finishing Up</h2>
    <p class="mt-3 mb-4 text-sm text-slate-400 md:text-xl">Double-check everything looks OK before confirming.</p>
     <div class="p-4 bg-Magnolia text-MarineBlue ">
        <div class="flex items-center justify-between pb-3 border-b-2 border-slate-200">
          <div class="leading-none">
            <h3>Arcade (Monthly)</h3>
            <a href="#" class="font-thin underline text-slate-400">change</a>
          </div>
          <p>$9/mo</p>
        </div>
        <div class="flex items-center justify-between mt-2">
          <p class="text-slate-400">Online service</p>
          <p class="font-light">+$1/mo</p>
        </div>
        <div class="flex items-center justify-between mt-6">
          <p class="text-slate-400">Larger storage</p>
          <p class="font-light">+$2/mo</p>
        </div>
      </div>
    <div class="flex items-center justify-between px-4 mt-6">
      <p class="text-slate-400">Total (per month)</p>
      <p class="font-bold text-blue-500">+$12/mo</p>
    </div>
    <footer class="fixed inset-x-0 bottom-0 flex justify-between px-4 py-3 align-middle bg-white md:relative md:bottom-0 md:mt-[11.5rem] shadow-myShadow md:shadow-none md:-mb-8"  >
      <button class="px-3 py-2 text-md text-slate-500 md:px-4 md:py-2 md:text-xl back_btn" id="">Go Back</button>
      <button class="px-3 py-2 mr-2 font-medium text-white rounded-md text-md bg-MarineBlue md:px-4 md:py-2 md:text-xl next_btn" id="" type="submit"> Next Step </button>
    </footer>
 </div >
    `;
  }

  renderThankYouPage() {
    document.querySelector("#overall").innerHTML = `
    <div class=" step-5 wrapper">
    <div class=" mb-[2rem] md:mb-[8rem] items-center  flex-col text-center pt-8 md:pt-32">
      <img src="assets/images/icon-thank-you.svg" alt="thank logo" class="mx-auto">
      <h2 class="mt-4 text-3xl font-bold text-MarineBlue md:text-4xl">Thank you!</h2>
      <p class="mt-3 mb-4 text-slate-400 md:text-xl">Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support, please feel free to email us at support@loremgaming.com</p>
    </div >
    <footer class="fixed inset-x-0 bottom-0 flex justify-between px-4 py-3 align-middle bg-white md:relative md:bottom-0 md:mt-36 shadow-myShadow md:shadow-none md:-mb-8"  >
        <button class="px-3 py-2 text-md text-slate-500 md:px-4 md:py-2 md:text-xl back_btn" id="">Go Back</button>
        <button class="invisible px-3 py-2 mr-2 font-medium text-white rounded-md text-md bg-MarineBlue md:px-4 md:py-2 md:text-xl next_btn" id="" type="submit"> Next Step </button>
      </footer>
   </div>
    `;
  }
}
