'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs"
import { Input } from "#/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "#/components/ui/select"
import { ProductCard } from "./ProductCard"
import { Product } from '#/types/user'


// Dados de exemplo dos produtos
const products: Product[] = [
  { id: 1, name: "Smartphone XYZ", price: 699.99, category: "Eletrônicos", image: "/placeholder.svg?height=200&width=200", description: "Um smartphone avançado com câmera de alta resolução.", rating: 4.5, colors: ["#000000", "#FFFFFF", "#FF0000"] },
  { id: 2, name: "Laptop UltraSlim", price: 1299.99, category: "Eletrônicos", image: "/placeholder.svg?height=200&width=200", description: "Laptop leve e potente para profissionais.", rating: 4.8, colors: ["#808080", "#C0C0C0"] },
  { id: 3, name: "Fones de Ouvido NoiseCancel", price: 199.99, category: "Eletrônicos", image: "/placeholder.svg?height=200&width=200", description: "Fones com cancelamento de ruído para imersão total.", rating: 4.2, colors: ["#000000", "#FFFFFF"] },
  { id: 4, name: "Camiseta Comfort", price: 24.99, category: "Roupas", image: "/placeholder.svg?height=200&width=200", description: "Camiseta confortável para o dia a dia.", rating: 4.0, colors: ["#FFFFFF", "#000000", "#0000FF", "#FF0000"] },
  { id: 5, name: "Jeans Clássico", price: 49.99, category: "Roupas", image: "/placeholder.svg?height=200&width=200", description: "Jeans durável e estiloso.", rating: 4.3, colors: ["#000080", "#4169E1"] },
  { id: 6, name: "Tênis Esportivo", price: 89.99, category: "Roupas", image: "/placeholder.svg?height=200&width=200", description: "Tênis confortável para corrida e academia.", rating: 4.6, colors: ["#FFFFFF", "#000000", "#FF0000"] },
  { id: 7, name: "Cafeteira Programável", price: 79.99, category: "Casa", image: "/placeholder.svg?height=200&width=200", description: "Cafeteira com timer e múltiplas funções.", rating: 4.4, colors: ["#C0C0C0", "#000000"] },
  { id: 8, name: "Liquidificador Potente", price: 39.99, category: "Casa", image: "/placeholder.svg?height=200&width=200", description: "Liquidificador com várias velocidades para diversas receitas.", rating: 4.1, colors: ["#FF0000", "#FFFFFF"] },
  { id: 9, name: "Torradeira Automática", price: 29.99, category: "Casa", image: "/placeholder.svg?height=200&width=200", description: "Torradeira com controle de tostagem.", rating: 3.9, colors: ["#C0C0C0", "#FF0000"] },
]

// Obter categorias únicas
const categories = Array.from(new Set(products.map(product => product.category)))

export function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')

  const sortProducts = (productsToSort: Product[]) => {
    return [...productsToSort].sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Catálogo de Produtos</h1>
      <div className="flex gap-4 mb-6">
        <Input
          placeholder="Buscar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select onValueChange={setSortBy} defaultValue={sortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Nome</SelectItem>
            <SelectItem value="price">Preço</SelectItem>
            <SelectItem value="rating">Avaliação</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Tabs defaultValue={categories[0]}>
        <TabsList className="mb-4">
          {categories.map(category => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
          ))}
        </TabsList>
        {categories.map(category => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortProducts(products)
                .filter(product => product.category === category && 
                  (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                   product.description.toLowerCase().includes(searchTerm.toLowerCase())))
                .map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

