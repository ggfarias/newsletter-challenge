
import FormContainer from '../../components/FormContainer';
import TextContainer from '../../components/TextContainer';
import mainDesktopImage from '../../images/illustration-sign-up-desktop.svg'; 


const InitialPage = () => {
    return(
        <main className='bg-white m-auto max-w-[928px] max-h-[641px] w-[928px] h-[641px] rounded-3xl flex flex-row p-[24px]'>
          <section className='w-1/2 flex flex-col justify-around content-start pl-[40px]'>
            <TextContainer />
            <FormContainer />
          </section>
          <div className='w-1/2 flex flex-row items-end justify-end'>
            <img src={mainDesktopImage} alt="desktop image" className='max-w-[400px] max-h-[593px]' />
          </div>
        </main>
    )
}

export default InitialPage;