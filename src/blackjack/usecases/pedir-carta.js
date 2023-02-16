

/**
 * Esta función me da una carta del deck creado
 * @param {Array<String>} deck Recibe el arreglo de las cartas ejemplo: [2C,2D,3H]
 * @returns {String} me retorna la última carta ejemplo: 3H
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}

