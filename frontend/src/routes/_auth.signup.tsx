import { createFileRoute } from '@tanstack/react-router'
import { CircleUser, Pencil } from 'lucide-react'

export const Route = createFileRoute('/_auth/signup')({
  component: SignUp,
})


function SignUp() {

  return (
    <div className='flex w-full gap-12'>
      <div className='flex flex-col gap-6 p-8 items-center bg-slate-200 rounded-md'>
        <div></div>
        <p className='font-bold text-3xl text-balance'>Elige tu personaje</p>
        <CircleUser size={100} />
        <Pencil size={30} />
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className=''>dsadas</p>
    </div>
  )

}