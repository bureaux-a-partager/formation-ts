function primitives_correction () {
/** TYPE ANY */
let anything: any;

/** TYPE STRING et INFERENCE */
const message: string = "Hello Ubiq !!";
const message2 = <string>"Hello Ubiq !!";

/** TYPE NUMBER */
const counter: number = 2; // "2" n'est pas accepté

/** TYPE BOOLEAN */
const flag: boolean = true; // 0 ou 1 n'est pas accepté

/** TYPE NULL ET UNDEFINED */
let varUndefined: undefined = undefined;
let varNull: null = null;

/** TYPE DATE */
let date: Date;

/** TYPE FUNCTION */
let myEmptyFunction: Function = () => {};

/** TYPE ARRAY */
const values: number[] = [12, 23, 20];

/** TYPAGE D'UNE FONCTION */
function func(param: number, optional?: string): boolean {
    console.log(param, optional);
    return true;
}

/** TYPAGE D'UNE FONCTION ARROW */
const arrowFunc = (active: boolean = true): number => {
    console.log(active);
    return 1;
};

// Typage unknown

/** 
 * EXERCICE 1 : Ajoutez des typages aux fonctions suivantes
 **/

function checkAge(age: number): string {
    return age < 18 ? "Vous êtes mineur(e).": "Vous êtes majeur(e).";
}

function greeting(name: string, salutation: string): string {
    return `${salutation}, ${name}!`;
}

function statusMessage(isActive: boolean): string {
    return isActive ? "Actif" : "Inactif";
}

function handleNullUndefined(value: null | undefined): string {
    if (value === null) {
        return "Valeur est null";
    }

    if (value === undefined) {
        return "Valeur est undefined";
    }

    return "Valeur est définie";
}

/** 
 * EXERCICE 2 : Créez une fonction qui double les prix et qui ajoute €
 **/

const prices: number[] = [2, 4, 6.50]

const doublePrices = (prices: number[]): string[] =>
    prices.map((price: number) => `${price} €`)

console.log(doublePrices(prices));

}
