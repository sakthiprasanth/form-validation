
 let createform = document.getElementById('create-account');

function create(event) {
    event.preventDefault();

    // check it first name //
    let regname = /^[a-zA-Z]*$/,
        fnameElement = document.getElementById('fname'),
        fnamevalue = fnameElement.value;

    if (fnamevalue != "" && fnamevalue.match(regname)) {
        console.log('correct');
        fnameElement.classList.add("success");

    }
    else {
        console.log('oops!')
        fnameElement.classList.add("error");

    }
    // check it middle name //
    let reginame = /^[a-zA-Z]*$/,
        mnameElement = document.getElementById('mname'),
        mnamevalue = mnameElement.value;

    if (mnamevalue != "" && mnamevalue.match(reginame)) {
        console.log('correct');
        mnameElement.classList.add("success");
    }
    else {
        console.log('oops!')
        mnameElement.classList.add("error");
    }

    // check it last name //
    let regisname = /^[a-zA-Z]*$/,
        lnameElement = document.getElementById('lname'),
        lnamevalue = lnameElement.value;

    if (lnamevalue != "" && lnamevalue.match(regisname)) {
        console.log('correct');
        lnameElement.classList.add("success");
    }
    else {
        console.log('oops!')
        lnameElement.classList.add("error");
    }

    // check it email id //
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    emailElement = document.getElementById('email'),
        emailvalue = emailElement.value;

    if (emailvalue.match(mailformat)) {
        console.log("it is correct");
        emailElement.classList.add("success");
    }
    else {
        console.log("it is wrong");
        emailElement.classList.add("error");
    }

    // check it password //
    let pass = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
    passwordElement = document.getElementById('password');
    passwordvalue = passwordElement.value;
    if (passwordvalue.match(pass)) {
        console.log("strong password");
        passwordElement.classList.add("success");
         
        //check it cpassword //

        let cpassElement = document.getElementById('cpass');
        cpassvalue = cpassElement.value;
       
        if (cpassvalue.match(passwordvalue)) {
            console.log("strong password");
            cpassElement.classList.add("success");
        } else {
            console.log("password is not match");
            cpassElement.classList.add("error");
        }

     } else {
        console.log("weak password try again");
        passwordElement.classList.remove("success");
        passwordElement.classList.add("error");
    }
     // check it mobile number //

      let  mob = /^[1-9]{1}[0-9]{9}$/,

      numberElement = document.getElementById('number'),
      numbervalue = numberElement.value;

      if(numbervalue.match(mob)){
          console.log(" number is correct");
          numberElement.classList.add("success");
      }else{
             console.log(" number is wrong");
             numberElement.classList.add("error");
      }

       //check it gender //

       let gender = document.getElementsByName('gender');

       if (gender[0].checked || gender[1].checked){
           console.log("correct");

       }else{
           console.log("wrong");
       }
    
      //check it country //
   
      let countryElement =document.getElementById('country'),
          countryvalue =countryElement.value;

        if(countryvalue ==""){
            console.log("select any one country");
            countryElement.classList.add("error");

        }else{
            console.log("correct");
          
            countryElement.classList.add("success");
        }

        // check it bio//

        let bioElement =document.getElementById('bio'),
    biovalue =bioElement.value;

      if(biovalue.length>=100){
          console.log("bio is correct");
          countryElement.classList.add("success");

      }else{
          console.log("bio is wrong");
        
          bioElement.classList.add("error");
      }
       
             
    }