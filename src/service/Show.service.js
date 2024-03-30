import clienteAxios from "../config/axios"

export const getShowService= async() => {
    return await clienteAxios.get(`/shows`)
}
export const getSearchService = async (data) => {
    return await clienteAxios.post("/api/products/searchProducts", data)
  }