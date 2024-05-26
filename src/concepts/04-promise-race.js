
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
            resolve('Slow Promise');
        }, 2000);
    });
}

const mediumPromise = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve('Medium Promise');
        }, 1500);
    });
}

const fastPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Fast Promise');
        }, 1000);
    });
}