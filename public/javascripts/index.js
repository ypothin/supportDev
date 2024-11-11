// je suis dans indes.js coté frontEnd (celui qui sera chargé par le nagivateur)

// fonction qui fait un appel à la route /weather
// afin de pouvoir afficher la météo
const afficherLaMeteo = function() {
    // je fais l'appel de ma route weather
    let appelerRouteWeather =  fetch('/weather')
        // je veux juste le retour sous forme de text
        // en faisant un response.text()
        .then(reponse => reponse.text())
        // ici j'ai juste le texte que je vais ajouter dans ma page,
        //(plus tard tu verras que l'on parle de DOM, c'est la structure de page qui s'affiche )
        .then(text => {
            // je récupére un element de la page c'est la div#meteo
            // qui se trouve dans la structure de page (DOM)
            // que tu peux trouver dans le fichier index.jade
            // c'est la page chargé par ton navigateur que l'utilisateur voit
            let divMeteo = document.getElementById("meteo")

            // je lui rajoute le text précédamment récupéré 
            divMeteo.innerHTML = text;
            
        })
}

// j'execute la fonction afficherLaMeteo()
afficherLaMeteo()



