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
                discount: '10%',
                sale: '14,400원',
                original: '16,000원',
                image: './images/book1.png',
                link: '#'
            },
            {
                title: '리딩튜터 Junior 1',
                desc: '초등학생이 읽기 실력을 자연스럽게 키울 수 있는 교재입니다.',
                discount: '12%',
                sale: '13,200원',
                original: '15,000원',
                image: './images/book2.jpg',
                link: '#'
            },
            {
                title: '초등 영어 독해',
                desc: '다양한 주제로 독해 실력을 기를 수 있는 초등 영어 교재입니다.',
                discount: '8%',
                sale: '11,040원',
                original: '12,000원',
                image: './images/book3.jpg',
                link: '#'
            }
        ],

        elementary: [
            {
                title: '초등 영어문법책',
                desc: '초등학생용 영어 문법 학습서입니다.',
                discount: '10%',
                sale: '14,400원',
                original: '16,000원',
                image: './images/book1.png',
                link: '#'
            },
            {
                title: '리딩튜터 Junior 1',
                desc: '초등학생용 리딩 훈련 교재입니다.',
                discount: '12%',
                sale: '13,200원',
                original: '15,000원',
                image: './images/book2.jpg',
                link: '#'
            },
            {
                title: '초등 영어 독해',
                desc: '초등학생이 부담 없이 독해를 익힐 수 있는 교재입니다.',
                discount: '8%',
                sale: '11,040원',
                original: '12,000원',
                image: './images/book3.jpg',
                link: '#'
            }
        ],

        middle: [
            {
                title: '중학 영어문법',
                desc: '중학생을 위한 핵심 영어 문법 교재입니다.',
                discount: '15%',
                sale: '17,000원',
                original: '20,000원',
                image: './images/middle1.jpg',
                link: '#'
            },
            {
                title: '중학 독해 기본',
                desc: '중학생 독해 실력을 단계적으로 잡아주는 교재입니다.',
                discount: '10%',
                sale: '13,500원',
                original: '15,000원',
                image: './images/middle2.jpg',
                link: '#'
            },
            {
                title: '중학 어휘 완성',
                desc: '중등 필수 어휘를 집중적으로 정리할 수 있는 교재입니다.',
                discount: '9%',
                sale: '12,740원',
                original: '14,000원',
                image: './images/middle3.jpg',
                link: '#'
            }
        ],

        high: [
            {
                title: '고등 영어문법',
                desc: '고등학생 내신과 수능 대비에 적합한 영어 문법 교재입니다.',
                discount: '5%',
                sale: '18,050원',
                original: '19,000원',
                image: './images/high1.jpg',
                link: '#'
            },
            {
                title: '고등 독해 완성',
                desc: '수능형 독해 훈련에 맞춘 고등 영어 교재입니다.',
                discount: '7%',
                sale: '16,740원',
                original: '18,000원',
                image: './images/high2.jpg',
                link: '#'
            },
            {
                title: '고등 어휘 실전',
                desc: '고등 필수 어휘를 실전형으로 정리한 교재입니다.',
                discount: '10%',
                sale: '15,300원',
                original: '17,000원',
                image: './images/high3.jpg',
                link: '#'
            }
        ],

        etc: [
            {
                title: '파닉스 워크북',
                desc: '기초 발음 훈련에 적합한 보조 학습 교재입니다.',
                discount: '8%',
                sale: '9,200원',
                original: '10,000원',
                image: './images/etc1.jpg',
                link: '#'
            },
            {
                title: '영어 쓰기 연습장',
                desc: '쓰기 훈련을 위한 보조형 교재입니다.',
                discount: '10%',
                sale: '10,800원',
                original: '12,000원',
                image: './images/etc2.jpg',
                link: '#'
            },
            {
                title: '단어 테스트북',
                desc: '단어 암기와 테스트를 함께 할 수 있는 교재입니다.',
                discount: '6%',
                sale: '11,280원',
                original: '12,000원',
                image: './images/etc3.jpg',
                link: '#'
            }
        ]
    };

    const buttons = document.querySelectorAll('#publish .category button');
    const mainBookImg = document.getElementById('mainBookImg');
    const mainBookTitle = document.getElementById('mainBookTitle');
    const mainBookDesc = document.getElementById('mainBookDesc');
    const mainBookDiscount = document.getElementById('mainBookDiscount');
    const mainBookSale = document.getElementById('mainBookSale');
    const mainBookOriginal = document.getElementById('mainBookOriginal');
    const mainBookLink = document.getElementById('mainBookLink');
    const previewList = document.getElementById('previewList');

    function renderMainBook(book) {
        mainBookImg.src = book.image;
        mainBookImg.alt = book.title;
        mainBookTitle.textContent = book.title;
        mainBookDesc.textContent = book.desc;
        mainBookDiscount.textContent = book.discount;
        mainBookSale.textContent = book.sale;
        mainBookOriginal.textContent = book.original;
        mainBookLink.href = book.link;
    }

    function renderPreview(tabName) {
    const books = bookData[tabName];
    previewList.innerHTML = '';

    books.slice(1).forEach(function(book) {
        const item = document.createElement('div');
        item.className = 'preview_item';

        item.innerHTML = `<img src="${book.image}" alt="${book.title}">`;

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

        renderMainBook(books[0]);
        renderPreview(tabName);
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