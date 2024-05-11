import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {
    
    console.log( 'callbacksComponent' );
    const id1 = `5d86371f1efebc31def272e2`;
    const id2 = `5d86371f2343e37870b91ef1`;

    findHero( id, (error, hero) => {

        if (error) {
            element.innerHTML = error;
            return;
        }

        element.innerHTML = hero.name;
    });

}

const findHero = ( id, callback) => {

    const hero = heroes.find( hero => hero.id === id);

    if (!hero) {
        callback(`Hero with id ${id} not found`);
        return;
    }

    callback(null, hero);

}