import { useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { useDeviceStore } from '../../../store/devicesStore'
import { CustomMarker } from '../utils/useSetupMarkers'

export const MapComponent = () => {
  const { devices } = useDeviceStore()

  useEffect(() => {
    // Your map initialization logic here (e.g., adding markers, setting view, etc.)
  }, []) // Run the effect only once

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={3}
      scrollWheelZoom={true}
      style={{ height: '500px' }}
      maxZoom={20}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {devices?.map((device) => {
        return <CustomMarker device={device} key={device.id} />
      })}
    </MapContainer>
  )
}
