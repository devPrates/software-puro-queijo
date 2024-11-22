import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "#/components/ui/card"
import { Button } from "#/components/ui/button"
import { Badge } from "#/components/ui/badge"
import { Heart, Star } from 'lucide-react'
import Image from "next/image"

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
  description: string
  rating: number
  colors: string[]
}

export function ProductCard({ id, name, price, image, description, rating, colors }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{name}</CardTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsFavorite(!isFavorite)}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"} />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative h-48 w-full mb-4">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
          ))}
          <span className="ml-2 text-sm text-gray-600">({rating})</span>
        </div>
        <div className="flex gap-2">
          {colors.map(color => (
            <Badge key={color} variant="outline" style={{backgroundColor: color}}>&nbsp;</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-xl font-bold">${price.toFixed(2)}</span>
        <Button>Adicionar ao Carrinho</Button>
      </CardFooter>
    </Card>
  )
}

