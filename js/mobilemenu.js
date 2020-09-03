/*let mobileToggle = document.getElementById("mobile-toggle");
let mobileList = document.getElementById("main-menu");
let mobileHeader = document.getElementById("header");



mobileToggle.addEventListener('click', openMenu);

function openMenu() {
    if (mobileToggle.classList.contains("active")){
        mobileToggle.classList.remove("active");
        mobileList.classList.remove("active");
        mobileHeader.classList.remove("active");
    } else {
        mobileToggle.classList.add("active");
        mobileList.classList.add("active");
        mobileHeader.classList.add("active");
    }
}*/


data = true;


$('.feature').hover(function () {
    data = false;
    var link = $(this)[0].getBoundingClientRect();

    var x_pos = (link.left);
    var y_pos = (link.top);

    var translate = 'translate(' + x_pos + 'px,' + y_pos + 'px)';

    $('.underlay').css({
        'transform': translate,
        'width': link.width + 'px',
        'height': link.height * 0.95 + 'px',
        'opacity': 1,
        'border-radius': '0'
    });
}, function () {
    data = true;
});

$('.footer-activator').hover(function () {
    data = false;
    var link = $(this)[0].getBoundingClientRect();

    var x_pos = (link.left);
    var y_pos = (link.top);

    var translate = 'translate(' + x_pos + 'px,' + y_pos + 'px)';

    $('.underlay').css({
        'transform': translate,
        'width': link.width + 'px',
        'height': link.height + 'px',
        'opacity': 1,
        'border-radius': '50%',

    });
}, function () {
    data = true;
});

$('.footer-activator').on('click', function () {
    var footer = document.getElementById("footer");
    var activator = document.getElementsByClassName("footer-activator")[0];
    var overlay = document.getElementsByClassName("footer-overlay")[0];

    if (footer.classList.contains("active")) {
        footer.classList.remove("active");
        activator.classList.remove("active");
        overlay.classList.remove("active");
        $('.feature').removeClass('blackened');
    } else {
        data = false;
        footer.classList.add("active");
        activator.classList.add("active");
        overlay.classList.add("active");
        $('.feature').addClass('blackened');

        $('.underlay').css({
            'height': '0',
            'width': '0',
        });
    }
})

$('.footer-overlay').on('click', function () {
    var footer = document.getElementById("footer");
    var activator = document.getElementsByClassName("footer-activator")[0];
    var overlay = document.getElementsByClassName("footer-overlay")[0];

    footer.classList.remove("active");
    activator.classList.remove("active");
    overlay.classList.remove("active");
    $('.feature').removeClass('blackened');
})

$('.first').on('click', function () {
    var overlay = document.getElementsByClassName("feature-overlay")[0];

    overlay.classList.add("active");
    $('.feature').addClass('blackened');
    $('.footer-activator').addClass('blackened');
    $('.first-feature').addClass('active');

})

$('.feature-link').hover(function () {
    data = false;
    var link = $(this)[0].getBoundingClientRect();

    var x_pos = (link.left);
    var y_pos = (link.top);

    var translate = 'translate(' + x_pos + 'px,' + y_pos + 'px)';

    $('.underlay').css({
        'transform': translate,
        'width': link.width + 'px',
        'height': link.height * 0.95 + 'px',
        'opacity': 1,
        'border-radius': '0'
    });
}, function () {
    data = true;
});

$(document).on('mousemove', function (e) {
    if (data) {
        var xPos = e.pageX - 5;
        var yPos = e.pageY - 5;
        // console.log(xPos, yPos);
        $('.underlay').css({
            'transform': 'translate(' + xPos + 'px,' + yPos + 'px)',
            'height': '10px',
            'width': '10px',
            'border-radius': '50%',
            'opacity': 1
        });
    }

});
