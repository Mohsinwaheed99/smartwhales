'use client';

import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import sell from '../../public/sell.svg';
import Image from 'next/image';
import danger from '../../public/danger.svg';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import bitcoin from '../../public/bitcoin.svg';
import astro from '../../public/astro.svg';
import usdt from '../../public/usdt.svg';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

type BasicCondition = {
  formType: 'Basic' | 'Advanced' | 'Disabled';
  price: string;
  averagePrice: string;
  sell: string;
};

type AdvancedCondition = {
  name: string;
  icon: string | null;
  id: number;
};

const SellCondition = () => {
  const [basicForm, setBasicForm] = useState<BasicCondition>({
    formType: 'Basic',
    price: '',
    averagePrice: '',
    sell: '',
  });
  const [advancedCoins, setAdvancedCoins] = useState<AdvancedCondition[]>([]);
  const [dropdown, setDropdown] = useState(false);

  const handleAdvancedCoins = (icons: AdvancedCondition) => {
    const isObjectExists = advancedCoins.some((obj) => obj.id === icons.id);
    if (!isObjectExists) setAdvancedCoins((prevObjects) => [...prevObjects, icons]);
  };

  const removeAdvancedIcon = (objectId: number) =>
    setAdvancedCoins((prevObjects) => prevObjects.filter((obj) => obj.id !== objectId));

  const handleInputChange = (field: keyof BasicCondition) => (value: string | number) => {
    setBasicForm((prevFormState) => ({
      ...prevFormState,
      [field]: value,
    }));
  };

  return (
    <div>
      <div className="mt-4">
        <Input
          type="select"
          placeholder="Community"
          state={basicForm.formType}
          setState={handleInputChange('formType')}
          options={['Basic', 'Advanced', 'Disabled']}
          className="rounded-[7px] border-r-[15px] border-transparent bg-[#1B1B1B] p-4 focus:outline-0"
        />
      </div>

      {basicForm.formType == 'Basic' ? (
        <div className="align-center mt-7 flex flex-wrap gap-3 pb-8 md:flex-nowrap md:justify-between">
          <div className="flex md:basis-[40%]">
            <p className="whitespace-nowrap pt-4 text-[#B3B3B3] text-sm">If the price has increased </p>
            <Input
              type="select"
              placeholder="Price"
              state={basicForm.price}
              setState={handleInputChange('price')}
              options={['100%', '90%', '80%']}
              className="rounded-[7px] border-r-[15px] border-transparent ml-2 mr-2 w-11/12	w-full bg-[#1B1B1B] p-3 focus:outline-0"
            />
          </div>
          <div className="flex md:basis-[25%]">
            <p className="whitespace-nowrap text-[#B3B3B3] pt-4 text-sm">from the</p>
            <Input
              type="select"
              placeholder="Average Price"
              state={basicForm.averagePrice}
              setState={handleInputChange('averagePrice')}
              options={['Average Price', 'Advanced', 'Disabled']}
              className="rounded-[7px] border-r-[15px] border-transparent ml-2 mr-2 w-11/12	 w-full bg-[#1B1B1B] p-3 focus:outline-0"
            />
          </div>
          <div className="flex md:basis-[30%]">
            <p className="pt-4 text-sm text-[#B3B3B3] ">sell</p>
            <Input
              type="select"
              placeholder="Average Price"
              state={basicForm.sell}
              setState={handleInputChange('sell')}
              options={['25%', '30%', '40%']}
              className="rounded-[7px] border-r-[15px] border-transparent ml-2 mr-2 w-11/12	 w-full bg-[#1B1B1B] p-3 focus:outline-0"
            />
            <p className="whitespace-nowrap pt-4 text-sm text-[#B3B3B3]">of token</p>
          </div>
        </div>
      ) : (
        <div>
          <div
            onClick={() => setDropdown((drop) => !drop)}
            className="relative mt-4 flex cursor-pointer justify-between rounded-lg border border-zinc-800 p-4"
          >
            <div className="flex basis-[95%] gap-2 ">
              {advancedCoins?.map((sell, index) => (
                <div
                  key={index}
                  className="flex cursor-pointer gap-2 rounded-lg border border-zinc-800 bg-[#1B1B1B] p-2"
                >
                  <Image src={sell.icon as string} width={20} height={20} alt={sell.name} />
                  <p>{sell.name}</p>
                  <CloseRoundedIcon onClick={() => removeAdvancedIcon(sell.id)} className="cursor-pointer" />
                </div>
              ))}
            </div>

            {!dropdown ? (
              <ExpandMoreRoundedIcon className="cursor-pointer" />
            ) : (
              <ExpandLessRoundedIcon className="cursor-pointer" />
            )}

            {dropdown && (
              <div className="absolute left-0 top-16 h-[150px] w-[250px] rounded-lg bg-[#1B1B1B] p-3">
                {advancedIcons.map((item, index) => (
                  <div
                    onClick={() => handleAdvancedCoins(item)}
                    key={index}
                    className="flex cursor-pointer gap-2 p-2 hover:bg-[#5200FF]"
                  >
                    <Image src={item.icon} width={20} height={20} alt="Danger" />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="h-[200px] overflow-y-auto  overflow-x-hidden md:h-20">
            {advancedCoins.map((form, index) => (
              <div
                key={index}
                className="align-center mb-4 mt-3 flex flex-wrap justify-between gap-y-[4px] border-b border-zinc-700 pb-4 md:flex-nowrap"
              >
                <div className="flex md:basis-[40%]">
                  <p className="whitespace-nowrap pt-4 text-[#B3B3B3] text-sm">If the price has increased </p>
                  <Input
                    type="select"
                    placeholder="Price"
                    state={basicForm.price}
                    setState={handleInputChange('price')}
                    options={['Basic', 'Advanced', 'Disabled']}
                    className="rounded-[7px] border-r-[15px] border-transparent ml-2 mr-2 w-11/12	w-full bg-[#1B1B1B] p-3 focus:outline-0"
                  />
                </div>
                <div className="flex md:basis-[25%]">
                  <p className="whitespace-nowrap text-[#B3B3B3] pt-4 text-sm">from the</p>
                  <Input
                    type="select"
                    placeholder="Average Price"
                    state={basicForm.averagePrice}
                    setState={handleInputChange('averagePrice')}
                    options={['Basic', 'Advanced', 'Disabled']}
                    className="rounded-[7px] border-r-[15px] border-transparent ml-2 mr-2 w-11/12	 w-full bg-[#1B1B1B] p-3 focus:outline-0"
                  />
                </div>
                <div className="flex md:basis-[35%]">
                  <p className="pt-4 text-sm text-[#B3B3B3]">sell</p>
                  <Input
                    type="select"
                    placeholder="Average Price"
                    state={basicForm.sell}
                    setState={handleInputChange('sell')}
                    options={['Basic', 'Advanced', 'Disabled']}
                    className="rounded-[7px] border-r-[10px] border-transparent ml-2 mr-2 w-11/12	 w-full bg-[#1B1B1B] p-3 focus:outline-0"
                  />
                  <p className="whitespace-nowrap pt-4 text-sm text-[#B3B3B3]">of token</p>
                  <div className="align-center flex cursor-pointer gap-2 p-2 hover:bg-[#5200FF]">
                    <Image src={form.icon as string} width={15} height={15} alt="Danger" />
                    <p className="pt-2 text-base">{form.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mb-5 mt-1 mt-[8px] md:mt-8 flex gap-1 border-t border-zinc-700 pt-1">
        <Image src={danger} width={15} height={15} alt="Danger" />
        <p className="text-sm text-[#DD524C]">3/6 coins met conditions already</p>
      </div>

      <div className="absolute left-0 md:border-t-0 border-t border-[#353535] bottom-[25px] flex w-full justify-center pt-[30px]">
        <Button
          title="Sell Condition"
          className="flex w-[212px] justify-center gap-2 text-[14px] rounded-full bg-[#5200FF] p-5 pl-7 pr-7 text-center text-white"
          leftIcon={sell}
        />
      </div>
    </div>
  );
};

export default SellCondition;

let advancedIcons = [
  {
    icon: astro,
    name: 'ASTRO',
    id: 1,
  },
  {
    icon: bitcoin,
    name: 'BITCOIN',
    id: 2,
  },
  {
    icon: usdt,
    name: 'DAI',
    id: 3,
  },
];
