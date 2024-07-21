import { useMemo } from 'react';
import dynamic from 'next/dynamic';

export default function MapPage(): React.ReactElement
{
  const Map = useMemo(() => dynamic(
    () => import('@components/Map'),
    { 
      loading: () => (
        <span className='text-center'>
          <p>A map is loading...</p>
          <span className='text-xs'>if you wait too long, just enable your javascript.</span>
        </span>
      ),
      ssr: false
    }
  ), [])

  return (
    <div className="w-full h-[86svh] flex items-center justify-center p-2">
      <Map />
    </div>
  )
}