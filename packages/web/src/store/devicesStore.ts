import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Device } from '../@types/devices'

type Store = {
  devices: Device[]
  setDevices: (value: Device[]) => void
  setNewDevice: (value: Device) => void
  deleteDevice: (id: number) => void
}

export const useDeviceStore = create<Store>()(
  devtools(
    (set) => ({
      devices: [],
      setDevices: (devices) => set({ devices }),
      setNewDevice: (device) =>
        set((state) => {
          const newData = [...state.devices, device]
          return { devices: newData }
        }),
      deleteDevice: (id) =>
        set((state) => {
          const newData = state.devices.filter((device) => device.id !== id)
          return { devices: newData }
        }),
    }),
    { name: 'DevicesStore' },
  ),
)
