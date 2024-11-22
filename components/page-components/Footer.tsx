import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { courgette } from '#/types/fonts'

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logo.png" 
                alt="Logo da Empresa" 
                width={60} 
                height={60}
                className="rounded-full"
              />
              <span className={`${courgette.className} text-2xl font-bold text-primary mt-3`}><span className="text-website-secundary">Puro</span> Quejo</span>
            </Link>
            <p className="text-sm">
              Fornecendo soluções inovadoras e serviços de qualidade desde 2010.
            </p>
          </div>
          
          <div>
            <h3 className={`${courgette.className} text-xl font-semibold mb-4`}>Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Início</Link></li>
              <li><Link href="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link href="/servicos" className="hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link href="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className={`${courgette.className} text-xl font-bold mb-4`} >Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>Rua Exemplo, 123 - São Paulo</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>(11) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>contato@suaempresa.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className={`${courgette.className} text-xl font-bold mb-4`} >Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

