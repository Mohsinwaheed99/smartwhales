import React from 'react';
import logo from '../../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';

const CreateVaultHeader = () => {
  return (
    <div className="mb-7 border-b border-[#808080] p-5 pb-5 ">
      <div className="hidden md:block">
        <div className="item-center m-[0_auto] flex max-w-screen-xl justify-between ">
          <Link href="/wallet">
            <Image src={logo} className="w-52" alt="logo" />
          </Link>
          <div>
            <h2 className="text-center text-xl">Create a New Vault</h2>
            <p className="text-[14px] text-[#808080]">Some description some description some description</p>
          </div>
        </div>
      </div>
      <Link href="/wallet">
        <div className="text-end md:hidden">
          <CloseIcon />
        </div>
      </Link>
    </div>
  );
};

export default CreateVaultHeader;
