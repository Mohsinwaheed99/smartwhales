import React from 'react';

type stepType = {
  step: number;
};

const Stepper = ({ step }: stepType) => {
  return (
    <div className="mb-[50px] border-b border-[#808080] pb-[25px]">
      <ul className=" mt-8 flex justify-between md:m-[0_auto] md:w-[817px] md:items-center">
        <li className="relative block flex basis-[22%] flex-col items-center gap-2 text-[12px] after:absolute after:right-[-3px] after:top-[13px] after:h-1 after:w-[20px] after:border-b-2 after:border-[#808080] after:content-[''] md:flex-row md:after:w-[58px]">
          <span
            className={
              step == 1
                ? 'flex h-8 w-8 items-center justify-center rounded-full bg-[#5200FF] text-[12px]                ]'
                : step > 1
                ? 'flex h-8 w-8 items-center justify-center rounded-full bg-[#1B1B1B] text-[12px]'
                : 'flex h-8 w-8 items-center justify-center rounded-full bg-[#1B1B1B] text-[12px]'
            }
          >
            1
          </span>
          <p
            className={
              step == 1
                ? 'text-center text-[12px] text-white'
                : step > 1
                ? 'text-center text-[12px] text-[#808080]'
                : 'text-center text-[#808080]'
            }
          >
            Add Wallet
          </p>
        </li>
        <li className="relative block flex basis-[27%] flex-col items-center gap-2 text-[12px] after:absolute after:right-[-3px] after:top-[13px] after:h-1 after:w-[20px] after:border-b-2 after:border-[#808080]  after:content-[''] md:flex-row md:after:w-[58px]">
          <span
            className={
              step == 2
                ? 'flex h-8 w-8 items-center justify-center rounded-full bg-[#5200FF] text-[12px]'
                : step > 2
                ? 'flex h-8 w-8 items-center justify-center rounded-full bg-[#1B1B1B] text-[12px]'
                : 'flex h-8 w-8 items-center justify-center rounded-full bg-[#1B1B1B] text-[12px]'
            }
          >
            2
          </span>
          <p
            className={
              step == 2
                ? 'text-center text-[12px] text-white'
                : step > 2
                ? 'text-center text-[12px] text-[#808080]'
                : 'text-center text-[12px] text-[#808080]'
            }
          >
            Basic Information
          </p>
        </li>
        <li className="relative block flex basis-[27%] flex-col items-center gap-2 text-[12px] after:absolute after:right-[-3px] after:top-[13px] after:h-1 after:w-[20px] after:border-b-2 after:border-[#808080]  after:content-[''] md:flex-row md:after:w-[58px]">
          <span
            className={
              step == 3
                ? 'flex h-8 w-8 items-center justify-center rounded-full bg-[#5200FF] text-[12px]'
                : step > 3
                ? 'flex h-8 w-8 items-center justify-center rounded-full bg-[#1B1B1B] text-[12px]'
                : 'flex h-8 w-8 items-center justify-center rounded-full bg-[#1B1B1B] text-[12px]'
            }
          >
            3
          </span>
          <p
            className={
              step == 3
                ? 'text-center text-[12px] text-white'
                : step > 3
                ? 'text-center text-[12px] text-[#808080]'
                : 'text-center text-[12px] text-[#808080]'
            }
          >
            Advanced Options
          </p>
        </li>
        <li className="relative flex basis-[20%] flex-col items-center gap-2 text-[12px] after:right-[-3px] md:flex-row ">
          <span
            className={
              step == 4
                ? 'flex h-8 w-8 items-center justify-center rounded-full bg-[#5200FF] text-[12px]'
                : step > 4
                ? 'flex h-9 w-9 items-center justify-center rounded-full bg-[#1B1B1B] text-[12px]'
                : 'flex h-8 w-8 items-center justify-center rounded-full bg-[#1B1B1B] text-[12px]'
            }
          >
            4
          </span>
          <p
            className={
              step == 4
                ? 'text-center text-[12px] text-white'
                : step > 4
                ? 'text-center text-[12px] text-[#808080]'
                : 'text-center text-[12px] text-[#808080]'
            }
          >
            Overview
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Stepper;
