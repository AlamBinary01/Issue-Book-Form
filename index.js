function validateForm(event) {

    var phone = document.getElementById("phone_").value,
    email = document.getElementById("email_").value,
    name = document.getElementById("name_id").value,
    //username = document.getElementById("u_id").value,
  //   book_ =document.getElementById('book_name').value,
  //   issue_d = document.getElementById('Issue_date').value,
  //  due_d=document.getElementById('due_date'),
  //   depart_= document.getElementById('department');      
    tomatch = /^\d{5}-\d{7}$/,
    emailMatch =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    errors = [];
    name_format=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
   if (!tomatch.test(phone)){
      errors.push("The phone number must be formated as follows: XXXXX-XXXXXXX");
    }
  if(name_format.test(name)){
      errors.push("Name cannot contain special")
    }
     if (!emailMatch.test(email)){
      errors.push("The email must be formated as follows: name@domain.com.");
    }
    // const depart_ = ["Cs", "SE", "EE","BBA","AI"];
    // for(let i=0; i<depart_.length;i++){
    //   if(!depart_[i]){
    //     errors.push('This Department is not in our list.');
    //   }
    // }
    if (errors.length) {
      event.preventDefault();
      alert(errors.join("\n"));
    }
  
  }