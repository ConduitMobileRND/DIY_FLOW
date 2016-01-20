function bgFade() {
    let images = [
        "hpBg1",
        "hpBg2",
        "hpBg3",
        "hpBg4"
    ]
    let currentImage = "hpBg1";
    for (let key in images) {
        let nextImage = image[key+1];
        setInterval(function () {
            jQuery(".pageWrap.home").removeClass(currentImage);
            jQuery(".pageWrap.home").addClass(nextImage);
            currentImage = nextImage;
        }, 1000);
    }
}
jQuery(document).ready(function(){
    bgFade();

});