function checkdetails() {

    //First Name
    let Fname = document.MyForm.fname.value;
    const letters = /^[A-Za-z]+$/;
    let Lname = document.MyForm.lname.value;
    let phonenumber = document.getElementById('phonenumber').value;
    let email = document.MyForm.email.value;
    var gender = document.MyForm.gender.value;
    let cname = document.MyForm.cname.value;
    let branch = document.MyForm.branch.value;
    let rollno = document.MyForm.rollno.value;
    let sem = document.MyForm.sem.value;

    if(Fname == "" || !Fname.match(letters))
    {
        window.alert("Your First Name Is Invalid ");
        Fname.focus();
        return false;
    }
    else if(Lname == "" || !Lname.match(letters))//Last Name
    {
        window.alert("Your Last Name Is Invalid ");
        Lname.focus();
        return false;
    }
    else if (isNaN(phonenumber))//phone number
    {
        alert("Please enter a valid Mobile number");
    }
    else if(email == "" || !Lname.match(letters))  //Email ID
    {
        alert("Enter Valid Email ID");
        email.focus();
        return false;
    }
    else if(gender == "")    //Gender
    {
        alert("Please Select Your Gender");
        return false;
    }
    else if(cname == "" || !cname.match(letters))    //College Name
    {
        alert("Your College Name Is Invalid ");
        cname.focus();
        return false;
    }
    else if(branch == "" || !branch.match(letters))    //Branch
    {
        alert("Your branch Is Invalid ");
        branch.focus();
        return false;
    }
    else if(rollno == "" || !rollno.match(letters))    //roll no
    {
        alert("Your roll number Is Invalid ");
        rollno.focus();
        return false;
    }
    else if(sem == "" || !sem.match(letters))   //semester
    {
        alert("Your semester Is Invalid ");
        sem.focus();
        return false;
    }
    else 
    {
        location.href = "OK.html";
        return true;
    }
 
    

}