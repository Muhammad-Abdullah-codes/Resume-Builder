document.getElementById('download').addEventListener('click', () => {
    const element = document.getElementById('content');
    html2pdf().from(element).save('CV.pdf');
});

function generateResume(event) {
    event.preventDefault();

    // Get values from form fields
    const fullName = document.getElementById('fullName').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value.split("\n");
    const educationDates = document.getElementById('educationDates').value;
    const educationInstitution = document.getElementById('educationInstitution').value;
    const educationDegree = document.getElementById('educationDegree').value;
    const experienceTitle1 = document.getElementById('experienceTitle1').value;
    const experienceDesc1 = document.getElementById('experienceDesc1').value;
    const experienceTitle2 = document.getElementById('experienceTitle2').value;
    const experienceDesc2 = document.getElementById('experienceDesc2').value;

    // Update the resume template with the input values
    document.getElementById('resumeName').textContent = fullName;
    document.getElementById('resumeJobTitle').textContent = jobTitle;
    document.getElementById('resumePhone').textContent = phone;
    document.getElementById('resumeEmail').textContent = email;
    document.getElementById('resumeWebsite').textContent = website;
    document.getElementById('resumeSummary').textContent = summary;

    let skillList = document.getElementById('resumeSkills');
    skillList.innerHTML = '';
    skills.forEach(skill => {
        let li = document.createElement('li');
        li.textContent = skill;
        skillList.appendChild(li);
    });

    document.getElementById('resumeEducationDates').textContent = educationDates;
    document.getElementById('resumeEducationInstitution').textContent = educationInstitution;
    document.getElementById('resumeEducationDegree').textContent = educationDegree;

    document.getElementById('resumeExperienceTitle1').textContent = experienceTitle1;
    document.getElementById('resumeExperienceDesc1').textContent = experienceDesc1;
    document.getElementById('resumeExperienceTitle2').textContent = experienceTitle2;
    document.getElementById('resumeExperienceDesc2').textContent = experienceDesc2;

    // Hide the form and show the resume
    document.getElementById('resumeForm').classList.add('hidden');
    document.getElementById('resumeOutput').classList.remove('hidden');
}
