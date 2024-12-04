document.addEventListener("DOMContentLoaded", function () {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    const tableBody = document.getElementById("student-table-body");
  
    // Function to render table with student details
    function renderStudents() {
      tableBody.innerHTML = "";
  
      students.forEach(function (student, index) {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td class="editable" contenteditable="true" data-index="${index}" data-property="firstName">${student.firstName}</td>
          <td class="editable" contenteditable="true" data-index="${index}" data-property="lastName">${student.lastName}</td>
          <!-- Add more table cells with other properties as needed -->
          <td><button onclick="saveChanges(${index})">Save</button></td>
        `;
        tableBody.appendChild(row);
      });
    }
  
    renderStudents();
  
    // Function to save changes made to student details
    window.saveChanges = function(index) {
      const propertyElements = document.querySelectorAll(`[data-index="${index}"]`);
      const student = students[index];
  
      propertyElements.forEach(element => {
        const property = element.dataset.property;
        student[property] = element.textContent.trim();
      });
  
      localStorage.setItem("students", JSON.stringify(students));
  
      // Update the table to reflect changes
      renderStudents();
    };
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    // Get the modal and close button
    const modal = document.getElementById("editModal");
    const closeButton = document.querySelector(".close");
  
    // Open the modal when clicking the edit button
    function openModal() {
      modal.style.display = "block";
    }
  
    // Close the modal when clicking the close button or outside the modal
    function closeModal() {
      modal.style.display = "none";
    }
  
    closeButton.addEventListener("click", closeModal);
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  
    // Edit student details
    function editStudent(index) {
      // Retrieve student details
      const students = JSON.parse(localStorage.getItem("students")) || [];
      const editedStudent = students[index];
  
      // Populate input fields with current student details
      document.getElementById("editFirstName").value = editedStudent.firstName;
      document.getElementById("editLastName").value = editedStudent.lastName;
  
      // Show the modal
      openModal();
  
      // Handle form submission
      const editForm = document.getElementById("editForm");
      editForm.addEventListener("submit", function (event) {
        event.preventDefault();
  
        // Update student details with values from input fields
        editedStudent.firstName = document.getElementById("editFirstName").value;
        editedStudent.lastName = document.getElementById("editLastName").value;
  
        // Update local storage with modified student details
        localStorage.setItem("students", JSON.stringify(students));
  
        // Close the modal
        closeModal();
  
        // Refresh the page to update the table
        location.reload();
      });
    }
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    // Get the modal and close button
    const modal = document.getElementById("editModal");
    const closeButton = document.querySelector(".close");
  
    // Open the modal when clicking the edit button
    function openModal() {
      modal.style.display = "block";
    }
  
    // Close the modal when clicking the close button or outside the modal
    function closeModal() {
      modal.style.display = "none";
    }
  
    closeButton.addEventListener("click", closeModal);
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  
    // Edit student details
    function editStudent(index) {
      // Retrieve student details
      const students = JSON.parse(localStorage.getItem("students")) || [];
      const editedStudent = students[index];
  
      // Populate input fields with current student details
      document.getElementById("editFirstName").value = editedStudent.firstName;
      document.getElementById("editLastName").value = editedStudent.lastName;
  
      // Show the modal
      openModal();
  
      // Handle form submission
      const editForm = document.getElementById("editForm");
      editForm.addEventListener("submit", function (event) {
        event.preventDefault();
  
        // Update student details with values from input fields
        editedStudent.firstName = document.getElementById("editFirstName").value;
        editedStudent.lastName = document.getElementById("editLastName").value;
  
        // Update local storage with modified student details
        localStorage.setItem("students", JSON.stringify(students));
  
        // Close the modal
        closeModal();
  
        // Refresh the page to update the table
        location.reload();
      });
    }
  });
  