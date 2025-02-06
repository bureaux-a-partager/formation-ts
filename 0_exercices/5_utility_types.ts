/** PARTIAL<T> : Construit un type à partir d'un type en rendant l'ensemble optionnel */

/** REQUIRED<T> : C'est l'opposé de PARTIAL */

/** OMIT<T, K> - Contruit un type en retirant la ou les propriétés spécifiées */

/** PICK<T, K> - C'est l'opposé de OMIT */

/** RECORD<K, V> - Construit un type d'object qui établit une correspondance clé/valeur */

/** Tous les types utilitaires peuvent être retrouvés ici : https://www.typescriptlang.org/docs/handbook/utility-types.html  */

/**
 * EXERCICE :
 * 
 * 1. Crée une interface `Offer` avec les propriétés suivantes :
 *    - `id` : number
 *    - `title` : string
 *    - `price` : number
 *    - `description` : string
 * 
 * 2. Déclare un type `PartialOffer` basé sur `Offer`, mais où toutes les propriétés sont facultatives.
 * 
 * 3. Déclare un type `OfferWithoutDescription` basé sur `Offer`, mais sans la propriété `description`.
 * 
 * 4. Déclare un type `OfferRecord` qui est un `Record` où la clé est l'`id` de l'`Offer` et la valeur est une `Offer`.
 */