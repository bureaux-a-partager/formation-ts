function primitives_correction () {
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
