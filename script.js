

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

       
        
let selectedTrainNumber = "";

details.forEach(function(detail) {

    const originalText = detail.getAttribute("data-en") || detail.textContent;

    if (originalText.trim().startsWith("Train No:")) {
        selectedTrainNumber = originalText
            .replace("Train No:", "")
            .trim();
    }

});

const route = trainRoutes[selectedTrainNumber];

if (!route) return;

        // SKIP TRAIN IF NO SERVICE ON SELECTED DATE

if (
    noServiceDates[selectedTrainNumber] &&
noServiceDates[selectedTrainNumber].includes(selectedDate)
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

        const originalText =
    detail.getAttribute("data-en") || detail.textContent;

if (originalText.trim().startsWith("Train No:")) {
            selectedTrainNumber = originalText
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
console.log("FROM STATION:", fromStation);
console.log("TO STATION:", toStation);

    // REMOVE OLD TIMING DETAILS
    trainDetails.forEach(function(detail) {

       const originalText =
    detail.getAttribute("data-en") || detail.textContent;

if (
    originalText.includes("Arrival:") ||
    originalText.includes("Departure:")
)
         {
            detail.remove();
        }

    });

    // ADD SELECTED STATION TIMINGS
   const departureInfo = document.createElement("p");
const arrivalInfo = document.createElement("p");

departureInfo.classList.add("dynamic-timing");
arrivalInfo.classList.add("dynamic-timing");

    const language = document.documentElement.lang || "en";

const fromStationName =
    document.getElementById("fromStation").selectedOptions[0].textContent.trim();

const toStationName =
    document.getElementById("toStation").selectedOptions[0].textContent.trim();

const timingLabels = {
    en: {
        departure: "Departure",
        arrival: "Arrival",
        notAdded: "Time not added yet",
        noData: "Timetable data not added yet"
    },
    ta: {
        departure: "புறப்படும் நேரம்",
        arrival: "சேரும் நேரம்",
        notAdded: "நேரம் இன்னும் சேர்க்கப்படவில்லை",
        noData: "கால அட்டவணை இன்னும் சேர்க்கப்படவில்லை"
    },
    si: {
        departure: "පිටත්වීම",
        arrival: "ළඟාවීම",
        notAdded: "වේලාව තවම ඇතුළත් කර නැත",
        noData: "කාලසටහන තවම ඇතුළත් කර නැත"
    }
};

const labels = timingLabels[language] || timingLabels.en;

if (timetable) {

    const departure = timetable[fromStation];
    const arrival = timetable[toStation];

    departureInfo.setAttribute("data-type", "departure");
    departureInfo.setAttribute("data-station", fromStationName);
    departureInfo.setAttribute("data-time", departure?.departure || "");

    arrivalInfo.setAttribute("data-type", "arrival");
    arrivalInfo.setAttribute("data-station", toStationName);
    arrivalInfo.setAttribute("data-time", arrival?.arrival || "");

} else {

    departureInfo.setAttribute("data-type", "departure");
    departureInfo.setAttribute("data-station", fromStationName);
    departureInfo.setAttribute("data-time", "");

    arrivalInfo.setAttribute("data-type", "arrival");
    arrivalInfo.setAttribute("data-station", toStationName);
    arrivalInfo.setAttribute("data-time", "");

}
// SHOW TIMINGS IMMEDIATELY AFTER SEARCH

const departureTime =
    departureInfo.getAttribute("data-time");

const arrivalTime =
    arrivalInfo.getAttribute("data-time");

departureInfo.textContent =
    labels.departure + " (" + fromStationName + "): " +
    (departureTime || (timetable ? labels.notAdded : labels.noData));

arrivalInfo.textContent =
    labels.arrival + " (" + toStationName + "): " +
    (arrivalTime || (timetable ? labels.notAdded : labels.noData));

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
    console.log("CLICK TARGET:", event.target.outerHTML);
console.log("VIEW DETAILS BUTTON:", button);

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

 
const fareFromSelect = document.getElementById("fromStation");

const fareToSelect = document.getElementById("toStation");


const fareResult = document.getElementById("fare-result");


if (calculateFareButton) {

    calculateFareButton.addEventListener("click", function () {

      
       

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

    return Array.from(
        card.querySelectorAll("p")
    ).some(function(p) {

        const originalText = p.getAttribute("data-en") || p.textContent;

        return originalText.trim().startsWith("Train No:") &&
            originalText.includes(selectedNumber);

    });

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
// Language Switcher
document.getElementById("lang-en").addEventListener("click", function() {
    changeLanguage("en");
});

document.getElementById("lang-ta").addEventListener("click", function() {
    changeLanguage("ta");
});

document.getElementById("lang-si").addEventListener("click", function() {
    changeLanguage("si");
});
changeLanguage("en");


function changeLanguage(language) {

    document.documentElement.lang = language;

    document.querySelectorAll("[data-en], [data-ta], [data-si]").forEach(function(element) {

        const translatedText = element.getAttribute("data-" + language);

        if (translatedText !== null) {

            if (element.tagName === "OPTION") {
                element.textContent = translatedText;
                element.setAttribute("label", translatedText);
            } else {
                element.textContent = translatedText;
            }

        }

    });
    // UPDATE DYNAMIC TIMING LANGUAGE

    const timingLabels = {
        en: {
            departure: "Departure",
            arrival: "Arrival",
            notAdded: "Time not added yet",
            noData: "Timetable data not added yet"
        },
        ta: {
            departure: "புறப்படும் நேரம்",
            arrival: "சேரும் நேரம்",
            notAdded: "நேரம் இன்னும் சேர்க்கப்படவில்லை",
            noData: "கால அட்டவணை இன்னும் சேர்க்கப்படவில்லை"
        },
        si: {
            departure: "පිටත්වීම",
            arrival: "ළඟාවීම",
            notAdded: "වේලාව තවම ඇතුළත් කර නැත",
            noData: "කාලසටහන තවම ඇතුළත් කර නැත"
        }
    };

    const labels = timingLabels[language] || timingLabels.en;

    document.querySelectorAll(".dynamic-timing").forEach(function(element) {

    const type = element.getAttribute("data-type");
    const time = element.getAttribute("data-time");

    const stationSelect = type === "departure"
        ? document.getElementById("fromStation")
        : document.getElementById("toStation");

    const station = stationSelect.selectedOptions[0].textContent.trim();

    const label = type === "departure"
        ? labels.departure
        : labels.arrival;

    const timeText = time || labels.notAdded;

    element.textContent = label + " (" + station + "): " + timeText;

});
}
// MOBILE HAMBURGER MENU

document.addEventListener("DOMContentLoaded", function() {

    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", function() {

        navbar.classList.toggle("active");

    });

    // CLOSE MENU AFTER CLICKING A LINK

    navbar.querySelectorAll("a").forEach(function(link) {

        link.addEventListener("click", function() {

            navbar.classList.remove("active");

        });

    });

});
// STATION PHOTO GALLERY

function openStationGallery(station) {

    const galleries = {
        "colombo-fort": {
    title: "Colombo Fort Railway Station",
    photos: [
        "image/colombo_fort_01.jpg",
        "image/colombo_fort_02.jpg",
        "image/colombo_fort_03.jpg",
        "image/colombo_fort_04.jpg"
    ]
},

"kandy": {
    title: "Kandy Railway Station",
    photos: [
        "image/kandy_01.jpg",
        "image/kandy_02.jpg",
        "image/kandy_03.jpg",
        "image/kandy_04.jpg",
        "image/kandy_05.jpg",
        "image/kandy_06.jpg",
        "image/kandy_07.jpg",
        "image/kandy_08.jpg"
    ]
},


"ella": {
    title: "Ella Railway Station",
    photos: [
        "image/ella_01.jpg",
        "image/ella_02.jpg",
        "image/ella_03.jpg",
        "image/ella_04.jpg",
        "image/ella_05.jpg",
        "image/ella_06.jpg",
        "image/ella_07.jpg",
        "image/ella_08.jpg"
    ]
},

"jaffna": {
    title: "Jaffna Railway Station",
    photos: [
        "image/jaffna_01.jpg",
        "image/jaffna_02.jpg",
        "image/jaffna_03.jpg",
        "image/jaffna_04.jpg",
        "image/jaffna_05.jpg",
        "image/jaffna_06.jpg",
        "image/jaffna_07.jpg",
        "image/jaffna_08.jpg",
        "image/jaffna_09.jpg",
        "image/jaffna_10.jpg"
    ]
}
    };

    const gallery = galleries[station];

    if (!gallery) return;

    document.getElementById("galleryTitle").textContent = gallery.title;

    const photoContainer = document.getElementById("galleryPhotos");

    photoContainer.innerHTML = "";

    gallery.photos.forEach(function(photo) {

        const img = document.createElement("img");

        img.src = photo;
        img.alt = gallery.title;
        img.className = "gallery-photo";

img.onclick = function() {
    this.classList.toggle("photo-enlarged");
};

photoContainer.appendChild(img);

    });

    document.getElementById("stationGallery").style.display = "flex";
}


function closeStationGallery() {

    document.getElementById("stationGallery").style.display = "none";

}
// STATION DETAILS INFORMATION

const stationDetails = {

    "colombo-fort": {
        title: "Colombo Fort Railway Station",
        history: "Colombo Fort is a major railway hub in Sri Lanka, connecting many railway lines and destinations.",
        facilities: "Passenger waiting areas, ticketing facilities and station platforms. Availability may vary.",
        services: "Long-distance and suburban railway services.",
        location: "Colombo, Western Province",
        telephone: "Official station telephone number to be verified."
    },

    "kandy": {
        title: "Kandy Railway Station",
        history: "Kandy Railway Station serves the historic city of Kandy and is an important stop on the Main Line.",
        facilities: "Passenger waiting areas, ticketing facilities and platforms. Availability may vary.",
        services: "Railway services connecting Kandy with Colombo and other destinations.",
        location: "Kandy, Central Province",
        telephone: "Official station telephone number to be verified."
    },

    "ella": {
        title: "Ella Railway Station",
        history: "Ella Railway Station is located in Sri Lanka's scenic hill country on the Main Line.",
        facilities: "Passenger waiting areas and station platforms. Availability may vary.",
        services: "Main Line railway services connecting Ella with other destinations.",
        location: "Ella, Uva Province",
        telephone: "Official station telephone number to be verified."
    },

    "jaffna": {
        title: "Jaffna Railway Station",
        history: "Jaffna Railway Station is an important railway station in Sri Lanka's Northern Province.",
        facilities: "Passenger waiting areas, ticketing facilities and platforms. Availability may vary.",
        services: "Northern Line railway services connecting Jaffna with other destinations.",
        location: "Jaffna, Northern Province",
        telephone: "Official station telephone number to be verified."
    }

};


// OPEN STATION DETAILS

window.openStationDetails = function(station) {

    const details = stationDetails[station];

    if (!details) return;

    document.getElementById("stationDetailsTitle").textContent =
        details.title;

    document.getElementById("stationDetailsContent").innerHTML = `

        <div class="station-detail-box">
            <h3>📖 Station History</h3>
            <p>${details.history}</p>
        </div>

        <div class="station-detail-box">
            <h3>🏢 Station Facilities</h3>
            <p>${details.facilities}</p>
        </div>

        <div class="station-detail-box">
            <h3>🚆 Railway Services</h3>
            <p>${details.services}</p>
        </div>

        <div class="station-detail-box">
            <h3>📍 Location</h3>
            <p>${details.location}</p>
        </div>

        <div class="station-detail-box">
            <h3>☎️ Telephone Number</h3>
            <p>${details.telephone}</p>
        </div>

    `;

    document.getElementById("stationDetailsModal").style.display = "flex";

}


// CLOSE STATION DETAILS

window.closeStationDetails = function() {
    document.getElementById("stationDetailsModal").style.display = "none";

}