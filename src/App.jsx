import './App.css'
import mainDesktopImage from './images/illustration-sign-up-desktop.svg'; 
import iconList from './images/icon-list.svg';

function App() {

  return (
    <>
      <body className='bg-[#36384D] w-screen h-screen flex items-center justify-center'>
        <main className='bg-white m-auto max-w-[928px] max-h-[641px] w-[928px] h-[641px] rounded-3xl flex flex-row p-[24px]'>
            <section className='w-1/2 flex flex-col justify-around content-start'>
              <div className='flex flex-col justify-around content-start'>
                <h1 className="text-[56px] font-bold text-dark-navy">Stay updated!</h1>
                <h4 className=''>Join 60,000+ product managers receiving monthly updates on:</h4>
                <div>
                  <ul className='flex flex-col'>
                    <li><img src={iconList} alt="icon list" />Product discovery and building what matters</li>
                    <li><img src={iconList} alt="icon list" />Measuring to ensure updates are a success</li>
                    <li><img src={iconList} alt="icon list" />And much more! </li>
                  </ul>
                </div>
              </div>
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