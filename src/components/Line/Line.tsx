import React from "react";
import { LineStyled } from ".";

export type LineProps = {
    width: number | string;
    height: number;
    backgroundColor: string;
    lineStyle?: "solid" | "dotted" | "dashed" | "double" | "groove" | "ridge" | "inset" | "outset";
    lineBorderRadius?: number; 
}
export const Line:React.FC<LineProps> = ({backgroundColor, height, width, lineBorderRadius, lineStyle}:LineProps)=> {
    return (
        <LineStyled backgroundColor={backgroundColor} lineStyle={lineStyle} lineBorderRadius={lineBorderRadius} height={height} width={width} />
    )
}