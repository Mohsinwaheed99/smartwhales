import React, { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import Input from '@/components/Input';
import Image from 'next/image';
import usdt from '../../public/usdt.svg';
import HelpIcon from '@mui/icons-material/Help';
import Tooltip from '@mui/material/Tooltip';

type InfoTypes = {
  vaultName: string;
  price: string;
  link: string;
  desc: string;
  tokenDeposit: false;
  purchasePrice: false;
  threshold1: string;
  threshold2: string;
  weeklyDistribute: false;
};
const Step2 = () => {
  const [info, setInfo] = useState<InfoTypes>({
    vaultName: '',
    price: '',
    link: '',
    desc: '',
    tokenDeposit: false,
    purchasePrice: false,
    threshold1: '',
    threshold2: '',
    weeklyDistribute: false,
  });
  const handleInputChange = (field: keyof InfoTypes) => (value: string | number) => {
    setInfo((prevFormState) => ({
      ...prevFormState,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setInfo((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };

  return (
    <section className="mt-9 rounded-lg bg-[#0F0F0F] p-4 pl-7 pr-7 pt-9 md:m-[0_auto] md:w-[718px]">
      <div className="mb-7 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <InfoIcon />
            <h3 className="text-2xl">Vault Information</h3>
          </div>
          <p className="mt-2 text-[#6c6c6c]">Some description some description some description</p>
        </div>
      </div>

      <section>
        <div>
          <label className="mt-4 text-[12px] text-[#878787]">Vault Name <span className='!text-[#b91c1c]'>*</span></label>
          <div className='flex items-center justify-between'>
          <Input
            type="text"
            placeholder="The name of your vault"
            state={info.vaultName}
            setState={handleInputChange('vaultName')}
            className="ml-1 mt-2 w-full rounded-lg basis-[97%] mr-3 bg-[#1B1B1B] p-4 text-white focus:outline-0"
          />
          <Tooltip placement="right" title="We should show the %ROI and the %APY for each Collection, we should also " arrow>
          <HelpIcon className='cursor-pointer text-[#878787]' />
          </Tooltip>
          </div>
        </div>

        <div className="mt-5 md:w-[42%] ">
          <label className="mt-4 text-[#878787] text-[12px] mb-2">Min Participation Fee <span className='!text-[#b91c1c]'>*</span></label>
          <div className='flex items-center'>
          <div className="flex mt-2 gap-2 rounded-lg bg-[#1B1B1B] p-4">
            <Input
              type="text"
              placeholder="Min Price"
              state={info.price}
              setState={handleInputChange('price')}
              className="ml-1 w-full basis-[48%] rounded-lg bg-transparent text-white focus:outline-0"
            />
            <div className="flex basis-[48%] items-center gap-2 border-l border-zinc-700 pl-4">
              <Image src={usdt} width={25} height={25} alt="USDT" />
              <p>USDT</p>
            </div>
          </div>
          <HelpIcon className='text-[#878787] ml-3' />
          </div>
        </div>

        <div className="mt-5 w-full">
          <label className="mt-4 text-[12px] text-[#878787] mb-2">Custom Link</label>
          <div className='flex  items-center justify-between'>
          <div className="flex flex-wrap basis-[97%] mt-2">
            <p className="md:basis-[40%] basis-full rounded-[8px_0px_0px_8px] bg-[#323232] p-4 text-[#989898]">
              https://app.smartwhales.ai/vault/
            </p>
            <Input
              type="text"
              placeholder="Your Custom Link"
              state={info.link}
              setState={handleInputChange('link')}
              className="p-4 w-full md:basis-[54%] basis-full rounded-[0px_8px_8px_0px] bg-[#1B1B1B] pl-4 text-white focus:outline-0 "
            />
          </div>
          <HelpIcon className='text-[#878787] ml-3' />
          </div>
        </div>

        <div className="mt-5">
          <label className="mt-4 text-[12px] text-[#878787] mb-2">Description</label>
          <Input
            type="text"
            className="h-[200px] mt-2 w-full resize-none rounded-lg bg-[#272727] p-3 focus:outline-0"
            // placeholder='Your Vault Description'
            state={info.desc}
            setState={handleInputChange('desc')}
          />
        </div>

        <div className="mt-9 flex items-center gap-3 flex-col md:flex-row md:w-[65%]">
          <div className="flex h-[150px] basis-[80%] md:basis-[34%] items-center justify-center">
            <label
              htmlFor="dropzone-file"
              className="dark:hover:bg-bray-800 flex h-full text-[12px] w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-zinc-700 bg-[#272727] hover:bg-[#272727] dark:bg-[#272727] dark:bg-[#272727] dark:hover:border-zinc-700 dark:hover:bg-[#272727]"
            >
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <svg
                  className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <span className="font-base text-zinc-600">Upload Logo</span>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>

          <p className="basis-[65%] text-[12px] text-[#878787]">
            Some text description for what is that.File size limit 100MB. Allowed file types jpg, png.
          </p>
        </div>

        <div className="items-center justify-between md:flex">
          <div className=" mb-5 mt-5">
            <div className="pt-2">
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={info.tokenDeposit}
                  onChange={handleCheckboxChange}
                  name="tokenDeposit"
                  className="peer sr-only"
                />
                <div className="peer h-6 w-11 rounded-full bg-[#878787] after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-black after:transition-all after:content-[''] peer-checked:bg-[#00A478] peer-checked:after:translate-x-full peer-checked:after:border-white  peer-focus:outline-0 peer-focus:ring-4 peer-focus:ring-[#00A478] dark:bg-gray-700 dark:peer-focus:ring-[[#00A478]]"></div>
                <span className="ml-3 text-sm font-medium text-[#878787]">
                  Pre-buy token on deposit <HelpIcon className='text-[#878787] ml-3' />
                </span>
              </label>
            </div>

            <div className="flex items-center gap-3">
              <label className='text-[12px] text-[#878787]'>Threshold</label>
              <Input
                type="select"
                placeholder="Community"
                state={info.threshold1}
                setState={handleInputChange('threshold1')}
                options={['100%', '90%', '80%']}
                className="rounded-lg border-r-[10px] border-transparent bg-[#1B1B1B] p-4 focus:outline-0"
              />
            </div>
          </div>

          <div className="mb-5 mt-5">
            <div className="pt-2">
              <label className="relative flex-wrap sm:flex-nowrap md:flex-nowrap gap-y-[10px] inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={info.purchasePrice}
                  onChange={handleCheckboxChange}
                  name="purchasePrice"
                  className="peer sr-only"
                />
                <div className="peer h-6 w-11 rounded-full bg-[#878787] after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-black after:transition-all after:content-[''] peer-checked:bg-[#00A478] peer-checked:after:translate-x-full peer-checked:after:border-white  peer-focus:outline-0 peer-focus:ring-4 peer-focus:ring-[#00A478] dark:bg-gray-700 dark:peer-focus:ring-[[#00A478]]"></div>
                <span className="ml-3 text-[12px] font-medium text-[#878787]">
                  Pre-Buy Tokens Based on Last Purchase Price <HelpIcon className='text-[#878787] ml-3' />
                </span>
              </label>
            </div>

            <div className="flex items-center gap-3 md:justify-end">
              <label className='text-[#878787]'>Threshold</label>
              <Input
                type="select"
                placeholder="Community"
                state={info.threshold1}
                setState={handleInputChange('threshold1')}
                options={['100%', '90%', '80%']}
                className="rounded-lg border-r-[10px] text-[12px] border-transparent bg-[#1B1B1B] p-4 focus:outline-0"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="pt-2">
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={info.weeklyDistribute}
                onChange={handleCheckboxChange}
                name="weeklyDistribute"
                className="peer sr-only"
              />
              <div className="peer h-6 w-11 rounded-full bg-[#878787] after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-black after:transition-all after:content-[''] peer-checked:bg-[#00A478] peer-checked:after:translate-x-full peer-checked:after:border-white  peer-focus:outline-0 peer-focus:ring-4 peer-focus:ring-[#00A478] dark:bg-gray-700 dark:peer-focus:ring-[[#00A478]]"></div>
              <span className="ml-3 text-[12px] font-medium text-[#878787]">
                Weekly Redistribution <HelpIcon className='text-[#878787] ml-3' />
                </span>
            </label>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Step2;
