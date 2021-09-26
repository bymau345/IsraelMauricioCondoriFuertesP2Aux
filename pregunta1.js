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

let p1 =(printGoals(game.scored));

function printGoals(...ns) {


    let a= [...ns[0]];
    console.log(a);
    let result= { }; 
        for(let i = 0; i < a.length; ++i) 
        { 
            if(!result[a[i]])

                result[a[i]] = 0; 
                ++result[a[i]]; 

        }
        console.log(result);

}


    //7. Es más probable que gane el equipo con la cuota más baja. Imprima en la consola que equipo es más 
    //probable que gane, sin usar una declaración if/else o el operador ternario.

    let finalj = [
      {
          nombre_equipo1: game.team1, cuota: game.odds.team1

      },
      {
          nombre_equipo2: game.team2, cuota: game.odds.team2

      }
  ]
  let cuotamasbaja = Math.min(finalj[0].cuota, finalj[1].cuota);
  let equipow  = finalj.filter(finalj => finalj.cuota == cuotamasbaja);
  console.log(equipow);


  //8. Use un bucle para poder calcular la cuota (odd) promedio y mostrarlo en la 
//consola

let sum= 0;
let con = 0;
for (let i in game.odds){
  sum = sum + game.odds[i];
  con++;
}
let prom=sum/con;
console.log(prom);