
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8" id="contato">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Entre em Contato</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Rua Exemplo, 123 - Bairro, Cidade - Estado, 12345-678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>(11) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>contato@suaempresa.com</span>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg?" 
                alt="Mapa da localização da empresa" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

