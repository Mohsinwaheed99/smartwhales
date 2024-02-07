'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AnimationOutlinedIcon from '@mui/icons-material/AnimationOutlined';

type WatcherTypes = {
  item: {
    avatar: string | null;
    title: string;
    status: string;
    memory: number | string;
    cpu: number | string;
    id: number | string;
    instances: number | string;
  };
  index: number;
};

const WatcherCard = ({ item, index }: WatcherTypes) => {
  const [dropDown, setDropDown] = useState(-1);
  const toggleDropdown = (index: number) => {
    setDropDown((prevIndex) => (prevIndex === index ? -1 : index));
  };
  return (
    <div className="mb-9 basis-[98%] rounded-[10px] bg-[#1B1B1B] sm:basis-[49%] md:basis-[31%]">
      <div>
        <div className="mb-[20px] flex items-center justify-between gap-3 border-b border-[#494949] p-3 p-[20px_20px_20px_20px] pb-[20px]">
          <Image src={item.avatar as string} width={35} height={35} className="rounded-full" alt="profile picture" />
          <div className="basis-4/5">
            <h2 className="mb-1 text-[20px] mb-[-8px]">{item.title}</h2>
            <span
              className={
                item.status == 'Active'
                  ? "font-semibold text-[10px] flex items-center text-emerald-600 before:mr-1	before:inline-block before:content-['•'] before:text-2xl"
                  : item.status == 'Pending'
                  ? "font-semibold text-[10px] flex items-center text-orange-500 before:mr-1 before:inline-block before:content-['•'] before:text-2xl"
                  : "font-semibold text-[10px] flex items-center text-red-700 before:mr-1 before:inline-block before:content-['•'] before:text-2xl"
              }
            >
              {item.status}
            </span>
          </div>
          <div className="relative">
            <MoreVertIcon onClick={() => toggleDropdown(index)} className="mt-2 cursor-pointer text-3xl" />
            {dropDown === index && (
              <div className="top-25 absolute right-[-5px] z-10  w-[168px] rounded-[10px] bg-[#1B1B1B]">
                <div className="flex cursor-pointer border-b border-zinc-800 p-3 hover:bg-[#5200FF]">
                  <DescriptionOutlinedIcon />
                  <p className="ml-2">Logs</p>
                </div>
                <div className="flex cursor-pointer p-4 hover:bg-[#5200FF]">
                  <AnimationOutlinedIcon />
                  <p className="ml-2">Amazon</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="align-center flex justify-between gap-2 p-[10px_20px_20px_20px]">
        <div className="basis-[24%]">
          <p className="text-[10px] text-[#8D8D8D]">Memory</p>
          <h3 className="text-[14px]">{item.memory}</h3>
        </div>
        <div className="basis-[24%]">
          <p className="whitespace-nowrap text-start text-[10px] text-[#8D8D8D]">CPU Usage</p>
          <h3 className="text-start text-[14px]">{item.cpu}</h3>
        </div>
        <div className="basis-[24%]">
          <p className="text-start text-[10px] text-[#8D8D8D]">ID</p>
          <h3 className="text-start text-[14px]">{item.id}</h3>
        </div>
        <div className="basis-[24%]">
          <p className="text-start text-[10px] text-[#8D8D8D]">Instances</p>
          <h3 className="text-start text-[14px]">{item.instances}</h3>
        </div>
      </div>
    </div>
  );
};

export default WatcherCard;
