 
 import _ from 'underscore';

  /**
   * Esta funcion crea un nuevo deck
   * @param {array<String>} tiposCarta 
   * @param {array<String>} tipoespeciales 
   * @returns {array<String>}
   */
 export const crearDeck = (tiposCarta, tipoespeciales) => {


    if ( !tiposCarta ) throw new Error('Tipo de Carta es obligatorio');

            let deck = [];
            for(let i = 2; i <= 10;i++){
                for (let j in tiposCarta){
                    deck.push(i + tiposCarta[j]);
                }        
            }
        //para las cartas especiales
            for (let tipo of tiposCarta){
                for (let esp of tipoespeciales){
                    deck.push(esp + tipo);
                }
            }  
            //libreria que permite rotar los valores del arreglo.
            return _.shuffle(deck);                   
        }       
