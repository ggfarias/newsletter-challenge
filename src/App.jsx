import './App.css'

function App() {

  return (
    <>
      <body className='bg-[#36384D] w-screen h-screen flex items-center justify-center'>
        <main className='bg-white m-auto max-w-[928px] max-h-[641px] w-[928px] h-[641px] rounded-3xl flex flex-row'>
            <div className='w-1/2'>
              <h1 className="text-3xl font-bold underline text-center text-black">Hello world!</h1>
              <h4 className='text-2xl font-serif text-center'>Awesome Newsletter</h4>
            </div>
            <div className='w-1/2'>
              <h1>image container</h1>
            </div>
        </main>
      </body>
    </>
  )
}

export default App
