document.getElementById('cvInputForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Clear previous error messages
  document.querySelectorAll('.error-message').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.border').forEach(el => el.classList.remove('error'));

  // Get input values
  const fullName = document.getElementById('fullName').value.trim();
  const jobTitle = document.getElementById('jobTitle').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const website = document.getElementById('website').value.trim();
  const address = document.getElementById('address').value.trim();
  const profile = document.getElementById('profile').value.trim();
  const education = document.getElementById('education').value.trim().split(',').map(edu => edu.trim());
  const skills = document.getElementById('skills').value.trim().split(',').map(skill => skill.trim());
  const experience = document.getElementById('experience').value.trim().split(',').map(exp => exp.trim());
  const reference1 = document.getElementById('reference1').value.trim().split(',').map(ref => ref.trim());
  const reference2 = document.getElementById('reference2').value.trim().split(',').map(ref => ref.trim());

  // Check for empty fields and show error messages
  let hasError = false;
  if (!fullName) {
    document.getElementById('fullName').classList.add('error');
    document.getElementById('fullNameError').classList.remove('hidden');
    hasError = true;
  }
  if (!jobTitle) {
    document.getElementById('jobTitle').classList.add('error');
    document.getElementById('jobTitleError').classList.remove('hidden');
    hasError = true;
  }
  if (!email) {
    document.getElementById('email').classList.add('error');
    document.getElementById('emailError').classList.remove('hidden');
    hasError = true;
  }
  if (!phone) {
    document.getElementById('phone').classList.add('error');
    document.getElementById('phoneError').classList.remove('hidden');
    hasError = true;
  }
  if (!address) {
    document.getElementById('address').classList.add('error');
    document.getElementById('addressError').classList.remove('hidden');
    hasError = true;
  }
  if (!profile) {
    document.getElementById('profile').classList.add('error');
    document.getElementById('profileError').classList.remove('hidden');
    hasError = true;
  }
  if (!education.length) {
    document.getElementById('education').classList.add('error');
    document.getElementById('educationError').classList.remove('hidden');
    hasError = true;
  }
  if (!skills.length) {
    document.getElementById('skills').classList.add('error');
    document.getElementById('skillsError').classList.remove('hidden');
    hasError = true;
  }
  if (!experience.length) {
    document.getElementById('experience').classList.add('error');
    document.getElementById('experienceError').classList.remove('hidden');
    hasError = true;
  }
  if (reference1.length < 4) {
    document.getElementById('reference1').classList.add('error');
    document.getElementById('reference1Error').classList.remove('hidden');
    hasError = true;
  }
  if (reference2.length < 4) {
    document.getElementById('reference2').classList.add('error');
    document.getElementById('reference2Error').classList.remove('hidden');
    hasError = true;
  }

  if (hasError) return; // Stop if there are errors

  // Get the profile picture
  const profilePicInput = document.getElementById('profilePic');
  let profilePicURL = '';
  if (profilePicInput.files && profilePicInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profilePicURL = e.target.result;
      createCV(profilePicURL);
    };
    reader.readAsDataURL(profilePicInput.files[0]);
  } else {
    createCV(''); // If no profile picture is selected
  }

  // Function to create the CV
  function createCV(profilePicURL) {
    const cvTemplate = `
    <div id="content">
     <div class="grid grid-cols-3">
       <!-- Left Sidebar -->
       <div class="col-span-1 bg-blue-950 text-white p-8">
         ${profilePicURL ?
        `<div class="flex justify-center mb-8 mt-2">
           <img src="${profilePicURL}" alt="profile" class="rounded-full w-32 h-32 border-solid border-white border-4">
         </div>`
        : ''}
         <div class="mb-8">
           <h2 class="text-xl font-bold mb-2">Contact</h2>
           <hr>
           <p class="mt-2">📞 ${phone}</p>
           <p>📧 ${email}</p>
           ${website ? `<p>🌐 <a href="${website}" class="underline text-blue-300">${website}</a></p>` : ''}
           <p>📍 ${address}</p>
         </div>

         <div class="mb-8">
           <h2 class="text-xl font-bold mb-2">Education</h2>
           <hr>
           <ul class="list-disc list-inside mt-2">
             ${education.map(edu => `<li>${edu}</li>`).join('')}
           </ul>
         </div>

         <div class="mb-8">
           <h2 class="text-xl font-bold mb-2">Skills</h2>
           <hr>
           <ul class="list-disc list-inside mt-2">
             ${skills.map(skill => `<li>${skill}</li>`).join('')}
           </ul>
         </div>
       </div>

       <!-- Right Content -->
       <div class="col-span-2 p-8">
         <div class="mb-16 mt-9">
           <h1 class="text-3xl font-bold text-gray-800">${fullName}</h1>
           <p class="text-xl text-black">${jobTitle}</p>
         </div>

         <div class="mb-8">
           <h2 class="text-xl font-bold text-gray-800 mb-2 pt-1">Profile</h2>
           <hr class="bg-black h-1">
           <p class="text-gray-600 mt-2">${profile}</p>
         </div>

         <div class="mb-8">
           <h2 class="text-xl font-bold text-gray-800 mb-2">Work Experience</h2>
           <hr class="bg-black h-1">
           <ul class="list-disc list-inside mt-2">
             ${experience.map(exp => `<li>${exp}</li>`).join('')}
           </ul>
         </div>

         <div class="mb-8">
           <h2 class="text-xl font-bold text-gray-800 mb-2">References</h2>
           <hr class="bg-black h-1">
           <div class="grid grid-cols-2 gap-4 mt-2">
             <div>
               <p><strong>${reference1[0]}</strong></p>
               <p>${reference1[1]}</p>
               <p>📞 ${reference1[2]}</p>
               <p>📧 ${reference1[3]}</p>
             </div>
             <div>
               <p><strong>${reference2[0]}</strong></p>
               <p>${reference2[1]}</p>
               <p>📞 ${reference2[2]}</p>
               <p>📧 ${reference2[3]}</p>
             </div>
           </div>
         </div>
       </div>
     </div>
     </div>
     <div class="flex justify-center items-center">
     <button id="download" class="mt-3 bg-black text-white py-2 px-4 rounded-lg text-xl hover:bg-gray-300 hover:shadow-lg hover:text-black cursor-pointer">Download Resume</button>
     </div>
   `;

    // Output the CV
    document.getElementById('cv-output').innerHTML = cvTemplate;
    document.getElementById('cv-form').classList.add('hidden');
    document.getElementById('cv-output').classList.remove('hidden');

    document.getElementById('download').addEventListener('click', () => {
      const element = document.getElementById('content');
      html2pdf().from(element).save('CV.pdf');
  });

  }
});
