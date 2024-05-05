$(function () {
    let divWidth = $('#sliderBoard').width() //抓div的寬
    let imgCount = $('#content li').length //有幾個li
    // alert(imgCount)


    for(let i=0; i<imgCount; i++){
    $('#contentButton').append('<li></li>')
    }
    $('#contentButton li:first').addClass('clicked')

    $('#content li').width(divWidth) //li的寬 (=div的寬)
    $('#content').width(divWidth * imgCount) //ul的寬

    let index = 0

    let timer = setInterval(moveToNext,5000)

    $('#contentButton li').click(function(){

        clearInterval(timer);
        
        index = $(this).index()

        $('#content').animate({
            left: divWidth * index * -1,
        })

        $(this).addClass('clicked')
        $('#contentButton li').not(this).removeClass('clicked')

        timer = setInterval(moveToNext,5000)

    })


function moveToNext(){
    // 控制index值只能介於 0-7 之間
    if(index < imgCount - 1){
        index++ //6的時候還要+1
    }else{
        index = 0
    }

    $('#content').animate({
        left: divWidth * index * -1,

    })
    $(`#contentButton li:eq(${index})`).addClass('clicked')
    $('#contentButton li').not(`:eq(${index})`).removeClass('clicked')

    }
});

// $(function () {
//     let divWidth;
//     let imgCount;
//     let index = 0;
//     let timer;

//     function initializeCarousel() {
//         divWidth = $('#sliderBoard').width();
//         imgCount = $('#content li').length;

//         // 重新设置 li 的宽度和 ul 的宽度
//         $('#content li').width(divWidth);
//         $('#content').width(divWidth * imgCount);

//         // 初始化第一个按钮为选中状态
//         $('#contentButton li:first').addClass('clicked');

//         // 初始化轮播定时器
//         timer = setInterval(moveToNext, 5000);
//     }

//     initializeCarousel(); // 页面加载时初始化轮播

//     // 监听窗口大小变化
//     $(window).resize(function() {
//         clearInterval(timer); // 清除定时器
//         initializeCarousel(); // 重新初始化轮播
//     });

//     // 点击按钮切换图片
//     $('#contentButton li').click(function(){
//         clearInterval(timer);
//         index = $(this).index();

//         $('#content').animate({
//             left: divWidth * index * -1,
//         })

//         $(this).addClass('clicked')
//         $('#contentButton li').not(this).removeClass('clicked')

//         timer = setInterval(moveToNext, 5000);
//     })

//     function moveToNext(){
//         if(index < imgCount - 1){
//             index++
//         } else {
//             index = 0;
//         }

//         $('#content').animate({
//             left: divWidth * index * -1,
//         })

//         $(`#contentButton li:eq(${index})`).addClass('clicked')
//         $('#contentButton li').not(`:eq(${index})`).removeClass('clicked')
//     }
// });