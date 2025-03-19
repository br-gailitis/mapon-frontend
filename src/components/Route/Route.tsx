import MaponMap from "../Map/Map";
import RouteDetail from "./RouteDetail";

function Route() {

  // TODO: implement fetching route data

  const data = [
    { title: 'Km driven', value: '128' },
    { title: 'Driving time', value: '3h 20m' },
    { title: 'Driving time', value: '1h 5m' },
  ]

  return ( <>
      <MaponMap />
      <RouteDetail data={data} />
    </>
  )
}

export default Route