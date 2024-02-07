import React, { useState } from 'react'
import LockIcon from '@mui/icons-material/Lock';
import Input from '@/components/Input';
import { vaultData } from '../constants/index';
import bIcon from '../../public/bIcon.svg';
import copy from '../../public/copy.svg';
import Image from 'next/image';
import exclude from '../../public/exclude.svg';
import ignore from '../../public/ignoreToken.svg'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import bitcoin from '../../public/bitcoin.svg'
import astro from '../../public/astro.svg'
import usdt from '../../public/usdt.svg'
import delete1 from '../../public/delete.svg'

type AdvancedCondition={
    name:string
    icon:string | null ,
    id:number
}
type CollectionType={
    searchBar:string | number,
    activePrivate:boolean,
    activeIgnore:boolean
}

const Step3 = () => {
    const [collection,setCollection] = useState<CollectionType>({
        searchBar:"",
        activePrivate:false,
        activeIgnore:false
    })

    const handleInputChange = (field: keyof CollectionType) => (value: string | number) => {
        setCollection((prevFormState) => ({
          ...prevFormState,
          [field]: value,
        }));
    };

    const [advancedCoins,setAdvancedCoins] = useState<AdvancedCondition[]>([])
    const [dropdown,setDropdown] = useState(-1)

    const handleAdvancedCoins=(icons:AdvancedCondition)=>{
        const isObjectExists = advancedCoins.some((obj) => obj.id === icons.id);
        if (!isObjectExists) setAdvancedCoins((prevObjects) => [...prevObjects, icons]);
    }

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setCollection((prevCheckboxes) => ({
          ...prevCheckboxes,
          [name]: checked,
        }));
    };

    const removeAdvancedIcon = (objectId: number) => setAdvancedCoins((prevObjects) => prevObjects.filter((obj) => obj.id !== objectId));

  return (
    <section>
        <section className=' mt-10 md:w-[718px] md:m-[0_auto] bg-[#0F0F0F] rounded-lg p-4 pl-7 pr-7 pt-9 mt-9'>
        <div className='flex justify-between items-center mb-7'>
            <div>
                <div className='flex gap-2 items-center'>
                    <LockIcon className=' bg-[#272727] p-1 rounded-full' />
                    <h3 className='text-2xl'>Private Collection</h3>
                </div>
                <p className='text-[#6c6c6c] mt-2'>Some description some description some description</p>
            </div>
            <div>
            <label className="relative inline-flex items-center cursor-pointer">
            <input 
            type="checkbox"  
            checked={collection.activePrivate}
            onChange={handleCheckboxChange}
            name="activePrivate"
            className="sr-only peer" 
            />
            <div className="w-11 h-6 bg-[#878787] peer-focus:outline-0 peer-focus:ring-4 peer-focus:ring-[#00A478] dark:peer-focus:ring-[[#00A478]] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-black  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A478]"></div>
            </label>
            </div>
        </div>

        <div>
         <div className='mb-8'>
            <label className='text-[12px] text-[#6c6c6c] ml-3 mb-2'>Wallet Address <span className='!text-[#b91c1c]'>*</span></label>
            <Input 
              type="text"
              placeholder='Wallet Address'
              state={collection.searchBar}
              setState={handleInputChange('searchBar')}
              className='focus:outline-0 p-4 ml-1 mt-2 text-white w-full bg-[#1B1B1B] rounded-lg'
          />
        </div>

       {collection.activePrivate &&
        <div className='border-t mt-6 pt-6 border-zinc-700'>
            {
                vaultData.map((vault,index)=>(
                    <div key={index} className='flex border border-[#323232] justify-between items-center bg-[#1B1B1B] p-[20px_10px_20px_10px] rounded-[6px] mb-[20px]'>
                    <div className="flex gap-2">
                    <h3 className='text-[12px]'>0x505dl8...765</h3>
                    <Image 
                       src={copy} 
                       width={18}
                       height={18}
                       alt="Exclude" 
                     />
                     <Image 
                       src={exclude} 
                       width={18}
                       height={18}
                       alt="Exclude" 
                     />
                      <Image 
                       src={bIcon} 
                       width={18}
                       height={18}
                       alt="Exclude" 
                     />
                   </div>
                   <div>
                        <Image src={delete1} width={18} height={18} alt="Delete icone" className='cursor-pointer' />
                   </div>
                   </div>
                ))
            }
        </div>
        }

        </div>
        </section>

        <section className='!mt-[10px] md:w-[718px] md:m-[0_auto] bg-[#0F0F0F] rounded-lg p-4 pl-7 pr-7 pt-9 mt-4 pb-6'>
        <div className='flex justify-between items-center mb-7'>
            <div>
                <div className='flex gap-2 items-center'>
                    <Image src={ignore} width={30} height={30} alt="Ignore icon" />
                    <h3 className='text-2xl'>Ignore Collection</h3>
                </div>
                <p className='text-[#6c6c6c] mt-2'>Some description some description some description</p>
            </div>
            <div>
            <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" 
                checked={collection.activeIgnore}
                onChange={handleCheckboxChange}
                name="activeIgnore"
                className="sr-only peer"
             />
            <div className="w-11 h-6 bg-[#878787] peer-focus:outline-0 peer-focus:ring-4 peer-focus:ring-[#00A478] dark:peer-focus:ring-[[#00A478]] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-black  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A478]"></div>
            </label>
            </div>
        </div>

        <div>
            {
                vaultData.slice(0,3).map((vault,index)=>(
                    <div key={index} className='bg-[#1B1B1B] border border-[#323232] p-[20px_10px_20px_10px] rounded-lg mb-[20px]'>
                        <p className='w-full whitespace-nowrap text-ellipsis text-[12px] overflow-hidden'>0x5058352e527694a5549661542234234aslkdf3234</p>
                        {collection.activeIgnore && 
                        <div onClick={()=>setDropdown((drop)=>drop ==index?-1:index)} className='cursor-pointer p-4 relative flex justify-between border border-zinc-800 rounded-lg mt-4'>
                        <div className=' flex gap-2 '>
                        {
                            advancedCoins?.map((sell,index)=>(
                                <div key={index} className='flex rounded-lg gap-2 border bg-[#1B1B1B] border-zinc-800 p-2 cursor-pointer'>
                                <Image src={sell.icon as string} width={20} height={20} alt={sell.name} />
                                <p>{sell.name}</p>
                                <CloseRoundedIcon onClick={()=>removeAdvancedIcon(sell.id)} className='cursor-pointer' />
                                </div>
                            ))
                        }
                        </div>

                        {dropdown == index ?
                        <ExpandMoreRoundedIcon className='cursor-pointer' />:
                        <ExpandLessRoundedIcon className='cursor-pointer'  />
                        }

                    {dropdown == index &&
                        <div className='absolute z-10 left-0 bg-[#1B1B1B] rounded-lg p-3 w-[250px] h-[150px] top-16'>
                        {
                            advancedIcons.map((item,index)=>(
                                <div onClick={()=>handleAdvancedCoins(item)} key={index} className='flex gap-2 p-2 hover:bg-[#5200FF] cursor-pointer'>
                                <Image src={item.icon} width={20} height={20} alt="Danger" />
                                <p>{item.name}</p>
                                </div>
                            ))
                        }
                        </div>
                        }

                        </div>
                        }
                    </div>
                ))
            }
        </div>
        </section>
    </section>
  )
}

export default Step3


let advancedIcons = [
    {
        icon:astro,
        name:"ASTRO",
        id:1
    },
    {
        icon:bitcoin,
        name:"BITCOIN",
        id:2
    },
    {
        icon:usdt,
        name:"DAI",
        id:3
    },
]