$('.portfolio button').click(function (e) {
    const dataValue = $(this).attr('data');
    // 8 div
    const allDivs = $('.portfolio .row > div');
    if (dataValue == 'all') {
        allDivs.show();
        return;
    }
    const showDivs = $(`.portfolio .row > div[data=${dataValue}]`);
    // divs sẽ ẩn
    const hideDivs = allDivs.not(showDivs);
    // Hiển thị
    showDivs.show(); //display: block
    // Ẩn
    hideDivs.hide(); // display: none
});