
import $ from "jquery";

    function reset() {
      document.getElementById('form').reset();
    }


    function downlaod() {
      myJson = {
    Fullname: $("#form").find("#name").val(),
    Country: $("#form").find("#country").val(),
    City: $("#form").find("#city").val(),
    Role: $("#form").find("#role").val(),
    Sales: $("#form").find("#sales").val(),
  };

  console.log("myJson", myJson);
  }
