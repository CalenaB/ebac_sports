import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Produto } from '../types/Produto'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/ebac_sports'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => '/sports'
    })
  })
})

export const { useGetProdutosQuery } = api

