
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asynAwait2Component = async( element ) => {
    
    const renderValue = ( value1, value2, value3 ) => {
        element.innerHTML = `
            ${value1} <br/>
            ${value2} <br/>
            ${value3} <br/>
        `
    }

    const asyncPromise = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]);

    renderValue(asyncPromise[0], asyncPromise[1], asyncPromise[2]);
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