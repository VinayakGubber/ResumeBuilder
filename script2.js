document.addEventListener("DOMContentLoaded", function () {
  // Function to add new achievement fields
  window.addAchievement = function () {
    let container = document.getElementById("achievementsContainer");
    let newField = document.createElement("div");
    newField.classList.add("achievement-item");
    newField.innerHTML = `
        <div class="row mb-2">
          <div class="col-md-5">
            <input type="text" class="form-control" name="achieve_title[]" placeholder="Achievement title" />
          </div>
          <div class="col-md-6">
            <input type="text" class="form-control" name="achieve_description[]" placeholder="Brief description" />
          </div>
          <div class="col-md-1 d-flex align-items-end">
            <button type="button" class="remove-btn" onclick="removeItem(this)">-</button>
          </div>
        </div>
      `;
    container.appendChild(newField);
  };

  // Function to add new experience fields

  window.addExperience = function () {
    let container = document.getElementById("experienceContainer");
    let newField = document.createElement("div");
    newField.classList.add("experience-item");
    newField.innerHTML = `
        <div class="row mb-2">
          <div class="col-md-4">
            <label class="form-label">Title</label>
            <input type="text" class="form-control" name="exp_title[]" placeholder="Job title" />
          </div>
          <div class="col-md-4">
            <label class="form-label">Organization</label>
            <input type="text" class="form-control" name="exp_organization[]" placeholder="Organization name" />
          </div>
          <div class="col-md-4">
            <label class="form-label">Location</label>
            <input type="text" class="form-control" name="exp_location[]" placeholder="City, Country" />
          </div>
          <div class="col-md-12">
            <label class="form-label">Description</label>
            <input type="text" class="form-control" name="exp_description[]" placeholder="Job responsibilities" />
          </div>
        </div>
        <div class="row g-3 mb-3">
          <div class="col-md-6">
            <label class="form-label">Start Date</label>
            <input type="date" class="form-control" name="exp_start_date[]" />
          </div>
          <div class="col-md-6">
            <label class="form-label">End Date</label>
            <input type="date" class="form-control" name="exp_end_date[]" />
          </div>
          <div class="col-md-1 d-flex align-items-end">
            <button type="button" class="remove-btn" onclick="removeItem(this)">-</button>
          </div>
          <div class="col-md-1 d-flex align-items-end">
            <button type="button" class="remove-btn" onclick="removeItem(this)">-</button>
          </div>
        </div>
    `;
    container.appendChild(newField);
  };

  // Function to add new education fields
  window.addEducation = function () {
    let container = document.getElementById("educationContainer");
    let newField = document.createElement("div");
    newField.classList.add("education-item");
    newField.innerHTML = `
        <div class="row g-3 mb-2">
          <div class="col-md-4">
            <input type="text" class="form-control" name="edu_school[]" placeholder="School / College name" />
          </div>
          <div class="col-md-4">
            <input type="text" class="form-control" name="edu_degree[]" placeholder="Degree" />
          </div>
          <div class="col-md-4">
            <input type="text" class="form-control" name="edu_city[]" placeholder="City" />
          </div>
       
        </div>
        <div class="row g-3 mb-3">
          <div class="col-md-4">
            <input type="date" class="form-control" name="edu_start_date[]" />
          </div>
          <div class="col-md-4">
            <input type="date" class="form-control" name="edu_graduation_date[]" />
          </div>
          <div class="col-md-4">
            <input type="text" class="form-control" name="edu_description[]" placeholder="Description" />
          </div>
             <div class="col-md-1 d-flex align-items-end">
            <button type="button" class="remove-btn" onclick="removeItem(this)">-</button>
          </div>
        </div>
      `;
    container.appendChild(newField);
  };

  // Function to remove a field
  window.removeItem = function (button) {
    button.closest(".row").parentElement.remove();
  };
});
