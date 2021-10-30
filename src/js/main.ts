
// Variabler
let coursesEl = document.getElementById("courses");
let jobsEl = document.getElementById("jobs");
let portfolioEl = document.getElementById("portfolio");
let hamburgerEl = document.getElementById("hamburger-icon");
let navEl = document.getElementById("navigation");

// Lyssnare
window.addEventListener("load", getCourses);
window.addEventListener("load", getJobs);
window.addEventListener("load", getPortfolio);

// Göm menyn när sidan laddas
window.addEventListener("load", () => {
    navEl.style.display = "none";
});

// Hamburgemeny-ikon
hamburgerEl.addEventListener("click", toggleNav);


// Togglar navbaren
function toggleNav() {
    $("#navigation").slideToggle();
}

// Hämta alla kurser
function getCourses() {
    coursesEl.innerHTML = "";

    // Hämta alla kurser från webbtjänsten med fetch
    fetch("https://studenter.miun.se/~amhv2000/writeable/projekt-webbtjanst/courses.php")
        .then(response => response.json())
        .then(data => {
            coursesEl.innerHTML += `
            <tr>
                <th class="school-table">Skola</th>
                <th class="code-table">Kurskod</th>
                <th>Kursnamn</th>
                
                <th class="center">Start - år/månad</th>
                <th class="center">Slut - år/månad</th>
                
            </tr>
        `;
            data.forEach(courses => {
                // Om slutdatum är 0 är det den nuvarande kursen
                let endDate = courses.end_date;
                if (endDate == "0000-00-00") {
                    endDate = "Nuvarande";
                } else {
                    endDate = endDate.slice(0, -3);
                }

                // Ta bort sista tre tecken så endast år och månad skrivs ut
                let startDate :string = courses.start_date;
                startDate = startDate.slice(0, -3);

                // Ersätt eventuella enkelfnuttar i strängen med \
                let school :string = courses.school;
                let courseId :string = courses.course_id;
                let name :string = courses.name;
                school = school.replaceAll("'", "\\'");
                courseId = courseId.replaceAll("'", "\\'");
                name = name.replaceAll("'", "\\'");

                // Skriv ut kurser i tabell
                coursesEl.innerHTML +=
                    `
            <tr>
                <td class="school-table school-title">${courses.school}</td>
                <td class="code-table code-title">${courses.course_id}</td>
                <td class="name-title">${courses.name}</td>
    
                <td class="center start-title">${startDate}</td>
                <td class="center end-title">${endDate}</td>
            </tr>
            `;
            })

        });
};

// Hämta alla anställningar
function getJobs() {
    jobsEl.innerHTML = "";

    // Hämta alla jobb från webbtjänsten med fetch
    fetch("https://studenter.miun.se/~amhv2000/writeable/projekt-webbtjanst/jobs.php")
        .then(response => response.json())
        .then(data => {
            data.forEach(jobs => {
                // Om slutdatum är 0 är det det nuvarnade jobbet
                let endDate :string = jobs.end_date;
                if (endDate == "0000-00-00") {
                    endDate = "Nuvarande";
                } else {
                    endDate = endDate.slice(0, -3);
                }

                // Ta bort sista tre tecken så endast år och månad skrivs ut
                let startDate :string = jobs.start_date;
                startDate = startDate.slice(0, -3);

                // Tar bort eventuella enkelfnuttar
                let workplace :string = jobs.workplace;
                let title :string = jobs.title;
                let desc :string = jobs.description;
                workplace = workplace.replaceAll("'", "\\'");
                title = title.replaceAll("'", "\\'");
                desc = desc.replaceAll("'", "\\'");

                jobsEl.innerHTML +=
                    `
            <div class="job">
                <div class="flex-container">
                    <div class="job-headers">
                        <h4>${jobs.workplace}</h4>
                        <h5>${jobs.title}</h5>
                    </div>
                    <div class="job-text">
                        <p>${jobs.description}</p>
                    </div>
                </div>
                <span><b>Period: </b> ${startDate} till ${endDate}</span>
            </div>
            `;
            })
        });
}

// Hämta alla webbplatser
function getPortfolio() {
    portfolioEl.innerHTML = "";

    // Hämta alla webbsidor från webbtjänsten med fetch
    fetch("https://studenter.miun.se/~amhv2000/writeable/projekt-webbtjanst/websites.php")
        .then(response => response.json())
        .then(data => {
            data.forEach(websites => {

                // Tar bort eventuella enkelfnuttar
                let title :string = websites.title;
                let url :string = websites.url;
                let desc :string = websites.description;
                title = title.replaceAll("'", "\\'");
                url = url.replaceAll("'", "\\'");
                desc = desc.replaceAll("'", "\\'");

                portfolioEl.innerHTML +=
                    `
            <div class="website">
                <div class="flex-container">
                    <h4 class="website-title">${websites.title}</h4>
                    <p class="website-text">${websites.description}</p>
                </div>

                <div class="link-container">
                    <a href="${websites.url}" target="_blank">Gå till webbplats ></a>
                </div>
            </div>
            `;
            })
        });
}