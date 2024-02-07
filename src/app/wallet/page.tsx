'use client';

import React, { useState } from 'react';
import DashHeading from '@/components/DashHeading';
import DashLayout from '@/components/DashLayout';
import Table from '@/components/Table';
import exclude from '../../../public/exclude.svg';
import Image from 'next/image';
import { walletData, walletAddresses } from '../../constants/index';
import { Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Input from '@/components/Input';
import download from '../../../public/download.svg';
import Button from '@/components/Button';
import wallet from '../../../public/wallet.svg';
import bIcon from '../../../public/bIcon.svg';
import copy from '../../../public/copy.svg';
import DownloadIcon from '@mui/icons-material/Download';

type walletType = {
  value: string;
};

const Wallet = () => {
  const [open, setOpen] = useState(false);
  const [searchWallet, setSearchWallet] = useState('');
  const [filterWallet, setFilterWallet] = useState<string[]>([]);

  const handleModal = () => setOpen((modal) => !modal);

  const handleNameChange = (newValue: string) => {
    setSearchWallet(newValue);
    let filter = walletAddresses && walletAddresses.filter((e) => e.includes(searchWallet));
    setFilterWallet(filter);
  };

  let walletColumn = [
    {
      heading: '',
      accessor: 'wallet',
      Cell: ({ value }: walletType) => {
        return (
          <div className="flex items-center gap-2">
            <h3 className="text-[12px]">0x5058352e527694a55496615422</h3>
            <Image src={copy} width={18} height={18} alt="Exclude" />
            <Image src={exclude} width={18} height={18} alt="Exclude" />
            <Image src={bIcon} width={18} height={18} alt="Exclude" />
          </div>
        );
      },
    },
    {
      heading: 'P&L',
      accessor: 'pl',
    },
    {
      heading: 'Stable Coin',
      accessor: 'stableCoin',
    },
    {
      heading: 'Trades per week',
      accessor: 'pl',
    },
    {
      heading: 'Wallet Size',
      accessor: 'walletSize',
    },
    {
      heading: 'Last transaction',
      accessor: 'transaction',
    },
    {
      heading: 'Diversification',
      accessor: 'diversification',
    },
  ];
  return (
    <DashLayout>
      <DashHeading
        heading="Wallet"
        desc="Some description some description some description"
        isButton={true}
        buttonText="Import"
        buttonClick={handleModal}
        leftIcon={download}
        mobileIcon={wallet}
      />

      <Table data={walletData && walletData} column={walletColumn} showPagination={true} type="Wallet" />

      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="backdrop-blur-sm"
      >
        <div className="absolute h-full h-full w-full w-full border border-[#353535] bg-black shadow-md sm:h-[100%] sm:w-full md:left-1/2 md:top-1/2 md:h-[329px] md:w-[542px] md:translate-x-[-50%] md:translate-y-[-50%] md:rounded-[20px]">
          <div className="text-end">
            <CloseIcon className="mr-5 mt-3 cursor-pointer " onClick={handleModal} />
          </div>
          <div className="ml-[20px] mr-[20px] mt-2  pb-[30px]">
            <div className="flex items-center gap-3">
              <DownloadIcon className="rounded-full bg-[#1B1B1B] p-1 text-2xl" />
              <h2 className="text-[20px] font-semibold">Import</h2>
            </div>
            <p className="mt-[5px] text-[14px] text-[#808080]">Some Text Description</p>

            <div className="relative mt-[30px] flex rounded-[5px] border border-zinc-800">
              <Image src={wallet} width={20} height={20} alt="Wallet" className="ml-5" />
              <Input
                type="text"
                placeholder="Search Wallet"
                state={searchWallet}
                setState={handleNameChange}
                className="ml-1  w-full bg-transparent p-3 text-white focus:outline-0 "
              />
              {searchWallet && (
                <div className="absolute z-10 pt-[15px] top-12 flex h-[200px] w-[494px] flex-col rounded-[10px] bg-[#1B1B1B] ">
                  {filterWallet?.map((address, index) => (
                    <div key={index}>
                      <p className="cursor-pointer mt-[15] rounded-sm p-[10px_50px_10px_20px] text-sm hover:bg-[#5200FF]">{address}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="absolute bottom-[30px] md:w-[92%] md:left-[22px] mt-[30px] flex w-full justify-center border-t border-zinc-700 pt-[30px] ">
            <div className="flex items-center justify-center gap-2 rounded-full bg-[#5200FF] p-[12px_20px_12px_20px] pl-7 pr-7 text-lg">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.4111 7.05387C12.2529 6.89587 12.0384 6.80712 11.8148 6.80712C11.5912 6.80712 11.3768 6.89587 11.2186 7.05387L9.00232 9.27012V0.96875C9.00232 0.744974 8.91342 0.530362 8.75519 0.372129C8.59696 0.213895 8.38235 0.125 8.15857 0.125C7.93479 0.125 7.72018 0.213895 7.56195 0.372129C7.40371 0.530362 7.31482 0.744974 7.31482 0.96875V9.27012L5.09857 7.05387C4.93862 6.90483 4.72707 6.8237 4.50848 6.82755C4.28989 6.83141 4.08133 6.91996 3.92674 7.07455C3.77216 7.22914 3.6836 7.4377 3.67975 7.65629C3.67589 7.87488 3.75703 8.08643 3.90607 8.24638L7.56232 11.9026L8.15857 12.5L8.75482 11.9038L12.4111 8.2475C12.4895 8.16914 12.5517 8.07611 12.5941 7.9737C12.6365 7.8713 12.6584 7.76154 12.6584 7.65069C12.6584 7.53984 12.6365 7.43008 12.5941 7.32767C12.5517 7.22527 12.4895 7.13223 12.4111 7.05387ZM1.97107 9.96875C1.97107 9.85795 1.94925 9.74823 1.90684 9.64586C1.86444 9.54349 1.80229 9.45048 1.72394 9.37213C1.64559 9.29378 1.55258 9.23163 1.45021 9.18923C1.34784 9.14682 1.23812 9.125 1.12732 9.125C1.01652 9.125 0.906799 9.14682 0.80443 9.18923C0.702062 9.23163 0.609047 9.29378 0.530698 9.37213C0.452349 9.45048 0.390198 9.54349 0.347796 9.64586C0.305394 9.74823 0.283569 9.85795 0.283569 9.96875V13.625C0.283569 14.2217 0.520622 14.794 0.942579 15.216C1.36454 15.6379 1.93683 15.875 2.53357 15.875H13.7836C14.3803 15.875 14.9526 15.6379 15.3746 15.216C15.7965 14.794 16.0336 14.2217 16.0336 13.625V9.96875C16.0336 9.74497 15.9447 9.53036 15.7864 9.37213C15.6282 9.21389 15.4136 9.125 15.1898 9.125C14.966 9.125 14.7514 9.21389 14.5932 9.37213C14.435 9.53036 14.3461 9.74497 14.3461 9.96875V13.625C14.3461 13.7742 14.2868 13.9173 14.1813 14.0227C14.0758 14.1282 13.9328 14.1875 13.7836 14.1875H2.53357C2.38439 14.1875 2.24131 14.1282 2.13582 14.0227C2.03033 13.9173 1.97107 13.7742 1.97107 13.625V9.96875Z"
                  fill="white"
                />
              </svg>
              <Button title="Import" className="text-lg text-white" />
            </div>
          </div>
        </div>
      </Modal>
    </DashLayout>
  );
};

export default Wallet;
