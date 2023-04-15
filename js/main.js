$(function () {
    $("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 300,
        labels: {
            next: "استمر",
            previous: "ارحع",
            finish: 'تسجيل'
        },

        onStepChanging: function (event, currentIndex, newIndex) {
            if (newIndex >= 1) {
                $('.steps ul li:first-child a img').attr('src', 'images/person.png');
            } else {
                $('.steps ul li:first-child a img').attr('src', 'images/personWithNoColor.png');
            }

            if (newIndex === 1) {
                $('.steps ul li:nth-child(2) a img').attr('src', 'images/Address.png');
            } else {
                $('.steps ul li:nth-child(2) a img').attr('src', 'images/AddressWithNoColor.png');
            }

            if (newIndex === 2) {
                $('.steps ul li:nth-child(3) a img').attr('src', './images/EducationwithNoColor.png');
            } else {
                $('.steps ul li:nth-child(3) a img').attr('src', './images/Education.png');
            }

            if (newIndex === 3) {
                $('.steps ul li:nth-child(4) a img').attr('src', 'images/Job.png');
                $('.actions ul').addClass('step-4');
            } else {
                $('.steps ul li:nth-child(4) a img').attr('src', 'images/jobWithNoColor.png');
                $('.actions ul').removeClass('step-4');
            }
            return true;
        }
    });

    // Create Steps Image
    $('.steps ul li:first-child').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/person.png" alt="Personal Information"> ').append('<span class="step-order">Step 01</span>');
    $('.steps ul li:nth-child(2').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/AddressWithNoColor.png" alt="">').append('<span class="step-order">Step 02</span>');
    $('.steps ul li:nth-child(3)').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="./images/EducationwithNoColor.png" alt="">').append('<span class="step-order">Step 03</span>');
    $('.steps ul li:last-child a').append('<img src="images/jobWithNoColor.png" alt="">').append('<span class="step-order">Step 04</span>');
    // Count input 
})
