import { useEffect } from 'react'
import { MapComponent } from '../../components/HomePage/Maps/Map'
import { MapWrapper } from '../../components/HomePage/style'
import { t } from '../../i18n'
import { useGetDevices } from '../../services/Devices/useGetDevices'
import { useDeviceStore } from '../../store/devicesStore'

export const HomePage = () => {
  const { setDevices, devices } = useDeviceStore()
  const { data, isSuccess, isError, refetch } = useGetDevices()

  useEffect(() => {
    refetch()
  }, [refetch])

  useEffect(() => {
    if (isSuccess) {
      setDevices(data as never)
    }
  }, [isSuccess, data, setDevices])
  return (
    <>
      <h1>{t('constants.pageName.home')}</h1>
      <MapWrapper>
        <MapComponent />
      </MapWrapper>
    </>
  )
}
