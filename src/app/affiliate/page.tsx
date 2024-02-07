'use client';

import { useState } from 'react';
import DashHeading from '@/components/DashHeading';
import DashLayout from '@/components/DashLayout';
import Table from '@/components/Table';
import { affiliateData } from '@/constants';
import Image from 'next/image';
import exclude from '../../../public/exclude.svg';
import youtube from '../../../public/youtube.svg';
import symbol from '../../../public/symbol.svg';
import Button from '@/components/Button';
import CloseIcon from '@mui/icons-material/Close';
import { Modal } from '@mui/material';
import plus from '../../../public/plus.svg';
import Input from '@/components/Input';
import bitcoin from '../../../public/bitcoin.svg';
import AddIcon from '@mui/icons-material/Add';
import bIcon from '../../../public/bIcon.svg';
import copy from '../../../public/copy.svg';
import affiliate from '../../../public/affiliate.svg'

type affiliateType = {
  value: string;
  row?: {
    name: string;
  };
};

type Partner = {
  name: string;
  contact: string;
  maxVault: string;
  community: string;
  chain: string;
  wallet: string;
  business: string;
};

const Affiliate = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Partner>({
    name: '',
    contact: '',
    maxVault: '',
    community: '',
    chain: '',
    wallet: '',
    business: '',
  });

  let walletColumn = [
    {
      heading: '',
      accessor: 'wallet',
      Cell: ({ value, row }: affiliateType) => {
        return (
          <>
            <div className="mb-[2px] flex justify-between">
              <h3 className="text-start text-[16px] font-[700]">John Doe</h3>
              <div className="basis-[30%] md:hidden">
                <button className="w-[86px]	rounded-full bg-emerald-600 p-[2px_5px_2px_5px] text-[8px]">Allow Vault creation</button>
              </div>
            </div>

            <div className="flex gap-2">
              <Image src={symbol} width={18} height={18} alt="Exclude" />
              <p className="text-[12px]">0x505dl8...765</p>
              <Image src={copy} width={18} height={18} alt="Exclude" />
              <Image src={exclude} width={18} height={18} alt="Exclude" />
              <Image src={bIcon} width={18} height={18} alt="Exclude" />
            </div>
        </>
        )
       }
   },
    {
      heading: 'Added By',
      accessor: 'addedBy',
    },
    {
      heading: 'Amount of Vault',
      accessor: 'amount',
    },
    {
      heading: 'Telegram',
      accessor: 'telegram',
    },
    {
      heading: 'Community',
      accessor: 'community',
      Cell: ({ value }: affiliateType) => (
        <div className="flex gap-2">
          <Image src={youtube} width={17} height={12} alt="Exclude" />
          <p className='trunscate text-[12px]'>{value}</p>
        </div>
      ),
    },
    {
      heading: '',
      accessor: '',
    },
    {
      heading: '',
      accessor: 'View Transation',
      Cell: () => (
        <div className="flex hidden basis-[30%] justify-end md:block">
          <button className="w-[86px]	rounded-full bg-[#00A478] p-[2px_5px_2px_5px] text-[8px]">Allow Vault creation</button>
        </div>
      ),
    },
  ];

  const handleModal = () => setOpen((modal) => !modal);

  const handleInputChange = (field: keyof Partner) => (value: string | number) => {
    setForm((prevFormState) => ({
      ...prevFormState,
      [field]: value,
    }));
  };

  return (
    <DashLayout>
      <DashHeading
        heading="Affliate"
        desc="Some description some description some description"
        isButton={true}
        buttonText="Add New Partner"
        buttonClick={handleModal}
        leftIcon={plus}
        mobileIcon={affiliate}
      />

      <Table data={affiliateData && affiliateData} column={walletColumn} showPagination={true} type="Affiliate" />

      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="backdrop-blur-sm"
      >
        <div className="absolute h-full h-full scroll w-full w-full overflow-auto border border-[#353535] bg-black shadow-md sm:h-[100%] sm:w-full md:left-1/2 md:top-1/2  md:h-[530px] 2xl:h-[750px] xl:h-[530px] md:w-[755px] md:translate-x-[-50%] md:translate-y-[-50%]  md:rounded-[20px]">
          <div className="text-end">
            <CloseIcon className="mr-5 mt-5 cursor-pointer" onClick={handleModal} />
          </div>
          <div className="mt-1 pb-5 pl-[30px] pr-[30px]">
            <h2 className="text-2xl">
              <AddIcon className="mr-2 h-7 w-7 p-1 rounded-full text-[#8D8D8D] bg-[#1B1B1B]" /> Add New Partner
            </h2>
            <p className="mt-[10px] text-base text-[#808080]">Some Text Description</p>
          </div>

          <div className="align-center w-full flex-wrap justify-between gap-x-[15px] gap-y-[15px] p-[20px] pt-[10px] md:flex">
            <div className="md:basis-[37%] basis-full mb-2 md:mb-0">
              <label className="ml-2 text-[#808080]">
                Name <span className="text-[12px] ml-1 text-[red]">*</span>
              </label>
              <Input
                type="text"
                placeholder="Name"
                state={form.name}
                setState={handleInputChange('name')}
                className="ml-1 mt-2 w-full placeholder-[#808080] rounded-lg  bg-[#1B1B1B] p-3 text-white focus:outline-0"
              />
            </div>

            <div className="md:basis-[37%] basis-[50%] mb-2 md:mb-0">
              <label className="ml-2 text-[#808080]">
                Contact <span className="text-[12px] ml-1 text-[red]">*</span>
              </label>
              <Input
                type="text"
                placeholder="Contact"
                state={form.contact}
                setState={handleInputChange('contact')}
                className="ml-1 mt-2 w-full placeholder-[#808080] rounded-lg bg-[#1B1B1B] p-3 text-white focus:outline-0"
              />
            </div>

            <div className="md:basis-[20%] basis-[30%] mb-2 md:mb-0">
              <label className="ml-2 text-[#808080]">
                Max Vaults <span className="text-[12px] ml-1 text-[red]">*</span>
              </label>
              <Input
                type="text"
                placeholder="Max Vaults"
                state={form.maxVault}
                setState={handleInputChange('maxVault')}
                className="ml-1 mt-2 w-full placeholder-[#808080] rounded-lg bg-[#1B1B1B] p-3 text-white focus:outline-0"
              />
            </div>

            <div className="ml-1 mt-[15px] w-full basis-full text-white">
              <label className="ml-2 text-[#808080]">
                Community <span className="text-[12px] ml-1 text-[red]">*</span>
              </label>
              <div className="mt-2 flex gap-1 rounded-lg bg-[#1B1B1B]">
                <Image className="ml-3" src={youtube} width={25} height={25} alt="youtube icon" />
                <Input
                  type="text"
                  placeholder="Community"
                  state={form.community}
                  setState={handleInputChange('community')}
                  className="bg-transparent placeholder-[#808080] p-3 focus:outline-0"
                />
              </div>
            </div>

            <div className="ml-2 mt-[15px] basis-[25%]">
              <label className="ml-2 text-[#808080]">
                Chain <span className="text-[12px] ml-1 text-[red]">*</span>
              </label>
              <div className="mt-2 flex gap-1 rounded-lg bg-[#1B1B1B]">
                <Image className="ml-2" src={bitcoin} width={25} height={25} alt="youtube icon" />
                <Input
                  type="select"
                  placeholder="Community"
                  state={form.chain}
                  setState={handleInputChange('chain')}
                  options={['BSC', 'BITCOIN']}
                  className="bg-transparent placeholder-[#808080] w-full border-r-[10px] border-transparent p-[12px] focus:outline-0"
                />
              </div>
            </div>

            <div className="mt-[14px] basis-[71%] ">
              <label className="ml-2 text-[#808080]">
                Wallet <span className="text-[12px] ml-1 text-[red]">*</span>
              </label>
              <Input
                type="text"
                placeholder="Wallet"
                state={form.wallet}
                setState={handleInputChange('wallet')}
                className="ml-1 mt-2 w-full placeholder-[#808080] rounded-lg bg-[#1B1B1B] p-3 text-white focus:outline-0"
              />
            </div>

            <div className="mt-[15px] flex w-full basis-full flex-col text-white">
              <label className="ml-2 text-[#808080]">
                Business Developer <span className="text-[12px] ml-1 text-[red]">*</span>
              </label>
              <Input
                type="text"
                placeholder="Business Developer"
                state={form.business}
                setState={handleInputChange('business')}
                className="ml-1 mt-2 placeholder-[#808080] rounded-lg bg-[#1B1B1B] p-3  text-white focus:outline-0"
              />
            </div>

            <div className="mt-[35px]">
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                // checked={info.weeklyDistribute}
                // onChange={handleCheckboxChange}
                name="weeklyDistribute"
                className="peer sr-only"
              />
              <div className="peer h-6 w-11 rounded-full bg-[#878787] after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-black after:transition-all after:content-[''] peer-checked:bg-[#00A478] peer-checked:after:translate-x-full peer-checked:after:border-white  peer-focus:outline-0 peer-focus:ring-4 peer-focus:ring-[#00A478] dark:bg-gray-700 dark:peer-focus:ring-[[#00A478]]"></div>
              <span className="ml-3 text-sm font-medium text-[#878787]">
                Allow Vault Creation
                </span>
            </label>
          </div>
          </div>

          <div className="mt-4 w-[90%] m-[0_auto] flex justify-center border-t border-[#878787] p-[30px] pt-5">
            <Button title="Apply" className="flex gap-2 rounded-full bg-[#5200FF] p-4 pl-10 pr-10 text-lg text-white" />
          </div>
        </div>
      </Modal>
    </DashLayout>
  );
};

export default Affiliate;
