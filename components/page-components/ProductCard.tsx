import Image from "next/image"
import { ChevronRight, Utensils } from 'lucide-react'
import { Button } from "#/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "#/components/ui/card"
import { Separator } from "#/components/ui/separator"

interface ProductCardProps {
  id: number
  name: string
  image: string
  description: string
  sizing: string[]
}

export function ProductCard({ id, name, image, description, sizing }: ProductCardProps) {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <div className="relative w-full h-[200px] mb-4">
          <Image
            src={image}
            alt="Pão de Queijo"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">{name}</CardTitle>
          <Utensils className="h-6 w-6 text-gray-500" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>
        <Separator className="my-4" />
        <div className="text-sm">
          <p className="font-semibold mb-2">Tamanhos disponíveis:</p>
          <div className="flex justify-around items-center">
            {sizing.map((size, index) => (
              <span className="bg-primary/10 text-primary rounded-full px-3 py-1" key={index}>{size}</span>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full group">
          Mais Informações
          <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition" />
        </Button>
      </CardFooter>
    </Card>
  )
}

