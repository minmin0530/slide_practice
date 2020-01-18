window.onload = function() {
    const mainvisual = this.document.getElementsByClassName("mainvisual");
    let left0 = 0;
    let left1 = 0;

    loop();

    function loop() {
        left0 -= 1;
//        mainvisual[0].style.left = left0 + "px";
//        mainvisual[0].style.width = -left0 + "px";
        requestAnimationFrame(loop);
    };

    window.addEventListener( "scroll", function () {
        const scrollTop = document.scrollingElement.scrollTop;
        document.getElementsByClassName("article__section_img2")[0].style.left = 1366 - scrollTop + "px";
        document.getElementsByClassName("article__section_img4")[0].style.left = 1366 - scrollTop + "px";
        if (scrollTop <= 430) {
            document.getElementsByClassName("article__section_img1")[0].style.width = scrollTop + "px";
            document.getElementsByClassName("article__section_img2")[0].style.width = scrollTop + "px";
            document.getElementsByClassName("article__section_img3")[0].style.width = scrollTop + "px";
            document.getElementsByClassName("article__section_img4")[0].style.width = scrollTop + "px";
        } else {
            document.getElementsByClassName("article__section_img1")[0].style.width = 430 + "px";
            document.getElementsByClassName("article__section_img2")[0].style.width = 430 + "px";
            document.getElementsByClassName("article__section_img3")[0].style.width = 430 + "px";
            document.getElementsByClassName("article__section_img4")[0].style.width = 430 + "px";
            document.getElementsByClassName("article__section_img1")[0].style.left = scrollTop - 430 + "px";
            document.getElementsByClassName("article__section_img3")[0].style.left = scrollTop - 430 + "px";
        }
    }, false);
}