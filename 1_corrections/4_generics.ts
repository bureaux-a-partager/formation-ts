function generics_correction() {
    /** GENERICS : Mécanisme qui va rendre le typage plus flexible */
    type Nullable<T> = T | null

    const nullableStr: Nullable<string> = "string"
    const nullableBool = <Nullable<boolean>>true

    interface Collection<T> {
        items: T[],
        count: number,
    }

    const strCollection: Collection<number> = {
        items: [1, 2],
        count: 2
    }

    interface Person {
        readonly id: number,
        name: string,
    }

    const personCollection: Collection<Person> = {
        items: [{ id: 2, name: 'John' }],
        count: 2
    }

    /** FUNCTIONS - Paramètre: On rajoute <T> devant la première parenthèse */

    function showCollection<T>(collection: Collection<T>): void {
        collection.items.forEach((element) => console.log(element));
    }

    const displayCollection = <T>(collection: Collection<T>) => {
        collection.items.forEach((element) => console.log(element));
    }

    /** FUNCTIONS - Retour: On rajoute :T derrière la deuxième parenthèse */

    function firstElement<T>(collection: Collection<T>): Nullable<T> {
        return collection.items[0] ?? null
    }

    /** 
     * EXERCICE : 
     * 1. Créez une interface générique `List` qui accepte un type `T` et doit contenir :
     *    - `items` : un tableau d'éléments de type `T`.
     *    - `push` : une méthode qui prend un élément de type `T` et l'ajoute au tableau `items`.
     *    - `first` : une méthode qui retourne le premier élément du tableau.
     * 
     * 2. Créez un object numbers de type List<number>
     *
     * 3. Créez une fonction `displayList` qui prend une `List` et affiche tous les éléments dans la console.
     * 
     */

    interface List<T> {
        items: T[]
        push: (element: T) => void
        first: () => Nullable<T>
    }

    const numbers: List<number> = {
        items: [1, 2, 3],
        push(element: number) {
            this.items.push(element)
        },
        first() {
            return this.items[0] ?? null
        }
    }

    numbers.push(4);

    function displayList<T>(list: List<T>): void {
        list.items.forEach((item) => console.log(item))
    }

    displayList(numbers);
}

