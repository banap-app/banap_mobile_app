// @types/images.d.ts

declare module '@assets' {
    const Images: {
        'Lines': any;
        'productor': any;
        'Enginner': any;
    };

    export type ImageKeys = keyof typeof Images;

    export default Images;
}