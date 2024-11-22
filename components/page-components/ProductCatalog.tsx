'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs"
import { Input } from "#/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "#/components/ui/select"
import { ProductCard } from "./ProductCard"
import { Product } from '#/types/user'
import { courgette } from '#/types/fonts'
import { products } from '#/types/data-db'



const categories = Array.from(new Set(products.map(product => product.category)))

export function ProductCatalog() {

  return (
    <div className="min-h-screen container mx-auto flex flex-col justify-center items-center">
      <h1 className={`${courgette.className} text-5xl font-bold mb-10 mt-8 text-center`}>Catálogo de Produtos</h1>
      <div className="flex gap-4 mb-6">
        <Input
          placeholder="Buscar produtos..."
          className="max-w-sm"
        />
        <Select>
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
        <div className='flex justify-center'>
        <TabsList className="mb-4">
          {categories.map(category => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
          ))}
        </TabsList>
        </div>
        {categories.map(category => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter(product => product.category === category && 
                  (product.name.toLowerCase().includes(product.name.toLowerCase())))
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

