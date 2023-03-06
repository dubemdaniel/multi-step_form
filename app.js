const pages = document.querySelectorAll(".wrapper");
const prevButton = document.querySelectorAll(".back_btn");
const nextButton = document.querySelectorAll(".next_btn");

let currentPage = 1;

    prevButton.forEach(backBtn => {
        backBtn.addEventListener('click', () => {
            if(backBtn){
                document.querySelector(`.step-${currentPage}`).classList.add('hidden')
                console.log(`back ${currentPage}`)
                currentPage--;
                document.querySelector(`.step-${currentPage}`).classList.remove('hidden');
                console.log(`back ${currentPage}`)
            
            }
        })
    });
    // if(prevButton){
    //     prevButton.addEventListener('click', () => {
    //         document.querySelector(`.step-${currentPage}`).classList.remove('hidden')
    //         currentPage--;
    //         document.querySelector(`.step-${currentPage}`).classList.add('hidden');
    //     })
    // }

  
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
    
            console.log(currentPage)
            // currentPage++
            console.log('ur pa')
    
          })
      });

  // nextButton.addEventListener('click', () => {
      
    //     if(currentPage < 5){
    //         document.querySelector(`.step-${currentPage}`).classList.add('hidden')  ;
    //         console.log(currentPage)
    //         // currentPage++
            
    //     document.querySelector(`.step-${currentPage + 1}`).classList.remove('hidden')  ;
    //     }

    //     console.log(currentPage)
    //     currentPage++
    //     console.log('ur pa')

    //   })