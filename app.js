const pages = document.querySelectorAll(".wrapper");
const prevButton = document.querySelectorAll(".back_btn");
const nextButton = document.querySelectorAll(".next_btn");
const circles = document.querySelectorAll(".stp")

let currentPage = 1;
let currentCircle = 0

    prevButton.forEach(backBtn => {
        backBtn.addEventListener('click', () => {
            if(backBtn){
                document.querySelector(`.step-${currentPage}`).classList.add('hidden')
                console.log(`back ${currentPage}`)
                currentPage--;
                document.querySelector(`.step-${currentPage}`).classList.remove('hidden');
                console.log(`back ${currentPage}`)
                
                circles[currentCircle].className = 'flex items-center justify-center w-10 h-10 border-2 rounded-full md:m-auto md:w-12 md:h-12 stp'
                currentCircle--
            
            }
        })
    });

  
      console.log(` this is ${currentPage}th page`)
            // currentPage++

      nextButton.forEach(btn => {
        btn.addEventListener('click', () => {
      
            if(currentPage < 5){
                document.querySelector(`.step-${currentPage}`).classList.add('hidden')  ;
                console.log(currentPage)
                currentPage++
                
            document.querySelector(`.step-${currentPage }`).classList.remove('hidden')  ;
            }
            if(currentCircle !== 3){
                circles[currentCircle + 1].className = 'flex items-center justify-center w-10 h-10 border-2 rounded-full md:m-auto md:w-12 md:h-12 stp bg-Magnolia text-MarineBlue' 
            }else{
                circles[currentCircle + 2].className =  'flex items-center justify-center w-10 h-10 border-2 rounded-full md:m-auto md:w-12 md:h-12 stp bg-Magnolia text-MarineBlue' 
                
            }
           
            currentCircle++
            console.log(currentPage)
            // currentPage++
            console.log('ur pa')
    
          })
      });

