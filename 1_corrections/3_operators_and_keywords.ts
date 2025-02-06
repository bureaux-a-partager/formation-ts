function operators_and_keywords_correction() {
    /** KEYWORD AS : Permet de considérer le typage comme celui défini */
    const button = document.getElementById('mon-button') as HTMLButtonElement | null | undefined;

    interface ApiResponse {
        code: number;
        response: string;
    }

    function getHttpCode(apiResponse: ApiResponse | null): number {
        return (apiResponse as ApiResponse).code;
    }

    function getResponse(apiResponse: ApiResponse | null): string {
        return (<ApiResponse>apiResponse).response;
    }

    /** AS CONST : Permet de rendre un élément immuable */
    const routes = ['home', 'about', 'annonce'] as const;
    // routes.push("route qui n'existe pas"); Impossible

    /** NARROWING : TS déduit le typage par l'élimination de cas */
    function guessMyType(value: string | number | boolean) {
        if (typeof value === 'string') {
            console.log("c'est une string");
            return;
        }

        if (typeof value === 'number') {
            console.log("c'est un nombre");
            return;
        }

        console.log("c'est un booléen");
    }
}
