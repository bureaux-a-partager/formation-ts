function utility_types_correction() {
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
