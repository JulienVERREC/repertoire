  $(document).ready(function(){

      var annuaire = [];
   
      var personne = {};

        var personne_json = JSON.stringify(personne);
        sessionStorage.setItem("objet",personne_json);

        var pesonne_json = sessionStorage.getItem("objet");
        var pesonne = JSON.parse(personne_json);
        console.log(personne);
        
        $("#register").click(function(){

            personne = {
            "prenom":  $("#firstname").val(),
            "nom":     $("#name").val(),
            "age":     $("#old").val(),
            };

      annuaire.push(personne);


        $("#ajout").html("");

            for ( var i =  0 ; i < annuaire.length ; i++) {
        
            var num = i + 1;

        $("#ajout").append('<tr><td>' + num + '</td><td>' +  annuaire[i].prenom  +  '</td><td>'  
          + annuaire[i].nom  +  '</td><td>'  +  annuaire[i].age  +  '</td></tr>');

        $("input").val("");
      
      };

//      console.log(annuaire);
//      console.log(personne);
  });



});

  

       


    



