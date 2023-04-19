import Image from "next/image";
import logo from "../images/logo.png";
import banner from "../images/banner.png";

export default function Banner() {
  const images = [{ logo: logo, banner: banner }];

  return (
    <>
      {images.map((img) => (
        <div className="flex py-2 px-4" key={img}>
          <div className="w-1/2">
            <Image src={img.banner} alt="banner" loading="eager" priority={true} />
          </div>
          <div className="ml-2 w-1/2 bg-banner-color rounded-md">
            <div className="relative h-full">
              <Image
                className="w-1/4 absolute top-2 right-2 bannerLogo"
                src={img.logo}
                alt={img.logo}
                loading="eager" 
                priority={true}
              />
              <div className="text-white font-kh text-banner flex flex-col text-center absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
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
