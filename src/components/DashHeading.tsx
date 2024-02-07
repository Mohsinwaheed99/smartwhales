import React, { MouseEventHandler } from 'react';
import Button from './Button';
import Image from 'next/image';

type dashHeadings = {
  heading: string;
  desc: string;
  isButton?: boolean;
  buttonText?: string;
  buttonClick?: MouseEventHandler;
  leftIcon?: string | null;
  mobileIcon?: string | null
};

const DashHeading = ({ heading, desc, isButton, buttonText, buttonClick, leftIcon, mobileIcon }: dashHeadings) => {
  return (
    <div className="items-center mr-6 xl:mr-0 justify-between min-[640px]:flex">
      <div>
        <div className='flex gap-2 items-center mb-1 xl:pl-0 pl-[16px] xl:border-l-0 xl:border-transparent border-l-[5px] border-[#5200FF]'>
        <div className='bg-[#5200FF] rounded-full w-10 h-10 flex items-center justify-center xl:!hidden'>
        <Image src={mobileIcon ? mobileIcon : ''} width={30} height={30} alt='Mobile Logo' className='' />
        </div>
        <h1 className="text-[24px] font-semibold">{heading}</h1>
        </div>
        <p className="text-[14px] text-[#808080] xl:pl-0 pl-[16px] max-[640px]:mb-6">{desc}</p>
      </div>
      {isButton && (
        <div className='pl-[16px]'>
          <Button
            title={buttonText || ''}
            leftIcon={leftIcon ? leftIcon : ''}
            className="items-center flex gap-2 font-[700] rounded-full bg-white p-[12px_20px_12px_20px] text-black max-[640px]:w-full max-[640px]:justify-center text-[14px]"
            handleClick={buttonClick}
          />
        </div>
      )}
    </div>
  );
};

export default DashHeading;
