'use client'

import { useSearchParams, usePathname, useRouter } from "next/navigation"

export function SearchTodos() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearchTodos = (value: string) => {
    // Converte searchParams para string antes de passar para URLSearchParams
    const params = new URLSearchParams(searchParams.toString())

    if (value) {
      params.set('query', value)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`)
  }


  return (
    <input
      type="search"
      placeholder="Pesquisar todo..."
      onChange={e => handleSearchTodos(e.target.value)}
      defaultValue={searchParams.get('query')?.toString()}
      className="block w-80 p-2 mb-4 border rounded-md" 
    />
  )
}