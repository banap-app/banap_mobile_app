import React from 'react';
import SubTitleTextStyled from '.';

// Tipagem para as propriedades, incluindo novos props lineBreak e breakAfter
export type SubtitleProps = {
    children: string;
    size?: number;
    color?: string;
    letterSpacing?: number;
    align?: string;
    lineHeight?: number;
    backgroundColor?: string;
    fontFamily?: MontserratFont;
    lineBreak?: boolean; // Para ativar a quebra de linha
    breakAfter?: string; // Para definir onde a quebra de linha ocorrerá
};

// Função para inserir a quebra de linha no texto
const getFormattedText = (text: string, lineBreak: boolean, breakAfter?: string): string => {
    if (lineBreak && breakAfter) {
        const breakPoint = text.indexOf(breakAfter);
        if (breakPoint !== -1) {
            // Inserindo a quebra de linha sem o espaço extra
            return `${text.slice(0, breakPoint + breakAfter.length)}\n${text
                .slice(breakPoint + breakAfter.length)
                .trimStart()}`;
        }
    }
    return text;
};

const SubtitleText: React.FC<SubtitleProps> = ({
    color,
    letterSpacing,
    align,
    children,
    size,
    lineHeight,
    backgroundColor,
    fontFamily,
    lineBreak = false,
    breakAfter = '', // Valor padrão vazio
}: SubtitleProps) => {
    // Aplica a formatação ao texto com quebra de linha
    const formattedText = getFormattedText(children, lineBreak, breakAfter);

    return (
        <SubTitleTextStyled
            color={color}
            letterSpacing={letterSpacing}
            backgroundColor={backgroundColor}
            align={align}
            fontFamily={fontFamily}
            size={size}
            lineHeight={lineHeight}
        >
            {formattedText}
        </SubTitleTextStyled>
    );
};

export default SubtitleText;
