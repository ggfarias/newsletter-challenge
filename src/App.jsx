import './App.css'
import mainDesktopImage from './images/illustration-sign-up-desktop.svg'; 
import TextContainer from './components/TextContainer';
import FormContainer from './components/FormContainer';

function App() {

  return (
    <>
      <body className='bg-[#36384D] w-screen h-screen flex items-center justify-center'>
        <main className='bg-white m-auto max-w-[928px] max-h-[641px] w-[928px] h-[641px] rounded-3xl flex flex-row p-[24px]'>
          <section className='w-1/2 flex flex-col justify-around content-start pl-[40px]'>
            <TextContainer />
            <FormContainer />
          </section>
          <div className='w-1/2 flex flex-row items-end justify-end'>
            <img src={mainDesktopImage} alt="desktop image" className='max-w-[400px] max-h-[593px]' />
          </div>
        </main>
      </body>
    </>
  )
}

export default App


/* 
Product discovery and building what matters
Measuring to ensure updates are a success
And much more! 


Email address
email@company.com
Subscribe to monthly newsletter






*/