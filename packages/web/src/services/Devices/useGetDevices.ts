import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { GetDevicesClientResponse } from '../../@types/GetDevices'
import { API_ROUTES, QUERY_KEYS } from '../../global/constants'
import { api } from '../API'

const headers = { 'Content-Type': 'application/json' }

const request = async () => {
  const { data } = await api.get<GetDevicesClientResponse>(
    API_ROUTES.getDevicesList,

    {
      headers,
    },
  )

  return data
}

export const useGetDevices = () => {
  return useQuery<GetDevicesClientResponse, AxiosError>({
    queryKey: [QUERY_KEYS.getDevices],
    queryFn: () => request(),
    enabled: true, //set validation here
  })
}
