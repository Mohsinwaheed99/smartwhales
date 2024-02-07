'use client';

import React,{useState} from 'react'
import Image from 'next/image'
import profile from '../../public/profile.svg'
import metamask from '../../public/metamask.svg'
import MenuIcon from '@mui/icons-material/Menu';
import mobileLogo from '../../public/mobileLogo.svg';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from './SearchBar'

type navbarType = {
  toggleDrawer:()=> void
}
const Navbar = ({toggleDrawer}:navbarType) => {
  return (
    <div className='xl:ml-7px] pl-4 z-10 sticky top-0 bg-[#020202] pt-[4px] pb-[4px] lg:mr-[20px]'>
      <div className="flex justify-between bg-black p-6 pl-0 min-[1025px]:hidden">
        <MenuIcon onClick={toggleDrawer} className="h-10 w-10" />
        <Image src={mobileLogo} width={60} height={60} alt="logo" />
        <SearchIcon className="h-10 w-10" />
      </div>
    <header className='flex max-[1025px]:hidden mt-[20px] ml-0 justify-between gap-3 2xl:gap-x-[20px]  items-center m-3'>
      <div className='basis-[55%] 2xl:basis-[86%]'>
        <SearchBar type="walletSearch" />
      </div>

      <div className='flex  justify-center items-center p-[14px] 2xl:basis-[161px] basis-[17%] rounded-full bg-[#1B1B1B]'>
        <Image
          src={profile}
          width={18}
          height={18}
          alt="Logo"
        />
       <select className='bg-transparent basis-1/2 text-[12px] ml-2 focus:outline-0'>
        <option value="Moonbeam">Moonbeam</option>
      </select>        
      </div>

      <div className='flex items-center p-[7px] 2xl:basis-[307px] basis-[25%] justify-center rounded-full bg-[#1B1B1B]'>
        <p className='basis-1/5 whitespace-nowrap	 pt-1 text-xs ml-3'>0.016 GLMR</p>
        <div className='flex justify-between items-center pl-2 pr-2 bg-[#2D2D2D] rounded-full basis-3/4 ml-2'>
        <Image
          src={metamask}
          width={24}
          height={24}
          alt="Logo"
          className='ml-3'
        />
        <select className='bg-transparent text-[12px] pt-2 pb-2 focus:outline-0 basis-[80%]'>
        <option value="pb-address">0x737...339</option>
      </select>
        </div>
      </div>
      
    </header>
    </div>
  );
};

export default Navbar;
