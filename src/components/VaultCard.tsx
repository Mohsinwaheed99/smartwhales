'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { vaultData, vaultHeadings } from '@/constants';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import { Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Button from './Button';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import SellCondition from './SellCondition';
import DashHeading from './DashHeading';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Input from './Input';
import Pagination from './Pagination';
import vaultIcon from '../../public/vault.svg'
import transaction from '../../public/transaction.svg'

type vaultType = {
  noOfWallet: string;
  vaultType: string;
  transaction: string;
  searchBar: string;
  showFilter: boolean;
};

const VaultCard = () => {
  const [dropDown, setDropDown] = useState(-1);
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [vaultFilter, setVaultFilter] = useState<vaultType>({
    noOfWallet: '',
    vaultType: '',
    transaction: '',
    searchBar: '',
    showFilter: false,
  });

  const handleModal = (type: string) => {
    setModalType(type);
    setOpen((modal) => !modal);
  };

  const toggleDropdown = (index: number) => {
    setDropDown((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const handleInputChange = (field: keyof vaultType) => (value: string | number) => {
    setVaultFilter((prevFormState) => ({
      ...prevFormState,
      [field]: value,
    }));
  };

  let filterVaults =  vaultData && vaultData.length > 0 && vaultData.filter((item) => item.title.toLowerCase().includes(vaultFilter.searchBar.toLowerCase()));

  const [currentPage, setCurrentPage] = useState(1);
  const dataLength: any = filterVaults && filterVaults.length;
  const totalPages = Math.ceil(dataLength / 8);
  const startIndex = (currentPage - 1) * 8;
  const endIndex = startIndex + 8;
  const currentData = filterVaults && filterVaults.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      <div className="items-center justify-between min-[640px]:flex">
        <DashHeading heading="Whale Collections" desc="Some description some description some description" mobileIcon={vaultIcon} />
        <div className="flex ml-[20px] mr-[20px] xl:mr-0 xl:ml-0 basis-[65%] items-center gap-[20px] md:justify-end">
          <div className="relative basis-[50%] md:basis-[146px]">
            <div
              onClick={() => setVaultFilter((prevData) => ({ ...prevData, showFilter: !prevData.showFilter }))}
              className="flex basis-[50%] lg:basis-[25%] md:basis-[25%] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#282828] p-[13px]"
            >
              <FilterAltRoundedIcon className="text-[13px]" />
              <p className="text-[14px] font-semibold">Filters</p>
              <span className="flex h-6 w-6 items-center text-[14px] font-[700] justify-center rounded-full bg-white text-black">3</span>
            </div>

            {vaultFilter.showFilter && (
              <div className="absolute border-[1px] border-[#494949] left-[-7px] md:left-[-70px] top-[70px] w-[305px] rounded-[20px] bg-black p-[30px] shadow-2xl">
                <div className="item-center mb-3 flex justify-between">
                  <h3 className="text-2xl">Filter</h3>
                  <p className="cursor-pointer text-indigo-500 underline">Save View</p>
                </div>
                <div>
                  <div>
                    <label className="pt-4 text-[#808080] text-sm ml-[18px]">Number of Wallets</label>
                    <Input
                      type="select"
                      placeholder="Number of Wallets"
                      state={vaultFilter.noOfWallet}
                      setState={handleInputChange('noOfWallet')}
                      options={['1', '2', '3']}
                      className="border-z mb-4 cursor-pointer border-r-[21px] border-transparent mt-[4px] w-full rounded-full bg-[#1B1B1B] p-4 focus:outline-0"
                    />
                  </div>
                  <div>
                    <label className="pt-4 text-[#808080] text-sm ml-[18px]">Vault Type</label>
                    <Input
                      type="select"
                      placeholder="Vault Type"
                      state={vaultFilter.vaultType}
                      setState={handleInputChange('vaultType')}
                      options={['New Vault', 'Old Vault', 'Recent Vault']}
                      className="border-z mb-4 border-r-[21px] cursor-pointer border-transparent mt-[4px] w-full rounded-full bg-[#1B1B1B] p-4 focus:outline-0"
                    />
                  </div>
                  <div>
                    <label className="pt-4 text-[#808080] text-sm ml-[18px]">Last Transaction</label>
                    <Input
                      type="select"
                      placeholder="Last Transaction"
                      state={vaultFilter.transaction}
                      setState={handleInputChange('transaction')}
                      options={['Just Traded', '2 days ago', '2 days ago']}
                      className="border-z mb-4 border-r-[21px] border-transparent cursor-pointer mt-[4px] w-full rounded-full bg-[#1B1B1B] p-4 focus:outline-0"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex basis-[50%] overflow-hidden items-center gap-1 rounded-full bg-[#1B1B1B] md:basis-[266px]">
            <SearchRoundedIcon className="ml-[23px] text-2xl text-[#5F5F5F]" />
            <Input
              type="text"
              placeholder="Search"
              state={vaultFilter.searchBar}
              setState={handleInputChange('searchBar')}
              className="bg-transparent text-[#5F5F5F] placeholder-[#5F5F5F] pl-0 ml-[13px] text-[16pxs] p-4 focus:outline-0"
            />
          </div>
        </div>
      </div>

      <div className="overflow-auto xl:ml-0 md:ml-[15px] scroll">
        <table className="mt-[20px] w-full border-separate border-spacing-x-0 border-spacing-y-[10px]">
          <thead>
            <tr className="bg-[#353535] h-[35px]">
              {vaultHeadings?.map((heading, index) => (
                <th
                  key={index}
                  className="whitespace-nowrap text-[#C2C2C2] p-[13px_0px_13px_20px] text-center text-[10px] leading-normal tracking-[3px] font-normal uppercase md:[&:nth-child(1)]:rounded-[6px_0px_0px_6px] md:[&:nth-last-child(1)]:rounded-[0px_6px_6px_0px]"
                >
                  {heading} {heading !== '' && <UnfoldMoreRoundedIcon className='text-[13px]' />}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData &&
              currentData.length > 0 &&
              currentData.map((item, index) => (
                <tr key={index} className="bg-[#1B1B1B] h-[101px] p-[20px_0px]">
                  <td className="h-[101px] pl-[20px] md:rounded-[6px_0px_0px_6px] border-t border-[#323232] border-l border-b text-center text-lg">
                    <div className="items-center flex justify-between gap-4">
                      <Image
                        src={item.avatar}
                        width={42}
                        height={42}
                        className="basis-[12%] rounded-full"
                        alt="profile picture"
                      />
                      <div className="basis-[88%] text-start">
                        <h2 className="mb-2 text-[18px] whitespace-nowrap">{item.title}</h2>
                        <div className="item-center flex">
                          <span className="mr-3 h-[14px] flex items-center whitespace-nowrap rounded-full text-[8px]  bg-[#5200FF] p-[2px_5px_2px_5px]">
                            {item.status}
                          </span>
                          {item.type && (
                            <span className="whitespace-nowrap h-[14px] flex items-center rounded-full text-[8px] bg-[#00A478] p-[2px_5px_2px_5px]">
                              {item.type}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="h-[101px] whitespace-nowrap border-[#323232] border-t border-b  text-center text-[14px]">
                    {item.trade}
                  </td>
                  <td className="h-[101px] whitespace-nowrap border-[#323232] border-t border-b  text-center text-[14px]">
                    {item.whales}
                  </td>
                  <td className="h-[101px]  border-[#323232] border-t border-b text-center">
                    <span
                      className={
                        item.vaultStatus == 'Active'
                          ? "text-[10px] font-semibold flex items-center text-[#00A478] before:inline-block	before:text-2xl before:content-['•'] "
                          : item.status == 'Pending'
                          ? "text-[10px] font-semibold flex items-center text-orange-500 before:inline-block	before:text-2xl before:content-['•']"
                          : "text-[10px] font-semibold flex items-center text-red-700 before:inline-block	before:text-2xl before:content-['•']"
                      }
                    >
                      {item.vaultStatus}
                    </span>
                  </td>
                  <td className=" h-[101px] border-[#323232] border-t border-b text-center text-[14px]">
                    <span className="flex justify-center ">
                      {item.token?.map((i: string, index) => (
                        <Image key={index} src={i} width={18} height={18} alt="tokens" className={`ml-[-5px]`} />
                      ))}
                      <p className="items-center text-[12px] flex h-[18px] w-[18px] justify-center rounded-full bg-[#323232] text-white">
                        +
                      </p>
                    </span>
                  </td>
                  <td className="h-[101px] whitespace-nowrap border-[#323232] border-t border-b  text-center text-[14px]">
                    Pentera Capital
                  </td>
                  <td className="h-[101px] whitespace-nowrap border-[#323232] border-t border-b  text-center text-[14px]">
                    Small Liquidity
                  </td>
                  <td className="h-[101px] relative border-[#323232] border-t border-b border-r md:rounded-[0px_6px_6px_0px] p-[9px] text-center">
                    <MoreVertIcon className="cursor-pointer text-[24px]" onClick={() => toggleDropdown(index)} />
                    {dropDown === index && (
                      <div className="top-25 absolute right-1 z-10 h-[200px] w-[245px] rounded-[10px] bg-[#1B1B1B]">
                        <div className="flex items-center cursor-pointer border-b border-[#494949] p-[10px_20px_10px_20px] hover:bg-[#5200FF]">
                          <FeedRoundedIcon className="text-[24px]" />
                          <p className="ml-2 text-[20px]">Details</p>
                        </div>
                        <div
                          onClick={() => handleModal('sellCondition')}
                          className="flex items-center cursor-pointer p-[10px_20px_10px_20px] hover:bg-[#5200FF]"
                        >
                          <CompareArrowsRoundedIcon className="text-[24px]" />
                          <p className="ml-2 text-[20px]">Sell Condition</p>
                        </div>
                        <div className="flex items-center cursor-pointer p-[10px_20px_10px_20px] hover:bg-[#5200FF]">
                          <ShareRoundedIcon className="text-[24px]" />
                          <p className="ml-2 text-[20px]">Share</p>
                        </div>
                        <div
                          onClick={() => handleModal('forceStop')}
                          className="flex items-center cursor-pointer border-t border-[#494949] p-[10px_20px_10px_20px] hover:bg-[#5200FF]"
                        >
                          <CloseRoundedIcon className="text-[24px] rounded-full border border-[#DD524C] text-[#DD524C]" />
                          <p className="ml-2 text-[20px] text-[#DD524C]">Force Stop</p>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <section className="item-center mr-3 md:mr-0 md:pt-[31px] pb-[12px] pt-[21px] md:pb-[51px] flex justify-end gap-4">
        <div>
          <p className='text-[12px] pt-[5px]'>
            {' '}
            {currentData && currentData.length !== 0 ? startIndex + 1 : startIndex} - {dataLength && dataLength} of{' '}
            {vaultData && vaultData.length}
          </p>
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </section>

      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="backdrop-blur-sm"
      >
        <div
          className={`absolute border border-[#353535] bg-black shadow-md md:left-1/2 md:top-1/2 md:translate-x-[-50%] md:translate-y-[-50%] ${
            modalType == 'forceStop'
              ? 'h-full h-full w-full w-full sm:h-[100%] sm:w-full md:h-[282px] md:w-[450px]'
              : 'h-full w-full sm:h-full sm:w-full md:h-[530px] md:w-[750px] '
          } md:rounded-[20px]`}
        >
          <div className="text-end">
            <CloseIcon className="mr-5 mt-3 cursor-pointer " onClick={() => handleModal('')} />
          </div>
          {modalType == 'forceStop' ? (
            <>
              <div className="ml-4 mr-7 mt-2 ">
                <div className="flex gap-2 items-center">
                  <div className='bg-[#1B1B1B] w-[26px] h-[26px] flex justify-between items-center p-1 rounded-full'>
                  <CloseRoundedIcon className="!text-[18px] rounded-full border border-[#DD524C] text-[#DD524C]" />
                  </div>
                  <h2 className="mb-2 text-2xl">Force Stop</h2>
                </div>
                <p className="mt-1 text-base text-[#808080]">
                  Are you sure you want to stop interaction with the smart contract?
                </p>
              </div>
              <div
                className={`absolute md:w-[90%] md:left-[22px] bottom-[25px] mt-9 flex w-full items-end justify-center border-t border-zinc-700 pt-[30px]`}
              >
                <Button
                  title="Stop Contract"
                  className="flex w-64 justify-center gap-2 rounded-full bg-[#DD524C] p-[12px_40px_12px_40px]  text-center text-white"
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <div className="ml-5 mr-7 mt-3 pb-3">
                  <div className="flex gap-2 items-center">
                    <div className='bg-[#1B1B1B] w-[26px] h-[26px] flex justify-between items-center p-1 rounded-full'>
                      <Image src={transaction} width={16} height={16} alt="transaction" />
                    </div>
                    <h2 className="mb-2 text-2xl">Sell Condition</h2>
                  </div>
                  <p className="mt-1 text-base text-[#808080]">Some Text Description</p>
                  <div>
                    <SellCondition />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </Modal>
    </section>
  );
};

export default VaultCard;