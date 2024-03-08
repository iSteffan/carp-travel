import Link from 'next/link';
import css from './Contacts.module.css';
import { ContactComponent } from '@/components/ContactComponent';
import ContactForm from '@/components/ContactForm/ContactForm';
const Contacts = () => {
  return (
    <section className={css.section}>
      <div className="lg:px-[24px]">
        <h2 className="title mb-[36px] lg:mb-[71px]">
          CONTACT <span className="font-500">US</span>
        </h2>

        <ContactComponent />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contacts;
