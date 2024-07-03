// Message us content
function submitForm() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const gender = genderElement ? genderElement.value : '';
    const message = document.getElementById('message').value;

    document.getElementById('currentTime').innerText = new Date().toLocaleString();
    document.getElementById('outputName').innerText = name;
    document.getElementById('outputDob').innerText = dob;
    document.getElementById('outputGender').innerText = gender;
    document.getElementById('outputMessage').innerText = message;

    console.log("Form submitted successfully!");
    console.log("Name: " + name);
    console.log("DOB: " + dob);
    console.log("Gender: " + gender);
    console.log("Message: " + message);
}