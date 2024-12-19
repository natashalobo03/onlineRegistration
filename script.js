$(document).ready(function() {
    $("#registrationForm").on("submit", function(event) {
      event.preventDefault();
      $.ajax({
        url: "process.php",
        type: "POST",
        data: $(this).serialize(),
        success: function(response) {
          $("#output").html(response);
        },
        error: function() {
          $("#output").html("An error occurred.");
        }
      });
    });
  });
  