// ==========================
// IMAGE PREVIEW
// ==========================

document.getElementById("photo").addEventListener("change", function () {

    const file = this.files[0];

    if (file) {

        const reader = new FileReader();

        reader.onload = function (e) {

            const preview =
                document.getElementById("preview");

            preview.src = e.target.result;
            preview.style.display = "block";
        };

        reader.readAsDataURL(file);
    }
});

// ==========================
// GENERATE PROFILE
// ==========================

function generateProfile() {

    const name =
        document.getElementById("name").value.trim();

    const age =
        document.getElementById("age").value.trim();

    const dept =
        document.getElementById("dept").value.trim();

    const college =
        document.getElementById("college").value.trim();

    const state =
        document.getElementById("state").value;

    const city =
        document.getElementById("city").value;

    const photoInput =
        document.getElementById("photo");

    if (
        name === "" ||
        age === "" ||
        dept === "" ||
        college === "" ||
        state === "" ||
        city === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    if (photoInput.files.length === 0) {
        alert("Please select a photo");
        return;
    }

    const file = photoInput.files[0];

    const reader = new FileReader();

    reader.onload = function (e) {

        const imageUrl = e.target.result;

        const initials =
            name.split(" ")
            .map(word => word.charAt(0))
            .join("")
            .toUpperCase();

        const vowelCount =
            (name.match(/[aeiou]/gi) || []).length;

        const username =
            name.split(" ")[0].toLowerCase() +
            Math.floor(Math.random() * 1000);

        const studentID =
            "STU" +
            Math.floor(10000 + Math.random() * 90000);

        const score =
            name.length +
            dept.length +
            college.length;

        const quotes = [
            "Keep Going 🚀",
            "Dream Big 🌟",
            "Never Quit 💪",
            "Stay Positive 😊",
            "Believe Yourself 🔥",
            "Success Awaits 🎯"
        ];

        const quote =
            quotes[Math.floor(Math.random() * quotes.length)];

        let category;

        if (age < 18) {
            category = "Teenager";
        } else if (age <= 25) {
            category = "Young Adult";
        } else {
            category = "Adult";
        }

        document.getElementById("profileCard").innerHTML = `

        <img src="${imageUrl}" class="profile-img">

        <h2>${name}</h2>

        <div class="profile-details">

            <p><strong>Age:</strong> ${age}</p>

            <p><strong>Department:</strong> ${dept}</p>

            <p><strong>College:</strong> ${college}</p>

            <p><strong>State:</strong> ${state}</p>

            <p><strong>City:</strong> ${city}</p>

            <p><strong>Student ID:</strong> ${studentID}</p>

            <p><strong>Username:</strong> ${username}</p>

            <p><strong>Initials:</strong> ${initials}</p>

            <p><strong>Vowel Count:</strong> ${vowelCount}</p>

            <p><strong>Category:</strong> ${category}</p>

            <p><strong>Score:</strong> ${score}</p>

            <p><strong>Status:</strong> Active ✅</p>

        </div>

        <div class="progress">
            <div class="progress-bar"></div>
        </div>

        <div class="stats">

            <div class="stat-box">
                <h3>${name.length}</h3>
                <p>Name Length</p>
            </div>

            <div class="stat-box">
                <h3>${vowelCount}</h3>
                <p>Vowels</p>
            </div>

            <div class="stat-box">
                <h3>${score}</h3>
                <p>Score</p>
            </div>

        </div>

        <br>

        <p><strong>Quote:</strong> ${quote}</p>

        <p>
        <strong>Generated:</strong>
        ${new Date().toLocaleString()}
        </p>

        <br>

        <button class="copy-btn"
        onclick="copyID('${studentID}')">
        📋 Copy Student ID
        </button>
        `;
    };

    reader.readAsDataURL(file);
}

// ==========================
// COPY STUDENT ID
// ==========================

function copyID(id) {

    navigator.clipboard.writeText(id);

    alert("Student ID Copied!");
}

// ==========================
// SAVE PROFILE
// ==========================

function saveProfile() {

    const profile =
        document.getElementById("profileCard").innerHTML;

    localStorage.setItem(
        "studentProfile",
        profile
    );

    alert("Profile Saved Successfully!");
}

// ==========================
// LOAD SAVED PROFILE
// ==========================

window.onload = function () {

    const savedProfile =
        localStorage.getItem("studentProfile");

    if (savedProfile) {

        document.getElementById(
            "savedProfiles"
        ).innerHTML = savedProfile;
    }
};

// ==========================
// SEARCH PROFILE
// ==========================

function searchProfile() {

    const input =
        document.getElementById("searchBox")
        .value
        .toLowerCase();

    const card =
        document.getElementById("profileCard");

    if (
        card.innerText.toLowerCase().includes(input)
    ) {

        card.style.display = "block";

    } else {

        card.style.display = "none";
    }
}

// ==========================
// DARK MODE
// ==========================

function toggleTheme() {

    document.body.classList.toggle("dark");
}

// ==========================
// RESET FORM
// ==========================

function resetProfile() {

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("college").value = "";

    document.getElementById("state").selectedIndex = 0;
    document.getElementById("city").selectedIndex = 0;

    document.getElementById("photo").value = "";

    document.getElementById("profileCard").innerHTML = "";

    document.getElementById("preview").style.display = "none";
}

// ==========================
// CLEAR ALL
// ==========================

function clearProfile() {

    resetProfile();

    document.getElementById(
        "savedProfiles"
    ).innerHTML = "";

    document.getElementById(
        "searchBox"
    ).value = "";

    localStorage.removeItem(
        "studentProfile"
    );

    alert("All Data Cleared!");
}

// ==========================
// DOWNLOAD PDF
// ==========================

function downloadPDF() {

    window.print();
}