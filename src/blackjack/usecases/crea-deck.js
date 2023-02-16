import _ from 'underscore';


//export  const miNombre = 'javier';

// Esta función crea un nuevo deck

/**
 * Esta función crea un nuevo Deck
 * @param {Array<String>} tiposDeCarta ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorno un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) 
    throw new Error('tiposDeCarta es obligatgorio como una arreglo de string');
    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) 
    throw new Error('tiposEspeciales es obligatgorio como una arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
}

//export default crearDeck;
