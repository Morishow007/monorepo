import dayjs from 'dayjs'
import { InfoIcon } from 'lucide-react'
import { useState } from 'react'
import { Device } from '../../@types/devices'
import { t } from '../../i18n'
import { useDeleteDevices } from '../../services/Devices/useDeleteDevice'
import { ModalDevice } from '../HomePage/utils/ModalDevice'
import {
  DevicesTable,
  DevicesTableContainer,
  HeaderRow,
  TableCell,
  TableRow,
} from './style'

const initialState: Device = {
  firstName: '',
  id: 0,
  lastConnection: '',
  lastName: '',
  latitude: 0,
  longitude: 0,
  mobileNumber: '',
  description: '',
  role: '',
  type: '',
}

type Props = {
  devices: Device[]
}

export const DeviceTable = ({ devices }: Props) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [currentDevice, setCurrentDevice] = useState(initialState)
  const { mutate } = useDeleteDevices()

  const handleRowClick = (device: Device) => {
    setCurrentDevice(device)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const deleteDevice = (id: number) => {
    mutate(id as never)
  }

  return (
    <DevicesTableContainer>
      <DevicesTable>
        <thead>
          <HeaderRow>
            <TableCell>{t('page.devicesPage.table.deviceId')}</TableCell>
            <TableCell>{t('page.devicesPage.table.firstName')}</TableCell>
            <TableCell>{t('page.devicesPage.table.lastName')}</TableCell>
            <TableCell>{t('page.devicesPage.table.lastConnection')}</TableCell>
            <TableCell>{t('page.devicesPage.table.role')}</TableCell>
            <TableCell>{t('page.devicesPage.table.type')}</TableCell>
            <TableCell>{t('page.devicesPage.table.phoneNumber')}</TableCell>
            <TableCell></TableCell>
          </HeaderRow>
        </thead>
        <tbody>
          {devices.map((device) => (
            <TableRow key={device.id}>
              <TableCell>{device.id}</TableCell>
              <TableCell>{device.firstName}</TableCell>
              <TableCell>{device.lastName}</TableCell>
              <TableCell>
                {dayjs(device.lastConnection).format('DD/MM/YYYY [at] h:mm A')}
              </TableCell>
              <TableCell>{device.role}</TableCell>
              <TableCell>{device.type}</TableCell>
              <TableCell>{device.mobileNumber}</TableCell>
              <TableCell>
                <InfoIcon
                  color=" #e60000"
                  onClick={() => handleRowClick(device)}
                />
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </DevicesTable>
      {isModalOpen && (
        <ModalDevice
          data={currentDevice}
          onClose={closeModal}
          onDelete={() => deleteDevice(currentDevice.id)}
        />
      )}
    </DevicesTableContainer>
  )
}
