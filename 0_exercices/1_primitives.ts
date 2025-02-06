/** TYPE ANY */
  
/** TYPE STRING */
  
/** TYPE NUMBER */
  
/** TYPE BOOLEAN */
  
/** TYPE NULL ET UNDEFINED */
  
/** TYPE DATE */
  
/** TYPE FUNCTION */
  
/** TYPE ARRAY */
  
/** TYPAGE D'UNE FONCTION */
  
/** TYPAGE D'UNE FONCTION ARROW */
  
/** TYPE UNKNOWN */

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
 **/

const prices = [2, 4, 6.5]
