import axios from "axios"

export const api = axios.create({
  baseURL: "https://app.tablecrm.com/api/v1"
})

export const createProduct = async (data: any) => {

  const res = await api.post(
    "/nomenclature/?token=af1874616430e04cfd4bce30035789907e899fc7c3a1a4bb27254828ff304a77",
    [data]
  )

  return res.data
}