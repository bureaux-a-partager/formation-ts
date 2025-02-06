/** ENUM **/

/** TUPLES **/

/** TYPE **/
// On va l'utiliser principalement pour définir des alias

// Un type reste fermé et ne peut donc pas être surchargé

// Pour le surcharger il faut redéfinir un autre type l'opérateur &

/** INTERFACE **/
// On ne peut pas définir d'alias avec les interfaces

// Les interfaces restent ouvert, c'est à dire qu'il est possible de surcharger une interface ou de l'étendre

// Mot clé extends


/** 
 * EXERCICE : 
 *  Créez un type Pet qui a pour propriété :
 *  - name (string)
 *  - age (number) facultatif
 *  - species ("dog" ou "cat" ou "oiseau")
 * 
 *  Créez une interface User qui a pour propriété :
 *  - name (string)
 *  - id (uuid)
 *  - age (number)
 *  - roles (tableau de rôles: ADMIN, USER, USER_BO)
 * 
 *  Créez une instance de chaque type
 */