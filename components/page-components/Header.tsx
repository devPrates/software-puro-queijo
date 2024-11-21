import { montserrat } from "#/types/fonts";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Header() {
    return (
        <section className="h-[90vh] flex justify-center items-center" id="home">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
                <div className="w-full flex flex-col items-center justify-center gap-3">
                    <h1 className={`${montserrat.className} text-website-secundary font-black text-[64px] text-center w-[80%]`}>A hora mais saborosa do dia</h1>

                    <p className={`${montserrat.className} w-[80%]`}>Characterised by soft lighting, vintage colour schemes and quirky costumes, these generative 3D TinyFaces are the addition to your NFT collection youve been waiting for.</p>

                    <div className="flex justify-center gap-5 w-full pt">
                        <Button size={"lg"}>Ver Produtos</Button>
                        <Button size={"lg"} className="bg-website-secundary">Sobre a Empresa</Button>
                    </div>
                </div>

                <div className="w-full flex items-center justify-center">
                    <Image 
                        src='/headerImage.jpg'
                        alt="Imagem de divulgação da puro queijo"
                        width={480}
                        height={700}
                        className="rounded-xl"
                    />
                </div>
            </div>
        </section>
    )
}