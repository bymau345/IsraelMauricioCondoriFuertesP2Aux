const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };
    
  //1.Cree un array de jugadores para cada equipo (nombre a las variables como
  //  'players1' y 'players2')

  const players1=[game.players[0]]
  console.log(players1);
  const players2=[game.players[1]]
  console.log(players2);
       
 // 2. El primer jugador en cualquier conjunto de jugadores es el portero y los demás
//son jugadores de campo. Para el Bayern de Múnich (team 1) cree una variable
//'gk' con el nombre del portero y un array 'fieldPlayers' con los 10 restantes
//jugadores de campo



let [gk ,]=players1[0];
console.log(gk);
const [,...fieldPlayers]= players1[0];
console.log(fieldPlayers);

//3. Cree una matriz 'allPlayers' que contenga a todos los jugadores de ambos
//equipos (22 jugadores)

let allPlayers= [players1,players2];
console.log(allPlayers);

//4. Durante el partido, el Bayern de Múnich (team 1) utilizó 3 jugadores suplentes.
//Así que crea un nuevo array ('players1Final') que contiene todos los jugadores
//originales del equipo1 más 'Thiago', 'Coutinho' y 'Perisic'

const players1Final= [players1 , 'Thiago','Coutinho', 'Perisic' ]
console.log(players1Final);

//5. Basado en el objeto game.odds, cree una variable para cada cuota (llamada
//'team1', 'draw' y 'team2')

let team1= game.odds.team1;
let draw=game.odds.x ;
let team2=game.odds.team2  ;
console.log(team1);
console.log(draw);
console.log(team2);

//6. Cree una función ('printGoals') que reciba un número arbitrario de nombres de
//jugadores (no un array) e imprime cada uno de ellos en la consola, junto con el
//número de goles que marco cada uno (pasar como argumento solo nombres de
//jugadores que hayan marcado al menos un gol, revise los datos del objeto ‘game’
//para encontrar la información que le sirva)

function printGoals(){
  let [gk ,]=players1[0];
  console.log(players1);

}
printGoals();