// Type any

// Type string

// Type number

// Type boolean

// Type null et undefined

// Type Date

// Type Function

// Type array

//Typage d'une fonction

//Typage d'une fonction arrow

// Typage unknown

/** 
 * EXERCICE 1 : Ajoutez des typages aux fonctions suivantes
 **/

function checkAge(age) {
    return age < 18 ? "Vous êtes mineur(e).": "Vous êtes majeur(e).";
}

console.log(checkAge(20));

function greeting(name, salutation) {
    return `${salutation}, ${name}!`;
}

console.log(greeting("Alice", "Bonjour"));

function statusMessage(isActive) {
    return isActive ? "Actif" : "Inactif";
}

console.log(statusMessage(true));

function handleNullUndefined(value) {
    if (value === null) {
        return "Valeur est null";
    }

    if (value === undefined) {
        return "Valeur est undefined";
    }

    return "Valeur est définie";
}

console.log(handleNullUndefined(null));

/** 
 * EXERCICE 2 : Créez une fonction qui double les prix et qui ajoute €
 **/

const prices = [2, 4, 6]

const doublePrices = () => {}

console.log(doublePrices());
