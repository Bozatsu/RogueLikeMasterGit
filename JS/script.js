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
/*
let row =new Array(31);
row[0] = "";
for (let i = 0; i < 20; i++){
    for(let j = 0; j < 30; j++){
        row[i] = row[i] + " | " + dungeon[i][j];
    }
    console.log(row[i]);
    row[i+1] = "";
    console.log("\n");
}
*/
for (let i = 0; i < 20; i++){
    for(let j = 0; j < 30; j++){
        dungeon[i][j] = document.getElementById(dungeon[i][j]);
    }
}

/*
//Mur Exterieur
for (let i = 0; i < 20; i++){
    if (i == 0 || i == 19){
        for (let j = 0; j < 30; j++){
            dungeon[i][j].style.backgroundColor = 'red';
            dungeon[i][j].style.backgroundColor = 'red';      
        }
    }
    else{
        for (let j = 0; j < 30; j++){
            if (j == 0 || j == 29){
                dungeon[i][j].style.backgroundColor = 'red';
                dungeon[i][j].style.backgroundColor = 'red'; 
            }     
        }
    }
}
*/

//Generation du sol
let pieceMonnaieCeil;
//let pieceMonnaieSol = 0;
for (let i = 0; i < 20; i++){
    for (let j = 0; j < 30; j++){

        pieceMonnaieCeil = Math.random();

        if (pieceMonnaieCeil < 0.5){
            dungeon[i][j].style.backgroundColor = 'red';
        }
        else{
            dungeon[i][j].style.backgroundColor = 'cyan';
        }

        

        if (i==0 || i==19 || j==0 || j==29){
            dungeon[i][j].style.backgroundColor = 'red';
        }
    }     
}
//Portes
dungeon[19][2].style.backgroundColor = 'blue';
dungeon[3][29].style.backgroundColor = 'blue';

//sols a partir des portes
dungeon[3][28].style.backgroundColor = 'cyan';
dungeon[18][2].style.backgroundColor = 'cyan';
for (let i=3; i<18;i++){
    pieceMonnaieCeil = Math.random();
    for (let j=2; j<29;j++){
        if (pieceMonnaieCeil<.5){
            dungeon[i+1][j].style.backgroundColor = 'cyan';
        }
        else{
            dungeon[i][j-1].style.backgroundColor = 'cyan';
        }
    }     
}
//Enlever l'excedent de sol
for (let i=3; i<17;i++){
    for (let j=2; j<25;j++){
        if (dungeon[i][j].style.backgroundColor =='cyan' && dungeon[i][j+1].style.backgroundColor =='cyan'  && dungeon[i][j+2].style.backgroundColor =='cyan'  && dungeon[i][j+3].style.backgroundColor =='cyan'  ){
            pieceMonnaieCeil = Math.random();
            if (pieceMonnaieCeil<.5){
                dungeon[i][j+2].style.backgroundColor = 'red';
            }            
        }
    }
}
let colonne =2;
for (let i=3; i<17;i++){
    for (let j=2; j<colonne;j++){
        if (dungeon[i][j].style.backgroundColor =='cyan' && dungeon[i+1][j].style.backgroundColor =='cyan'){
            if (j+1<29){
                colonne = j;
                break; 
            }
            else{
                break;
            }                       
        }
    }
}


