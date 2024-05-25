
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = ( element ) => {
    
    console.log( 'promise race component' );

    const renderValue = ( value ) => {
        element.innerHTML = value;
    }

    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
        slowPromise(),
        slowPromise(),
        mediumPromise()
    ]).then( resultado => renderValue(resultado) );


}

const slowPromise = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            console.log('Slow Promise');
        }, 2000);
    });
}

const mediumPromise = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            console.log('Medium Promise');
        }, 1500);
    });
}

const fastPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Fast Promise');
        }, 1000);
    });
}