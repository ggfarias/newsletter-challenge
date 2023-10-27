import iconList from "../../images/icon-list.svg";

const TextContainer = () => {
  return (
    <>
      <div className="flex flex-col justify-around content-start">
        <h1 className="text-[56px] font-bold text-dark-navy">Stay updated!</h1>
        <h4 className=" py-[24px]">
          Join 60,000+ product managers receiving monthly updates on:
        </h4>
        <div>
          <ul className="flex flex-col">
            <li className="flex flex-row gap-3 py-[5px]">
              <img src={iconList} alt="icon list" />
              Product discovery and building what matters
            </li>
            <li className="flex flex-row gap-3 py-[5px]">
              <img src={iconList} alt="icon list" />
              Measuring to ensure updates are a success
            </li>
            <li className="flex flex-row gap-3 py-[5px]">
              <img src={iconList} alt="icon list" />
              And much more!
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TextContainer;
