'use client';

import InputMask from 'react-input-mask';
import Image from 'next/image';
import { useState } from 'react';
import { CheckedIcon, UncheckedIcon } from '@/assets/icons';
import { useForm, SubmitHandler } from 'react-hook-form';

import css from './CareerForm.module.css';

type Inputs = {
  fullname: string;
  email: string;
  position: string;
  phone: string;
  message: string;
  checkbox: boolean;
};

const CareerForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    const formattedData = {
      ...data,
      phone: `+38 ${data.phone}`,
    };
    console.log(formattedData);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const fullnameLabel = errors.fullname
    ? 'text-accent-red text-[14px] font-extralight leading-[2] tracking-[2.4px] md:text-[12px]'
    : 'text-[14px] font-extralight leading-[2] tracking-[2.4px] md:text-[12px]';

  const emailLabel = errors.email
    ? 'text-accent-red text-[14px] font-extralight leading-[2] tracking-[2.4px] md:text-[12px]'
    : 'text-[14px] font-extralight leading-[2] tracking-[2.4px] md:text-[12px]';

  const positionLabel = errors.position
    ? 'text-accent-red text-[14px] font-extralight leading-[2] tracking-[2.4px] md:text-[12px]'
    : 'text-[14px] font-extralight leading-[2] tracking-[2.4px] md:text-[12px]';

  const phoneLabel = errors.phone
    ? 'text-accent-red text-[14px] font-extralight leading-[2] tracking-[2.4px] md:text-[12px]'
    : 'text-[14px] font-extralight leading-[2] tracking-[2.4px] md:text-[12px]';

  const phoneInput = errors.phone
    ? 'w-full text-accent-red pl-[40px] text-[13px] font-extralight leading-[1.85] bg-input placeholder:opacity-50 lg:text-[20px] lg:leading-[1.2] lg:py-[2px] lg:pl-[58px]'
    : 'w-full pl-[40px] text-[13px] font-extralight leading-[1.85] bg-input placeholder:opacity-50 lg:text-[20px] lg:leading-[1.2] lg:py-[2px] lg:pl-[58px]';

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[16px] 
    md:grid md:grid-cols-[222px,20px,221px] md:grid-rows-[52px,16px,52px,16px,52px,16px,52px,9px,7px,29px,15px] md:gap-0 
    lg:grid-cols-[290px,24px,292px] lg:grid-rows-[56px,24px,56px,24px,56px,24px,56px,24px,12px,27px,21px]"
    >
      <label
        className="relative flex flex-col gap-[4px] 
      md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-1"
      >
        <span className={fullnameLabel}>Full name</span>
        <input
          {...register('fullname', { required: true })}
          placeholder="John Smith"
          className="pl-[8px] text-[13px] font-extralight leading-[1.85] bg-input placeholder:opacity-50 lg:text-[20px] lg:leading-[1.2] lg:py-[2px]"
        />
        {errors.fullname && <p className={css['input-error']}>Incorrect name</p>}
      </label>

      <label
        className="relative flex flex-col gap-[4px] 
      md:col-start-1 md:col-span-1 md:row-start-3 md:row-span-1"
      >
        <span className={emailLabel}>E-mail</span>
        <input
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
          placeholder="johnsmith@email.com"
          className="pl-[8px] text-[13px] font-extralight leading-[1.85] bg-input placeholder:opacity-50 lg:text-[20px] lg:leading-[1.2] lg:py-[2px]"
        />
        {errors.email && <p className={css['input-error']}>Incorrect email</p>}
      </label>

      <label
        className="relative flex flex-col gap-[4px] 
        md:col-start-1 md:col-span-1 md:row-start-5 md:row-span-1"
      >
        <span className={positionLabel}>Position</span>
        <input
          {...register('position', { required: true })}
          placeholder="Movie maker"
          className="pl-[8px] text-[13px] font-extralight leading-[1.85] bg-input placeholder:opacity-50 lg:text-[20px] lg:leading-[1.2] lg:py-[2px]"
        />
        {errors.position && <p className={css['input-error']}>This field is required</p>}
      </label>

      <label
        className="relative flex flex-col gap-[4px] 
      md:col-start-1 md:col-span-1 md:row-start-7 md:row-span-1"
      >
        <span className={phoneLabel}>Phone</span>
        <div className="relative">
          <InputMask
            {...register('phone', {
              required: true,
              pattern: /^\(\d{3}\) \d{2} \d{2} \d{3}$/i,
            })}
            mask="(999) 99 99 999"
            maskChar=""
            placeholder="(097) 12 34 567"
            className={phoneInput}
          />
          <p className="absolute top-[50%] left-[8px] translate-y-[-50%] text-[13px] font-extralight leading-[1.85] lg:text-[20px] lg:leading-[1.2]">
            + 38
          </p>
        </div>
        {errors.phone && <p className={css['input-error']}>Incorrect phone</p>}
      </label>

      <label
        className="flex flex-col gap-[4px] 
      md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-7"
      >
        <span className="text-[14px] font-extralight leading-[2] tracking-[2.4px] md:text-[12px]">
          Message
        </span>
        <textarea
          {...register('message')}
          className="p-[8px] h-[196px] text-[13px] font-extralight leading-[1.85] bg-input placeholder:opacity-50 md:h-full"
        />
      </label>

      <label
        className="relative flex gap-[8px] 
      md:col-start-1 md:col-span-1 md:row-start-10 md:row-span-2"
      >
        <input
          type="checkbox"
          {...register('checkbox', {})}
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-[28px] opacity-0 lg:w-[30px]"
        />
        <div className="absolute top-0 left-0">
          {!isChecked ? (
            <Image
              src={UncheckedIcon}
              width={22}
              height={22}
              alt="checkbox unchecked"
              className="lg:w-[24px] lg:h-[24px]"
            />
          ) : (
            <Image
              src={CheckedIcon}
              width={22}
              height={22}
              alt="checkbox checked"
              className="lg:w-[24px] lg:h-[24px]"
            />
          )}
        </div>

        <span className="mt-[2px] text-[12px] font-extralight leading-[1.83] md:mt-0">
          I confirm my consent to the processing of personal data.
        </span>
      </label>

      <button
        className="ml-auto text-[30px] 
        md:col-start-3 md:col-span-1 md:row-start-9 md:row-span-2"
        type="submit"
        onClick={() => {}}
      >
        SEND
      </button>
    </form>
  );
};

export default CareerForm;
