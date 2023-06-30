if (document.readyState !== "loading") {
  console.log("Document is ready!");
} else {
  document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready after waiting!");

    const userForm = document.getElementById("user-form");
    const submitButton = document.getElementById("submit-data");
    const userTable = document.getElementById("user-table");
    const emptyButton = document.getElementById("empty-table");

    userForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = document.getElementById("input-username").value;
      const email = document.getElementById("input-email").value;
      const address = document.getElementById("input-address").value;
      const admin = document.getElementById("input-admin").checked;
      const image = document.getElementById("input-image").files[0];

      const existingUser = Array.from(userTable.rows).find(row => row.cells[0].textContent === username);

      if (existingUser) {
        existingUser.cells[1].textContent = email;
        existingUser.cells[2].textContent = address;
        existingUser.cells[3].textContent = admin ? "X" : "-";
      } else {
        const newRow = userTable.insertRow(-1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);

        cell1.textContent = username;
        cell2.textContent = email;
        cell3.textContent = address;
        cell4.textContent = admin ? "X" : "-";
        cell5.innerHTML = image ? `<img src="${URL.createObjectURL(image)}" alt="User Image" width="64" height="64">` : "";
      }
      userForm.reset();
    });

    emptyButton.addEventListener("click", function() {
      while (userTable.rows.length > 1) {
        userTable.deleteRow(1);
      }
    });
  });
}
