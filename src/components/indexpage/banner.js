import Image from "next/image";
export default function Banner({ images }) {
  return (
    <>
      {images.map((img) => (
        <div className="flex py-2 px-4" key={img}>
          <div className="w-1/2">
            <Image
              src={img.banner}
              alt="banner"
              loading="eager"
              priority={true}
            />
          </div>
          <div className="ml-2 w-1/2 bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-md ">
            <div className="h-full flex flex-col w-full items-end">
              <Image
                className="w-1/4 bannerLogo"
                src={img.logo}
                alt={img.logo}
                loading="eager"
                priority={true}
              />
              <div className="text-white font-kh text-banner flex flex-col text-center mx-auto ">
                <span className="tracking-wider ">ស្វាគមន៍មកកាន់</span>
                <span>FIND UNIVERSITY</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
