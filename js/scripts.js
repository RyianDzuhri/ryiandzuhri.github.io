document.addEventListener("DOMContentLoaded", function() {
    const skills = ["HTML", "CSS", "PHP", "Laravel", "SQL", "Database Design"];
    const experience = [
        { role: "XX", company: "XX Company", years: "XX-XX" },
    ];
    const education = [
        { field: "Computer Science", school: "Halu Oleo University", years: "2023-Now" },
        { field: "Mathematics and Sciences", school: "SMAN 09 KENDARI", years: "2020-2023" },
        { field: "Junior High School", school: "SMPN 02 KENDARI", years: "2016-2020" },
        { field: "Elementary School", school: "SDN 10 KENDARI BARAT", years: "2010-2016" }
    ];

    function populateList(listId, items, formatter) {
        const list = document.getElementById(listId);
        list.innerHTML = "";
        items.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = formatter(item);
            list.appendChild(li);
        });
    }

    populateList("skills-list", skills, skill => `<span>${skill}</span>`);
    populateList("experience-list", experience, exp => `<strong>${exp.role}</strong> - ${exp.company} (${exp.years})`);
    populateList("education-list", education, edu => `<strong>${edu.field}</strong> - ${edu.school} (${edu.years})`);

    const toggleButton = document.getElementById("toggle-theme");
    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});