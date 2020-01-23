window.onload = function() {
    const ham = document.getElementsByClassName("ham")[0];
    ham.addEventListener("click", function(){
        const ham_menu = document.getElementsByClassName("ham__menu")[0];
        ham_menu.classList.remove("passive");
        ham_menu.classList.add("active");
    }, false);

    const ham_close = document.getElementsByClassName("ham__menu_close")[0];
    ham_close.addEventListener("click", function(){
        const ham_menu = document.getElementsByClassName("ham__menu")[0];
        ham_menu.classList.remove("active");
        ham_menu.classList.add("passive");
    }, false);

    window.addEventListener( "scroll", function () {
        const scrollTop = document.scrollingElement.scrollTop;

        if (window.innerWidth >= 1366) {
            if (scrollTop <= 700) {
                document.getElementsByClassName("article__section_img1")[0].style.left = scrollTop - 430 + "px";
                document.getElementsByClassName("article__section_text1")[0].style.left = scrollTop + 50 + "px";
                document.getElementsByClassName("article__section_text2")[0].style.left = 1366 - scrollTop + "px";
                document.getElementsByClassName("article__section_img2")[0].style.left = 1366 + 300 - scrollTop + "px";
            }
            if (700 <= scrollTop && scrollTop <= 1000) {
                document.getElementsByClassName("article__section_text2")[0].style.left = 1366 - scrollTop + "px";
                document.getElementsByClassName("article__section_img2")[0].style.left = 1366 + 300 - scrollTop + "px";
            }
            if (700 <= scrollTop && scrollTop <= 1300) {
                document.getElementsByClassName("article__section_img3")[0].style.left = scrollTop + 50 - 1350 + "px";
                document.getElementsByClassName("article__section_text3")[0].style.left = scrollTop - 430 - 400 + "px";
            }
            if (1300 <= scrollTop && scrollTop <= 1600) {
                document.getElementsByClassName("article__section_img3")[0].style.left = scrollTop + 50 - 1350 + "px";
                document.getElementsByClassName("article__section_text3")[0].style.left = scrollTop - 430 - 400 + "px";
                document.getElementsByClassName("article__section_text4")[0].style.left = 1366 + 1000 - scrollTop + "px";
                document.getElementsByClassName("article__section_img4")[0].style.left = 1366 + 1300 - scrollTop + "px";
            }
            if (1700 <= scrollTop && scrollTop <= 2000) {
                document.getElementsByClassName("article__section_text4")[0].style.left = 1366 + 1000 - scrollTop + "px";
                document.getElementsByClassName("article__section_img4")[0].style.left = 1366 + 1300 - scrollTop + "px";
            }
        
        } else if (window.innerWidth < 1366 && window.innerHeight >= 414) {
            if (scrollTop <= 700) {
                document.getElementsByClassName("article__section_img1")[0].style.left = scrollTop - 630 + "px";
                document.getElementsByClassName("article__section_text1")[0].style.left = scrollTop - 600 + "px";
            }
            if (700 <= scrollTop && scrollTop <= 950) {
                document.getElementsByClassName("article__section_text2")[0].style.left = 414 + 600 - scrollTop + "px";
                document.getElementsByClassName("article__section_img2")[0].style.left = 414 + 600 - scrollTop + "px";
            }
            if (1300 <= scrollTop && scrollTop <= 1600) {
                document.getElementsByClassName("article__section_img3")[0].style.left = scrollTop + 50 - 1600 + "px";
                document.getElementsByClassName("article__section_text3")[0].style.left = scrollTop - 430 - 1100 + "px";
            }
            if (1900 <= scrollTop && scrollTop <= 2200) {
                document.getElementsByClassName("article__section_text4")[0].style.left = 1366 + 900 - scrollTop + "px";
                document.getElementsByClassName("article__section_img4")[0].style.left = 1366 + 900 - scrollTop + "px";
            }
            
        } else {
            if (scrollTop <= 700) {
                document.getElementsByClassName("article__section_img1")[0].style.left = scrollTop - 430 + "px";
                document.getElementsByClassName("article__section_text1")[0].style.left = scrollTop + 50 + "px";
            }
            if (700 <= scrollTop && scrollTop <= 1000) {
                document.getElementsByClassName("article__section_text2")[0].style.left = 320 - scrollTop + "px";
                document.getElementsByClassName("article__section_img2")[0].style.left = 320 + 300 - scrollTop + "px";
            }
            if (1300 <= scrollTop && scrollTop <= 1600) {
                document.getElementsByClassName("article__section_img3")[0].style.left = scrollTop + 50 - 1350 + "px";
                document.getElementsByClassName("article__section_text3")[0].style.left = scrollTop - 430 - 400 + "px";
            }
            if (1700 <= scrollTop && scrollTop <= 2000) {
                document.getElementsByClassName("article__section_text4")[0].style.left = 1366 + 1000 - scrollTop + "px";
                document.getElementsByClassName("article__section_img4")[0].style.left = 1366 + 1300 - scrollTop + "px";
            }
            
        }
    }, false);
}