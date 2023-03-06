const next = document.getElementById('next_btn')
const back = document.getElementById('back_btn')
const stp = document.querySelectorAll('.stp')
const wrapper = document.querySelectorAll('.wrapper')
let current = 0
let stpCircle = 0
next.addEventListener('click', () => {
    if(current < 4 ){
        wrapper[current].classList.add('hidden');
        wrapper[current + 1].classList.remove('hidden')
        prev()
        current++
        stpCircle++
            if(current===3){
                next.innerHTML = `
                <button class="px-3 py-2 mr-2 font-medium text-white rounded-md text-md bg-MarineBlue md:px-1 md:py-1 md:text-xl" id="next_btn" type="submit"> Confirm </button>
                `

            } else if(current===4 && next){
                     next.classList.add('invisible')


                // if (next) {
                //     next.classList.add('hidden')
                //     return false
                
            
            // }else{
            //     next.classList.remove('invisible')
            // }else if (current !== 3){
            //     next.textContent = 'submit'
            }
            
    }
console.log(current)

})

function prev(){
    if (current === 0){
        back.classList.remove('invisible')
    }
}
back.addEventListener('click', () => {
    if(current < 5){
        wrapper[current].classList.add('hidden')
        wrapper[current - 1].classList.remove('hidden')
        prev()
        current--
       
    }else if (current === 3|| current === 2 || current === 1){
        next.classList.add('invisible')
    }else if (current !== 3){
        next.textContent = ''
    }
console.log(current)

    
})


// ============================================================
// second attempt still giving me issues


showPage(currentPage);


nextButton.addEventListener('click' ,(e) => {
    e.preventDefault()
    if (currentPage < pages.length - 1) {

        currentPage++ ;

        showPage(currentPage);
    }
    console(currentPage)
})

prevButton.addEventListener("click", (e) => {
  e.preventDefault();
  if ( currentPage > 0){

    currentPage-- ;

    showPage(currentPage);
  }
});

function showPage(current) {
    pages.forEach((page, index) => {
      if (index === current) {
        page.classList.add('hidden');
      } else {
        page.classList.remove('hidden');
      }
    });
  }