import { useMemo } from 'react';
import dynamic from 'next/dynamic';

export default function MapPage(): React.ReactElement
{
  const Map = useMemo(() => dynamic(
    () => import('@components/Map'),
    { 
      loading: () => <p>A map is loading...</p>,
      ssr: false
    }
  ), [])

  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-neutral-100">
      <Map />
    </div>
  )
}