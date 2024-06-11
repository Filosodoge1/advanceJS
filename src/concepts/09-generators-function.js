
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = ( element ) => {
    
    let Idscounter = IdsGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

    const renderButton = () => {
        const valorId = Idscounter.next();
        button.innerText = `Click ${ valorId.value }`;
    }

    button.addEventListener('click', (event) => renderButton(event));

}

function* IdsGenerator() {
    let counterId = 0;
    while (true) {
        yield ++counterId;
    }
}

function* funcionGeneradora() {
    yield 'Primer hola mundo';
    yield 'Segundo hola mundo';
    yield 'Tercer hola mundo';
    return 'Sin hola mundos';
}