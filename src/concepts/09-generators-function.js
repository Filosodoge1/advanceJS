
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = ( element ) => {
    
    console.log( 'demo component' );

}

function* funcionGeneradora() {
    yield 'Primer hola mundo';
    yield 'Segundo hola mundo';
    yield 'Tercer hola mundo';
    return 'Sin hola mundos';
}