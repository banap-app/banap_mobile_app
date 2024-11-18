import React from "react";
import { TitleTextStyled } from "./";
import { TitleSpanStyled } from "./"; // Importando o novo styled
import { Text } from "react-native";

export type TitleProps = {
  text: string;
  size?: number;
  color?: string;
  bold?: number;
  letterSpacing?: number;
  align?: "left" | "center" | "right" | "justify";
  wordBreakMode?: "normal" | "break-word" | "keep-all";
  margins?: [number?, number?, number?, number?];
  lineBreak?: boolean;
  breakAfter?: string;
  highlightTexts?: { text: string; color: string; bold: number }[]; // Novo tipo de dado para múltiplos textos destacados
};

export const TitleText: React.FC<TitleProps> = ({
  text,
  size,
  color,
  bold,
  letterSpacing,
  align,
  wordBreakMode,
  margins = [],
  lineBreak,
  breakAfter,
  highlightTexts = [], // Novo parâmetro highlightTexts
}) => {
  const [marginTop = 0, marginRight = 0, marginBottom = 0, marginLeft = 0] = margins;

  // Função que insere a quebra de linha após o caractere ou palavra especificada
  const getFormattedText = (text: string): string => {
    if (lineBreak && breakAfter) {
      const breakPoint = text.indexOf(breakAfter);
      if (breakPoint !== -1) {
        // Insere a quebra de linha sem o espaço extra
        return `${text.slice(0, breakPoint + breakAfter.length)}\n${text
          .slice(breakPoint + breakAfter.length)
          .trimStart()}`;
      }
    }
    return text;
  };

  const formattedText = getFormattedText(text);

  // Função para separar o texto com destaque (highlightTexts)
  const getHighlightedText = (text: string, highlightTexts: { text: string; color: string; bold: number }[]) => {
    if (highlightTexts.length === 0) return text; // Se não houver nada para destacar, retorna o texto original

    let updatedText: (string | JSX.Element)[] = [text]; // Agora usamos um array para armazenar strings e elementos React

    highlightTexts.forEach(({ text: highlightText, color, bold }, index) => {
      const newUpdatedText: (string | JSX.Element)[] = [];
      updatedText.forEach((part, i) => {
        if (typeof part === "string") {
          const parts = part.split(new RegExp(`(${highlightText})`, "gi"));
          newUpdatedText.push(
            ...parts.map((part, i) =>
              part.toLowerCase() === highlightText.toLowerCase() ? (
                <TitleSpanStyled key={i} bold={bold} color={color}>
                  {part}
                </TitleSpanStyled>
              ) : (
                part
              )
            )
          );
        } else {
          newUpdatedText.push(part);
        }
      });
      updatedText = newUpdatedText;
    });

    return updatedText;
  };

  return (
    <TitleTextStyled
      size={size}
      color={color}
      bold={bold}
      letterSpacing={letterSpacing}
      align={align}
      wordBreakMode={wordBreakMode}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
    >
      {/* Agora o getHighlightedText retorna um array de partes de texto com componentes Text e TitleSpanStyled */}
      {getHighlightedText(formattedText, highlightTexts)}
    </TitleTextStyled>
  );
};
