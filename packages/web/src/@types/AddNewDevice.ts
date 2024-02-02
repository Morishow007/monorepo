export type AddNewDeviceRequest = {
  id: number
  firstName: string
  lastName: string
  mobileNumber: string
  lastConnection: string
  latitude: number
  longitude: number
  role: string
  type: string
  description: string
}

export type AddNewDeviceResponse = {
  status: string
  message: string
}
