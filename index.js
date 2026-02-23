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