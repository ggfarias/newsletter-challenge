
import { useNavigate } from "react-router-dom";
import iconList from "../../images/icon-list.svg";

const SuccessContainer = () => {

    const navigate = useNavigate();


    return (
        <div className='bg-white m-auto p-auto max-w-[504px] max-h-[520px] w-[504px] h-[520px] rounded-3xl'>
            <div className='flex flex-col m-[48px]'>
                <img src={iconList} alt="check" className="w-[64px] h-[64px]" />
                <h1 className="text-[48px] font-bold text-dark-navy pt-5">Thanks for subscribing!</h1>
                <p className=" py-8 ">A confirmation email has been sent to your inbox. Please open it and click the button inside to confirm your subscription.</p>
                <button
                    onClick={() => navigate('/')}
                    className="cursor-pointer w-[376px] h-[56px] text-white bg-dark-navy rounded-xl font-bold 
                    hover:bg-gradient-to-b from-[#FF6A3A] to-[#FF527B] transition duration-200"
                >Dismiss message</button>
            </div>
        </div>
    )
}

export default SuccessContainer;