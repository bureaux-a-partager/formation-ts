function structured_types_correction() {
/** ENUM **/
    enum STATUS {
        FULFILLED = 'fullfilled',
        PENDING = 'pending',
        REJECTED = 'rejected'
    }

    /** TUPLES **/
    const coordinates: [number, number] = [-2, 0]
    const rgbColor: [number, number, number] = [255, 255, 255]

/** TYPE **/
// On va l'utiliser principalement pour définir des alias

    type Uuid = string;

    type Coordinates = [number, number]
    const ParisCoord: Coordinates = [1, 0]

    type Color = 'red' | 'blue' | 'black'

    type TVehicule = {
        color: Color
        weight: number
    } 

    // Un type reste fermé et ne peut donc pas être surchargé

    // Pour le surcharger il faut redéfinir un autre type l'opérateur &
    type TExtendedVehicule = TVehicule & {
        wheelsNumber?: number;
    }

    type TPlane = TExtendedVehicule & {
        fly: () => void;
    }


    /** INTERFACE **/
    // On ne peut pas définir d'alias avec les interfaces

    interface IVehicule {
        color: Color
        weight: number
    }

    // Les interfaces restent ouvert, c'est à dire qu'il est possible de surcharger une interface ou de l'étendre
    interface IVehicule {
        wheelsNumber?: number;
    }

    // Mot clé extends

    interface IPlane extends IVehicule {
        fly: () => void;
    }

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

    type Specy = 'dog' | 'cat' | 'oiseau';

    type Pet = {
        name: string
        age: number
        specy: Specy
    }

    const pet: Pet = {
        name: 'Tokyo',
        age: 2,
        specy: 'cat'
    }

    enum Role {
        ADMIN = 'ADMIN',
        USER = 'USER',
        USER_BO = 'USER_BO'
    }

    interface User {
        id: Uuid
        name: string
        age: number
        roles: Role[]
    }

    const user: User = {
        id: 'mon-uuid',
        name: 'Damien',
        age: 30,
        roles: [Role.ADMIN, Role.USER]
    }
}
