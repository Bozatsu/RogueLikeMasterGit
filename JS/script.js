
//Generation de la grille (On peut ameliorer cette partie avec une fonction)
let dungeon = [["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","A13","A14","A15","A16","A17","A18","A19","A20","A21","A22","A23","A24","A25","A26","A27","A28","A29","A30"],
["B1","B2","B3","B4","B5","B6","B7","B8","B9","B10","B11","B12","B13","B14","B15","B16","B17","B18","B19","B20","B21","B22","B23","B24","B25","B26","B27","B28","B29","B30"],
["C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","C13","C14","C15","C16","C17","C18","C19","C20","C21","C22","C23","C24","C25","C26","C27","C28","C29","C30"],
["D1","D2","D3","D4","D5","D6","D7","D8","D9","D10","D11","D12","D13","D14","D15","D16","D17","D18","D19","D20","D21","D22","D23","D24","D25","D26","D27","D28","D29","D30"],
["E1","E2","E3","E4","E5","E6","E7","E8","E9","E10","E11","E12","E13","E14","E15","E16","E17","E18","E19","E20","E21","E22","E23","E24","E25","E26","E27","E28","E29","E30"],
["F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","F13","F14","F15","F16","F17","F18","F19","F20","F21","F22","F23","F24","F25","F26","F27","F28","F29","F30"],
["G1","G2","G3","G4","G5","G6","G7","G8","G9","G10","G11","G12","G13","G14","G15","G16","G17","G18","G19","G20","G21","G22","G23","G24","G25","G26","G27","G28","G29","G30"],
["H1","H2","H3","H4","H5","H6","H7","H8","H9","H10","H11","H12","H13","H14","H15","H16","H17","H18","H19","H20","H21","H22","H23","H24","H25","H26","H27","H28","H29","H30"],
["I1","I2","I3","I4","I5","I6","I7","I8","I9","I10","I11","I12","I13","I14","I15","I16","I17","I18","I19","I20","I21","I22","I23","I24","I25","I26","I27","I28","I29","I30"],
["J1","J2","J3","J4","J5","J6","J7","J8","J9","J10","J11","J12","J13","J14","J15","J16","J17","J18","J19","J20","J21","J22","J23","J24","J25","J26","J27","J28","J29","J30"],
["K1","K2","K3","K4","K5","K6","K7","K8","K9","K10","K11","K12","K13","K14","K15","K16","K17","K18","K19","K20","K21","K22","K23","K24","K25","K26","K27","K28","K29","K30"],
["L1","L2","L3","L4","L5","L6","L7","L8","L9","L10","L11","L12","L13","L14","L15","L16","L17","L18","L19","L20","L21","L22","L23","L24","L25","L26","L27","L28","L29","L30"],
["M1","M2","M3","M4","M5","M6","M7","M8","M9","M10","M11","M12","M13","M14","M15","M16","M17","M18","M19","M20","M21","M22","M23","M24","M25","M26","M27","M28","M29","M30"],
["N1","N2","N3","N4","N5","N6","N7","N8","N9","N10","N11","N12","N13","N14","N15","N16","N17","N18","N19","N20","N21","N22","N23","N24","N25","N26","N27","N28","N29","N30"],
["O1","O2","O3","O4","O5","O6","O7","O8","O9","O10","O11","O12","O13","O14","O15","O16","O17","O18","O19","O20","O21","O22","O23","O24","O25","O26","O27","O28","O29","O30"],
["P1","P2","P3","P4","P5","P6","P7","P8","P9","P10","P11","P12","P13","P14","P15","P16","P17","P18","P19","P20","P21","P22","P23","P24","P25","P26","P27","P28","P29","P30"],
["Q1","Q2","Q3","Q4","Q5","Q6","Q7","Q8","Q9","Q10","Q11","Q12","Q13","Q14","Q15","Q16","Q17","Q18","Q19","Q20","Q21","Q22","Q23","Q24","Q25","Q26","Q27","Q28","Q29","Q30"],
["R1","R2","R3","R4","R5","R6","R7","R8","R9","R10","R11","R12","R13","R14","R15","R16","R17","R18","R19","R20","R21","R22","R23","R24","R25","R26","R27","R28","R29","R30"],
["S1","S2","S3","S4","S5","S6","S7","S8","S9","S10","S11","S12","S13","S14","S15","S16","S17","S18","S19","S20","S21","S22","S23","S24","S25","S26","S27","S28","S29","S30"],
["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12","T13","T14","T15","T16","T17","T18","T19","T20","T21","T22","T23","T24","T25","T26","T27","T28","T29","T30"]];

for (let i = 0; i < 20; i++){ //20 lignes
    for(let j = 0; j < 30; j++){ //30 colonnes
        dungeon[i][j] = document.getElementById(dungeon[i][j]);
        dungeon[i][j].style.backgroundColor = 'red'; //Mur
        dungeon[i][j].style.backgroundImage = "url('./img/brick.jpg')";
        dungeon[i][j].style.backgroundSize = "cover";
    }
}
//Jeu
main();

//Fonctionnalite Reinitialisation
let reininitialisation = document.getElementById('init');
reininitialisation.addEventListener('click', reinitialisationJeu);

function reinitialisationJeu(){
    window.location.reload(true);
}

function main(){

    let joueur = false;
    let monstre1Bool = false;
    let monstre2Bool = false;

    //Generation aleatoire du sol;
    let nombreCellules = 0;
    let ligne = [0]; //Tableau des lignes
    let debutSol = [0]; //Tableau des indices de debut du sol (repere par l'index de la ligne)
    let finSol = [0]; //Tableau des indices de fin de sol (repere par l'index de la ligne)
    let nbreCellules = [0]; //Tableau des nombres de cellules sol par ligne (repere par l'index de la ligne)

    for (let i=1; i<19; i++){
        nombreCellules = Math.ceil(Math.random()*26); //Determination du nombre de cellules sol par ligne

        let debutJ = Math.ceil((28-nombreCellules)/2);
        let finJ = 29 - debutJ;

        for (let j = debutJ; j<=finJ; j++){
            dungeon[i][j].style.backgroundColor = "#968398";
            dungeon[i][j].style.backgroundImage = "";
        }
        //Actualisation des tableaux des indices
        ligne.push(i); 
        debutSol.push(debutJ); 
        finSol.push(finJ); 
        nbreCellules.push(nombreCellules); 
    }
    ligne.push(19); 
    debutSol.push(0); 
    finSol.push(0); 
    nbreCellules.push(0); 

    //Initialisation du Joueur/Warrior
    let warrior = dungeon[18][14]; //Le joueur apparaitra toujours a cette position au depart
    //warrior.style.backgroundColor = '';
    warrior.style.backgroundImage = "url(../img/ryu.gif)";
    warrior.style.backgroundSize = "cover";
    //Parametres qui permettent de suivre le joueur
    let warriorI = 18; 
    let warriorJ = 14;
    //warrior.style.backgroundColor = 'green';

    //Creation aleatoire des monstres
    let element, elementI, elementJ; //elementI et elementJ sont les indices de position des monstres et tresors (elements)
    function monstresTresors(){
        let hasardLigne
        do{
            hasardLigne = Math.ceil(Math.random()*18);
        } while (hasardLigne<1 || hasardLigne>18)
        let hasardColonne = Math.ceil(Math.random()*nbreCellules[hasardLigne]);
        element = dungeon[hasardLigne][debutSol[hasardLigne]+hasardColonne];
        elementI = hasardLigne;
        elementJ = debutSol[hasardLigne]+hasardColonne;
        return element;
    }
    //Creation des monstres
    //Monstre 1
    let monstre1, monstre1I, monstre1J;
    do{
        monstre1 = monstresTresors();
        monstre1I = elementI; //Tracking de la position du monstre 1 en horizontal : i
        monstre1J = elementJ; //Tracking de la position du monstre 1 a la verticale : j
    }while(monstre1I == 18 && monstre1J == 14); //Verification que la position du monstre 1 != position initiale du joueur

    //Monstre 2
    let monstre2, monstre2I, monstre2J;
    do{
        monstre2 = monstresTresors();
        monstre2I = elementI;
        monstre2J = elementJ;
    }while((monstre2I == 18 && monstre2J == 14) || (monstre2I == monstre1I && monstre2J == monstre1J)); //Verification que monstre 2 != monstre 1 ou du joueur

    monstre1.style.backgroundImage = "url(../img/monster.gif)";
    monstre1.style.backgroundSize = "cover";
    //monstre1.style.backgroundColor = 'purple';
    monstre2.style.backgroundImage = "url(../img/monster.gif)";
    monstre2.style.backgroundSize = "cover";
    //monstre2.style.backgroundColor = 'purple';

    //Creation des tresors
    //Tresor 1
    let tresor1, tresor1I, tresor1J;
    do{
        tresor1 = monstresTresors();
        tresor1I = elementI;
        tresor1J = elementJ;
    }while((tresor1I == 18 && tresor1J == 14)||(tresor1I == monstre1I && tresor1J == monstre1J) || (tresor1I == monstre2I && tresor1J == monstre2J)) //Verification que la position du tresor 1 != position des monstres 1 et 2 ou du joueur
    //Tresor 2
    let tresor2, tresor2I, tresor2J;
    do{
        tresor2 = monstresTresors();
        tresor2I = elementI;
        tresor2J = elementJ;
    }while((tresor2I == 18 && tresor2J == 14)||(tresor2I == monstre1I && tresor2J == monstre1J) || (tresor2I == monstre2I && tresor2J == monstre2J) || (tresor2I == tresor1I && tresor2J == tresor1J))//Verification que la position du tresor 2 != position des monstres 1 et 2 ou du tresor 1 ou du joueur

    tresor1.style.backgroundImage = "url('../img/treasure.gif')";
    tresor1.style.backgroundSize = "cover";
    //tresor1.style.backgroundColor = 'gold';
    tresor2.style.backgroundImage = "url('../img/treasure.gif')";
    //tresor2.style.backgroundColor = 'gold';
    tresor2.style.backgroundSize = "cover";

    //Mouvement du Joueur/Warrior
    //let compteur = 0; nombre de movements pour etablir des records
    let scorespan = document.getElementById('score');
    let nbreTresorsRestants = document.getElementById('nbreTresors');
    scorespan = 0;
    nbreTresorsRestants = 2;
    score.textContent = scorespan.toString(); //Ca marche avec les ID
    nbreTresors.textContent = nbreTresorsRestants.toString();

    function up(){
        //Verification de la cellule de destination
        if(warriorJ>=debutSol[warriorI-1] && warriorJ<=finSol[warriorI-1] && (warriorI-1)>=0){
            warrior = dungeon[warriorI-1][warriorJ];
            warrior.style.backgroundImage = "url(../img/ryu.gif)";
             warrior.style.backgroundSize = "cover";
            //warrior.style.backgroundColor = 'green';
            dungeon[warriorI][warriorJ].style.backgroundColor = '#968398';
            dungeon[warriorI][warriorJ].style.backgroundImage = '';
            warriorI -= 1;
            MoveMonstre();
            MoveMonstre2();

            //Collision avec un monstre
            if((warriorI==monstre1I && warriorJ==monstre1J)||(warriorI==monstre2I && warriorJ==monstre2J)){
                geler();
                prompt("Game Over");
                return;
            }
            //Recuperation du premier tresor
            else if(warriorI == tresor1I && warriorJ == tresor1J){
                scorespan += 1;
                score.textContent = scorespan.toString(); 
                tresor1I = 0; // changement de la position du tresor trouve en (0,0) pour eviter un score errone quand le joueur passe par cette meme position encore une fois
                tresor1J = 0;
                nbreTresorsRestants -= 1;
                nbreTresors.textContent = nbreTresorsRestants.toString();
            }
            //Recuperation du deuxieme tresor
            else if(warriorI == tresor2I && warriorJ == tresor2J){
                scorespan += 1;
                score.textContent = scorespan.toString(); 
                tresor2I = 0;
                tresor2J = 0;
                nbreTresorsRestants -= 1;
                nbreTresors.textContent = nbreTresorsRestants.toString();
            }
            //Collision dans un mur
            else{
            return;
            }
        }   
        win(); 
    }
    function down(){
        if(warriorJ>=debutSol[warriorI+1] && warriorJ<=finSol[warriorI+1] && warriorI+1<=19){
            warrior = dungeon[warriorI+1][warriorJ];
            warrior.style.backgroundImage = "url(../img/ryu.gif)";
            warrior.style.backgroundSize = "cover";
            //warrior.style.backgroundColor = 'green';
            dungeon[warriorI][warriorJ].style.backgroundColor = '#968398';
            dungeon[warriorI][warriorJ].style.backgroundImage = '';
            warriorI += 1;
            MoveMonstre();
            MoveMonstre2();
            //Collision avec un monstre
            if((warriorI==monstre1I && warriorJ==monstre1J)||(warriorI==monstre2I && warriorJ==monstre2J)){
                geler();
                prompt("Game Over");
                return;
            }
            //Recuperation du premier tresor
            else if(warriorI == tresor1I && warriorJ == tresor1J){
                scorespan += 1;
                score.textContent = scorespan.toString(); 
                tresor1I = 0;
                tresor1J = 0;
                nbreTresorsRestants -= 1;
                nbreTresors.textContent = nbreTresorsRestants.toString();
            }
            //Recuperation du deuxieme tresor
            else if(warriorI == tresor2I && warriorJ == tresor2J){
                scorespan += 1;
                score.textContent = scorespan.toString(); 
                tresor2I = 0;
                tresor2J = 0;
                nbreTresorsRestants -= 1;
                nbreTresors.textContent = nbreTresorsRestants.toString();
            }
            //Collision dans un mur
            else{
            return;
            }
        }    
        win(); 
    }
    function right(){
        if(warriorJ+1>=debutSol[warriorI] && warriorJ+1<=finSol[warriorI] && warriorJ+1<=29){
            warrior = dungeon[warriorI][warriorJ+1];
            warrior.style.backgroundImage = "url(../img/ryu.gif)";
             warrior.style.backgroundSize = "cover";
            //warrior.style.backgroundColor = 'green';
            dungeon[warriorI][warriorJ].style.backgroundColor = '#968398';
            dungeon[warriorI][warriorJ].style.backgroundImage = '';
            warriorJ += 1;
            MoveMonstre();
            MoveMonstre2();
            //Collision avec un monstre
            if((warriorI==monstre1I && warriorJ==monstre1J)||(warriorI==monstre2I && warriorJ==monstre2J)){
                geler();
                prompt("Game Over");
                return;
            }
            //Recuperation du premier tresor
            else if(warriorI == tresor1I && warriorJ == tresor1J){
                scorespan += 1;
                score.textContent = scorespan.toString(); 
                tresor1I = 0;
                tresor1J = 0;
                nbreTresorsRestants -= 1;
                nbreTresors.textContent = nbreTresorsRestants.toString();
            }
            //Recuperation du deuxieme tresor
            else if(warriorI == tresor2I && warriorJ == tresor2J){
                scorespan += 1;
                score.textContent = scorespan.toString(); 
                tresor2I = 0;
                tresor2J = 0;
                nbreTresorsRestants -= 1;
                nbreTresors.textContent = nbreTresorsRestants.toString();
            }
            //Collision dans un mur
            else{
            return;
            }
        }   
        win(); 
    }
    function left(){
        if(warriorJ-1>=debutSol[warriorI] && warriorJ-1<=finSol[warriorI] && warriorJ-1>=0){
            warrior = dungeon[warriorI][warriorJ-1];
            warrior.style.backgroundImage = "url(../img/ryu.gif)";
             warrior.style.backgroundSize = "cover";
            //warrior.style.backgroundColor = 'green';
            dungeon[warriorI][warriorJ].style.backgroundColor = '#968398';
            dungeon[warriorI][warriorJ].style.backgroundImage = '';
            warriorJ -= 1;
            MoveMonstre();
            MoveMonstre2();
            //Collision avec un monstre
            if((warriorI==monstre1I && warriorJ==monstre1J)||(warriorI==monstre2I && warriorJ==monstre2J)){
                geler();
                prompt("Game Over");
                return;
            }
            //Recuperation du premier tresor
            else if(warriorI == tresor1I && warriorJ == tresor1J){
                scorespan += 1;
                score.textContent = scorespan.toString();
                tresor1I = 0;
                tresor1J = 0;
                nbreTresorsRestants -= 1;
                nbreTresors.textContent = nbreTresorsRestants.toString();
            }
            //Recuperation du deuxieme tresor
            else if(warriorI == tresor2I && warriorJ == tresor2J){
                scorespan += 1;
                score.textContent = scorespan.toString(); 
                tresor2I = 0;
                tresor2J = 0;
                nbreTresorsRestants -= 1;
                nbreTresors.textContent = nbreTresorsRestants.toString();
            }
            //Collision dans un mur
            else{
            return;
            }
        }   
        win(); 
    }
    let boutonHaut = document.getElementById('up');
    let haut = up;
    boutonHaut.addEventListener("click", haut);

    let boutonBas = document.getElementById('down');
    let bas = down;
    boutonBas.addEventListener("click", bas);

    let boutonDroit = document.getElementById('right');
    let droit = right;
    boutonDroit.addEventListener("click", droit);

    let boutonGauche = document.getElementById('left');
    let gauche = left;
    boutonGauche.addEventListener("click", gauche);

    //Generation des movements des monstres
    function MoveMonstre(){
        let moveRandom;
        do{
            moveRandom = Math.random();
            if(moveRandom<.25){
                //Vers le haut
                if(monstre1J>=debutSol[monstre1I-1] && monstre1J<=finSol[monstre1I-1] && monstre1I-1>=0){//Verification que le monstre bouge sur le sol
                    if(!(monstre1I-1==tresor1I && monstre1J==tresor1J) &&!(monstre1I-1==tresor2I && monstre1J==tresor2J)){//Verification que les monstres n'entrent pas en collision avec les tresors
                        monstre1 = dungeon[monstre1I-1][monstre1J];
                        monstre1.style.backgroundImage = "url(../img/monster.gif)";
                        monstre1.style.backgroundSize = "cover";
                        //monstre1.style.backgroundColor = 'purple';
                        dungeon[monstre1I][monstre1J].style.backgroundColor = '#968398';
                        dungeon[monstre1I][monstre1J].style.backgroundImage = '';
                        monstre1I -= 1;
                    }                    
                }
                else{
                    return;
                }
            }
            else if(moveRandom<.5){
                //Vers le bas
                if(monstre1J>=debutSol[monstre1I+1] && monstre1J<=finSol[monstre1I+1] && monstre1I+1<=20){
                    if(!(monstre1I+1==tresor1I && monstre1J==tresor1J) &&!(monstre1I+1==tresor2I && monstre1J==tresor2J)){
                        monstre1 = dungeon[monstre1I+1][monstre1J];
                        monstre1.style.backgroundImage = "url(../img/monster.gif)";
                        monstre1.style.backgroundSize = "cover";
                        //monstre1.style.backgroundColor = 'purple';
                        dungeon[monstre1I][monstre1J].style.backgroundColor = '#968398';
                        dungeon[monstre1I][monstre1J].style.backgroundImage = '';
                        monstre1I += 1;
                    }
                }
                else{
                    return;
                } 
            }
            else if(moveRandom<.75){
                //Vers la droite
                if(monstre1J+1>=debutSol[monstre1I] && monstre1J+1<=finSol[monstre1I] && monstre1J+1<=30){
                    if(!(monstre1I==tresor1I && monstre1J+1==tresor1J) &&!(monstre1I==tresor2I && monstre1J+1==tresor2J)){
                        monstre1 = dungeon[monstre1I][monstre1J+1];
                        monstre1.style.backgroundImage = "url(../img/monster.gif)";
                        monstre1.style.backgroundSize = "cover";
                        //monstre1.style.backgroundColor = 'purple';
                        dungeon[monstre1I][monstre1J].style.backgroundColor = '#968398';
                        dungeon[monstre1I][monstre1J].style.backgroundImage = '';
                        monstre1J += 1;
                    }
                }
                else{
                    return;
                } 
            }
            else{
                //Vers la gauche
                if(monstre1J-1>=debutSol[monstre1I] && monstre1J-1<=finSol[monstre1I] && monstre1J-1>=0){
                    if(!(monstre1I==tresor1I && monstre1J-1==tresor1J) &&!(monstre1I==tresor2I && monstre1J-1==tresor2J)){
                        monstre1 = dungeon[monstre1I][monstre1J-1];
                        monstre1.style.backgroundImage = "url(../img/monster.gif)";
                        monstre1.style.backgroundSize = "cover";
                        //monstre1.style.backgroundColor = 'purple';
                        dungeon[monstre1I][monstre1J].style.backgroundColor = '#968398';
                        dungeon[monstre1I][monstre1J].style.backgroundImage = '';
                        monstre1J -= 1;
                    }
                }
                else{
                    return;
                } 
            }
        }while((monstre1I==tresor1I && monstre1J==tresor1J) || (monstre1I==tresor2I && monstre1J==tresor2J)) 
    }

    function MoveMonstre2(){
        let moveRandom;
        do{
            moveRandom = Math.random();
            if(moveRandom<.25){
                //Vers le haut
                if(monstre2J>=debutSol[monstre2I-1] && monstre2J<=finSol[monstre2I-1] && monstre2I-1>=0){
                    if(!(monstre2I-1==tresor1I && monstre2J==tresor1J) &&!(monstre2I-1==tresor2I && monstre2J==tresor2J)){
                        monstre2 = dungeon[monstre2I-1][monstre2J];
                        monstre2.style.backgroundImage = "url(../img/monster.gif)";
                        monstre2.style.backgroundSize = "cover";
                        //monstre2.style.backgroundColor = 'purple';
                        dungeon[monstre2I][monstre2J].style.backgroundColor = '#968398';
                        dungeon[monstre2I][monstre2J].style.backgroundImage = '';
                        monstre2I -= 1;
                    }
                }
                else{
                    return;
                }
            }
            else if(moveRandom<.5){
                //Vers le bas
                if(monstre2J>=debutSol[monstre2I+1] && monstre2J<=finSol[monstre2I+1] && monstre2I+1<=20){
                    if(!(monstre2I+1==tresor1I && monstre2J==tresor1J) &&!(monstre2I+1==tresor2I && monstre2J==tresor2J)){
                        monstre2 = dungeon[monstre2I+1][monstre2J];
                        monstre2.style.backgroundImage = "url(../img/monster.gif)";
                        monstre2.style.backgroundSize = "cover";
                        //monstre2.style.backgroundColor = 'purple';
                        dungeon[monstre2I][monstre2J].style.backgroundColor = '#968398';
                        dungeon[monstre2I][monstre2J].style.backgroundImage = '';
                        monstre2I += 1;
                    }
                }
                else{
                    return;
                } 
            }
            else if(moveRandom<.75){
                //Vers la droite
                if(monstre2J+1>=debutSol[monstre2I] && monstre2J+1<=finSol[monstre2I] && monstre2J+1<=30){
                    if(!(monstre2I==tresor1I && monstre2J+1==tresor1J) &&!(monstre2I==tresor2I && monstre2J+1==tresor2J)){
                        monstre2 = dungeon[monstre2I][monstre2J+1];
                        monstre2.style.backgroundImage = "url(../img/monster.gif)";
                        monstre2.style.backgroundSize = "cover";
                        //monstre2.style.backgroundColor = 'purple';
                        dungeon[monstre2I][monstre2J].style.backgroundColor = '#968398';
                        dungeon[monstre2I][monstre2J].style.backgroundImage = '';
                        monstre2J += 1;
                    }
                }
                else{
                    return;
                } 
            }
            else{
                //Vers la gauche
                if(monstre2J-1>=debutSol[monstre2I] && monstre2J-1<=finSol[monstre2I] && monstre2J-1>=0){
                    if(!(monstre2I==tresor1I && monstre2J-1==tresor1J) &&!(monstre2I==tresor2I && monstre2J-1==tresor2J)){//Verification que le monstre ne rentre pas dans un tresor
                        monstre2 = dungeon[monstre2I][monstre2J-1];
                        monstre2.style.backgroundImage = "url(../img/monster.gif)";
                        monstre2.style.backgroundSize = "cover";
                        //monstre2.style.backgroundColor = 'purple';
                        dungeon[monstre2I][monstre2J].style.backgroundColor = '#968398';
                        dungeon[monstre2I][monstre2J].style.backgroundImage = '';
                        monstre2J -= 1;
                    }
                }
                else{
                    return;
                } 
            }
        }while((monstre2I==tresor1I && monstre2J==tresor1J) || (monstre2I==tresor2I && monstre2J==tresor2J))
    }

    //GAME OVER
    function geler(){
        boutonHaut.removeEventListener("click", haut);
        boutonBas.removeEventListener("click", bas);
        boutonDroit.removeEventListener("click", droit);
        boutonGauche.removeEventListener("click", gauche);
    }

    //WIN
    function win(){
        if (scorespan == 2){
            geler(); //Ne fonctionne pas
            let alerte = document.getElementById("alerte");
            alerte.style.display = "flex";
            alerte.style.flexDirection = "column"
            let btn = document.getElementById("recommencer");
            btn.addEventListener("click", reinitialisationJeu);
            let imgX = document.getElementById("X");
            //let imgXdisp = displayNone();
            imgX.addEventListener("click", displayNone);
            // window.alert ("You Won!");
            return;
        }
    }
    function displayNone()
    {
        alerte.style.display = "none";
    }
}

//Fonctionnalite : Jouer avec le clavier
//Jouer avec l'affichage
