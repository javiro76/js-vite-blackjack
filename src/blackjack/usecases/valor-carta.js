
/**
 * Función para separar el número de la letra de la carta
 * @param {String} carta Ejemplo: 2H
 * @returns {number} Ejemplo: 2
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
 

