'use client';

import { toast } from 'react-toastify';
import css from './ContactForm.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  fullname: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    toast.success('We have received your contact data, you can check it in the console tab');

    console.log(data);
  };

  const fullnameLabel = errors.fullname ? 'text-accent-red label' : 'label';

  const emailLabel = errors.email ? 'text-accent-red label' : 'label';

  const fullnameInput = errors.fullname
    ? 'w-full text-accent-red pl-[8px] input lg:py-[2px]'
    : 'w-full pl-[8px] input lg:py-[2px]';

  const emailInput = errors.email
    ? 'w-full text-accent-red pl-[8px] input lg:py-[2px]'
    : 'w-full pl-[8px] input lg:py-[2px]';

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[16px] 
    md:grid md:grid-cols-[222px,20px,463px] md:grid-rows-[52px,28px,52px,117px,16px,36px] md:gap-0 
    lg:grid-cols-[293px,24px,294px] lg:grid-rows-[56px,40px,202px,24px,39px]
    lg:col-start-4 lg:col-span-1 lg:row-start-2 lg:row-span-2"
      >
        <label
          className="relative flex flex-col gap-[4px] 
      md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-1 
      lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-1"
        >
          <span className={fullnameLabel}>Full name</span>
          <input
            {...register('fullname', { required: true, pattern: /^[A-Za-z]+$/i })}
            placeholder="John Smith"
            className={fullnameInput}
          />
          {errors.fullname && errors.fullname.type === 'required' && (
            <p className={css['input-error']}>This field is required</p>
          )}
          {errors.fullname && errors.fullname.type === 'pattern' && (
            <p className={css['input-error']}>Incorrect name</p>
          )}
        </label>
        <label
          className="relative flex flex-col gap-[4px] 
      md:col-start-1 md:col-span-1 md:row-start-3 md:row-span-1 
      lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-1"
        >
          <span className={emailLabel}>E-mail</span>
          <input
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
            placeholder="johnsmith@email.com"
            className={emailInput}
          />
          {errors.email && errors.email.type === 'required' && (
            <p className={css['input-error']}>This field is required</p>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <p className={css['input-error']}>Incorrect email</p>
          )}
        </label>

        <label
          className="flex flex-col gap-[4px] 
      md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-4 
      lg:col-start-1 lg:col-span-3 lg:row-start-3 lg:row-span-1"
        >
          <span className="label">Message</span>
          <textarea
            {...register('message')}
            className="p-[8px] h-[196px] input md:h-full resize-none"
          />
        </label>

        <button
          className="ml-auto text-[30px] 
        md:col-start-3 md:col-span-1 md:row-start-6 md:row-span-1 
        lg:col-start-3 lg:col-span-1 lg:row-start-5 lg:row-span-1"
          type="submit"
          onClick={() => {}}
        >
          SEND
        </button>
      </form>
    </>
  );
};

export default ContactForm;
