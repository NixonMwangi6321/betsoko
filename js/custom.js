// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


function showTab(tabId) {
    const tabs = document.querySelectorAll('.content');
    const buttons = document.querySelectorAll('.tab-button');

    tabs.forEach(tab => {
        if (tab.id === tabId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    buttons.forEach(button => {
        if (button.classList.contains('active')) {
            button.classList.remove('active');
        }
    });

    document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// js for payment section
document.getElementById('showConfirmation').addEventListener('click', function() {
    var message = document.getElementById('confirmationMessage');
    message.style.display = 'block';
});

//js for timers// Set the date we're counting down to
        var weekendCountdownDate = new Date();
        weekendCountdownDate.setDate(weekendCountdownDate.getDate() + (6 - weekendCountdownDate.getDay()));
        weekendCountdownDate.setHours(12, 0, 0, 0);

        var midweekCountdownDate = new Date();
        midweekCountdownDate.setDate(midweekCountdownDate.getDate() + (3 - midweekCountdownDate.getDay()));
        midweekCountdownDate.setHours(12, 0, 0, 0);

        function padZero(num) {
            return num.toString().padStart(2, '0');
        }

        function updateCountdown() {
            // Get current date and time
            var now = new Date().getTime();

            // Calculate the time remaining
            var weekendDistance = weekendCountdownDate - now;
            var midweekDistance = midweekCountdownDate - now;

            // Time calculations for days, hours, minutes, and seconds
            var days = padZero(Math.floor(weekendDistance / (1000 * 60 * 60 * 24)));
            var hours = padZero(Math.floor((weekendDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            var minutes = padZero(Math.floor((weekendDistance % (1000 * 60 * 60)) / (1000 * 60)));
            var seconds = padZero(Math.floor((weekendDistance % (1000 * 60)) / 1000));

            // Display the result in the elements
            document.getElementById("weekend-days").innerText = days;
            document.getElementById("weekend-hours").innerText = hours;
            document.getElementById("weekend-minutes").innerText = minutes;
            document.getElementById("weekend-seconds").innerText = seconds;

            days = padZero(Math.floor(midweekDistance / (1000 * 60 * 60 * 24)));
            hours = padZero(Math.floor((midweekDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            minutes = padZero(Math.floor((midweekDistance % (1000 * 60 * 60)) / (1000 * 60)));
            seconds = padZero(Math.floor((midweekDistance % (1000 * 60)) / 1000));

            document.getElementById("midweek-days").innerText = days;
            document.getElementById("midweek-hours").innerText = hours;
            document.getElementById("midweek-minutes").innerText = minutes;
            document.getElementById("midweek-seconds").innerText = seconds;

            // If the countdown is over, write some text 
            if (weekendDistance < 0) {
                clearInterval(weekendInterval);
                document.getElementById("weekend-timer").innerText = "EXPIRED";
            }
            if (midweekDistance < 0) {
                clearInterval(midweekInterval);
                document.getElementById("midweek-timer").innerText = "EXPIRED";
            }
        }

        // Update the countdown every 1 second
        var weekendInterval = setInterval(updateCountdown, 1000);
        var midweekInterval = setInterval(updateCountdown, 1000);