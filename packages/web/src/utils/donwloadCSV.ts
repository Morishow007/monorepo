import { Device } from '../@types/devices'

export const downloadDevicesCSV = (devices: Device[]) => {
  const csvContent =
    'data:text/csv;charset=utf-8,' +
    devices.map((device) => Object.values(device).join(',')).join('\n')

  const encodedUri = encodeURI(csvContent)

  const link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', 'devices.csv')
  document.body.appendChild(link)

  link.click()
}
