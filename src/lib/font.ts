// /lib/fonts.ts
// --- IMPORT ALL FONTS ---
import {
    Inter,
    Roboto,
    Open_Sans,
    Poppins,
    Montserrat,
    Lato,
    Oswald,
    Raleway,
    Merriweather,
    Playfair_Display,
    Ubuntu,
    PT_Sans,
    Barlow,
    Fira_Sans,
    Nunito,
    Cabin,
    Bebas_Neue,
    Source_Serif_4,
    Libre_Baskerville,
    Rubik,
    Inconsolata,
    Work_Sans,
    Mulish,
    Quicksand,
    Kanit,
    Teko,
    Josefin_Sans,
    Philosopher,
    Dancing_Script,
    Noto_Serif,
    Manrope,
    Space_Grotesk,
  } from "next/font/google"
  
  // --- CALL THEM AT TOP LEVEL ---
  export const inter = Inter({ subsets: ["latin"] })
  export const roboto = Roboto({ subsets: ["latin"] })
  export const opensans = Open_Sans({ subsets: ["latin"] })
  export const poppins = Poppins({
      subsets: ["latin"],
      weight: "100"
  })
  export const montserrat = Montserrat({ subsets: ["latin"] })
  export const lato = Lato({
      subsets: ["latin"],
      weight: "100"
  })
  export const oswald = Oswald({ subsets: ["latin"] })
  export const raleway = Raleway({ subsets: ["latin"] })
  export const merriweather = Merriweather({ subsets: ["latin"] })
  export const playfair = Playfair_Display({ subsets: ["latin"] })
  export const ubuntu = Ubuntu({
      subsets: ["latin"],
      weight: "300"
  })
  export const ptsans = PT_Sans({
      subsets: ["latin"],
      weight: "400"
  })
  export const barlow = Barlow({
      subsets: ["latin"],
      weight: "100"
  })
  export const fira = Fira_Sans({
      subsets: ["latin"],
      weight: "100"
  })
  export const nunito = Nunito({ subsets: ["latin"] })
  export const cabin = Cabin({ subsets: ["latin"] })
  export const bebas = Bebas_Neue({
      subsets: ["latin"],
      weight: "400"
  })
  export const sourceserif = Source_Serif_4({ subsets: ["latin"] })
  export const librebask = Libre_Baskerville({
      subsets: ["latin"],
      weight: "400"
  })
  export const rubik = Rubik({ subsets: ["latin"] })
  export const inconsolata = Inconsolata({ subsets: ["latin"] })
  export const worksans = Work_Sans({ subsets: ["latin"] })
  export const mulish = Mulish({ subsets: ["latin"] })
  export const quicksand = Quicksand({ subsets: ["latin"] })
  export const kanit = Kanit({
      subsets: ["latin"],
      weight: "100"
  })
  export const teko = Teko({ subsets: ["latin"] })
  export const josefin = Josefin_Sans({ subsets: ["latin"] })
  export const philosopher = Philosopher({
      subsets: ["latin"],
      weight: "400"
  })
  export const dancing = Dancing_Script({ subsets: ["latin"] })
  export const notoserif = Noto_Serif({ subsets: ["latin"] })
  export const manrope = Manrope({ subsets: ["latin"] })
  export const spacegrotesk = Space_Grotesk({ subsets: ["latin"] })
  
  // --- FINALLY, CREATE LIST ---
  export const FONT_OPTIONS = [
    { label: "Inter", font: inter },
    { label: "Roboto", font: roboto },
    { label: "Open Sans", font: opensans },
    { label: "Poppins", font: poppins },
    { label: "Montserrat", font: montserrat },
    { label: "Lato", font: lato },
    { label: "Oswald", font: oswald },
    { label: "Raleway", font: raleway },
    { label: "Merriweather", font: merriweather },
    { label: "Playfair Display", font: playfair },
    { label: "Ubuntu", font: ubuntu },
    { label: "PT Sans", font: ptsans },
    { label: "Barlow", font: barlow },
    { label: "Fira Sans", font: fira },
    { label: "Nunito", font: nunito },
    { label: "Cabin", font: cabin },
    { label: "Bebas Neue", font: bebas },
    { label: "Source Serif Pro", font: sourceserif },
    { label: "Libre Baskerville", font: librebask },
    { label: "Rubik", font: rubik },
    { label: "Inconsolata", font: inconsolata },
    { label: "Work Sans", font: worksans },
    { label: "Mulish", font: mulish },
    { label: "Quicksand", font: quicksand },
    { label: "Kanit", font: kanit },
    { label: "Teko", font: teko },
    { label: "Josefin Sans", font: josefin },
    { label: "Philosopher", font: philosopher },
    { label: "Dancing Script", font: dancing },
    { label: "Noto Serif", font: notoserif },
    { label: "Manrope", font: manrope },
    { label: "Space Grotesk", font: spacegrotesk },
  ]
  