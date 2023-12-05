import Image from 'next/image'
import logo from '@/img/logo.png'


export default function Home() {
  return (
    <main className=" lg:fundo-background items-center bg-stone-800 flex flex-col text-white max-h-screen h-screen">
      <Image className="mt-32" src={logo} width={218} height={33}/>
        <div className="my-28 items-center space-y-4 w-80">
        <h2 className='lg'>Nome de Usuário</h2>
        <input className="w-80 h-16 border-2 rounded-lg border-inherit bg-gray-700	" type="text" />
        <h2>Senha</h2>
        <input className="w-80 h-16 border-2 rounded-lg border-inherit bg-gray-700	" type="text" />
        </div>
        <div className="w-80 items-center space-y-4 ">
        <button className="w-80 h-20 bg-fuchsia-600	rounded-lg ">Entrar</button>
        <button className="w-80 h-20 bg-stone-700	rounded-lg ">Esqueci minha senha</button>
        </div>
    </main>
  )
}
