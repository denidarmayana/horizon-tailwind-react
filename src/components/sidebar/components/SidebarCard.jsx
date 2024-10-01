import logo from "assets/img/logo_sabara.png";

const FreeCard = () => {
  return (
    <div className="relative mt-5 mx-2 flex w-full justify-center rounded-[20px] bg-gradient-to-br from-[#868CFF] via-[#432CF3] to-brand-500 pb-2">
      <div className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-white bg-gradient-to-b from-[#868CFF] to-brand-500 dark:!border-navy-800">
        <img src={logo} alt="LogoSebara"/>
      </div>

      <div className="mt-8 flex h-fit flex-col items-center">
        
        <a
          target="blank"
          className="text-medium mt-7 block rounded-full bg-gradient-to-b from-white/50 to-white/10 py-[12px] px-11 text-center text-base text-white hover:bg-gradient-to-b hover:from-white/40 hover:to-white/5 "
          href="https://wa.me/6281220729369"
        >
          Hubungi CS
        </a>
      </div>
    </div>
  );
};

export default FreeCard;
