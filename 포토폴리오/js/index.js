// ***** 소개 타이핑 *****
const $text = document.querySelector(".typing-text");

// 글자 모음
const letters = [
    "감각적인",
    "노력파",
    "열정적인"
];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 타이핑 효과
const typing = async () => {
    const letter = letters[i].split("");
    while (letter.length) {
        await wait(speed);
        $text.innerHTML += letter.shift();
    }

    // 잠시 대기
    await wait(800);

    // 지우는 효과
    remove();
}

// 글자 지우는 효과
const remove = async () => {
    const letter = letters[i].split("");

    while (letter.length) {
        await wait(speed);

        letter.pop();
        $text.innerHTML = letter.join("");
    }

    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    i = !letters[i + 1] ? 0 : i + 1;
    typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1500);

// 화면
const $header = document.querySelector('#header')
const $nav_link = document.querySelectorAll('.nav-link')
const $section = document.querySelectorAll('section')
const $navbar = document.querySelectorAll('.navbar ul li')
console.log($section);
$navbar.forEach((item,index)=>{
    item.addEventListener('click',e=>{
        console.log(e.target);
        console.log(item);
        setTimeout(function() {
            $section.forEach((iten2,index2)=>{
                iten2.classList.toggle('section-show',index===index2+1)
            })
        },350);
        $header.classList.toggle('header-top',index!==0)
        $nav_link.forEach((item3,index3)=>{
            item3.classList.toggle('active',index===index3)
        }) 
    })
    console.log($nav_link);
})

/**
   * Skills animation
   */
let skilsContent = document.querySelector('.skills-content')

new Waypoint({
    element: skilsContent,
    handler: function(direction) {
        if(direction === "down"){
            let progress = document.querySelectorAll('.progress .progress-bar');
            progress.forEach((el) => {
                el.style.width = el.getAttribute('aria-valuenow') + '%'
              });
        } else {
        console.log('up');
        }
    },
    offset: '80%',
})
