import React, { useState } from 'react';
import AdvancedSearch from './AdvancedSearch';
import WalletCard from './WalletCard';
import { vaultData } from '@/constants';
import Input from '@/components/Input';
import Button from '@/components/Button';

type FilterType = {
  searchBar: string | number;
  showFilter: boolean;
};

const Step1 = () => {
  const [filter, setFilter] = useState<FilterType>({
    searchBar: '',
    showFilter: false,
  });

  const handleInputChange = (field: keyof FilterType) => (value: string | number) => {
    setFilter((prevFormState) => ({
      ...prevFormState,
      [field]: value,
    }));
  };

  const handleShowFilter = () => {
    setFilter((prevFilter) => ({ ...prevFilter, showFilter: !filter.showFilter }));
  };
  return (
    <div>
      <section className="mt-[60px] p-5 md:m-[0_auto] md:w-[940px]">
        <div className="flex items-center justify-between gap-1 rounded-full border border-[#808080] p-2  ">
          <div className="flex items-center gap-2">
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
            </svg>
            <Input
              type="text"
              state={filter.searchBar}
              placeholder="Search Wallet Address"
              setState={handleInputChange('searchBar')}
              className="w-full bg-transparent focus:outline-0"
            />
          </div>
          <Button title="Add" className="rounded-full bg-[#5200FF] p-3 pl-9 pr-9" />
        </div>
        <div className="ml-3 mt-2 flex gap-1">
          <p className="text-[12px] text-[#808080]">Search wallet Search walletSearch wallet </p>
          <span onClick={handleShowFilter} className="cursor-pointer ml-2 text-[12px] text-[#5C6DFF] underline">
            Advanced Search
          </span>
        </div>
      </section>
      <section className="mt-9 border-t border-[#808080] pt-9">
        <section className="md:m-[0_auto] md:w-[711px]">
          <div className="mb-[45px] ml-5 flex items-center gap-2">
            <svg
              className="rounded-full bg-[#1B1B1B] p-[3px]"
              width="30"
              height="30"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.30729 11.4782V6.14486C7.30729 5.79123 7.44777 5.4521 7.69782 5.20205C7.94787 4.952 8.287 4.81152 8.64062 4.81152H14.6406V4.14486C14.6406 3.41152 14.0406 2.81152 13.3073 2.81152H3.97396C3.62034 2.81152 3.2812 2.952 3.03115 3.20205C2.7811 3.4521 2.64063 3.79123 2.64062 4.14486V13.4782C2.64063 13.8318 2.7811 14.171 3.03115 14.421C3.2812 14.671 3.62034 14.8115 3.97396 14.8115H13.3073C14.0406 14.8115 14.6406 14.2115 14.6406 13.4782V12.8115H8.64062C8.287 12.8115 7.94787 12.671 7.69782 12.421C7.44777 12.171 7.30729 11.8318 7.30729 11.4782ZM9.30729 6.14486C8.94063 6.14486 8.64062 6.44486 8.64062 6.81152V10.8115C8.64062 11.1782 8.94063 11.4782 9.30729 11.4782H15.3073V6.14486H9.30729ZM11.3073 9.81152C10.754 9.81152 10.3073 9.36486 10.3073 8.81152C10.3073 8.25819 10.754 7.81152 11.3073 7.81152C11.8606 7.81152 12.3073 8.25819 12.3073 8.81152C12.3073 9.36486 11.8606 9.81152 11.3073 9.81152Z"
                fill="white"
              />
            </svg>
            <p className="text-[16px]">Added Wallets</p>
          </div>
          {vaultData.map((vault, index) => (
            <div key={index}>
              <WalletCard stepNo={2} />
            </div>
          ))}
        </section>
      </section>

       <section>
        {filter.showFilter&&
          <AdvancedSearch searchPosition='createVault' showFilter={handleShowFilter} />
        }
       </section>
    </div>
  );
};

export default Step1;
