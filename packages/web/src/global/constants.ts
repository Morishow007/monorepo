export const ROUTES = {
  base: '/',
  devices: '/devices',
} as const

export const ROUTES_ENUM = {
  1: ROUTES.base,
  2: ROUTES.devices,
} as const

const JSON_SERVER = 'http://192.168.1.81:4001/devices'

export const API_ROUTES = {
  baseUrl: '/',
  // getDevicesList: 'devices/get-devices-list-V1',
  // addNewDevice: 'devices/add-new-device-V1',
  // deleteDevice: 'devices/delete-device-V1',
  getDevicesList: JSON_SERVER,
  addNewDevice: JSON_SERVER,
  deleteDevice: JSON_SERVER,
}

export const QUERY_KEYS = {
  getDevices: 'getDevices',
} as const
