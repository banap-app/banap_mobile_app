// @types/images.d.ts

declare module '@assets' {
    const Images: {
        'Linhas': any;
        // Adicione mais imagens conforme necessário
    };

    export type ImageKeys = keyof typeof Images;

    export default Images;
}
