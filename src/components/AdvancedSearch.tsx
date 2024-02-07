'use client';

import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CloseIcon from '@mui/icons-material/Close';
import bitcoin from '../../public/bitcoin.svg';
import Image from 'next/image';
import usdt from '../../public/usdt.svg';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SearchIcon from '@mui/icons-material/Search';
import { vaultData } from '@/constants';
import WalletCard from './WalletCard';

type FilterType = {
  chain: string;
  profile: string;
  searchBar: string;
  profitTrafeMin: number;
  profitTrafeMax: number;
  numberOfCoinsMin: number;
  numberOfCoinsMax: number;
  tradePerWeekMin: number;
  tradePerWeekMax: number;
  walletSizeMin: number;
  walletSizeMax: number;
  tradeDropDown: boolean;
  focusDropDown: boolean;
  fundDropDown: boolean;
  lastTrade: { name: string; id: number }[];
  focus: { name: string; id: number }[];
  funds: { name: string; id: number }[];
};

type tagsType = {
  name: string;
  id: number;
};

type searchProps ={
    showFilter:()=> void,
    searchPosition?:string
}

const AdvancedSearch = ({showFilter,searchPosition}:searchProps) => {
    const [mobileFilter,setMobileFilter] = useState(false)

  const handleMobileFilter = () => {
    setMobileFilter(!mobileFilter);
  };
  const [search, setSearch] = useState<FilterType>({
    chain: '',
    profile: '',
    profitTrafeMin: 0,
    profitTrafeMax: 0,
    numberOfCoinsMin: 0,
    numberOfCoinsMax: 0,
    tradePerWeekMin: 0,
    tradePerWeekMax: 0,
    walletSizeMin: 0,
    walletSizeMax: 0,
    searchBar: '',
    tradeDropDown: false,
    focusDropDown: false,
    fundDropDown: false,
    lastTrade: [],
    focus: [],
    funds: [],
  });

  const handleInputChange = (field: keyof FilterType) => (value: string | number) => {
    setSearch((prevFormState) => ({
      ...prevFormState,
      [field]: value,
    }));
  };

  const handleTagsField = (icons: tagsType, searchType: string) => {
    if (searchType == 'lastTrade') {
      const isObjectExists = search.lastTrade.some((obj) => obj.id === icons.id);
      if (!isObjectExists)
        setSearch((prevSearch) => ({
          ...prevSearch,
          lastTrade: [...prevSearch.lastTrade, icons],
        }));
    } else if (searchType == 'focus') {
      const isObjectExists = search.focus.some((obj) => obj.id === icons.id);
      if (!isObjectExists)
        setSearch((prevSearch) => ({
          ...prevSearch,
          focus: [...prevSearch.focus, icons],
        }));
    } else {
      const isObjectExists = search.funds.some((obj) => obj.id === icons.id);
      if (!isObjectExists)
        setSearch((prevSearch) => ({
          ...prevSearch,
          funds: [...prevSearch.funds, icons],
        }));
    }
  };

  const removeAdvancedIcon = (objectId: number, type: string) => {
    if (type == 'lastTrade') {
      setSearch((prevSearch) => ({
        ...prevSearch,
        lastTrade: prevSearch.lastTrade.filter((item) => item.id !== objectId),
      }));
    } else if (type == 'focus') {
      setSearch((prevSearch) => ({
        ...prevSearch,
        focus: prevSearch.focus.filter((item) => item.id !== objectId),
      }));
    } else {
      setSearch((prevSearch) => ({
        ...prevSearch,
        funds: prevSearch.funds.filter((item) => item.id !== objectId),
      }));
    }
  };

  let { tradeDropDown, focusDropDown, fundDropDown } = search;
  return (
    <section className={`flex ${searchPosition !== "navbarSearch"?"md:flex-row-reverse bg-black":"md:flex-row bg-[rgba(0 0 0 0.4)] left-[30px]"} flex-col absolute top-0 w-full 2xl:h-screen overflow-auto scroll  z-40`}>
    
        <section className={`${searchPosition ==="navbarSearch" ? "basis-[40%] z-40 backdrop-blur-sm":"basis-[60%] p-7" }`}>
          {searchPosition == "createVault"  && 
            <div>
            <div className='flex justify-end items-end'>
                <CloseIcon onClick={showFilter} className='cursor-pointer' />
            </div>

            <div className='flex items-center'>
            <SearchIcon className='text-white bg-[#1B1B1B] rounded-full text-2xl p-1' />
            <Input
                type="text"
                placeholder='Search Results'
                state={search.searchBar}
                setState={handleInputChange('searchBar')}
                className='focus:outline-0 w-full  p-3 bg-transparent'
            />
            </div>
            <p onClick={handleMobileFilter} className='md:hidden underline text-[#5362E6] text-base'>Filter</p>

            <div className='flex justify-between items-center mt-6 mb-4 pl-2 pr-2'>
                <p>Wallet</p>
                <span className='bg-[#5200FF] p-1 rounded-full'>{vaultData.length} wallet selection</span>
            </div>

            <div>
            { vaultData.length > 0 ?
                vaultData.slice(0,6).map((vault,index)=>(
                    <div key={index}>
                    <WalletCard stepNo={2} />
                    </div>
                ))
                :
                <div className='flex h-screen flex-col justify-center items-center'>
                <SearchIcon className='text-[#808080] text-[60px]' />
                <p className='text-[#808080] text-lg'>No search results</p>
                </div>
            }
            </div>
          </div>}
        </section>

        <section className={` p-7 ${searchPosition ==="navbarSearch" ? "border-l basis-[70%] ":"border-r basis-[40%]"} pt-[50px] border-[#424242] h-full bg-black`}>
          <div className="mb-[20px] flex items-center gap-3">
            <FilterAltIcon className="rounded-full bg-[#1B1B1B] p-1 text-2xl" />
            <div className='flex justify-between w-full'>
              <p className='text-[16px]'>Filters</p>
            {searchPosition ==='navbarSearch' && <CloseIcon onClick={showFilter} className='cursor-pointer' />}
              </div>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="basis-[48%]">
              <label className="text-[13px] text-[#6c6c6c]">Chain</label>
              <div className="mt-2 flex gap-1 rounded-lg bg-[#1B1B1B]">
                <Image className="ml-2" src={bitcoin} width={30} height={30} alt="youtube icon" />
                <Input
                  type="select"
                  placeholder="Chain"
                  state={search.chain}
                  setState={handleInputChange('chain')}
                  options={['BSC', 'BITCOIN']}
                  className="w-full text-[14px] border-r-[15px] border-transparent bg-transparent p-3 pr-2 focus:outline-0"
                />
              </div>
            </div>
            <div className="basis-[48%]">
              <label className="text-[13px] text-[#6c6c6c]">Made Profit In</label>
              <div className="mt-2 flex gap-1 rounded-lg bg-[#1B1B1B]">
                <Image className="ml-2" src={usdt} width={30} height={30} alt="youtube icon" />
                <Input
                  type="select"
                  placeholder="Made Profit In"
                  state={search.chain}
                  setState={handleInputChange('chain')}
                  options={['BSC', 'BITCOIN']}
                  className="w-full text-[14px] border-r-[15px] border-transparent bg-transparent p-3 pr-2 focus:outline-0"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-y-6">
            <div className="basis-48% w-[48%]">
              <label className="text-[13px] text-[#6c6c6c]">Profit Trade</label>
              <MultiRangeSlider
                min={0}
                max={100}
                onInput={(e: ChangeResult) => {
                  setSearch((prevSearch) => ({ ...prevSearch, profitTrafeMin: e.minValue }));
                  setSearch((prevSearch) => ({ ...prevSearch, profitTrafeMax: e.maxValue }));
                }}
                label={false}
                ruler={false}
                style={{ border: 'none', boxShadow: 'none', padding: '15px 10px', width: '100%' }}
                barLeftColor="#DD914C"
                barInnerColor="#80C267"
                barRightColor="#20BD82"
                thumbLeftColor="white"
                thumbRightColor="white"
              />
            </div>
            <div className="basis-48% w-[48%]">
              <label className="text-[13px] text-[#6c6c6c]">Number of Coins</label>
              <MultiRangeSlider
                min={0}
                max={100}
                onInput={(e: ChangeResult) => {
                  setSearch((prevSearch) => ({ ...prevSearch, numberOfCoinsMin: e.minValue }));
                  setSearch((prevSearch) => ({ ...prevSearch, numberOfCoinsMax: e.maxValue }));
                }}
                label={false}
                ruler={false}
                style={{ border: 'none', boxShadow: 'none', padding: '15px 10px', width: '100%' }}
                barLeftColor="#DD914C"
                barInnerColor="#80C267"
                barRightColor="#20BD82"
                thumbLeftColor="white"
                thumbRightColor="white"
              />
            </div>
            <div className="basis-48% w-[48%]">
              <label className="text-[13px] text-[#6c6c6c]">Trade Per Week</label>
              <MultiRangeSlider
                min={0}
                max={100}
                onInput={(e: ChangeResult) => {
                  setSearch((prevSearch) => ({ ...prevSearch, tradePerWeekMin: e.minValue }));
                  setSearch((prevSearch) => ({ ...prevSearch, tradePerWeekMax: e.maxValue }));
                }}
                label={false}
                ruler={false}
                style={{ border: 'none', boxShadow: 'none', padding: '15px 10px', width: '100%' }}
                barLeftColor="#DD914C"
                barInnerColor="#80C267"
                barRightColor="#20BD82"
                thumbLeftColor="white"
                thumbRightColor="white"
              />
            </div>
            <div className="basis-48% w-[48%]">
              <label className="text-[13px] text-[#6c6c6c]">Profit Trade</label>
              <MultiRangeSlider
                min={0}
                max={100}
                onInput={(e: ChangeResult) => {
                  setSearch((prevSearch) => ({ ...prevSearch, walletSizeMin: e.minValue }));
                  setSearch((prevSearch) => ({ ...prevSearch, walletSizeMax: e.maxValue }));
                }}
                label={false}
                ruler={false}
                style={{ border: 'none', boxShadow: 'none', padding: '15px 10px', width: '100%' }}
                barLeftColor="#DD914C"
                barInnerColor="#80C267"
                barRightColor="#20BD82"
                thumbLeftColor="white"
                thumbRightColor="white"
              />
            </div>
          </div>

          <div className="mb-[20px] mt-7">
            <label className="text-[13px] text-[#6c6c6c]">Last Trade</label>
            <div
              onClick={() => setSearch((drop) => ({ ...drop, tradeDropDown: !tradeDropDown }))}
              className="relative mt-[10px] flex cursor-pointer justify-between rounded-lg border border-[#353535] p-3"
            >
              <div className="flex basis-[95%] gap-2 ">
                {search &&
                  search.lastTrade?.map((sell, index) => (
                    <div
                      key={index}
                      className="flex cursor-pointer gap-2 rounded-lg border border-[#353535] bg-[#1B1B1B] p-2"
                    >
                      <p>{sell.name}</p>
                      <CloseRoundedIcon
                        onClick={() => removeAdvancedIcon(sell.id, 'lastTrade')}
                        className="cursor-pointer"
                      />
                    </div>
                  ))}
              </div>

              {!tradeDropDown ? (
                <ExpandMoreRoundedIcon className="cursor-pointer" />
              ) : (
                <ExpandLessRoundedIcon className="cursor-pointer" />
              )}

              {tradeDropDown && (
                <div className="absolute left-0 top-16 z-10 h-[170px] w-[250px] rounded-lg bg-[#1B1B1B] p-3">
                  {trades.map((item, index) => (
                    <div
                      onClick={() => handleTagsField(item, 'lastTrade')}
                      key={index}
                      className="flex cursor-pointer gap-2 p-2 hover:bg-[#5200FF]"
                    >
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mb-[20px]">
            <label className="text-[13px] text-[#6c6c6c]">Focus</label>
            <div
              onClick={() => setSearch((drop) => ({ ...drop, focusDropDown: !focusDropDown }))}
              className="relative mt-[10px] flex cursor-pointer justify-between rounded-lg border border-[#353535] p-3"
            >
              <div className="flex basis-[95%] gap-2 ">
                {search &&
                  search.focus?.map((sell, index) => (
                    <div
                      key={index}
                      className="flex cursor-pointer gap-2 rounded-lg border border-[#353535] bg-[#1B1B1B] p-2"
                    >
                      <p>{sell.name}</p>
                      <CloseRoundedIcon onClick={() => removeAdvancedIcon(sell.id, 'focus')} className="cursor-pointer" />
                    </div>
                  ))}
              </div>

              {!focusDropDown ? (
                <ExpandMoreRoundedIcon className="cursor-pointer" />
              ) : (
                <ExpandLessRoundedIcon className="cursor-pointer" />
              )}

              {focusDropDown && (
                <div className="absolute left-0 top-16 z-10 h-[170px] w-[250px] rounded-lg bg-[#1B1B1B] p-3">
                  {trades.map((item, index) => (
                    <div
                      onClick={() => handleTagsField(item, 'focus')}
                      key={index}
                      className="flex cursor-pointer gap-2 p-2 hover:bg-[#5200FF]"
                    >
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="text-[13px] text-[#6c6c6c]">Funds</label>
            <div
              onClick={() => setSearch((drop) => ({ ...drop, fundDropDown: !fundDropDown }))}
              className="relative mt-[10px] flex cursor-pointer justify-between rounded-lg border border-[#353535] p-3"
            >
              <div className="flex basis-[95%] gap-2 ">
                {search &&
                  search.funds?.map((sell, index) => (
                    <div
                      key={index}
                      className="flex cursor-pointer gap-2 rounded-lg border border-[#353535] bg-[#1B1B1B] p-2"
                    >
                      <p>{sell.name}</p>
                      <CloseRoundedIcon onClick={() => removeAdvancedIcon(sell.id, 'funds')} className="cursor-pointer" />
                    </div>
                  ))}
              </div>

              {!fundDropDown ? (
                <ExpandMoreRoundedIcon className="cursor-pointer" />
              ) : (
                <ExpandLessRoundedIcon className="cursor-pointer" />
              )}

              {fundDropDown && (
                <div className="absolute left-0 top-16 z-10 h-[170px] w-[250px] rounded-lg bg-[#1B1B1B] p-3">
                  {trades.map((item, index) => (
                    <div
                      onClick={() => handleTagsField(item, 'funds')}
                      key={index}
                      className="flex cursor-pointer gap-2 p-2 hover:bg-[#5200FF]"
                    >
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="m-[0_auto] mt-14 flex w-[209px] items-center justify-center gap-3 rounded-full bg-white p-[12px_40px_12px_30px]">
            <SearchIcon className="text-black" />
            <Button className="font-semibold text-black	" title="Search" />
          </div>
        </section>
    </section>
  );
};

export default AdvancedSearch;

let trades = [
  {
    name: 'Last 24h',
    id: 1,
  },
  {
    name: 'Last 3d',
    id: 2,
  },
  {
    name: 'Last 5d',
    id: 3,
  },
  {
    name: 'Last 7d',
    id: 4,
  },
];
