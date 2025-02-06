function utility_types_correction() {
    interface Recipe {
        id: number
        title: string
        duration?: number
    }
    
    const recipe: Recipe = {
        id: 1,
        title: 'Pancakes',
    }
    
    /** PARTIAL<T> : Construit un type en rendant l'ensemble optionnel */
    
    const partialRecipe: Partial<Recipe> = {
        title: 'crepe'
    }
    
    /** REQUIRED<T> : C'est l'opposé de PARTIAL */
    const requiredRecipe: Required<Recipe> = {
        id: 2,
        title: 'pie',
        duration: 20
    }
    
    /** OMIT<T, K> - Contruit un type en retirant la ou les propriétés spécifiées */
    const idRecipe: Omit<Recipe, 'title' | 'duration'> = {
        id: 2,
    }
    
    /** OMIT<T, K> - C'est l'opposé de OMIT */
    const idRecipe2: Pick<Recipe, 'id'> = {
        id: 2,
    }
    
    /** RECORD<K, V> - Construit un type d'object qui établit une correspondance clé/valeur */
    const record: Record<string, Recipe> = {
        crepe: {
            id: 1,
            title: 'crepe'
        },
        pie: {
            id: 1,
            title: 'crepe'
        },
    }
    
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
    
    interface Offer {
        id: number,
        title: string,
        price: number,
        description: string
    }
    
    type PartialOffer = Partial<Offer>
    
    type OfferWithoutDescription = Omit<Offer, 'description'>
    
    type OfferRecord = Record<number, Offer>
}
