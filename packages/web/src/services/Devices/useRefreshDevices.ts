import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-hot-toast'
import { GetDevicesClientResponse } from '../../@types/GetDevices'
import { API_ROUTES } from '../../global/constants'
import { t } from '../../i18n'
import { useDeviceStore } from '../../store/devicesStore'
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

export const useRefreshDevices = () => {
  const { setDevices } = useDeviceStore()

  return useMutation({
    mutationFn: () => request(),
    onSuccess(data) {
      setDevices(data as never)
      toast.success(t('constants.success.updated'))
    },
    onError(error: AxiosError) {
      toast.error(t('constants.errors.database'))
    },
  })
}
