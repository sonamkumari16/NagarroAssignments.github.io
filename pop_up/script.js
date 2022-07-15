$(document).ready(() => {

    var toggle=false;

    $('.clicks').on('click',function(){
           
         if(toggle==false)
          {
            $('#box').addClass('show');
            toggle=true;
          }
          else if(toggle==true)
          {
            $('#box').removeClass('show');
            toggle=false;
          } 
    });
    $('.cancel').on('click', function(){
                 $('#box').removeClass('show');
            });
    $("#username-validation").hide();
    $("#password-validation").hide();
  
    let usernameError = true;
    let emailError = true;
    
  
    //USERNAME
    $("#username").keyup(() => {
      usernameValidation();
    });
  
    const usernameValidation = () => {
      let usernameValue = $("#username").val();
      const usernameRegex = new RegExp(/^[a-z0-9_-]{3,10}$/gim);
      if (usernameValue.length === 0) {
        $("#username-validation").show();
        $("#username-validation").text("Username can't be empty");
        usernameError = true;
      } else if (!usernameRegex.test(usernameValue)) {
        $("#username-validation").show();
        $("#username-validation").text("Invalid Username");
        usernameError = true;
      } else {
        $("#username-validation").hide();
        usernameError = false;
      }
    };
  
    //EMAIL
    $("#email").keyup(() => {
      emailValidation();
    });
  
    const emailValidation = () => {
      let emailValue = $("#email").val();
      const emailRegex = new RegExp(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      );
      if (emailValue.length === 0) {
        $("#email-validation").show();
        $("#email-validation").text("Email id can't be empty");
        emailError = true;
      } else if (!emailRegex.test(emailValue)) {
        $("#email-validation").show();
        $("#email-validation").text("Invalid Email id");
        emailError = true;
      } else {
        $("#email-validation").hide();
        emailError = false;
      }
    };
  
    //SUBMIT
    $(".mybtn").click(() => {
      usernameValidation();
      emailValidation();
      if (usernameError || emailError ) {
        return false;
      }else{
         $('#box').removeClass('show');
      }
    });
  });