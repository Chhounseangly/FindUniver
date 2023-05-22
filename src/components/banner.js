export default function Banner({ children, text, name, logo }) {
  return (
    <>
      <div className="flex p-2 min-h-[22vw] h-fit">
        <div className="w-1/2 ">{children}</div>
        <div className="ml-2 w-1/2  bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-md  ">
          <div className="h-full flex flex-col w-full">
            <div className="text-white text-welcomeText flex flex-col gap-2 text-center m-auto items-center">
              {logo}
              <span className="tracking-wider font-khBtB ">{text}</span>
              <span className="font-serif">{name}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
