// ----------------------------------------------------------
// when a social feed tab is clicked make all tabs black
// add the active class to the tab that is clicked
// fade in the image associated with that tab
// ----------------------------------------------------------

$('.get-social-directions__social-menu-item').click(function(event){
    var clickedId = $(this).attr('id');
    socialTabs(clickedId);
});



function socialTabs(itemClicked) {
    $('.get-social-directions__social-menu-item').removeClass('get-social-directions__active-tab');
    $('#' + itemClicked).addClass('get-social-directions__active-tab');
    $('.get-social-directions__feed').hide();
    $('.get-social-directions__feed').fadeIn("slow");
    $('.get-social-directions__feed').css('background-image', 'url(assets/images/' + itemClicked + '-feed.png)');
}