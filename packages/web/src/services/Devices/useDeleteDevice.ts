import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-hot-toast'
import {
  DeleteDeviceRequest,
  DeleteDeviceResponse,
} from '../../@types/DeleteDevice'
import { API_ROUTES } from '../../global/constants'
import { t } from '../../i18n'
import { useDeviceStore } from '../../store/devicesStore'
import { api } from '../API'

const headers = {}

const request = async (payload: DeleteDeviceRequest) => {
  const response = await api.delete<DeleteDeviceResponse>(
    `${API_ROUTES.deleteDevice}/${payload.deviceID}`,
    { headers },
  )

  return response.data
}

export const useDeleteDevices = () => {
  const { deleteDevice } = useDeviceStore()

  return useMutation({
    mutationFn: (payload: DeleteDeviceRequest) => request(payload),
    onSuccess(data, payload) {
      deleteDevice(payload.deviceID)
      toast.success(t('constants.success.delete'))
    },
    onError(error: AxiosError) {
      toast.error(t('constants.errors.notFound'))
    },
  })
}
