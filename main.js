window.onload = function() {
    window.addEventListener( "scroll", function () {
        const scrollTop = document.scrollingElement.scrollTop;
        if (scrollTop <= 700) {
            document.getElementsByClassName("article__section_img1")[0].style.left = scrollTop - 430 + "px";
            document.getElementsByClassName("article__section_text1")[0].style.left = scrollTop + 50 + "px";
        }
        if (700 <= scrollTop && scrollTop <= 1000) {
            document.getElementsByClassName("article__section_text2")[0].style.left = 1366 - scrollTop + "px";
            document.getElementsByClassName("article__section_img2")[0].style.left = 1366 + 300 - scrollTop + "px";
        }
        if (1300 <= scrollTop && scrollTop <= 1600) {
            document.getElementsByClassName("article__section_img3")[0].style.left = scrollTop + 50 - 1350 + "px";
            document.getElementsByClassName("article__section_text3")[0].style.left = scrollTop - 430 - 400 + "px";
        }
        if (1700 <= scrollTop && scrollTop <= 2000) {
            document.getElementsByClassName("article__section_text4")[0].style.left = 1366 + 1000 - scrollTop + "px";
            document.getElementsByClassName("article__section_img4")[0].style.left = 1366 + 1300 - scrollTop + "px";
        }
    }, false);
}