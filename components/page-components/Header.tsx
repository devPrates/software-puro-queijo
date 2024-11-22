import { courgette, montserrat } from "#/types/fonts";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
    return (
        <div className="min-h-screen" id='home'>
            {/* Layout para telas pequenas (abaixo de md) */}
            <div className="lg:hidden relative h-screen flex items-center justify-center overflow-hidden">
                <Image
                    src="/headerImage.jpg"
                    alt="Hero background"
                    fill
                    quality={100}
                    className="absolute z-0"
                />
                <div className="relative z-10 text-center text-white px-4 sm:px-6">
                    <h1 className={`${courgette.className} text-4xl sm:text-5xl font-bold mb-4`}>
                        A hora mais saborosa do dia
                    </h1>
                    <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
                        Descubra as possibilidades infinitas da nossa plataforma inovadora.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-3">
                        <Link href="/signup">
                            <Button size={"lg"}> Comece Agora </Button>
                        </Link>
                        <Link href="/learn-more">
                            <Button size={"lg"} className="bg-website-secundary"> Comece Agora </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Layout para telas médias e grandes (md e acima) */}
            <div className="hidden lg:flex items-center justify-center min-h-screen">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-row items-center justify-between gap-12">
                        {/* Conteúdo à direita */}
                        <div className="w-1/2 text-center flex flex-col justify-center items-center">
                            <h1 className={`${courgette.className} text-[84px] lg:text-6xl font-bold mb-6`}>
                                A hora mais saborosa do dia
                            </h1>
                            <p className="text-xl lg:text-2xl text-center mb-8 text-gray-600 max-w-lg">
                                Descubra as possibilidades infinitas da nossa plataforma inovadora.
                            </p>
                            <div className="flex flex-row justify-center items-center gap-3">
                                <Link href="/signup">
                                    <Button size={"lg"}> Comece Agora </Button>
                                </Link>
                                <Link href="/learn-more">
                                    <Button size={"lg"} className="bg-website-secundary"> Comece Agora </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Imagem à esquerda */}
                        <div className="w-1/2 flex justify-center">
                            <div className="relative lg:h-[60vh] lg:w-[50vh] aspect-video rounded-xl overflow-hidden shadow-xl">
                                <Image
                                    src="/headerImage.jpg"
                                    alt="Hero image"
                                    fill
                                    className="transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}