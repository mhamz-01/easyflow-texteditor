// // /lib/fonts.ts
// // --- IMPORT ALL FONTS ---
// import {
//     Inter,
//     Roboto,
//     Open_Sans,
//     Poppins,
//     Montserrat,
//     Lato,
//     Oswald,
//     Raleway,
//     Merriweather,
//     Playfair_Display,
//     Ubuntu,
//     PT_Sans,
//     Barlow,
//     Fira_Sans,
//     Nunito,
//     Cabin,
//     Bebas_Neue,
//     Source_Serif_4,
//     Libre_Baskerville,
//     Rubik,
//     Inconsolata,
//     Work_Sans,
//     Mulish,
//     Quicksand,
//     Kanit,
//     Teko,
//     Josefin_Sans,
//     Philosopher,
//     Dancing_Script,
//     Noto_Serif,
//     Manrope,
//     Space_Grotesk,
//   } from "next/font/google"

import { F } from "framer-motion/dist/types.d-DagZKalS";

  
//   // --- CALL THEM AT TOP LEVEL ---
//   export const inter = Inter({ subsets: ["latin"] })
//   export const roboto = Roboto({ subsets: ["latin"] })
//   export const opensans = Open_Sans({ subsets: ["latin"] })
//   export const poppins = Poppins({
//       subsets: ["latin"],
//       weight: "100"
//   })
//   export const montserrat = Montserrat({ subsets: ["latin"] })
//   export const lato = Lato({
//       subsets: ["latin"],
//       weight: "100"
//   })
//   export const oswald = Oswald({ subsets: ["latin"] })
//   export const raleway = Raleway({ subsets: ["latin"] })
//   export const merriweather = Merriweather({ subsets: ["latin"] })
//   export const playfair = Playfair_Display({ subsets: ["latin"] })
//   export const ubuntu = Ubuntu({
//       subsets: ["latin"],
//       weight: "300"
//   })
//   export const ptsans = PT_Sans({
//       subsets: ["latin"],
//       weight: "400"
//   })
//   export const barlow = Barlow({
//       subsets: ["latin"],
//       weight: "100"
//   })
//   export const fira = Fira_Sans({
//       subsets: ["latin"],
//       weight: "100"
//   })
//   export const nunito = Nunito({ subsets: ["latin"] })
//   export const cabin = Cabin({ subsets: ["latin"] })
//   export const bebas = Bebas_Neue({
//       subsets: ["latin"],
//       weight: "400"
//   })
//   export const sourceserif = Source_Serif_4({ subsets: ["latin"] })
//   export const librebask = Libre_Baskerville({
//       subsets: ["latin"],
//       weight: "400"
//   })
//   export const rubik = Rubik({ subsets: ["latin"] })
//   export const inconsolata = Inconsolata({ subsets: ["latin"] })
//   export const worksans = Work_Sans({ subsets: ["latin"] })
//   export const mulish = Mulish({ subsets: ["latin"] })
//   export const quicksand = Quicksand({ subsets: ["latin"] })
//   export const kanit = Kanit({
//       subsets: ["latin"],
//       weight: "100"
//   })
//   export const teko = Teko({ subsets: ["latin"] })
//   export const josefin = Josefin_Sans({ subsets: ["latin"] })
//   export const philosopher = Philosopher({
//       subsets: ["latin"],
//       weight: "400"
//   })
//   export const dancing = Dancing_Script({ subsets: ["latin"] })
//   export const notoserif = Noto_Serif({ subsets: ["latin"] })
//   export const manrope = Manrope({ subsets: ["latin"] })
//   export const spacegrotesk = Space_Grotesk({ subsets: ["latin"] })
  export type FontOption = {
    label: string
    cssFontFamily:string 
  }
  // --- FINALLY, CREATE LIST ---
  export const FONT_OPTIONS: FontOption[] = [
    { label: "Inter", cssFontFamily: "Inter" },
    { label: "Roboto", cssFontFamily: "Roboto" },
    { label: "Open Sans", cssFontFamily: "Opensans" },
    { label: "Poppins", cssFontFamily: "Poppins" },
    { label: "Montserrat", cssFontFamily: "Montserrat" },
    { label: "Lato", cssFontFamily: "Lato" },
    { label: "Oswald", cssFontFamily: "Oswald" },
    { label: "Raleway", cssFontFamily: "Raleway" },
    { label: "Merriweather", cssFontFamily: "Merriweather" },
    { label: "Playfair Display", cssFontFamily: "Playfair" },
    { label: "Ubuntu", cssFontFamily: "Ubuntu" },
    { label: "PT Sans", cssFontFamily: "Ptsans" },
    { label: "Barlow", cssFontFamily: "Barlow" },
    { label: "Fira Sans", cssFontFamily: "Fira" },
    { label: "Nunito", cssFontFamily: "Nunito" },
    { label: "Cabin", cssFontFamily: "Cabin" },
    { label: "Bebas Neue", cssFontFamily: "Bebas" },
    { label: "Source Serif Pro", cssFontFamily: "Sourceserif" },
    { label: "Libre Baskerville", cssFontFamily: "Librebask" },
    { label: "Rubik", cssFontFamily: "Rubik" },
    { label: "Inconsolata", cssFontFamily: "Inconsolata" },
    { label: "Work Sans", cssFontFamily: "Worksans" },
    { label: "Mulish", cssFontFamily: "Mulish" },
    { label: "Quicksand", cssFontFamily: "Quicksand" },
    { label: "Kanit", cssFontFamily: "Kanit" },
    { label: "Teko", cssFontFamily: "Teko" },
    { label: "Josefin Sans", cssFontFamily: "Josefin" },
    { label: "Philosopher", cssFontFamily: "Philosopher" },
    { label: "Dancing Script", cssFontFamily: "Dancing" },
    { label: "Noto Serif", cssFontFamily: "Notoserif" },
    { label: "Manrope", cssFontFamily: "Manrope" },
    { label: "Space Grotesk", cssFontFamily: "Spacegrotesk" },
  ]
  