        var annuaire = [];

//fonction restaurer sauvegarder
      function sauvegarder(){
        localStorage.setItem('annuaire' , JSON.stringify(annuaire));
      }

      function restaurer(){
        var a = localStorage.getItem('annuaire');

        if ( a != null ){
            annuaire = JSON.parse( a );
            }

        console.log( annuaire );
        }
      
  $(document).ready(function(){

        restaurer();



   
        var personne = {};

        $("#register").click(function(){

            personne = {
            "prenom":  $("#firstname").val(),
            "nom":     $("#name").val(),
            "age":     $("#old").val(),
            };

        annuaire.push(personne);
        sauvegarder();

        $("#ajout").html("");

            for ( var i =  0 ; i < annuaire.length ; i++) {
        
        var num = i + 1;

        $("#ajout").append('<tr><td>' + num + '</td><td>' +  annuaire[i].prenom  +  '</td><td>'  
          + annuaire[i].nom  +  '</td><td>'  +  annuaire[i].age  +  '</td></tr>');

        $("input").val("");

      
      };


  });


});


  
  

       


    



