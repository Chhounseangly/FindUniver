export default function Banner() {
  return (
    <>
      <div className="flex py-2 px-4">
        <div className="w-1/2">
          <img src="/banner.png" alt="banner" />
         
        </div>
        <div className="relative ml-2 w-1/2 bg-banner-color rounded-md">
          <img className="w-1/4 absolute top-2 right-2" src="/logo.png" alt="logo" />
            <div className="font-bold text-white font-kh text-banner flex flex-col text-center absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
                <span>ស្វាគមន៍មកកាន់</span>
                <span>FIND UNIVERSITY</span>
            </div>
        </div>
      </div>
    </>
  );
}
