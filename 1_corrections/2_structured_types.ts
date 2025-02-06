function structured_types_correction() {
    type Uuid = string;

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
