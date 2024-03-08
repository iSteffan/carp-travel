export const ContactComponent = () => {
  return (
    <div
      className="max-w-[280px] mx-auto max-md:mb-[12px]
    md:max-w-[525px] md:h-[96px] md:flex md:flex-col md:flex-wrap md:content-between md:ml-[34px] md:mr-auto md:mb-[64px]
    lg:h-[356px] lg:max-w-[311px] lg:m-0 lg:col-start-2 lg:col-span-1 lg:row-start-1 lg:row-span-2"
    >
      <div
        className="mb-[24px] ml-auto w-[238px] flex gap-[20px] 
      md:w-[258px] md:ml-[30px]
      lg:mb-[64px] lg:ml-[34px] lg:w-[277px]"
      >
        <div className="flex flex-col ">
          <a
            href="tel:+380981234567"
            aria-label="tel to +380981234567"
            className="text-[14px] font-400 leading-[1.71]  lg:w-full
            md:text-[16px] md:leading-[1.5] 
            lg:text-[18px] lg:leading-[1.33]"
          >
            +38 (098) 12 34 567
          </a>
          <a
            href="tel:+380731234567"
            aria-label="tel to +380731234567"
            className="text-[14px] font-400 leading-[1.71] 
            md:text-[16px] md:leading-[1.5]
            lg:text-[18px] lg:leading-[1.33]"
          >
            +38 (073) 12 34 567
          </a>
        </div>
        <p className="mt-[3px] text-[12px] font-200 leading-[1.67] text-gray">Phone number</p>
      </div>
      <div
        className="ml-[16px] mb-[26px] flex gap-[20px] w-[218px] 
      md:m-0 md:w-[242px]
      lg:mb-[124px] lg:w-[265px] lg:mr-auto"
      >
        <a
          href="mailto:support@carptravel.com"
          aria-label="mail to support@carptravel.com"
          className="text-[14px] font-400 leading-[1.71] 
          md:text-[16px] md:leading-[1.5] 
          lg:text-[18px] lg:leading-[1.33]"
        >
          support@carptravel.com
        </a>
        <p className="mt-[3px] text-[12px] font-200 leading-[1.67] text-gray">E-mail</p>
      </div>
      <div
        className="flex flex-row-reverse gap-[20px] ml-auto mr-[15px] w-[138px] 
      md:m-0 md:w-[147px]
      lg:w-[157px] lg:flex-row lg:mr-[30px] lg:ml-auto"
      >
        <div className="text-left lg:text-right">
          <ul>
            <li>
              <a
                href="./"
                aria-label="facebook link"
                className="text-[14px] font-400 leading-[1.71] md:text-[16px] md:leading-[1.5] lg:text-[18px] lg:leading-[1.33]"
              >
                facebook
              </a>
            </li>
            <li>
              <a
                href="./"
                aria-label="instagram link"
                className="text-[14px] font-400 leading-[1.71] 
                md:text-[16px] md:leading-[1.5] 
                lg:text-[18px] lg:leading-[1.33]"
              >
                instagram
              </a>
            </li>
            <li>
              <a
                href="./"
                aria-label="youtube link"
                className="text-[14px] font-400 leading-[1.71] 
                md:text-[16px] md:leading-[1.5] 
                lg:text-[18px] lg:leading-[1.33]"
              >
                youtube
              </a>
            </li>
            <li>
              <a
                href="./"
                aria-label="tiktok link"
                className="text-[14px] font-400 leading-[1.71] 
                md:text-[16px] md:leading-[1.5] 
                lg:text-[18px] lg:leading-[1.33]"
              >
                tiktok
              </a>
            </li>
          </ul>
        </div>
        <p className="mt-[2px] text-[12px] font-200 leading-[1.67] text-gray">Follow us</p>
      </div>
    </div>
  );
};