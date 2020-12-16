$(document).readfy(function () {

    $("#edit-player").on("submit", function(e){
        e.preventDefault();
        const email = $("#email").val();
        const password = $("#password").val();
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();

    $.ajax({
        method: "PUT",
        url: "/api/players",
        data: {
            email,
            password,
            firstName,
            lastName,
        },
    }).then(response => {
      window.location.replace("/players");
    });
    
  });
});