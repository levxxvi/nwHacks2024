// From: https://www.codingnepalweb.com/dynamic-calendar-html-css-javascript/
const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

// need to instantiate client
function checkPreviousMoods() {
    // pull data from sql; basically check all the dates in this month and change the color as needed
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        client.query("SELECT * FROM moodtracker WHERE user = 'testuser' AND date = ?", [currYear + "-" + (currMonth + 1) + "-" + i], function (err, result) {
            if (err) throw err;
            console.log(result);
            if (result.length > 0) {
                console.log(result[0].mood);
                if (result[0].mood == "happy") {
                    $('.active').addClass("happy");
                } else if (result[0].mood == "neutral") {
                    $('.active').addClass("neutral");
                } else if (result[0].mood == "sad") {
                    $('.active').addClass("sad");
                } else if (result[0].mood == "angry") {
                    $('.active').addClass("angry");
                } else if (result[0].mood == "tired") {
                    $('.active').addClass("tired");
                } else if (result[0].mood == "stressed") {
                    $('.active').addClass("stressed");
                }
            }
        });
    });
}

function getRandomInt(max) {
      return Math.floor(Math.random() * max);
}

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        var mood = getRandomInt(6);
        console.log(mood);
        if (mood == 0) {
            liTag += `<li class="happy">${i}</li>`;
        } else if (mood == 1) {
            liTag += `<li class="neutral">${i}</li>`;
        } else if (mood == 2) {
            liTag += `<li class="sad">${i}</li>`;
        } else if (mood == 3) {
            liTag += `<li class="angry">${i}</li>`;
        } else if (mood == 4) {
            liTag += `<li class="tired">${i}</li>`;
        } else if (mood == 5) {
            liTag += `<li class="stressed">${i}</li>`;
        }

        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;

        // checkPreviousMoods();
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();



prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});

function happy() {
    $('.active').addClass("happy");

    $('.active').removeClass("neutral");
    $('.active').removeClass("sad");
    $('.active').removeClass("angry");
    $('.active').removeClass("tired");
    $('.active').removeClass("stressed");
}

function neutral() {
    $('.active').addClass("neutral");

    $('.active').removeClass("happy");
    $('.active').removeClass("sad");
    $('.active').removeClass("angry");
    $('.active').removeClass("tired");
    $('.active').removeClass("stressed");
}

function sad() {
    $('.active').addClass("sad");

    $('.active').removeClass("happy");
    $('.active').removeClass("neutral");
    $('.active').removeClass("angry");
    $('.active').removeClass("tired");
    $('.active').removeClass("stressed");
}

function angry() {
    $('.active').addClass("angry");

    $('.active').removeClass("happy");
    $('.active').removeClass("sad");
    $('.active').removeClass("neutral");
    $('.active').removeClass("tired");
    $('.active').removeClass("stressed");
}

function tired() {
    $('.active').addClass("tired");

    $('.active').removeClass("happy");
    $('.active').removeClass("sad");
    $('.active').removeClass("neutral");
    $('.active').removeClass("angry");
    $('.active').removeClass("stressed");
}

function stressed() {
    $('.active').addClass("stressed");

    $('.active').removeClass("happy");
    $('.active').removeClass("sad");
    $('.active').removeClass("neutral");
    $('.active').removeClass("angry");
    $('.active').removeClass("tired");
}

// function journalMood(mood) {
//     let date = new Date().toJSON().slice(0, 10);
//     console.log(date);

//     // add the mood to sql
//     con.connect(function (err) {
//         if (err) throw err;
//         console.log("Connected!");
//         client.query(
//             "INSERT INTO moodtracker (user, date, mood) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE mood=VALUES(mood)", [date, mood],
//             function (err, result) {
//             if (err) throw err;
//             console.log("1 record inserted");
//         });
//     });
// }

// function journalMood(mood) {
//     let date = new Date().toJSON().slice(0, 10);
//     console.log(date);

//     // add the mood to sql
//     con.connect(function (err) {
//         if (err) throw err;
//         console.log("Connected!");
//         // var sql = "INSERT INTO moodtracker (date, mood) VALUES (?);", [date];
//         // con.query(sql, function (err, result) {
//         //     if (err) throw err;
//         //     console.log("1 record inserted");
//         // });
//         client.query("Insert into moodtracker (date, mood) VALUES (?, ?);", [date, mood], function (err, result) {
//             if (err) throw err;
//             console.log("1 record inserted");
//         });
//     });
// }