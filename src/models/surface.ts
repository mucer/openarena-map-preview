import { SurfaceType } from "./surface-type";
import { Vector } from "./vector";
import { Vert } from "./vert";

export interface Surface {
    type: SurfaceType;
    verts: Vert[];
    // indexes for faces in the verts array
    indexes?: number[];
    shader: number;
    normal?: Vector;
}