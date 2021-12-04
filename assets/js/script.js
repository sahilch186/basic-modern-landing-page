// Humburger Icon animation and Menu Toggle on Mobile
$('.humburger').click(function () {
    $(this).toggleClass('open');
    $('.menu').slideToggle();
});

//Dropdown Toggle 
$('.has-dropdown, .dropdown').hover(function () {
    $(this).children('.dropdown').toggleClass('show');
});

// slider
$('.thumbnail').on('click', function () {
    $('.thumbnails').children('.thumbnail').removeClass('active');
    $(this).addClass('active');
    let img = $(this).children('img').attr('src');
    $('.slide img').attr("src", img);
});

$('.arrows button').on('click', function () {
    let activeEl = $('.thumbnail').map(function (i, el) {
        if ($(el).hasClass('active'))
            return i;
    });

    let selectEl;

    if ($(this).hasClass('next')) {
        selectEl = $('.thumbnail')[activeEl[0] + 1];
        $('.thumbnails').animate({ scrollLeft: $('.thumbnails').scrollLeft() + $('.thumbnail').width() }, 500);
        if (activeEl[0] === $('.thumbnail').length - 1) {
            selectEl = $('.thumbnail')[0];
            $('.thumbnails').animate({ scrollLeft: 0 }, 500);
        }
    }
    else {
        selectEl = $('.thumbnail')[activeEl[0] - 1];
        $('.thumbnails').animate({ scrollLeft: $('.thumbnails').scrollLeft() - $('.thumbnail').width() }, 500);
        if (activeEl[0] === 0) {
            selectEl = $('.thumbnail')[$('.thumbnail').length - 1];
            $('.thumbnails').animate({ scrollLeft: $('.thumbnails').prop('scrollWidth') - $('.thumbnails').innerWidth() }, 500);
        }
    }

    $('.thumbnails').children('.thumbnail').removeClass('active');
    $(selectEl).addClass('active');

    let selectImg = $(selectEl).children('img').attr('src');
    $('.slide img').attr("src", selectImg);

});

// Accordion
// Coppied from Codepen and Modified
$('.accordion-opener').click(function (e) {
    e.preventDefault();

    if ($(this).next().hasClass('show')) {
        $(this).next().removeClass('show');
        $(this).removeClass('active');
        $(this).next().slideUp(350);
    } else {
        $(this).closest('.accordion').find('.accordion-item .accordion-opener').removeClass('active');
        $(this).addClass('active');
        $(this).closest('.accordion').find('.accordion-item .content').removeClass('show');
        $(this).closest('.accordion').find('.accordion-item .content').slideUp(350);
        $(this).next().toggleClass('show');
        $(this).next().slideToggle(350);
    }
});


// Tab Structure
$('.content-box').text($('.tab-opener.active').siblings('.tab-content').text());
$('.tab-opener').click(function () {
    $('.tab-list .tab-opener').removeClass('active');
    $(this).addClass('active');

    if ($(window).width() > 500) {
        // For all Devices
        $('.content-box').text($(this).siblings('.tab-content').text());
    }
    else {
        // For Mobile
        if (!$(this).siblings('.tab-content').hasClass('show')) {
            $('.tab-list .tab-content').slideUp(300, function () {
                $(this).removeClass('show');
            });
            $(this).siblings('.tab-content').slideDown(300, function () {
                $(this).addClass('show');
            });
        }
    }
});

// Form Validations
$('#submitForm').on('click', function (e) {

    if ($("#name").val().match('^[a-z A-Z]{3,30}$')) {
        $("#name").siblings('.validate-notice').text("Your Name is Valid");
        $("#name").siblings('.validate-notice').removeClass('text-danger');
        $("#name").siblings('.validate-notice').addClass('text-success');
    } else {
        $("#name").siblings('.validate-notice').text("Your Name is Invalid");
        $("#name").siblings('.validate-notice').removeClass('text-success');
        $("#name").siblings('.validate-notice').addClass('text-danger');
    }

    if ($("#email").val().match('^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$')) {
        $("#email").siblings('.validate-notice').text("Your Email is Valid");
        $("#email").siblings('.validate-notice').removeClass('text-danger');
        $("#email").siblings('.validate-notice').addClass('text-success');
    } else {
        $("#email").siblings('.validate-notice').text("Your Email is Invalid");
        $("#email").siblings('.validate-notice').removeClass('text-success');
        $("#email").siblings('.validate-notice').addClass('text-danger');
    }

    if ($("#password").val().match('^[A-Za-z0-9\d=!\-@._*]{8,30}$')) {
        $("#password").siblings('.validate-notice').text("Your Password is Valid");
        $("#password").siblings('.validate-notice').removeClass('text-danger');
        $("#password").siblings('.validate-notice').addClass('text-success');
    } else {
        $("#password").siblings('.validate-notice').text("Your Password is Invalid (Password must contain atleast 1 Uppercase, 1 Lowercase, 1 Number, 1 Special Character and total Characters must be more than 8 Characters)");
        $("#password").siblings('.validate-notice').removeClass('text-success');
        $("#password").siblings('.validate-notice').addClass('text-danger');
    }

    if ($("#image").val().split('.').pop().match('(jpg|png|jpeg)$') && ($('#image')[0].files[0].size / 1024 / 1024).toFixed(2) < 2) {
        $("#image").siblings('.validate-notice').text("Your Image is Valid");
        $("#image").siblings('.validate-notice').removeClass('text-danger');
        $("#image").siblings('.validate-notice').addClass('text-success');
    } else {
        $("#image").siblings('.validate-notice').text("Your Image is Invalid (Accepts Image types jpg, png, jpeg, bmp & tiff only & Image size smaller than 2 MB)");
        $("#image").siblings('.validate-notice').removeClass('text-success');
        $("#image").siblings('.validate-notice').addClass('text-danger');
    }

    if ($("#intrest").val() !== "") {
        $("#intrest").siblings('.validate-notice').text("Intrest Selected");
        $("#intrest").siblings('.validate-notice').removeClass('text-danger');
        $("#intrest").siblings('.validate-notice').addClass('text-success');
    }
    else {
        $("#intrest").siblings('.validate-notice').text("Please Select your Intrest");
        $("#intrest").siblings('.validate-notice').removeClass('text-success');
        $("#intrest").siblings('.validate-notice').addClass('text-danger');
    }

    if ($('input[name="gender"]:checked').length < 1) {
        $('input[name="gender"]').parent().siblings('.validate-notice').text("Please Select your Gender");
        $('input[name="gender"]').parent().siblings('.validate-notice').removeClass('text-success');
        $('input[name="gender"]').parent().siblings('.validate-notice').addClass('text-danger');
    }
    else {
        $('input[name="gender"]').parent().siblings('.validate-notice').text("");
    }

    if ($('#name').val().match('^[a-z A-Z]{3,30}$') && $('#email').val().match('^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$') && $('#password').val().match('^[A-Za-z0-9\d=!\-@._*]{8,30}$') && $('#image').val().split('.').pop().match('(jpg|png|jpeg)$') && ($('#image')[0].files[0].size / 1024 / 1024).toFixed(2) < 2 && $('#intrest').val() !== "" && $('input[name="gender"]:checked').length > 0) {
        return true;
    }
    else {
        return false;
    }
});
