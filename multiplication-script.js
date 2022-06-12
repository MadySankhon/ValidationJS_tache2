const form = document.getElementById('form');
const valeur1 = document.getElementById('Valeur1');
const valeur2 = document.getElementById('Valeur2');
const suit = document.getElementById('suite');
let erreur = document.getElementById('erreur');
suit.style.display = 'none';

form.addEventListener('submit', creerTableau, false)
function creerTableau(e) {
    e.preventDefault();
    let input1Value = valeur1.value;
    let input2Value = valeur2.value;
    let m = Number(input1Value), n = Number(input2Value);
    
    if (Number.isInteger(m) && Number.isInteger(n)){

        if((valeur1.value || valeur2.value) !== 0){
            erreur.innerHTML = 'Saississez des valeurs numeriques differentes de 0'
            setTimeout(() => {
                erreur.innerHTML = '';
                valeur1.value = '';
                valeur2.value = '';
            }, 2000)
        }

        else{
            let resultat;
            suit.style.display = 'block';

            let tableau = document.createElement("table"); //création du tableau
            tableau.className = 'table'; // Affecter un classe bootstrap
            let CorpsTableau = document.createElement("tbody"); //création de corps du tableau


            for(let i = 1; i <= m; i++){
                // resultat = input1Value * i;
                // alert("le resultat est :" + resultat);

                let ligne = document.createElement("tr"); // création des lignes

                for(let j = 1; j <= n; j++){
                    resultat = i * j; // calcul des resultats

                    let cell = document.createElement("td"); // creation de la cellule
                    let contenuCell = document.createTextNode(resultat);// Ajout du resultat de calcul
                    cell.appendChild(contenuCell);// ajout du contenu à la cellule
                    ligne.appendChild(cell); // ajout de la cellule à la ligne
                }
                tableau.appendChild(CorpsTableau);// ajout de tbody au tableau
                suit.appendChild(tableau);
            } 
        }  
    }
    else{
        erreur.innerHTML = 'Ajoutez des nombres ou chiffres'
        setTimeout(() => {
            erreur.innerHTML = '';
            valeur1.value = '';
            valeur2.value = '';
        }, 2000)
    }
}