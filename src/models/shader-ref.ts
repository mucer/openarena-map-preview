/**
 * Shader defined in a BSP file. Must be linked to a shader which was defined
 * in a shader file.
 */
export interface ShaderRef {
    path: string;
    isSky: boolean;
    doDraw: boolean;
    doSkip: boolean;
}