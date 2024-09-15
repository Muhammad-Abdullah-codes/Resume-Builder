document.getElementById('download').addEventListener('click', () => {
    const element = document.getElementById('content');
    html2pdf().from(element).save('CV.pdf');
});

function generateResume(event) {
    event.preventDefault();

    // Gather input values
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const summary = document.getElementById('summary').value;
    const competencies = document.getElementById('competencies').value.split("\n");
    const experienceCompany = document.getElementById('experienceCompany').value;
    const experienceTitle = document.getElementById('experienceTitle').value;
    const experienceYears = document.getElementById('experienceYears').value;
    const experienceDuties = document.getElementById('experienceDuties').value.split("\n");
    const education = document.getElementById('education').value;
    const certifications = document.getElementById('certifications').value;
    const activities = document.getElementById('activities').value.split("\n");

    // Update the resume template with the input values
    document.getElementById('resumeName').textContent = fullName;
    document.getElementById('resumePhone').textContent = phone;
    document.getElementById('resumeEmail').textContent = email;
    document.getElementById('resumeAddress').textContent = address;
    document.getElementById('resumeJobTitle').textContent = jobTitle;
    document.getElementById('resumeSummary').textContent = summary;

    let competencyList = document.getElementById('resumeCompetencies');
    competencyList.innerHTML = '';
    competencies.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        competencyList.appendChild(li);
    });

    document.getElementById('resumeExperienceCompany').textContent = experienceCompany;
    document.getElementById('resumeExperienceTitle').textContent = experienceTitle;
    document.getElementById('resumeExperienceYears').textContent = experienceYears;

    let dutyList = document.getElementById('resumeExperienceDuties');
    dutyList.innerHTML = '';
    experienceDuties.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        dutyList.appendChild(li);
    });

    document.getElementById('resumeEducation').textContent = education;
    document.getElementById('resumeCertifications').textContent = certifications;

    let activitiesList = document.getElementById('resumeActivities');
    activitiesList.innerHTML = '';
    activities.forEach(activity => {
        let span = document.createElement('span');
        span.textContent = activity;
        activitiesList.appendChild(span);
    });

    // Hide the form and show the resume
    document.getElementById('resumeForm').classList.add('hidden');
    document.getElementById('resumeOutput').classList.remove('hidden');



    // Clear the form fields
    document.getElementById('resumeForm').reset();

   
}
