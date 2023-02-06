import install from "npm/@twind/with-react";
import presetTailwind from "npm/@twind/preset-tailwind";
import presetAutoprefix from "npm/@twind/preset-autoprefix";
import { isProduction } from "x/udibo_react_app/mod.tsx";

export const tw = install({
  presets: [presetAutoprefix(), presetTailwind()],
}, isProduction());
