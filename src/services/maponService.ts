import axios from 'axios';

export type Unit = {
  unit_id: number,
  number: string,
}

export type RouteEndpoint = {
  time: string,
  address: string,
  lat: number,
  lng: number
}

export type Route = {
  route_id: number,
  type: string,
  start: RouteEndpoint,
  end: RouteEndpoint,
  distance: number,
  polyline?: string
}

export type RouteParams = {
  from: Date,
  till: Date,
  unit_id: number
}

const client = axios.create({
  baseURL: import.meta.env.VITE_MAPON_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    key: import.meta.env.VITE_MAPON_API_KEY
  }
});

export const getUnits = async () => {
  const { data  } = await client.get<{ data: { units: Unit[]}}>('/unit/list.json');
  return data.data.units;
};

export const getRoutes = async ({ from, till, unit_id } : RouteParams) => {
  const params = new URLSearchParams({
    from: from.toISOString(),
    till: till.toISOString(),
    unit_id: unit_id.toString(),
    include: 'polyline'
  });
  const response = await client.get<{ data: { units: { unit_id: number, routes: Route[] }[] }}>(`/route/list.json`, { params });
  const [unit] = response.data.data.units
  return unit.routes;
};