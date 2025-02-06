function generics_correction() {
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

    type Nullable<T> = T | null

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

