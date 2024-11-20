import { useState, useEffect } from "react";
import { Dimensions, ScaledSize } from "react-native";

export const useScreenDimensions = () => {
  const [dimensions, setDimensions] = useState<ScaledSize>(Dimensions.get("window"));

  useEffect(() => {
    const onChange = ({ window }: { window: ScaledSize }) => {
      setDimensions(window);
    };

    // Verifica se o método addEventListener existe (compatibilidade)
    const subscription = Dimensions.addEventListener?.("change", onChange);

    return () => {
      // Verifica se remove é uma função antes de chamar
      if (typeof subscription?.remove === "function") {
        subscription.remove();
      }
    };
  }, []);

  return dimensions;
};
