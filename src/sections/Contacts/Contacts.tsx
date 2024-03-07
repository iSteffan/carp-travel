import Link from 'next/link';
import css from './Contacts.module.css';
const Contacts = () => {
  return (
    <section className={css.section}>
      <h2 className="title mb-[36px]">
        CONTACT <span className="font-medium">US</span>
      </h2>

      <div className="max-w-[280px] mx-auto md:max-w-[525px] md:h-[96px] md:flex md:flex-col md:flex-wrap md:content-between md:ml-[34px] md:mr-auto">
        <div className="mb-[24px] ml-auto w-[238px] flex gap-[20px] md:w-[258px] md:ml-[30px]">
          <div className="flex flex-col">
            <a
              href="tel:+380981234567"
              aria-label="tel to +380981234567"
              className="text-[14px] font-400 leading-[1.71] md:text-[16px] md:leading-[1.5]"
            >
              +38 (098) 12 34 567
            </a>
            <a
              href="tel:+380731234567"
              aria-label="tel to +380731234567"
              className="text-[14px] font-400 leading-[1.71] md:text-[16px] md:leading-[1.5]"
            >
              +38 (073) 12 34 567
            </a>
          </div>
          <p className="mt-[3px] text-[12px] font-200 leading-[1.67] text-gray">Phone number</p>
        </div>

        <div className="ml-[16px] mb-[26px] flex gap-[20px] w-[218px] md:m-0 md:w-[242px]">
          <a
            href="mailto:support@carptravel.com"
            aria-label="mail to support@carptravel.com"
            className="text-[14px] font-400 leading-[1.71] md:text-[16px] md:leading-[1.5]"
          >
            support@carptravel.com
          </a>
          <p className="mt-[3px] text-[12px] font-200 leading-[1.67] text-gray">E-mail</p>
        </div>

        <div className="flex flex-row-reverse gap-[20px] ml-auto mr-[15px] mb-[12px] w-[138px] md:m-0 md:w-[147px]">
          <div>
            <ul>
              <li>
                <a
                  href="./"
                  aria-label="mail to support@carptravel.com"
                  className="text-[14px] font-400 leading-[1.71] md:text-[16px] md:leading-[1.5]"
                >
                  facebook
                </a>
              </li>
              <li>
                <a
                  href="./"
                  aria-label="mail to support@carptravel.com"
                  className="text-[14px] font-400 leading-[1.71] md:text-[16px] md:leading-[1.5]"
                >
                  instagram
                </a>
              </li>
              <li>
                <a
                  href="./"
                  aria-label="mail to support@carptravel.com"
                  className="text-[14px] font-400 leading-[1.71] md:text-[16px] md:leading-[1.5]"
                >
                  youtube
                </a>
              </li>
              <li>
                <a
                  href="./"
                  aria-label="mail to support@carptravel.com"
                  className="text-[14px] font-400 leading-[1.71] md:text-[16px] md:leading-[1.5]"
                >
                  tiktok
                </a>
              </li>
            </ul>
          </div>
          <p className="mt-[2px] text-[12px] font-200 leading-[1.67] text-gray">Follow us</p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
