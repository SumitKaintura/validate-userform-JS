
function display() {

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let hno = document.getElementById("homeNo").value;
    let wno = document.getElementById("workNo").value;
    let bday = document.getElementById("birthdate").value;
    let notes = document.getElementById("notes").value;
    let company = document.getElementById("company").value;
    let job = document.getElementById("jobTitle").value;
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    var phVar = /\+91(?:(?: \(099\)[ \x2D]|\(099\)[ \x2D])999\-| \(099\)999| ?099(?:\.999\.| 999[ \x2D]|\-999\-|999))9999|\d{9}/;
    if (firstname == '' || firstname == null) {
        console.log('firstname can not be blank');
        usernameLabel.style.color = 'red';
        usernameLabel.innerHTML = "Username Can not be Blank";

    }
    if (lastname == '' || lastname == null) {
        console.log('lastname can not be blank');

        passwordLabel.style.color = "green";
        passwordLabel.innerHTML = ('lastname cannot be blank');

    }

    if (company == "" || company == null) {
        console.log('Company Name Blank');

        CompanyLabel.style.color = "green";
        CompanyLabel.innerHTML = ('Company cannot be blank');
    }

    if (job == "" || job == null) {
        console.log('Job Title  Blank');

        JobLabel.style.color = "green";
        JobLabel.innerHTML = ('Company cannot be blank');
    }
    if (notes.length > 200 && notes.length == 0) {
        console.log('notes too long');

    }

    var ok = re.test(email);
    if (!ok) {
        console.log('Email Not Valid');
        window.alert("Please enter your Correct Email.");
    }

    var correctNumber = phVar.test(hno);

    if (!correctNumber) {
        console.log('Not Valid Home Phone Number');
        window.alert("Please enter your Correct home number.");
    }
    var correct = phVar.test(wno);
    if (!correct) {
        console.log('Not Valid Work Phone Number');
        window.alert("Please enter your Correct Work number.");
    }
    var dob = new Date(bday);

    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);


    if (age < 15) {
        console.log('Age less than 15.');
        window.alert("Enter valid Age");
    }


}