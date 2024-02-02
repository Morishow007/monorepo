import { useState } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Device } from '../../../@types/devices'
import { t } from '../../../i18n'
import { InformationButton } from '../style'
import { ModalDevice } from './ModalDevice'

type Props = {
  device: Device
}

export const CustomMarker = ({ device }: Props) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleMarkerClick = () => {
    // setModalOpen(true)
  }

  const handleInformationClick = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const deleteDevice = () => {}

  return (
    <>
      <Marker
        position={[device.latitude, device.longitude]}
        eventHandlers={{ click: () => handleMarkerClick() }}
      >
        <Popup>
          <div>
            <strong>{t('page.homePage.maps.modal.name')}</strong>{' '}
            {device.firstName}
          </div>
          <div>
            <strong>{t('page.homePage.maps.marker.lastConnection')}</strong>{' '}
            {device.lastConnection}
          </div>
          <InformationButton onClick={handleInformationClick}>
            {t('page.homePage.maps.marker.informationButton')}
          </InformationButton>
        </Popup>
      </Marker>
      {isModalOpen && (
        <ModalDevice
          data={device}
          onClose={closeModal}
          onDelete={deleteDevice}
        />
      )}
    </>
  )
}
