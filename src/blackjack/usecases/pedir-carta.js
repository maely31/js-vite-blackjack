  /**
   * 
   * @param {array<string>} deck 
   * @returns {string} returna una carta del deck
   */
  export const pedirCarta = (deck) =>{        
            if (deck.length === 0 ){
                throw 'NO HAY CARTAS EN EL DECK'
            }      
            return deck.pop(); 
        }

        