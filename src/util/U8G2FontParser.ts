import { getFontInfo, getGlyphs } from "./U8G2Font";
import { u8g2_font_courB12_tf } from "../fonts/u8g2_font_courB12_tf";

console.log(getFontInfo(u8g2_font_courB12_tf));

console.log(getGlyphs(u8g2_font_courB12_tf));