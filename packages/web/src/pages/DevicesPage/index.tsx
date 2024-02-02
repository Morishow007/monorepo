import { MainContainer } from '../../GlobalStyles'
import { DeviceTable } from '../../components/DevicesPage/DeviceTable'
import { t } from '../../i18n'
import {
  ActionsButton,
  ActionsContainer,
  DevicePageContainer,
  DevicesContainer,
  Dropdown,
  ShowActionsContainer,
  Spacer,
  Title,
  TitleContainer,
} from './style'

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Download,
  MinusIcon,
  Pen,
  PlusIcon,
  RefreshCcw,
} from 'lucide-react'
import { useState } from 'react'
import { NewDeviceForm } from '../../components/DevicesPage/NewDeviceForm'
import { useRefreshDevices } from '../../services/Devices/useRefreshDevices'
import { useDeviceStore } from '../../store/devicesStore'
import { downloadDevicesCSV } from '../../utils/donwloadCSV'

export const DevicesPage = () => {
  const [showNewDeviceForm, setShowNewDeviceForm] = useState(false)
  const { devices } = useDeviceStore()
  const { mutate: refreshMutate } = useRefreshDevices()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const devicesToDisplay = devices.slice(startIndex, endIndex)
  const totalPages = Math.ceil(devices.length / itemsPerPage)
  const itemsPerPageOptions = [10, 20, 30, 50]

  const handleAddDeviceButtonClick = () => {
    setShowNewDeviceForm(!showNewDeviceForm)
  }

  const handleRefreshClick = () => {
    refreshMutate()
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    const totalPages = Math.ceil(devices.length / itemsPerPage)
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage)
  }

  const generateItemsPerPageOptions = () => {
    return [10, 20, 30, 50].map((option, index) => (
      <option key={index} value={option}>
        {option} items per page
      </option>
    ))
  }

  return (
    <MainContainer>
      <DevicePageContainer>
        <TitleContainer>
          <Title>{t('page.devicesPage.title')}</Title>
        </TitleContainer>
        <DevicesContainer>
          <ActionsContainer>
            <div>
              <ActionsButton onClick={handleAddDeviceButtonClick}>
                {showNewDeviceForm ? <MinusIcon /> : <PlusIcon />}
                <span> {t('page.devicesPage.addDevice')}</span>
              </ActionsButton>
              <ActionsButton onClick={handleRefreshClick}>
                <RefreshCcw />
                <span> {t('page.devicesPage.refreshButton')}</span>
              </ActionsButton>
            </div>
            <ShowActionsContainer>
              <span>Showing</span>
              <Dropdown
                value={itemsPerPage}
                onChange={(e) =>
                  handleItemsPerPageChange(parseInt(e.target.value, 10))
                }
              >
                {itemsPerPageOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Dropdown>
              {currentPage !== 1 ? (
                <ArrowLeftIcon onClick={handlePrevPage}></ArrowLeftIcon>
              ) : (
                <Spacer />
              )}
              <span>
                {currentPage} of {totalPages}
              </span>
              {currentPage !== totalPages ? (
                <ArrowRightIcon onClick={handleNextPage} />
              ) : (
                <Spacer />
              )}
              <Download onClick={() => downloadDevicesCSV(devices)} />
              <Pen />
            </ShowActionsContainer>
          </ActionsContainer>
          {showNewDeviceForm && <NewDeviceForm />}

          <DeviceTable devices={devicesToDisplay} />
        </DevicesContainer>
      </DevicePageContainer>
    </MainContainer>
  )
}
