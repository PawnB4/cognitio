import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { LandingCarousel } from './components/LandingCarousel'
import { useEffect, useState } from 'react'


function App() {
  const [message, setMessage] = useState("Waiting...")


  const getMsg = async () => {
    const url = '/api';
    const options = { method: 'GET' };
    const response = await fetch(url, options);
    const data = await response.json();
    setMessage(data.message)
  }

  useEffect(() => {
    getMsg()
  }, [])

  return (
    <main className="flex justify-center gap-40 min-h-screen px-6 py-12 md:p-0">
      <div className='flex flex-col gap-4 md:gap-6 md:mt-36'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center'>
          <img src="https://res.cloudinary.com/ddx4fkbj5/image/upload/v1728360182/khjw9l4n7s1ouvlva56u.png" alt="Astronaut"
            className='w-[180px] md:order-2'
          />
          <h1 className="text-6xl md:text-7xl font-title font-bold tracking-wide">Cognitio</h1>
        </div>
        <Separator />
        <div></div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
          <Button size={'lg'} className='font-bold text-md md:text-xl'>
            JUGAR
            {/* <ChevronRight /> */}
          </Button>
          <Button size={'lg'} className='font-bold text-md md:text-xl'>
            REGISTRARSE
            {/* <ChevronRight /> */}
          </Button>
        </div>
        <div></div>
        <LandingCarousel />
        {message}
      </div>
    </main>
  )
}

export default App
