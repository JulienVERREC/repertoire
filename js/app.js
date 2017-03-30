  $(document).ready(function(){

    var annuaire = [];
   
   $("#register").click(function(){
    
      var personne = {
	       "prenom":"",
	       "nom":"",
	       "age":""
         };

    personne["prenom"] = $("#firstname").val();
    personne["nom"] = $("#name").val();
	  personne["age"] = $("#old").val();

    console.log(personne);
    console.log(annuaire);

    annuaire.push(personne);
    
    
    console.log(annuaire);

    $("input").val("");
    $("#infoUn").html(personne["prenom"]);
    $("#infoDeux").html(personne["nom"]);
    $("#infoTrois").html(personne["age"]);
});
});




