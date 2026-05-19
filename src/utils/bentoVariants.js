export const BENTO_VARIANTS = ["blue", "yellow", "white", "coral", "teal"];

export function getBentoVariant(index) {
  return BENTO_VARIANTS[index % BENTO_VARIANTS.length];
}

export const BENTO_CLASS = {
  blue: "bento-blue",
  yellow: "bento-yellow",
  white: "bento-white",
  coral: "bento-coral",
  teal: "bento-teal",
};
