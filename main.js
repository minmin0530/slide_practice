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


    let scrollTop = 0;
    let x1 = 0;
    let x2 = 0;
    let x3 = 0;
    let x4 = 0;
    if (window.innerWidth >= 1366) {
        x2 = 1366;
        x4 = 1366;
    } else if (window.innerWidth < 1366 && window.innerWidth >= 414) {
        x2 = window.innerWidth;
        x4 = window.innerWidth;
    } else {
        x2 = 520;
        x4 = 520;
    }
    let section1Flag = false;
    let section2Flag = false;
    let section3Flag = false;
    let section4Flag = false;

    loop();

    function loop() {
        if (window.innerWidth >= 1366) {

            if (scrollTop >=  300) {            section1Flag = true;        }
            if (scrollTop >=  700) {            section2Flag = true;        }
            if (scrollTop >= 1300) {            section3Flag = true;        }
            if (scrollTop >= 1700) {            section4Flag = true;        }
            if (section1Flag && x1 < 700) {
                x1 += 10;
                document.getElementsByClassName("article__section_img1")[0].style.left = x1 - 430 + "px";
                document.getElementsByClassName("article__section_text1")[0].style.left = x1 + 50 + "px";
            }

            if (section2Flag && x2 > 300) {
                x2 -= 10;
                document.getElementsByClassName("article__section_text2")[0].style.left =  x2 + "px";
                document.getElementsByClassName("article__section_img2")[0].style.left =  300 + x2 + "px";
            }

            if (section3Flag && x3 < 700) {
                x3 += 10;
                document.getElementsByClassName("article__section_img3")[0].style.left = x3 - 430 + "px";
                document.getElementsByClassName("article__section_text3")[0].style.left = x3 + 50 + "px";
            }

            if (section4Flag && x4 > 300) {
                x4 -= 10;
                document.getElementsByClassName("article__section_text4")[0].style.left =  x4 + "px";
                document.getElementsByClassName("article__section_img4")[0].style.left =  300 + x4 + "px";
            }
        } else if (window.innerWidth < 1366 && window.innerWidth >= 414) {
            if (scrollTop >=  400) {            section1Flag = true;        }
            if (scrollTop >= 1000) {            section2Flag = true;        }
            if (scrollTop >= 1600) {            section3Flag = true;        }
            if (scrollTop >= 2000) {            section4Flag = true;        }
            if (section1Flag && x1 < 350) {
                x1 += 10;
                document.getElementsByClassName("article__section_img1")[0].style.left = x1 - 300 + "px";
                document.getElementsByClassName("article__section_text1")[0].style.left = x1 - 300 + "px";
            }

            if (section2Flag && x2 > 350) {
                x2 -= 10;
                document.getElementsByClassName("article__section_text2")[0].style.left = -300 + x2 + "px";
                document.getElementsByClassName("article__section_img2")[0].style.left =  -300 + x2 + "px";
            }

            if (section3Flag && x3 < 350) {
                x3 += 10;
                document.getElementsByClassName("article__section_img3")[0].style.left = x3 - 300 + "px";
                document.getElementsByClassName("article__section_text3")[0].style.left = x3 - 300 + "px";
            }

            if (section4Flag && x4 > 350) {
                x4 -= 10;
                document.getElementsByClassName("article__section_text4")[0].style.left = -300 + x4 + "px";
                document.getElementsByClassName("article__section_img4")[0].style.left = -300 + x4 + "px";
            }

        } else {
            if (scrollTop >=  400) {            section1Flag = true;        }
            if (scrollTop >= 1000) {            section2Flag = true;        }
            if (scrollTop >= 1600) {            section3Flag = true;        }
            if (scrollTop >= 2100) {            section4Flag = true;        }
            if (section1Flag && x1 < 320) {
                x1 += 10;
                document.getElementsByClassName("article__section_img1")[0].style.left = x1 - 300 + "px";
                document.getElementsByClassName("article__section_text1")[0].style.left = x1 - 300 + "px";
            }

            if (section2Flag && x2 > 320) {
                x2 -= 10;
                document.getElementsByClassName("article__section_text2")[0].style.left = -300 + x2 + "px";
                document.getElementsByClassName("article__section_img2")[0].style.left =  -300 + x2 + "px";
            }

            if (section3Flag && x3 < 320) {
                x3 += 10;
                document.getElementsByClassName("article__section_img3")[0].style.left = x3 - 300 + "px";
                document.getElementsByClassName("article__section_text3")[0].style.left = x3 - 300 + "px";
            }

            if (section4Flag && x4 > 320) {
                x4 -= 10;
                document.getElementsByClassName("article__section_text4")[0].style.left = -300 + x4 + "px";
                document.getElementsByClassName("article__section_img4")[0].style.left = -300 + x4 + "px";
            }

        }
        requestAnimationFrame(loop);
    }


    window.addEventListener( "scroll", function () {
        scrollTop = document.scrollingElement.scrollTop;

        if (window.innerWidth >= 1366) {
            if (scrollTop <= 700) {
                // document.getElementsByClassName("article__section_img1")[0].style.left = scrollTop - 430 + "px";
                // document.getElementsByClassName("article__section_text1")[0].style.left = scrollTop + 50 + "px";
                // document.getElementsByClassName("article__section_text2")[0].style.left = 1366 - scrollTop + "px";
                // document.getElementsByClassName("article__section_img2")[0].style.left = 1366 + 300 - scrollTop + "px";
            }
            if (700 <= scrollTop && scrollTop <= 1000) {
                // document.getElementsByClassName("article__section_text2")[0].style.left = 1366 - scrollTop + "px";
                // document.getElementsByClassName("article__section_img2")[0].style.left = 1366 + 300 - scrollTop + "px";
            }
            if (700 <= scrollTop && scrollTop <= 1300) {
                // document.getElementsByClassName("article__section_img3")[0].style.left = scrollTop + 50 - 1350 + "px";
                // document.getElementsByClassName("article__section_text3")[0].style.left = scrollTop - 430 - 400 + "px";
            }
            if (1300 <= scrollTop && scrollTop <= 1600) {
                // document.getElementsByClassName("article__section_img3")[0].style.left = scrollTop + 50 - 1350 + "px";
                // document.getElementsByClassName("article__section_text3")[0].style.left = scrollTop - 430 - 400 + "px";
                // document.getElementsByClassName("article__section_text4")[0].style.left = 1366 + 900 - scrollTop + "px";
                // document.getElementsByClassName("article__section_img4")[0].style.left = 1366 + 1200 - scrollTop + "px";
            }
            if (1600 <= scrollTop && scrollTop <= 1900) {
                // document.getElementsByClassName("article__section_text4")[0].style.left = 1366 + 900 - scrollTop + "px";
                // document.getElementsByClassName("article__section_img4")[0].style.left = 1366 + 1200 - scrollTop + "px";
            }
        
        } else if (window.innerWidth < 1366 && window.innerWidth >= 414) {
            // if (scrollTop <= 700) {
            //     document.getElementsByClassName("article__section_img1")[0].style.left = scrollTop - 630 + "px";
            //     document.getElementsByClassName("article__section_text1")[0].style.left = scrollTop - 600 + "px";
            // }
            // if (700 <= scrollTop && scrollTop <= 950) {
            //     document.getElementsByClassName("article__section_text2")[0].style.left = 414 + 600 - scrollTop + "px";
            //     document.getElementsByClassName("article__section_img2")[0].style.left = 414 + 600 - scrollTop + "px";
            // }
            // if (1300 <= scrollTop && scrollTop <= 1600) {
            //     document.getElementsByClassName("article__section_img3")[0].style.left = scrollTop + 50 - 1600 + "px";
            //     document.getElementsByClassName("article__section_text3")[0].style.left = scrollTop - 430 - 1100 + "px";
            // }
            // if (1900 <= scrollTop && scrollTop <= 2200) {
            //     document.getElementsByClassName("article__section_text4")[0].style.left = 1366 + 900 - scrollTop + "px";
            //     document.getElementsByClassName("article__section_img4")[0].style.left = 1366 + 900 - scrollTop + "px";
            // }
            
        } else {
            // if (scrollTop <= 500) {
            //     document.getElementsByClassName("article__section_img1")[0].style.left = scrollTop - 490 + "px";
            //     document.getElementsByClassName("article__section_text1")[0].style.left = scrollTop - 480 + "px";
            // }
            // if (700 <= scrollTop && scrollTop <= 1000) {
            //     document.getElementsByClassName("article__section_text2")[0].style.left = 1020 - scrollTop + "px";
            //     document.getElementsByClassName("article__section_img2")[0].style.left = 720 + 300 - scrollTop + "px";
            // }
            // if (1300 <= scrollTop && scrollTop <= 1600) {
            //     document.getElementsByClassName("article__section_img3")[0].style.left = scrollTop - 1570 + "px";
            //     document.getElementsByClassName("article__section_text3")[0].style.left = scrollTop - 1570 + "px";
            // }
            // if (1700 <= scrollTop && scrollTop <= 2000) {
            //     document.getElementsByClassName("article__section_text4")[0].style.left = 1010 + 1000 - scrollTop + "px";
            //     document.getElementsByClassName("article__section_img4")[0].style.left = 710 + 1300 - scrollTop + "px";
            // }
            
        }
    }, false);
}