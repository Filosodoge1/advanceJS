import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {
    
    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }

    const renderError = ( error ) => {
        element.innerHTML = `
            <h3>${ error }</h3>
        `;
    }

    const id = '5d86371f2343e37870b91ef12';

    findHero( id )
        .then(heroeRender => renderHero(heroeRender))
        .catch(heroeError => renderError(heroeError))

}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) =>{

    return new Promise( (resolve, reject) => {
        const hero = heroes.find( hero => hero.id === id);

        if (hero) {
            resolve(hero);
            return;
        }

        reject(`Heroe with id ${id} not found`);

    });

}