const pages = document.querySelectorAll(".wrapper");
const prevButton = document.querySelectorAll("#back_btn");
const nextButton = document.querySelectorAll("#next_btn");

let currentPage = 1;

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
