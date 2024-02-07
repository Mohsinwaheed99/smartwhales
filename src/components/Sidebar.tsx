'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { sidebarNav } from '../constants/index';
import logo from '../../public/logo.svg';
import favIcon from '../../public/favicon.svg';
import plus from '../../public/plus.svg';
import Button from './Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Close } from '@mui/icons-material';
import mobileLogo from '../../public/mobileLogo.svg';
import {Search} from '@mui/icons-material';

type sidebarProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
};

const Sidebar = ({ isOpen, toggleDrawer }: sidebarProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`sidebar ${isOpen ? 'open' : 'close'} w-full  fixed top-0 h-full md:w-[256px] lg:w-full xl:w-full 2xl:w-full md:h-screen md:sticky md:top-0 sm:w-[300px] sm:left-[-300px] sm:fixed sm:top-0 sm:duration-[left_0.3s] bg-[#131313] border-r-2 border-[#353535]`}
    >
      <div className="mb-[33px] 2xl:justify-center 2xl:pt-[20px] pb-[20px] flex items-center justify-between border-b-2 border-[#353535] bg-[#131313] pb-5 pt-5 sm:flex-row">
        <Close className="ml-3 lg:!hidden block" onClick={toggleDrawer} />
        <Image src={logo} height={46} width={216} className="lg:ml-[20px] xl:ml-[20px] ml-0 hidden sm:block md:block" alt="Logo" />
        <Image src={mobileLogo} width={60} className="md:hidden block sm:hidden" height={60} alt="logo" />
        <Search className="h-10 w-10 !block sm:!hidden md:!hidden lg:!hidden" />
      </div>

      <ul>
        <h2 className="pb-[16px] pl-5 text-[12px] font-[500] text-[#717171]">MAIN</h2>
        {sidebarNav.map((item) => (
          <Link href={item.link} key={item.id}>
            <li
              className={`${
                pathname == item.link ? 'rounded-[0px_20px_20px_0px] border-l-[5px] border-[#5200FF]' : 'border-transparent'
              } group mb-[23px] flex cursor-pointer items-center gap-3 gap-[10px] border-l-[5px] pl-[30px] hover:rounded-[0px_20px_20px_0px] hover:border-l-[5px] hover:border-[#5200FF] `}
            >
              <Image
                className={`${
                  pathname == item.link ? 'bg-[#5200FF] ' : 'bg-[#2B2B2B]'
                }  h-[34px] w-[34px] rounded-full p-[6px] hover:bg-[#5200FF] active:bg-[#5200FF] group-hover:brightness-0	group-hover:invert-[1px] group-hover:bg-[#5200FF]`}
                src={item.icon}
                width={30}
                height={30}
                alt={item.name}
              />
              <span
                className={`${
                  pathname == item.link ? 'text-white' : 'text-[#898989]'
                } text-[16px] font-[400]  group-hover:text-white`}
              >
                {item.name}
              </span>
            </li>
          </Link>
        ))}
      </ul>

      <div className="bottom-[23px] left-[20px] mt-5 absolute">
        <div className={`align-center m-[-25px] flex justify-center`}>
          <div className="align-center w-11 h-11 flex 2xl:h-14 2xl:w-14 justify-center rounded-full bg-[#2B2B2B]">
            <Image src={favIcon} width={30} height={30} alt="small whale icon" />
          </div>
        </div>
        <div className="rounded-xl bg-[#2B2B2B] mr-[20px] md:mr-0 md:w-[216px] pr-[62px] pl-[62px] md:pr-[16px] md:pl-[16px] 2xl:pr-[16px] 2xl:pl-[16px] p-2 pb-[13px] pt-[20px] 2xl:pt-[26px] text-center">
          <h3 className='font-[700] text-[14px] mb-[10px]'>Get started by connecting your wallet</h3>
          <p className="text-[#959595] text-[14px]">Discover new possibilities and more features by connecting your wallet</p>
          <div className="items-center flex justify-center">
            <Link className='w-full' href="/create-vault">
              <Button
                leftIcon={plus}
                title="Create New Vault"
                className="mb-2 whitespace-nowrap mt-[20px] drop-shadow-xl w-full justify-center flex text-[14px] font-[600] items-center rounded-full bg-white p-[12px_20px_12px_20px] text-black"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
