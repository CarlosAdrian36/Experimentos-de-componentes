import { apiClient } from '@/api/Api'

export const getCategoriasAction = async () => {
  try {
    const { data } = await apiClient.get(`/Categorias`)

    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    throw new Error('Error al obtener las categorias')
  }
}
