import { heroes } from "../data/heroes";
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asynGeneratorsFunction = async( element ) => {
    
    const HeroGenerator = getHeroesGenerator();
    let isFinished = false;

    do {
        const { value, done } = await HeroGenerator.next();
        isFinished = done;

        if (isFinished) {
            break;    
        }
        // element.innerHTML = (await HeroGenerator.next()).value;
        element.innerHTML = value;
    // } while ( !(await HeroGenerator.next()).done )
    } while (!isFinished);

}


async function* getHeroesGenerator() {
        
    for (const hero of heroes) {
        await sleep();
        yield hero.name;
        
    }
}

/**
 * 
 * @returns {Promise}
 */
const sleep = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);    
    })    
}