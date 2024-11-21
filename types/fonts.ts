import { Courgette, Montserrat } from "next/font/google"


export const courgette = Courgette({
    weight: ["400"],
    subsets: ['latin'],
})

export const montserrat = Montserrat({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ['latin'],
})