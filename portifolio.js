document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.getElementById('navbar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        });
    });





    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 70; 
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    const secondH3 = animatedTextWrapper.querySelector('h3:last-of-type');
    if (secondH3) {
        secondH3.innerHTML = animatedTextHTML;
    }

});



let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    Array.from(currentWord.children).forEach((letter,i) => {
        setTimeout(() =>{
            letter.className = "letter out";

        },i * 80);

    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind"
        setTimeout(()=>{
            letter.className = "letter in";


        },340+i*80);

    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex +1;
};

changeText();
setInterval(changeText,3000);





const resumeBtns=document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
   btn.addEventListener('click', () =>{
    const resumeDetails = document.querySelectorAll('.resume-detail');
      resumeBtns.forEach(btn => {
        btn.classList.remove('active');
      });
      btn.classList.add('active');

         resumeDetails.forEach(detail => {
        detail.classList.remove('active');
      });

      resumeDetails[idx].classList.add('active');

   });
});