$(document).ready(function() {
    $(window).scroll(function() {

        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script

    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });


    //toggle menu/navbar script

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script

    var typed = new Typed(".typing", {
        strings: ["Freelancer", "Digital Marketer", "Front-End Developer"],
        typSpeed: 80,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Freelancer", "Digital Marketer", "Front-End Developer"],
        typSpeed: 80,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// function for downloading CV

function downloadFile(filename, content) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:application/pdf;charset=utf-8,' + encodeURIComponent(content));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

var button = document.getElementById('downloadButton');
button.addEventListener('click', function() {
  var filename = 'Resume.pdf';
  var content = '<PDF content goes here>';

  downloadFile(filename, content);
});
