let interviewList = [];
let rejectedList = [];

const totalJob = document.getElementById("totalJob");
const totalInterview = document.getElementById("totalInterview");
const totalRejected = document.getElementById("totalRejected");

const allButton = document.getElementById("all-button");
const interviewButton = document.getElementById("interview-button");
const rejectedButton = document.getElementById("rejected-button");

const allCards = document.getElementById("all-cards");
const filteredSection = document.getElementById("filtered-section");

function updateDashboard() {
    totalJob.innerText = document.querySelectorAll(".job-card").length;
    totalInterview.innerText = interviewList.length;
    totalRejected.innerText = rejectedList.length;
}

updateDashboard();

document.body.addEventListener("click", function (event) {
    const card = event.target.closest(".job-card");
    if (!card) return;

    const jobData = {
        companyName: card.querySelector(".company-name").innerText,
        companyPosition: card.querySelector(".company-position").innerText,
        workType: card.querySelector(".work-type").innerText,
        jobDescription: card.querySelector(".job-description").innerText,
        status: ""
    };

    if (event.target.classList.contains("interview-btn")) {
        jobData.status = "Interview";

        rejectedList = rejectedList.filter(j => j.companyName !== jobData.companyName);

        if (!interviewList.find(j => j.companyName === jobData.companyName)) {
            interviewList.push(jobData);
        }

        card.querySelector(".status-text")?.remove();
        const status = document.createElement("p");
        status.className = "status-text text-green-600 font-semibold";
        status.innerText = "Status: Interview";
        card.querySelector(".space-y-2").appendChild(status);
    }

    if (event.target.classList.contains("rejected-btn")) {
        jobData.status = "Rejected";


        interviewList = interviewList.filter(j => j.companyName !== jobData.companyName);

        if (!rejectedList.find(j => j.companyName === jobData.companyName)) {
            rejectedList.push(jobData);
        }

        card.querySelector(".status-text")?.remove();
        const status = document.createElement("p");
        status.className = "status-text text-red-600 font-semibold";
        status.innerText = "Status: Rejected";
        card.querySelector(".space-y-2").appendChild(status);
    }

    if (event.target.classList.contains("fa-trash-can")) {
        card.remove();
        interviewList = interviewList.filter(j => j.companyName !== jobData.companyName);
        rejectedList = rejectedList.filter(j => j.companyName !== jobData.companyName);
    }

    updateDashboard();
});

function renderFiltered(list) {
    filteredSection.innerHTML = "";

    if (list.length === 0) {
        filteredSection.innerHTML = `
      <div class="text-center mt-10">
        <i class="fa-regular fa-folder-open text-5xl"></i>
        <p class="text-xl font-semibold">No jobs Available</p>
        <p class="text-gray-500">You haven’t marked any jobs yet</p>
      </div>
    `;
        return;
    }



