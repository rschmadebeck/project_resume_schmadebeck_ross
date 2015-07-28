//Code for sticky nav

$(document).ready(function() {
    var stickyNavTop = $('.nav').offset().top;

    var stickyNav = function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
        $('.nav').addClass('sticky');
    } else {
        $('.nav').removeClass('sticky');
    }
};

stickyNav();

$(window).scroll(function() {
    stickyNav();
});
});

//Code for WordCloud List

WordCloud(document.getElementById('skillscloud'),
    { list: [
        ['Marketing', 24],
        ['Sitecore', 16],
        ['Digital Media', 24],
        ['eCommerce', 14],
        ['Social Media', 12],
        ['Creative Suite', 14],
        ['Strategy', 18],
        ['Events', 10],
        ['CMS', 20],
        ['Budgets', 16],
        ['Product Development', 16]
    ] }
);
