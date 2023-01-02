import './Dom.css'

import HelloWorld from './components/HelloWorld'

function Dom() {
  return (
    <div className='grid grid-cols-3 md:grid-cols-6 auto-rows-auto gap-4 p-12 content-center w-full h-full'>
      <div className='row-span-1 col-span-3'>
        <h1 className='text-sm uppercase'>
          Milion chvilek
          <br />
          pro entropii
        </h1>
      </div>
      <div className='row-span-4 col-span-3 row-start-2 flex flex-col justify-center'>
        <h2 className='text-4xl font-bold leading-tight mb-4 tracking-wide'>
          Je mi jedno, kdo bude prezidentem...
        </h2>
        <p className='text-2xl mb-4'>Hodím si korunou!</p>
        <div className='font-normal leading-normal tracking-wide space-y-4 text-neutral-300'>
          <p>
            V posledních letech jsme byli svědky mnoha změn a nejistoty. Zdá se,
            že svět se točí stále rychleji a nikdy nevíme, co přijde dál. Ale co
            kdybychom se namísto strachu a úzkosti rozhodli přijmout náhodu s
            otevřenou náručí? Nechme náhodě volný průběh a uvidíme, co přinese.
          </p>
          <p className='text-xl'>
            Nežijete jenom pro budoucnost,
            <br />
            ale také pro přítomnost!
          </p>
        </div>
      </div>
      <div className='mt-8 col-span-3 md:col-start-3 row-start-6 md:col-end-5 flex'>
        <button className=' bg-neutral-100 text-neutral-800 font-bold uppercase px-6 py-2 text-2xl rounded-md mx-auto'>
          Jak na to?
        </button>
      </div>
    </div>
  )
}

export default Dom
