const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("🎉 Your registration has been submitted successfully!\n\nThank you for registering for the CodeStorm Challenge.");

    form.reset();

});