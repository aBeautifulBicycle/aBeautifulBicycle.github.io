if (window.location.pathname.startsWith("/submit")) {
    const fname = localStorage.getItem("fname");
    const lname = localStorage.getItem("lname");
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const phone = localStorage.getItem("phone");
    const dob = localStorage.getItem("dob");
    const quantity = localStorage.getItem("quantity");
    const vehicle1 = localStorage.getItem("vehicle1");
    const vehicle2 = localStorage.getItem("vehicle2");
    const vehicle3 = localStorage.getItem("vehicle3");
    const gender = localStorage.getItem("gender");
    const dropdowns =localStorage.getItem("dropdowns");

    // Display data on the page
    const resultDiv = document.getElementById('result');
    if (fname) {
        resultDiv.innerHTML = `<p>Name: ${fname} ${lname}</p><p>Email: ${email}</p><p>Password: ${password}</p><p>phone: ${phone}</p><p>dob: ${dob}</p><p>quantity: ${quantity}</p><p>Bike: ${vehicle1}</p><p>Car: ${vehicle2}</p><p>Boat: ${vehicle3}</p><p>Gender: ${gender}</p><p>Dropdowns: ${dropdowns}</p>`;
    } else {
        resultDiv.innerHTML = '<p>No data submitted.</p>';
    }
   }