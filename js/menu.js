$(document).ready(function(){
            $('.sub').hide();
            $('.submn_area').hide().css({height:0});

            $('#header').mouseenter(function(){
                $('.submn_area')
                    .stop(true,true)
                    .show()
                    .animate({height:250},200);

                $('.sub')
                    .stop(true,true)
                    .fadeIn(150);
            });

            $('#header').mouseleave(function(){
                $('.sub')
                    .stop(true,true)
                    .fadeOut(100);

                $('.submn_area')
                    .stop(true,true)
                    .delay(50)
                    .animate({height:0},150,function(){
                        $(this).hide();
                    });
            });
        });


        // 메인이미지 슬라이드

        $(document).ready(function(){
            var visual = $('.main_img > li');
            var button = $('.btn > li');
            var current = 0;
            var setIntervalId;

            button.click(function(e){
                e.preventDefault();

                var i = $(this).index();

                move(i);
                

            });

            function move(i){
                var currentEl = visual.eq(current);
                var nextEl = visual.eq(i);

                currentEl.css({left:0}).stop().animate({left:'-100%'});
                nextEl.css({left:'100%'}).stop().animate({left:'0'});

                button.removeClass('on').eq(i).addClass('on');

                current = i;
            }
            
            //자동실행함수
            function timer(){
            setIntervalId = setInterval  (function(){
                var n = current+1;
                if(n== visual.length){
                    n=0;

                }
                move(n);
            },3000)
            }
            timer();

            //자동실행을 중지하는 함수
            $('#main').on({

                mouseover:function(){
                    clearInterval(setIntervalId);
                },
                mouseout:function(){
                    timer();
                }
                
            })

        });



//가운데
document.addEventListener('DOMContentLoaded', function () {
    const bookData = {
        all: [
            {
                title: '초등 영어문법책',
                desc: '초등학생용 영어 문법 학습서입니다.',
                image: './images/book1.png',
                link: '#'
            },
            {
                title: '리딩튜터 Junior 1',
                desc: '초등학생이 읽기 실력을 자연스럽게 키울 수 있는 교재입니다.',
                image: './images/book2.jpg',
                link: '#'
            },
            {
                title: '리딩튜터 Junior 2',
                desc: '초등학생이 읽기 실력을 자연스럽게 키울 수 있는 교재입니다.',
                image: './images/book1.png',
                link: '#'
            },
            {
                title: '리딩튜터 Junior 3',
                desc: '초등학생이 읽기 실력을 자연스럽게 키울 수 있는 교재입니다.',
                image: './images/book2.jpg',
                link: '#'
            },
            {
                title: '리딩튜터 Junior 4',
                desc: '초등학생이 읽기 실력을 자연스럽게 키울 수 있는 교재입니다.',
                image: './images/book1.png',
                link: '#'
            },
        ],

        elementary: [
            {
                title: '초등 영어문법책',
                desc: '초등학생용 영어 문법 학습서입니다.',
                image: './images/book1.png',
                link: '#'
            },
            {
                title: '리딩튜터 Junior 1',
                desc: '초등학생용 리딩 훈련 교재입니다.',
                image: './images/book2.jpg',
                link: '#'
            },
            {
                title: '초등 영어 독해',
                desc: '초등학생이 부담 없이 독해를 익힐 수 있는 교재입니다.',
                image: './images/book1.png',
                link: '#'
            },
            {
                title: '리딩튜터 Junior 1',
                desc: '초등학생용 리딩 훈련 교재입니다.',
                image: './images/book2.jpg',
                link: '#'
            }
        ],

        middle: [
            {
                title: '중학 영어문법',
                desc: '중학생을 위한 핵심 영어 문법 교재입니다.',
                image: './images/middle1.jpg',
                link: '#'
            },
            {
                title: '중학 독해 기본',
                desc: '중학생 독해 실력을 단계적으로 잡아주는 교재입니다.',
                image: './images/middle2.jpg',
                link: '#'
            },
            {
                title: '중학 어휘 완성',
                desc: '중등 필수 어휘를 집중적으로 정리할 수 있는 교재입니다.',
                image: './images/middle3.jpg',
                link: '#'
            }
        ],

        high: [
            {
                title: '고등 영어문법',
                desc: '고등학생 내신과 수능 대비에 적합한 영어 문법 교재입니다.',
                image: './images/high1.jpg',
                link: '#'
            },
            {
                title: '고등 독해 완성',
                desc: '수능형 독해 훈련에 맞춘 고등 영어 교재입니다.',
                image: './images/high2.jpg',
                link: '#'
            },
            {
                title: '고등 어휘 실전',
                desc: '고등 필수 어휘를 실전형으로 정리한 교재입니다.',
                image: './images/high3.jpg',
                link: '#'
            }
        ],

        etc: [
            {
                title: '파닉스 워크북',
                desc: '기초 발음 훈련에 적합한 보조 학습 교재입니다.',
                image: './images/etc1.jpg',
                link: '#'
            },
            {
                title: '영어 쓰기 연습장',
                desc: '쓰기 훈련을 위한 보조형 교재입니다.',
                image: './images/etc2.jpg',
                link: '#'
            },
            {
                title: '단어 테스트북',
                desc: '단어 암기와 테스트를 함께 할 수 있는 교재입니다.',
                image: './images/etc3.jpg',
                link: '#'
            }
        ]
    };

    const buttons = document.querySelectorAll('#publish .category button');
    const mainBookImg = document.getElementById('mainBookImg');
    const mainBookTitle = document.getElementById('mainBookTitle');
    const mainBookDesc = document.getElementById('mainBookDesc');
    const mainBookLink = document.getElementById('mainBookLink');
    const previewList = document.getElementById('previewList');
    const prevBtn = document.querySelector('#publish .prev_btn');
    const nextBtn = document.querySelector('#publish .next_btn');

    let currentBooks = [];
    let currentIndex = 0;
    let autoSlide;

    function renderMainBook(book) {
        mainBookImg.src = book.image;
        mainBookImg.alt = book.title;
        mainBookTitle.textContent = book.title;
        mainBookDesc.textContent = book.desc;
        mainBookLink.href = book.link;
    }

    function renderPreview(tabName) {
    const books = bookData[tabName];
    previewList.innerHTML = '';

    books.slice(1).forEach(function(book) {
        const item = document.createElement('div');
        item.className = 'preview_item';

        item.innerHTML = `<img src="${book.image}" alt="${book.title}"> <p class="preview_title">${book.title}</p>`;

        item.addEventListener('click', function() {
            renderMainBook(book);

            document.querySelectorAll('#previewList .preview_item').forEach(function(el) {
                el.classList.remove('active');
                el.classList.add('dim');
            });

            item.classList.add('active');
            item.classList.remove('dim');
        });

        previewList.appendChild(item);
    });
}

    function renderTab(tabName) {
        const books = bookData[tabName];
        if (!books || books.length === 0) return;

        currentBooks = books;
        currentIndex = 0;

        renderMainBook(currentBooks[currentIndex]);
        renderPreview(tabName);

        stopAutoSlide();      // 기존 제거
        startAutoSlide();     // 다시 시작
    }

    function startAutoSlide() {
        autoSlide = setInterval(function () {
            currentIndex++;

            if (currentIndex >= currentBooks.length) {
                currentIndex = 0;
            }

            renderMainBook(currentBooks[currentIndex]);
        }, 3000); // 3초
    }
    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            this.classList.add('active');
            renderTab(this.dataset.tab);
        });
    });

    prevBtn.addEventListener('click', function () {
        stopAutoSlide();

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = currentBooks.length - 1;
        }

        renderMainBook(currentBooks[currentIndex]);

        startAutoSlide();
    });

    nextBtn.addEventListener('click', function () {
    stopAutoSlide();

    currentIndex++;

    if (currentIndex >= currentBooks.length) {
        currentIndex = 0;
    }

    renderMainBook(currentBooks[currentIndex]);

    startAutoSlide();
});

renderTab('all');
});

//아래 탭메뉴
$(document).ready(function(){
    $('#notice .c_box').hide();
    $('#notice .c_box').eq(0).show();

    $('#notice .category button').click(function(){
        var i = $(this).index();

        $('#notice .category button').removeClass('active');
        $(this).addClass('active');

        $('#notice .c_box').hide();
        $('#notice .c_box').eq(i).show();
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const solutionData = {
        baby: [
            {
                tag: '#놀이형 콘텐츠 #월령 맞춤 설계',
                title: '아이 챌린지',
                desc: '영유아 월령 발달에 맞춰 바른 습관을 길러주는<br>홈스쿨 프로그램',
                image: './images/soution_img1.png',
                link: '#'
            },
            {
                tag: '#창의력 발달 #놀이 학습',
                title: '아이 챌린지 2',
                desc: '아이의 호기심과 표현력을 키워주는<br>놀이 중심 학습 프로그램',
                image: './images/soution_img2.png',
                link: '#'
            },
            {
                tag: '#생활습관 #감각 발달',
                title: '아이 챌린지 3',
                desc: '일상 속 바른 습관을 자연스럽게 익히는<br>영유아 맞춤 프로그램',
                image: './images/soution_img3.png',
                link: '#'
            },
            {
                tag: '#부모 참여 #홈스쿨',
                title: '아이 챌린지 4',
                desc: '부모와 아이가 함께 교감하며 성장하는<br>가정 연계 학습 프로그램',
                image: './images/soution_img4.png',
                link: '#'
            }
        ],

        student: [
            {
                tag: '#수준별 학습 #교과 연계',
                title: '초중고 챌린지 1',
                desc: '초중고 학생의 학습 수준에 맞춘<br>체계적인 교육 프로그램',
                image: './images/student_img1.png',
                link: '#'
            },
            {
                tag: '#내신 대비 #학습 관리',
                title: '초중고 챌린지 2',
                desc: '학교 수업과 시험 대비를 함께 잡아주는<br>맞춤형 학습 프로그램',
                image: './images/student_img2.png',
                link: '#'
            },
            {
                tag: '#자기주도학습 #실력 향상',
                title: '초중고 챌린지 3',
                desc: '스스로 공부하는 힘을 기를 수 있도록 돕는<br>학습 성장 프로그램',
                image: './images/student_img3.png',
                link: '#'
            }
        ]
    };

    const tabButtons = document.querySelectorAll('#solution .category button');
    const solutionImg = document.getElementById('solutionImg');
    const solutionTag = document.getElementById('solutionTag');
    const solutionTitle = document.getElementById('solutionTitle');
    const solutionDesc = document.getElementById('solutionDesc');
    const solutionDots = document.getElementById('solutionDots');
    const solutionCurrent = document.getElementById('solutionCurrent');
    const solutionTotal = document.getElementById('solutionTotal');
    const solutionPrev = document.getElementById('solutionPrev');
    const solutionNext = document.getElementById('solutionNext');

    let currentTab = 'baby';
    let currentIndex = 0;

    function renderSolution() {
        const list = solutionData[currentTab];
        const item = list[currentIndex];

        solutionImg.src = item.image;
        solutionImg.alt = item.title;
        solutionTag.textContent = item.tag;
        solutionTitle.textContent = item.title;
        solutionDesc.innerHTML = item.desc;

        solutionCurrent.textContent = String(currentIndex + 1).padStart(2, '0');
        solutionTotal.textContent = String(list.length).padStart(2, '0');

        renderDots();
    }

    function renderDots() {
        const list = solutionData[currentTab];
        solutionDots.innerHTML = '';

        list.forEach(function (item, index) {
            const dot = document.createElement('button');

            if (index === currentIndex) {
                dot.classList.add('active');
            }

            dot.addEventListener('click', function () {
                currentIndex = index;
                renderSolution();
            });

            solutionDots.appendChild(dot);
        });
    }

    tabButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            tabButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });

            this.classList.add('active');

            currentTab = this.dataset.solutionTab;
            currentIndex = 0;

            renderSolution();
        });
    });

    solutionNext.addEventListener('click', function () {
        const list = solutionData[currentTab];

        currentIndex++;

        if (currentIndex >= list.length) {
            currentIndex = 0;
        }

        renderSolution();
    });

    solutionPrev.addEventListener('click', function () {
        const list = solutionData[currentTab];

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = list.length - 1;
        }

        renderSolution();
    });

    renderSolution();
});