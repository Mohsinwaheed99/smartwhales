"use client"
import React,{useState} from 'react'
import wallet from '../../public/wallet.svg'
import Input from './Input'
import Image from 'next/image'
import Button from './Button'
import search from '../../public/search.svg'
import AdvancedSearch from './AdvancedSearch'
import { usePathname } from 'next/navigation'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

type serachProps={
    type:string
}
const SearchBar = ({type}:serachProps) => {
    const pathname = usePathname()
    const [searchWallet,setSearchWallet] = useState("")
    const [showFilter,setShowFilter] =useState(false)

    const handleShowFilter = () =>{
        setShowFilter((prevFilter)=> !prevFilter)
    }
    let placeHolder  = pathname == "/wallet" ?"Search Wallet Address" :pathname == "/vault" ?"Search for transactions, addresses, blocks and embedded text data...":pathname == "/affiliate"?"Search Partner" :"Search Vault"
  return (
    <div>
        <div className={`flex ${(pathname == "/wallet" || pathname === "/watcher") ? "p-[5px]":"p-[12px]"} rounded-full bg-[#1B1B1B] justify-between`}>
        <div className={`flex items-center ${(pathname == "/wallet" || pathname === "/watcher") ?"basis-[50%]":"basis-[100%]"}`}>
         {pathname === "/wallet" ?
          <svg
              className="ml-3 opacity-30"
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.14062 13.5V5.5C7.14062 4.96957 7.35134 4.46086 7.72641 4.08579C8.10148 3.71071 8.61019 3.5 9.14062 3.5H18.1406V2.5C18.1406 1.4 17.2406 0.5 16.1406 0.5H2.14062C1.61019 0.5 1.10148 0.710714 0.726411 1.08579C0.351339 1.46086 0.140625 1.96957 0.140625 2.5V16.5C0.140625 17.0304 0.351339 17.5391 0.726411 17.9142C1.10148 18.2893 1.61019 18.5 2.14062 18.5H16.1406C17.2406 18.5 18.1406 17.6 18.1406 16.5V15.5H9.14062C8.61019 15.5 8.10148 15.2893 7.72641 14.9142C7.35134 14.5391 7.14062 14.0304 7.14062 13.5ZM10.1406 5.5C9.59062 5.5 9.14062 5.95 9.14062 6.5V12.5C9.14062 13.05 9.59062 13.5 10.1406 13.5H19.1406V5.5H10.1406ZM13.1406 11C12.3106 11 11.6406 10.33 11.6406 9.5C11.6406 8.67 12.3106 8 13.1406 8C13.9706 8 14.6406 8.67 14.6406 9.5C14.6406 10.33 13.9706 11 13.1406 11Z"
                fill="white"
              />
            </svg>:
          <SearchRoundedIcon className="ml-3 text-[24px] text-[#5F5F5F]" />
          }

          <Input 
            type="text"
            placeholder={placeHolder}
            state={searchWallet}
            setState={setSearchWallet}
            className='bg-transparent text-[14px] placeholder-[#5F5F5F] basis-[97%] ml-2 focus:outline-0'
          />
        </div>
         {(pathname == "/wallet" || pathname === "/watcher") &&
          <div className='flex items-center basis-[50%] justify-end'>
          <p onClick={handleShowFilter} className='basis-[50%] text-[14px] text-end cursor-pointer text-[#5C6DFF] underline whitespace-nowrap mr-[20px]'>Advanced Search</p>

          <Button 
            className={`flex basis-[48px] justify-center gap-2 p-[12px_24px_12px_24px] text-lg font-semibold bg-[#5200FF] flex rounded-full text-sm font-medium max-md:w-full`} 
            title="Search" 
            leftIcon={search} 
          />
        </div>
        }
        </div>

     <section>
        {showFilter&&
          <AdvancedSearch searchPosition='navbarSearch' showFilter={handleShowFilter} />
        }
       </section> 
    </div>
  )
}

export default SearchBar
