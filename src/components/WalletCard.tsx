import React from 'react';
import { Checkbox } from '@mui/material';
import exclude from '../../public/exclude.svg';
import Image from 'next/image';
import bIcon from '../../public/bIcon.svg';
import copy from '../../public/copy.svg';
import { tokenIcons } from '@/constants';
import delete1 from '../../public/delete.svg'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

type walletCardType = {
  stepNo: number;
};

const WalletCard = ({ stepNo }: walletCardType) => {
  return (
    <section
      className={`flex border border-[#323232] bg-[#1B1B1B] md:rounded-[10px] ${
        stepNo == 2 ? 'p-2 ' : ' pl-7'
      } mb-[10px] items-start gap-2 pb-5 pt-5 md:rounded-lg`}
    >
      {stepNo == 2 && (
        <div>
          <Checkbox className="pt-0" {...label} defaultChecked />
        </div>
      )}

      <div className={`${stepNo == 2 ? 'md:basis-[90%]' : 'md:basis-[97%]'}`}>
        <div
          className={`mb-3 justify-between gap-2 md:flex ${stepNo == 4 ? 'mb-[20px] border-b border-zinc-700 pb-[20px]' : ''}`}
        >
          <div
            className={`${
              stepNo == 2
                ? 'flex basis-[100%] gap-2'
                : 'justify-bteween flex basis-full items-center gap-2 md:basis-[40%]'
            }`}
          >
            <div className="flex w-[90%] gap-3">
              <h3 className="text-[12px]">{stepNo == 2 ? '0x505dl8...765' : '0x505dl8...765'}</h3>
              <Image src={copy} width={18} height={18} alt="Exclude" />
              <Image src={exclude} width={18} height={18} alt="Exclude" />
              <Image src={bIcon} width={18} height={18} alt="Exclude" />
            </div>
            {stepNo == 4 && (
              <div className="justify-end">
                <Image src={delete1} width={18} height={18} alt="Delete icone" className='md:hidden cursor-pointer' />
              </div>
            )}
          </div>
          {stepNo == 4 && (
            <div className="flex basis-[50%] items-center gap-4 md:justify-end">
              <p className="rounded-lg justify-center gap-2 flex items-center w-[73px] h-[27px] text-[14px] border border-[#494949] text-center">30 <span className='text-[#8D8D8D]'>%</span></p>
              <div className="pt-2">
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    // checked={collection.activePrivate}
                    // onChange={handleCheckboxChange}
                    name="activePrivate"
                    className="peer sr-only"
                  />
                  <div className="peer h-6 w-11 rounded-full bg-[#878787] after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-black after:transition-all after:content-[''] peer-checked:bg-[#00A478] peer-checked:after:translate-x-full peer-checked:after:border-white  peer-focus:outline-0 peer-focus:ring-4 peer-focus:ring-[#00A478] dark:bg-gray-700 dark:peer-focus:ring-[[#00A478]]"></div>
                  <span className="ml-3 text-sm font-medium text-[#6c6c6c]">Pre-buy</span>
                </label>
              </div>
              <Image src={delete1} width={20} height={20} alt="Delete icone" className='hidden md:block cursor-pointer' />
            </div>
          )}
        </div>

        <section className="mt-4 flex flex-wrap items-center justify-between gap-y-[12px] md:flex-nowrap md:gap-y-0">
          <div className="basis-[32%]">
            <p className="mb-2 text-[10px] text-[#6c6c6c]">P&L</p>
            <h2 className="text-[12px]">5786 %</h2>
          </div>
          <div className="basis-[32%]">
            <p className="mb-2 text-[10px] text-[#6c6c6c]">Top Holdings</p>
            <span className="flex justify-start ">
              {tokenIcons?.map((i: string, index) => (
                <Image key={index} src={i} width={20} height={20} alt="tokens" className={`ml-[-5px]`} />
              ))}
            </span>
          </div>
          <div className="basis-[32%]">
            <p className="mb-2 text-[10px] text-[#6c6c6c]">Stable Coins</p>
            <h2 className="text-[12px]">76 %</h2>
          </div>
          <div className="basis-[32%]">
            <p className="mb-2 text-[10px] text-[#6c6c6c]">Trade Per Week</p>
            <h2 className="text-[12px]">16</h2>
          </div>
          <div className="basis-[32%]">
            <p className="mb-2 text-[10px] text-[#6c6c6c]">Last Trasaction</p>
            <h2 className="text-[12px]">2 days ago</h2>
          </div>
          <div className="basis-[32%]">
            <p className="mb-2 text-[10px] text-[#6c6c6c]">Wallet Size</p>
            <h2 className="text-[12px]">3.4 M</h2>
          </div>
        </section>
      </div>
    </section>
  );
};

export default WalletCard;
