const next = document.getElementById('next_btn')
const back = document.getElementById('back_btn')
const wrapper = document.querySelectorAll('.wrapper')
let current = 0
next.addEventListener('click', () => {
    if(current < 4){
        wrapper[current].classList.add('hidden');
        wrapper[current + 1].classList.remove('hidden')
        current++
            if(current===3){
                next.innerHTML = ''
                next.innerHTML = `
                <button class="px-3 py-2 mr-2 font-medium text-white rounded-md text-md bg-MarineBlue md:px-1 md:py-1 md:text-xl" id="next_btn" type="submit"> Confirm </button>
                `
            }
         if(current===4){
            next.classList.add('hidden')
        }
    }
})