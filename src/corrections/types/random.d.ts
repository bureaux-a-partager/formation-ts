declare module "random" {
    interface Random {
        int(min?: number, max?: number): number;
    }

    const random: Random;
    export default random;
}
