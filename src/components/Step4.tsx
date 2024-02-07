import React from 'react';
import overview from '../../public/overview.svg';
import Image from 'next/image';
import WalletCard from './WalletCard';
import avatar from '../../public/avatar.svg';
import { vaultData } from '../constants/index';

const Step4 = () => {
  return (
    <section className="mt-[30px] rounded-lg bg-[#0F0F0F] pt-9 md:m-[0_auto] md:w-[718px] md:p-4 md:pl-7 md:pr-7">
      <div className="mb-8 ml-2 border-b border-zinc-700 pb-8 pt-5">
        <div className="flex items-center gap-2 ">
          <Image src={overview} width={30} height={30} alt="Ignore icon" />
          <h3 className="text-[24px]">Overview</h3>
        </div>
        <p className="mt-2 text-[14px] text-[#6c6c6c]">Some description some description some description</p>
      </div>

      <div>
        <div className="mb-9 ml-5 flex gap-[13px]">
          <div>
            <Image src={avatar} width={39} height={39} alt="Ignore icon" />
          </div>
          <div className="w-full">
            <div className="flex gap-[20px] items-center">
              <h3 className="text-[20px]">Star Vault</h3>
              <p className="rounded-full bg-white p-[2px_5px_2px_5px] h-[14px] w-[77px] text-[8px] text-black">Private Collection</p>
            </div>
            <p className="mt-[5px] w-[90%] truncate text-[14px] text-[#6c6c6c]">app.smartwhales.ai/vault/CUSTOM_LINK</p>
          </div>
        </div>
        {vaultData.slice(0, 3).map((data, index) => (
          <div key={index}>
            <WalletCard stepNo={4} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Step4;
