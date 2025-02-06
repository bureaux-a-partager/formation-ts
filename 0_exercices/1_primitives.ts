/** 
 * EXERCICE 1 : Ajoutez des typages aux fonctions suivantes
 **/

function checkAge(age) {
    return age < 18 ? "Vous êtes mineur(e).": "Vous êtes majeur(e).";
}

function greeting(name, salutation) {
    return `${salutation}, ${name}!`;
}

function statusMessage(isActive) {
    return isActive ? "Actif" : "Inactif";
}

function handleNullUndefined(value) {
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
 * ex. [1, 2] doit donner ['1 €', '2 €']
 **/

const prices = [2, 4, 6.5]
