const FormContainer = () => {
  return (
    <>
        <section className="flex flex-col justify-around content-start">
            <p className="text-dark-navy">Email adress</p>
            <form action="" method="get" className="pb-[24px] pt-[10px]">
                <input type="e-mail" placeholder="email@company.com" className="w-[376px] h-[56px] rounded-xl border-[#19182B, 25] border-solid border-2 placeholder:italic placeholder:text-slate-400 py-2 pl-4" />
            </form>
            <button
                type="submit"
                className="w-[376px] h-[56px] text-white bg-dark-navy rounded-xl font-bold mb-[50px]"
            >
            Subscribe to monthly newsletter
            </button>
        </section>
    </>
  );
};

export default FormContainer;

