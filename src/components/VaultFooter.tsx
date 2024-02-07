"use client"
import React,{useState} from 'react'
import Button from '@/components/Button';
import Link from 'next/link';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import create from '../../public/create.svg'
import Image from 'next/image';
import { Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

type footerType = {
  changeStep: () => void;
  step: number;
};

const VaultFooter = ({ changeStep, step }: footerType) => {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen((modal) => !modal);
  };

  return (
    <>
    <footer className="mb-6 mt-[50px] p-4 pt-6 md:border-t md:border-zinc-700">
      <div className="m-[0_auto] flex max-w-screen-xl items-center justify-between">
        <div className='flex items-center gap-1'>
        <ArrowBackIosIcon className='text-[10px]' />
        <Link href="/wallet">
          <p className="underline">Back to Dashboard</p>
        </Link>
        </div>
        <div onClick={step !== 4 ? () => changeStep() : ()=>handleModal()} className='flex p-3 cursor-pointer gap-[8px] pl-5 pr-5 items-center rounded-full bg-[#5200FF]  '>
        {step === 4 && <Image src={create} width={20} height={20} alt="Create vault" />}
        <Button
          title={step == 4 ? 'Create Vault' : 'Next'}
          className="bg-transparent"
        />
        {step !== 4 && <KeyboardArrowRightIcon />}
      </div>
      </div>

      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="backdrop-blur-sm"
      >
        <div
          className='absolute border border-[#353535] bg-black shadow-md md:left-1/2 md:top-1/2 md:translate-x-[-50%] md:translate-y-[-50%] h-full h-full w-full w-full sm:h-[100%] sm:w-full md:h-[265px] md:w-[460px] md:rounded-[20px]'
        >
          <div className="text-end">
            <CloseIcon className="mr-5 mt-3 cursor-pointer " onClick={handleModal} />
          </div>
              <div className="ml-5 mr-7 mt-2 ">
                <div className="flex gap-2">
                  <CheckCircleOutlineIcon className="h-7 w-7 rounded-full text-3xl p-1 text-[#00A478] bg-[#1B1B1B]" />
                  <h2 className="mb-2 text-2xl">Success</h2>
                </div>
                <p className="mt-1 text-base text-[#808080]">
                You successfully create a Vault. Contains 4 wallets.
                </p>
              </div>
              <div
                className={`absolute md:w-[90%] md:left-[22px] bottom-[25px] mt-9 flex w-full items-end justify-center border-t border-zinc-700 pt-[30px]`}
              >
                <Button
                  title="Go to My Collection"
                  className="flex w-64 justify-center gap-2 rounded-full bg-[#00A478] p-4 pl-6 pr-6 text-center text-white"
                />
              </div>
            
        </div>
      </Modal>
    </footer>
    </>
  );
};

export default VaultFooter;
