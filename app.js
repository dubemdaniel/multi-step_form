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
     
        current++
        stpCircle++
            if(current===3){
                next.innerHTML = `
                <button class="px-3 py-2 mr-2 font-medium text-white rounded-md text-md bg-MarineBlue md:px-1 md:py-1 md:text-xl" id="next_btn" type="submit"> Confirm </button>
                `
            }else if(current===4){
            next.classList.add('hidden')
        }
    }if(stpCircle < 4){
        stp[stpCircle ].className = 'flex items-center justify-center w-10 h-10 border-2 rounded-full md:m-auto md:w-12 md:h-12 bg-Magnolia text-MarineBlue'
    }
})

// back.addEventListener('click', () => {
//     if(current === 1){
        
//         back.classList.remove('invisible')

//     }
    
// })
function prev(){
    if (current === 1){
        back.classList.remove('invisible')
    }
}