

const searchButton = document.querySelector(".search-button");

const trainRoutes = {

    "5004": [
        "Talaimannar Pier", "Talaimannar", "Pesalai",
        "Mannar", "Murunkan", "Madu Road",
        "Cheddikulam", "Madawachchiya", "Anuradhapura",
        "Maho", "Kurunegala", "Polgahawela",
        "Gampaha", "Colombo Fort"
    ],

    "5003": [
        "Colombo Fort", "Gampaha", "Polgahawela",
        "Kurunegala", "Maho", "Anuradhapura",
        "Madawachchiya", "Cheddikulam", "Madu Road",
        "Murunkan", "Mannar", "Pesalai",
        "Talaimannar", "Talaimannar Pier"
    ],

    "4078": [
        "Kankesanthurai", "Jaffna", "Chavakachcheri",
        "Kodikamam", "Pallai", "Kilinochchi",
        "Mankulam", "Vavuniya", "Madawachchiya",
        "Anuradhapura", "Maho", "Kurunegala",
        "Polgahawela", "Gampaha", "Colombo Fort"
    ],

    "4077": [
        "Colombo Fort", "Gampaha", "Polgahawela",
        "Kurunegala", "Maho", "Anuradhapura",
        "Madawachchiya", "Vavuniya", 
        "Kilinochchi", "Kodikamam",
        "Chavakachcheri", "Jaffna", "Kankesanthurai"
    ],

    "4022": [
        "Kankesanthurai", "Jaffna", "Chavakachcheri",
        "Kodikamam", "Pallai", "Kilinochchi",
        "Mankulam", "Vavuniya", "Madawachchiya",
        "Anuradhapura", "Maho", "Kurunegala",
        "Polgahawela", "Gampaha", "Colombo Fort",
        "Mount Lavinia"
    ],

    "4021": [
        "Mount Lavinia", "Colombo Fort", "Gampaha",
        "Polgahawela", "Kurunegala", "Maho",
        "Anuradhapura", "Madawachchiya", "Vavuniya",
        "Mankulam", "Kilinochchi", "Pallai",
        "Kodikamam", "Chavakachcheri", "Jaffna",
        "Kankesanthurai"
    ],

    "4090": [
        "Kankesanthurai", "Jaffna", "Chavakachcheri",
        "Kodikamam", "Pallai", "Kilinochchi",
        "Mankulam", "Vavuniya", "Madawachchiya",
        "Anuradhapura", "Maho", "Kurunegala",
        "Polgahawela", "Gampaha", "Colombo Fort","Mount Lavinia",
        "Moratuwa"
    ],

    "4089": [
        "Moratuwa", "Colombo Fort", "Gampaha",
        "Polgahawela", "Kurunegala", "Maho",
        "Anuradhapura", "Madawachchiya", "Vavuniya",
        "Mankulam", "Kilinochchi", "Pallai",
        "Kodikamam", "Chavakachcheri", "Jaffna",
        "Kankesanthurai"
    ]

};
// TRAIN TIMETABLE DATA

const trainTimetables = {

    "4090": {

        "Kankesanthurai": {
            arrival: "",
            departure: "08:00 PM"
        },
        "Jaffna": {
    arrival: "08:29 PM",
    departure: "08:35 PM"
},
"Chavakachcheri": {
    arrival: "08:55 PM",
    departure: "08:57 PM"
},
"Kodikamam": {
    arrival: "09:08 PM",
    departure: "09:09 PM"
},
"Kilinochchi": {
    arrival: "09:54 PM",
    departure: "09:56 PM"
},
        "Vavuniya": {
    arrival: "11:13 PM",
    departure: "11:15 PM"
},
"Anuradhapura": {
    arrival: "12:09 AM",
    departure: "12:25 AM"
},
"Maho": {
    arrival: "01:52 AM",
    departure: "02:00 AM"
},
"Kurunegala": {
    arrival: "02:41 AM",
    departure: "02:44 AM"
},
"Polgahawela": {
    arrival: "03:06 AM",
    departure: "03:09 AM"
},
"Gampaha": {
    arrival: "04:00 AM",
    departure: "04:03 AM"
},

        "Colombo Fort": {
            arrival: "04:44 AM",
            departure: "04:46 AM"
        },
        "Mount Lavinia": {
    arrival: "05:13 AM",
    departure: "05:15 AM"
},

        "Moratuwa": {
            arrival: "05:24 AM",
            departure: "05:45 AM"
        }

    },
    "4078": {

    "Kankesanthurai": {
        arrival: "",
        departure: "10:30 AM"
    },

    "Jaffna": {
        arrival: "10:53 AM",
        departure: "11:00 AM"
    },

    "Chavakachcheri": {
        arrival: "11:15 AM",
        departure: "11:16 AM"
    },

    "Kodikamam": {
        arrival: "11:23 AM",
        departure: "11:24 AM"
    },

    "Kilinochchi": {
        arrival: "12:14 PM",
        departure: "12:16 PM"
    },

    "Vavuniya": {
        arrival: "01:35 PM",
        departure: "01:36 PM"
    },

    "Madawachchiya": {
        arrival: "01:56 PM",
        departure: "01:57 PM"
    },

    "Anuradhapura": {
        arrival: "02:20 PM",
        departure: "02:40 PM"
    },

    "Maho": {
        arrival: "03:56 PM",
        departure: "04:00 PM"
    },

    "Kurunegala": {
        arrival: "04:56 PM",
        departure: "05:02 PM"
    },

    "Polgahawela": {
        arrival: "05:37 PM",
        departure: "05:38 PM"
    },

    "Gampaha": {
        arrival: "06:26 PM",
        departure: "06:27 PM"
    },

    "Colombo Fort": {
        arrival: "07:03 PM",
        departure: ""
    }

},

"4089": {

    "Moratuwa": {
        arrival: "",
        departure: "06:55 PM"
    },

    "Colombo Fort": {
        arrival: "07:29 PM",
        departure: "08:00 PM"
    },

    "Gampaha": {
        arrival: "08:35 PM",
        departure: "08:38 PM"
    },

    "Polgahawela": {
        arrival: "09:27 PM",
        departure: "09:31 PM"
    },

    "Kurunegala": {
        arrival: "09:54 PM",
        departure: "09:56 PM"
    },

    "Maho": {
        arrival: "10:36 PM",
        departure: "10:41 PM"
    },

    "Anuradhapura": {
        arrival: "12:05 AM",
        departure: "12:15 AM"
    },

    "Madawachchiya": {
        arrival: "12:40 AM",
        departure: "12:42 AM"
    },

    "Vavuniya": {
        arrival: "01:06 AM",
        departure: "01:09 AM"
    },

    "Kilinochchi": {
        arrival: "02:25 AM",
        departure: "02:28 AM"
    },

    "Kodikamam": {
        arrival: "03:13 AM",
        departure: "03:15 AM"
    },

    "Chavakachcheri": {
        arrival: "03:26 AM",
        departure: "03:28 AM"
    },

    "Jaffna": {
        arrival: "03:47 AM",
        departure: "03:55 AM"
    },

    "Kankesanthurai": {
        arrival: "04:24 AM",
        departure: ""
    }

},

"4077": {

    "Colombo Fort": {
        arrival: "",
        departure: "06:40 AM"
    },

    "Gampaha": {
        arrival: "07:15 AM",
        departure: "07:17 AM"
    },

    "Polgahawela": {
        arrival: "08:05 AM",
        departure: "08:08 AM"
    },

    "Kurunegala": {
        arrival: "08:34 AM",
        departure: "08:39 AM"
    },

    "Maho": {
        arrival: "09:20 AM",
        departure: "09:25 AM"
    },

    "Anuradhapura": {
        arrival: "10:41 AM",
        departure: "10:51 AM"
    },

    "Madawachchiya": {
        arrival: "11:14 AM",
        departure: "11:16 AM"
    },

    "Vavuniya": {
        arrival: "11:36 AM",
        departure: "11:39 AM"
    },

    "Kilinochchi": {
        arrival: "12:51 PM",
        departure: "12:53 PM"
    },

    "Kodikamam": {
        arrival: "01:35 PM",
        departure: "01:36 PM"
    },

    "Chavakachcheri": {
        arrival: "01:43 PM",
        departure: "01:44 PM"
    },

    "Jaffna": {
        arrival: "01:59 PM",
        departure: "02:05 PM"
    },

    "Kankesanthurai": {
        arrival: "02:33 PM",
        departure: ""
    }

},

"4021": {

    "Mount Lavinia": {
        arrival: "",
        departure: "05:15 AM"
    },

    "Colombo Fort": {
        arrival: "05:39 AM",
        departure: "05:45 AM"
    },

    "Gampaha": {
        arrival: "06:14 AM",
        departure: "06:15 AM"
    },

    "Polgahawela": {
        arrival: "06:58 AM",
        departure: "06:59 AM"
    },

    "Kurunegala": {
        arrival: "07:22 AM",
        departure: "07:23 AM"
    },

    "Maho": {
        arrival: "08:03 AM",
        departure: "08:08 AM"
    },

    "Anuradhapura": {
        arrival: "09:18 AM",
        departure: "09:25 AM"
    },

    "Vavuniya": {
        arrival: "10:02 AM",
        departure: "10:04 AM"
    },

    "Kilinochchi": {
        arrival: "10:59 AM",
        departure: "11:00 AM"
    },

    "Kodikamam": {
        arrival: "11:31 AM",
        departure: "11:32 AM"
    },

    "Chavakachcheri": {
        arrival: "Pass",
        departure: "Pass"
    },

    "Jaffna": {
        arrival: "11:50 AM",
        departure: "11:56 AM"
    },

    "Kankesanthurai": {
        arrival: "12:14 PM",
        departure: ""
    }

},

"4022": {

    "Kankesanthurai": {
        arrival: "",
        departure: "01:50 PM"
    },

    "Jaffna": {
        arrival: "02:08 PM",
        departure: "02:15 PM"
    },

    "Kodikamam": {
        arrival: "02:34 PM",
        departure: "02:35 PM"
    },

    "Kilinochchi": {
        arrival: "03:07 PM",
        departure: "03:08 PM"
    },

    "Vavuniya": {
        arrival: "04:04 PM",
        departure: "04:05 PM"
    },

    "Anuradhapura": {
        arrival: "04:47 PM",
        departure: "05:00 PM"
    },

    "Maho": {
        arrival: "06:07 PM",
        departure: "06:09 PM"
    },

    "Kurunegala": {
        arrival: "06:50 PM",
        departure: "06:51 PM"
    },

    "Polgahawela": {
        arrival: "07:13 PM",
        departure: "07:15 PM"
    },

    "Gampaha": {
        arrival: "07:58 PM",
        departure: "07:59 PM"
    },

    "Colombo Fort": {
        arrival: "08:33 PM",
        departure: "08:34 PM"
    },

    "Mount Lavinia": {
        arrival: "08:58 PM",
        departure: ""
    }

},
"5003": {
    "Colombo Fort": { arrival: "", departure: "03:50 PM" },
    "Gampaha": { arrival: "04:23 PM", departure: "04:24 PM" },
    "Polgahawela": { arrival: "05:09 PM", departure: "05:10 PM" },
    "Kurunegala": { arrival: "05:33 PM", departure: "05:34 PM" },
    "Maho": { arrival: "06:27 PM", departure: "06:32 PM" },
    "Anuradhapura": { arrival: "07:52 PM", departure: "07:59 PM" },
    "Madawachchiya": { arrival: "08:24 PM", departure: "08:27 PM" },
    "Cheddikulam": { arrival: "08:50 PM", departure: "08:51 PM" },
    "Madu Road": { arrival: "09:13 PM", departure: "09:14 PM" },
    "Murunkan": { arrival: "09:27 PM", departure: "09:28 PM" },
    "Mannar": { arrival: "09:55 PM", departure: "09:56 PM" },
    "Pesalai": { arrival: "10:13 PM", departure: "10:14 PM" },
    "Talaimannar": { arrival: "10:24 PM", departure: "10:25 PM" },
    "Talaimannar Pier": { arrival: "10:28 PM", departure: "" }
},
"5004": {
    "Talaimannar Pier": { arrival: "", departure: "04:10 AM" },
    "Talaimannar": { arrival: "04:13 AM", departure: "04:14 AM" },
    "Pesalai": { arrival: "04:24 AM", departure: "04:25 AM" },
    "Mannar": { arrival: "04:42 AM", departure: "04:43 AM" },
    "Murunkan": { arrival: "05:10 AM", departure: "05:11 AM" },
    "Madu Road": { arrival: "05:24 AM", departure: "05:25 AM" },
    "Cheddikulam": { arrival: "05:47 AM", departure: "05:48 AM" },
    "Madawachchiya": { arrival: "06:11 AM", departure: "06:12 AM" },
    "Anuradhapura": { arrival: "06:35 AM", departure: "06:40 AM" },
    "Maho": { arrival: "07:54 AM", departure: "08:06 AM" },
    "Kurunegala": { arrival: "08:59 AM", departure: "09:01 AM" },
    "Polgahawela": { arrival: "09:23 AM", departure: "09:25 AM" },
    "Gampaha": { arrival: "10:11 AM", departure: "10:12 AM" },
    "Colombo Fort": { arrival: "10:44 AM", departure: "" }
}



};
// TRAIN NO SERVICE DATES

const noServiceDates = {

    "4077": [
        "2026-11-10", "2026-11-12", "2026-11-14",
        "2026-11-15", "2026-11-17", "2026-11-19",
        "2026-11-21", "2026-11-22", "2026-11-24",
        "2026-11-26", "2026-11-28", "2026-11-29",
        "2026-12-01", "2026-12-03", "2026-12-05",
        "2026-12-06", "2026-12-08"
    ],

    "4078": [
        "2026-11-09", "2026-11-11", "2026-11-13",
        "2026-11-14", "2026-11-16", "2026-11-18",
        "2026-11-20", "2026-11-21", "2026-11-23",
        "2026-11-25", "2026-11-27", "2026-11-28",
        "2026-11-30", "2026-12-02", "2026-12-04",
        "2026-12-05", "2026-12-07", "2026-12-09"
    ],

    "4021": [
        "2026-11-11", "2026-11-18", "2026-11-25",
        "2026-12-02", "2026-12-09"
    ],

    "4022": [
        "2026-11-11", "2026-11-18", "2026-11-25",
        "2026-12-02", "2026-12-09"
    ]

};
// STATION CODE MAPPING

const stationCodes = {
    "Talaimannar Pier": "TMP",
    "Mannar": "MAN",
    "Madawachchiya": "MWH",
    "Anuradhapura": "ANP",
    "Maho": "MHO",
    "Kurunegala": "KRN",
    "Polgahawela": "PLG",
    "Gampaha": "GPH",
    "Colombo Fort": "FOT"
};
// RESERVATION FARE DATA

const reservationFares = {

    "TMP-MAN": 2000,
    "TMP-MWH": 2000,
    "TMP-ANP": 2100,
    "TMP-MHO": 2400,
    "TMP-KRN": 2400,
    "TMP-PLG": 2800,
    "TMP-GPH": 2800,
    "TMP-FOT": 2800,

    "MAN-MWH": 2000,
    "MAN-ANP": 2100,
    "MAN-MHO": 2400,
    "MAN-KRN": 2400,
    "MAN-PLG": 2800,
    "MAN-GPH": 2800,
    "MAN-FOT": 2800,

    "MWH-ANP": 2000,
    "MWH-MHO": 2300,
    "MWH-KRN": 2300,
    "MWH-PLG": 2700,
    "MWH-GPH": 2700,
    "MWH-FOT": 2700,

    "ANP-MHO": 2100,
    "ANP-KRN": 2100,
    "ANP-PLG": 2400,
    "ANP-GPH": 2400,
    "ANP-FOT": 2400,

    "MHO-KRN": 2100,
    "MHO-PLG": 2400,
    "MHO-GPH": 2400,
    "MHO-FOT": 2400,

    "KRN-PLG": 2100,
    "KRN-GPH": 2100,
    "KRN-FOT": 2100

};
function getReservationFare(from, to) {

    const route1 = from + "-" + to;
    const route2 = to + "-" + from;

    return reservationFares[route1] || reservationFares[route2] || null;

}


searchButton.addEventListener("click", function() {
   
    let trainsFound = 0;

    console.log("SEARCH BUTTON CLICKED");


    const stations = document.querySelectorAll(".input-group select");
    
    const fromStation = stations[0].value;
    const toStation = stations[1].value;

    const travelDate = document.querySelector(
        '.input-group input[type="date"]'
    ).value;

    const result = document.getElementById("search-result");

    if (fromStation === "" || toStation === "" || travelDate === "") {
        result.textContent = "Please select all journey details.";
        result.style.color = "red";
        return;
    }

    if (fromStation === toStation) {
        result.textContent = "Departure and destination cannot be the same.";
        result.style.color = "red";
        return;
    }
    // CHECK TRAIN SERVICE DATE

const selectedDate = travelDate;

    const trainCards = document.querySelectorAll(".schedule-card");

    const matchingTrains = [];

    trainCards.forEach(function(card) {
        if (card.closest("#search-result")) return;

        const details = card.querySelectorAll("p");

        let trainNumber = "";

        details.forEach(function(detail) {

            if (detail.textContent.startsWith("Train No:")) {
                trainNumber = detail.textContent
                    .replace("Train No:", "")
                    .trim();
            }

        });

        const route = trainRoutes[trainNumber];

        if (!route) return;
        // SKIP TRAIN IF NO SERVICE ON SELECTED DATE

if (
    noServiceDates[trainNumber] &&
    noServiceDates[trainNumber].includes(selectedDate)
) {
    return;
}

        const fromIndex = route.indexOf(fromStation);
        const toIndex = route.indexOf(toStation);

        if (
            fromIndex !== -1 &&
            toIndex !== -1 &&
            fromIndex < toIndex
        ) {
            matchingTrains.push(card);
        }

    });

    result.innerHTML = "";
    document.getElementById("selectedScheduleDisplay").style.display = "none";

    const heading = document.createElement("h3");
    heading.textContent = "Available Trains";

    result.appendChild(heading);

    const dateText = document.createElement("p");
    dateText.textContent = "Travel Date: " + travelDate;

    result.appendChild(dateText);

    if (matchingTrains.length === 0) {

        const message = document.createElement("p");
        
        message.textContent = "No trains available for this route on the selected date.";

        result.appendChild(message);
        return;

    }

matchingTrains.forEach(function(card) {

    const trainCard = card.cloneNode(true);

    const trainDetails = trainCard.querySelectorAll("p");

    // GET TRAIN NUMBER
    let selectedTrainNumber = "";

    trainDetails.forEach(function(detail) {

        if (detail.textContent.startsWith("Train No:")) {
            selectedTrainNumber = detail.textContent
                .replace("Train No:", "")
                .trim();
        }

        if (detail.textContent.startsWith("From:")) {
            detail.textContent = "Journey From: " + fromStation;
        }

        if (detail.textContent.startsWith("To:")) {
            detail.textContent = "Journey To: " + toStation;
        }

    });

    // GET TIMETABLE
    const timetable = trainTimetables[selectedTrainNumber];
    console.log("Selected Train:", selectedTrainNumber);
console.log("Timetable Found:", timetable);

    // REMOVE OLD TIMING DETAILS
    trainDetails.forEach(function(detail) {

        if (
            detail.textContent.includes("Arrival:") ||
            detail.textContent.includes("Departure:")
        ) {
            detail.remove();
        }

    });

    // ADD SELECTED STATION TIMINGS
    const departureInfo = document.createElement("p");
    const arrivalInfo = document.createElement("p");

    if (timetable) {

        const departure = timetable[fromStation];
        const arrival = timetable[toStation];

        departureInfo.textContent =
            "Departure (" + fromStation + "): " +
            (departure?.departure || "Time not added yet");

        arrivalInfo.textContent =
            "Arrival (" + toStation + "): " +
            (arrival?.arrival || "Time not added yet");

    } else {

        departureInfo.textContent = "Departure: Timetable data not added yet";
        arrivalInfo.textContent = "Arrival: Timetable data not added yet";

    }

    trainCard.appendChild(departureInfo);
    trainCard.appendChild(arrivalInfo);

    // REMOVE VIEW DETAILS BUTTON
    
    trainsFound++;
    result.appendChild(trainCard);
});

if (trainsFound === 0) {

    result.innerHTML = `
        <div class="no-trains-message">
            <h3>No Trains Available</h3>
            <p>No trains available for this route on the selected date.</p>
        </div>
    `;

}
    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


// TRAIN DETAILS MODAL

const trainModal = document.getElementById("trainModal");
const modalTitle = document.getElementById("modalTitle");
const modalDetails = document.getElementById("modalDetails");
const closeModal = document.querySelector(".close-modal");

// VIEW DETAILS BUTTON

document.addEventListener("click", function(event) {

    const button = event.target.closest(".view-details");

    if (!button) return;

    const card = button.closest(".schedule-card");

    if (!card || !trainModal || !modalTitle || !modalDetails) return;

    const trainName = card.querySelector("h3").textContent;

    const trainInfo = card.querySelectorAll("p");

    modalTitle.textContent = trainName + " - Train Information";

    modalDetails.innerHTML = "";

    trainInfo.forEach(function(info) {

        const paragraph = document.createElement("p");

        paragraph.textContent = info.textContent;

        modalDetails.appendChild(paragraph);

    });

    trainModal.style.display = "flex";

});

// CLOSE MODAL

if (closeModal) {

    closeModal.addEventListener("click", function() {

        trainModal.style.display = "none";

    });

}

// CLOSE MODAL WHEN CLICKING OUTSIDE

if (trainModal) {

    trainModal.addEventListener("click", function(event) {

        if (event.target === trainModal) {

            trainModal.style.display = "none";

        }

    });

}

// RAILWAY STATION TELEPHONE DIRECTORY

const stationDirectory = [

    // NORTHERN LINE

    { name: "Girambe", line: "Northern Line", phone: "" },
    { name: "Talawattegedara", line: "Northern Line", phone: "" },
    { name: "Potuhera", line: "Northern Line", phone: "0373989038" },
    { name: "Nailiya", line: "Northern Line", phone: "" },
    { name: "Kurunegala", line: "Northern Line", phone: "0372222271" },
    { name: "Muththettugala", line: "Northern Line", phone: "" },
    { name: "Wellawa", line: "Northern Line", phone: "0373989037" },
    { name: "Ganewatte", line: "Northern Line", phone: "0373989035" },
    { name: "Yahapauwa", line: "Northern Line", phone: "" },
    { name: "Nagollagama", line: "Northern Line", phone: "0373989036" },
    { name: "Timbiriyagedara", line: "Northern Line", phone: "" },
    { name: "Maho", line: "Northern Line", phone: "0372275271" },
    { name: "Randenigama", line: "Northern Line", phone: "" },
    { name: "Abanpola", line: "Northern Line", phone: "0253891292" },
    { name: "Galgamuwa", line: "Northern Line", phone: "0372253071" },
    { name: "Senarathgama", line: "Northern Line", phone: "0253891294" },
    { name: "Thambuttegama", line: "Northern Line", phone: "0253891293" },
    { name: "Talawa", line: "Northern Line", phone: "0252276781" },
    { name: "Srawasthipura", line: "Northern Line", phone: "0253853761" },
    { name: "Anuradhapura Town", line: "Northern Line", phone: "" },
    { name: "Anuradhapura", line: "Northern Line", phone: "0252222271" },
    { name: "Mihintale Junction", line: "Northern Line", phone: "0252266616" },
    { name: "Saliyapura", line: "Northern Line", phone: "" },
    { name: "Parasangahawewa", line: "Northern Line", phone: "0253891295" },
    { name: "Medagama", line: "Northern Line", phone: "" },
    { name: "Medawachchiya", line: "Northern Line", phone: "0252245671" },
    { name: "Poonewa", line: "Northern Line", phone: "" },
    { name: "Erittaperiyakulam", line: "Northern Line", phone: "" },
    { name: "Vavuniya", line: "Northern Line", phone: "0242222271" },
    { name: "Omanthai", line: "Northern Line", phone: "0253777505" },
    { name: "Puliyankulama", line: "Northern Line", phone: "0253244651" },
    { name: "Mankulam", line: "Northern Line", phone: "0253244652" },
    { name: "Murukandi", line: "Northern Line", phone: "0253244558" },
    { name: "Kilinochchi", line: "Northern Line", phone: "0253244653" },
    { name: "Paranthan", line: "Northern Line", phone: "0253245523" },
    { name: "Elephant Pass", line: "Northern Line", phone: "0253245524" },
    { name: "Pallai", line: "Northern Line", phone: "0253245525" },
    { name: "Kodikamam", line: "Northern Line", phone: "0253246066" },
    { name: "Chavakachcheri", line: "Northern Line", phone: "0253246067" },
    { name: "Navatkuli", line: "Northern Line", phone: "0253246068" },
    { name: "Jaffna", line: "Northern Line", phone: "0212222271" },
    { name: "Kondavil", line: "Northern Line", phone: "0243201652" },
    { name: "Chunnakam", line: "Northern Line", phone: "0212244271" },
    { name: "Kankesanthurai", line: "Northern Line", phone: "0253246526" },

    // TALAIMANNAR LINE

    { name: "Cheddikulam", line: "Talaimannar Line", phone: "0253244362" },
    { name: "Madu Road", line: "Talaimannar Line", phone: "0253244361" },
    { name: "Murunkan", line: "Talaimannar Line", phone: "0233232236" },
    { name: "Mannar", line: "Talaimannar Line", phone: "0233232233" },
    { name: "Pesalai", line: "Talaimannar Line", phone: "0233232234" },
    { name: "Talaimannar", line: "Talaimannar Line", phone: "0233232237" },
    { name: "Talaimannar Pier", line: "Talaimannar Line", phone: "0233232238" }

];

const stationSearch = document.getElementById("stationSearch");
const directoryResults = document.getElementById("directoryResults");

function displayStations(stations) {

    directoryResults.innerHTML = "";

    if (stations.length === 0) {
        directoryResults.innerHTML = "<p>No station found.</p>";
        return;
    }

    stations.forEach(function(station) {

        const phoneDisplay = station.phone
            ? `<a href="tel:${station.phone}">${station.phone}</a>`
            : `<span>Not Available</span>`;

        directoryResults.innerHTML += `
            <div class="directory-card">
                <h3>${station.name}</h3>
                <p>${station.line}</p>
                <div class="directory-phone">
                    ☎ ${phoneDisplay}
                </div>
            </div>
        `;

    });

}

// Display all stations when page opens
displayStations(stationDirectory);

// SEARCH AND FILTER STATIONS

// SEARCH AND FILTER STATIONS

const lineFilter = document.getElementById("lineFilter");

function filterStations() {

    const searchText = stationSearch.value.toLowerCase();
    const selectedLine = lineFilter.value;

    const filteredStations = stationDirectory.filter(function(station) {

        const nameMatch = station.name.toLowerCase().includes(searchText);

        const lineMatch =
            selectedLine === "all" || station.line === selectedLine;

        return nameMatch && lineMatch;

    });

    displayStations(filteredStations);
}

stationSearch.addEventListener("input", filterStations);

lineFilter.addEventListener("change", filterStations);
// PREMIUM CLASS FARE CALCULATOR

const premiumClassButton = document.getElementById("premiumClassButton");

const reservationFareSection = document.getElementById("reservation-fare");

if (premiumClassButton && reservationFareSection) {

    premiumClassButton.addEventListener("click", function () {

        premiumClassButton.classList.add("active");

        reservationFareSection.style.display = "block";

        reservationFareSection.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

}
// CALCULATE RESERVATION FARE

const calculateFareButton = document.getElementById("calculateFareButton");

const fareFromSelect = document.getElementById("fareFrom");

const fareToSelect = document.getElementById("fareTo");

const fareResult = document.getElementById("fare-result");


if (calculateFareButton) {

    calculateFareButton.addEventListener("click", function () {

        const fromStation = fareFromSelect.value;
        const toStation = fareToSelect.value;

        if (fromStation === "" || toStation === "") {
            fareResult.textContent = "Please select both stations.";
            return;
        }

        if (fromStation === toStation) {
            fareResult.textContent = "Please select two different stations.";
            return;
        }

        const fromCode = stationCodes[fromStation];
        const toCode = stationCodes[toStation];

        const fare = getReservationFare(fromCode, toCode);

        if (fare === null) {
            fareResult.textContent = "Fare information is not available for this route.";
            return;
        }

        fareResult.innerHTML = `
            <h3>First Class Reservation Fare</h3>
            <p>Rs. ${fare.toLocaleString("en-LK")}</p>
        `;

    });

}
// PREMIUM TRAIN SELECTOR

const trainSelectorButtons = document.querySelectorAll(".train-buttons button");

const scheduleContainer = document.querySelector(".schedule-container");

const selectedScheduleDisplay = document.getElementById("selectedScheduleDisplay");

// Store all original train cards
const originalTrainCards = Array.from(
    scheduleContainer.querySelectorAll(":scope > .schedule-card")
);

trainSelectorButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedNumber = button.dataset.train;

        // Find selected train card
        const selectedCard = originalTrainCards.find(function(card) {

            const trainNumberText = Array.from(
                card.querySelectorAll("p")
            ).find(function(p) {
                return p.textContent.trim().startsWith("Train No:");
            });

            return trainNumberText &&
                trainNumberText.textContent.includes(selectedNumber);

        });

        if (!selectedCard) return;

        // Return previously selected card
        const previousCard = selectedScheduleDisplay.querySelector(".schedule-card");

        if (previousCard) {
            scheduleContainer.appendChild(previousCard);
        }

        // Display selected train
        selectedScheduleDisplay.innerHTML = "";
        selectedScheduleDisplay.appendChild(selectedCard);
        selectedScheduleDisplay.style.display = "block";
        // Update active button
        trainSelectorButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});