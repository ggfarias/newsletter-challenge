import { useState } from "react";
import { useNavigate } from "react-router-dom";




const FormContainer = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const navigate = useNavigate();

  function validadeEmail() {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (emailRegex.test(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  return (
    <>
        <section className="flex flex-col justify-around content-start">
            <p className="text-dark-navy">Email adress</p>
            <form action="" method="get" className="pb-[24px] pt-[10px]">
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="email@company.com" 
                  className={`cursor-pointer w-[376px] h-[56px] rounded-xl border-2
                  ${isEmailValid ? 'border-[#19182B, 25]' : 'border-#FF6155'}
                  border-solid placeholder:italic placeholder-text-slate-400 py-2 pl-4
                  ${!isEmailValid ? 'bg-[#fb7a71]' : ' '} ${!isEmailValid ? 'text-white' : ' '} `}  />
            </form>
            <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  validadeEmail();
                  navigate('./success')
                }}
                className="cursor-pointer w-[376px] h-[56px] text-white bg-dark-navy rounded-xl font-bold mb-[30px] 
                hover:bg-gradient-to-b from-[#FF6A3A] to-[#FF527B] transition duration-200"
            >
            Subscribe to monthly newsletter
            </button>
       </section>
    </>
  );
};

export default FormContainer;

