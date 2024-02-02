import { XCircleIcon } from 'lucide-react'
import Modal from 'react-modal'
import { Device } from '../../../@types/devices'
import { t } from '../../../i18n'
import { DeleteButton } from '../../../pages/DevicesPage/style'
import { useDeleteDevices } from '../../../services/Devices/useDeleteDevice'
import {
  ModalButtonContainer,
  ModalDeviceContainer,
  ModalHeader,
  TextFieldModal,
} from '../style'

type Props = {
  data: Device
  onClose: () => void
  onDelete: () => void
}

const modalStyle = {
  overlay: {
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    zIndex: 1001,
  },
}

export const ModalDevice = ({ data, onClose, onDelete }: Props) => {
  const { mutate } = useDeleteDevices()

  const handleDelete = () => {
    mutate({ deviceID: data.id })
    onClose()
  }
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel={t('page.homePage.maps.modal.title')}
      style={modalStyle}
    >
      <ModalHeader>
        <h2>{t('page.homePage.maps.modal.title')}</h2>
        <XCircleIcon onClick={onClose} />
      </ModalHeader>

      <ModalDeviceContainer>
        <TextFieldModal>
          <b>{t('page.homePage.maps.modal.id')}</b>
          {data.id}
        </TextFieldModal>
        <TextFieldModal>
          <b>{t('page.homePage.maps.modal.name')}</b>
          {`${data.firstName} ${data.lastName}`}
        </TextFieldModal>
        <TextFieldModal>
          <b>{t('page.homePage.maps.modal.mobileNumber')}</b>
          {data.mobileNumber}
        </TextFieldModal>
        <TextFieldModal>
          <b>{t('page.homePage.maps.modal.lastConnection')}</b>
          {data.lastConnection}
        </TextFieldModal>
        <TextFieldModal>
          <b>{t('page.homePage.maps.modal.location')}</b>({data.latitude},{' '}
          {data.longitude})
        </TextFieldModal>
        <TextFieldModal>
          <b>{t('page.homePage.maps.modal.description')}</b>
          {data.description}
        </TextFieldModal>
      </ModalDeviceContainer>

      <ModalButtonContainer>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
      </ModalButtonContainer>
    </Modal>
  )
}
