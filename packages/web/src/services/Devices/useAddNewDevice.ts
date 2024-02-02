import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-hot-toast'
import {
  AddNewDeviceRequest,
  AddNewDeviceResponse,
} from '../../@types/AddNewDevice'
import { API_ROUTES } from '../../global/constants'
import { t } from '../../i18n'
import { useDeviceStore } from '../../store/devicesStore'
import { api } from '../API'

const headers = { 'Content-Type': 'application/json' }

const request = async (payload: AddNewDeviceRequest) => {
  const response = await api.post<AddNewDeviceResponse>(
    API_ROUTES.addNewDevice,
    payload,
    { headers },
  )

  return response.data
}

export const useAddNewDevice = () => {
  const { setNewDevice } = useDeviceStore()

  return useMutation({
    mutationFn: (payload: AddNewDeviceRequest) => request(payload),
    onSuccess(data, variables) {
      // queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getDevices] })

      setNewDevice(data as never)
      toast.success(t('constants.success.newDevice'))
    },
    onError(error: AxiosError) {
      toast.error(t('constants.errors.auth'))
    },
  })
}
