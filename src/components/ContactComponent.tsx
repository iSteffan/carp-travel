export const ContactComponent = () => {
  return (
    <div
      className="max-w-[280px] mx-auto smMax:mb-[12px]
    md:max-w-[525px] md:h-[98px] md:flex md:flex-col md:flex-wrap md:content-between md:ml-[34px] md:mr-auto md:mb-[64px]
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
            className="contacts hover-underline"
          >
            +38 (098) 12 34 567
          </a>
          <a
            href="tel:+380731234567"
            aria-label="tel to +380731234567"
            className="contacts hover-underline"
          >
            +38 (073) 12 34 567
          </a>
        </div>
        <p className="mt-[3px] text-[12px] font-200 leading-[1.67]">Phone number</p>
      </div>
      <div
        className="ml-[16px] mb-[26px] flex gap-[20px] w-[218px] 
      md:m-0 md:w-[242px]
      lg:mb-[124px] lg:w-[265px] lg:mr-auto"
      >
        <a
          href="mailto:support@carptravel.com"
          aria-label="mail to support@carptravel.com"
          className="contacts hover-underline"
        >
          support@carptravel.com
        </a>
        <p className="mt-[3px] text-[12px] font-200 leading-[1.67]">E-mail</p>
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
                className="contacts hover-underline"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                facebook
              </a>
            </li>
            <li>
              <a
                href="./"
                aria-label="instagram link"
                className="contacts hover-underline"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                instagram
              </a>
            </li>
            <li>
              <a
                href="./"
                aria-label="youtube link"
                className="contacts hover-underline"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                youtube
              </a>
            </li>
            <li>
              <a
                href="./"
                aria-label="tiktok link"
                className="contacts hover-underline"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                tiktok
              </a>
            </li>
          </ul>
        </div>
        <p className="mt-[2px] text-[12px] font-200 leading-[1.67]">Follow us</p>
      </div>
    </div>
  );
};
