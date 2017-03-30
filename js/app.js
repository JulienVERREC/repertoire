  $(document).ready(function(){

   $("#register").click(function(){
    
    var annuaire = [];

    var personne = {
	   "prenom":"",
	   "nom":"",
	   "age":""
       };

    personne["prenom"] = $("#firstname").val();
    personne["nom"] = $("#name").val();
	personne["age"] = $("#old").val();

	annuaire.push(personne);
	console.log(personne);
	console.log(annuaire);

    $("#infoUn").html(personne["prenom"]);
    $("#infoDeux").html(personne["nom"]);
    $("#infoTrois").html(personne["age"]);
});
});


