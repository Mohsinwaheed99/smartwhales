'use client';
import React, { useState } from 'react';
import Pagination from './Pagination';

type tableTypes = {
  showPagination?: boolean;
  data?: any;
  column?: any;
  type?:string
};

const Table = ({ data, column, showPagination,type }: tableTypes) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data && data.length / 8);
  const startIndex = (currentPage - 1) * 8;
  const endIndex = startIndex + 8;
  const currentData = showPagination ? data && data.slice(startIndex, endIndex) : data;
  let totalData = currentData && currentData.length + startIndex;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="mt-[22px] md:ml-[15px] xl:ml-0 sm:w-[98%] md:w-full xl:w-full	border-collapse overflow-auto scroll">
        {currentData && currentData.length > 0 ? (
          currentData.map((row: any, index: number) => {
            return (
              <div
                key={index}
                className={`${type !== "Wallet"?"xl:h-[76px] gap-[30px] ":"xl:h-[68px] gap-[15px] "} mb-[10px] flex w-full flex-wrap items-center justify-between  bg-[#1B1B1B] p-[20px_20px_15px_16px] md:rounded-[6px] border border-[#323232] lg:flex-nowrap lg:gap-y-0`}
              >
                {column.map((header: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className={`text-[12px] whitespace-nowrap basis-[30%] text-start font-normal lg:basis-[14%] max-[1024px]:[&:nth-child(1)]:basis-[100%] lg:[&:nth-child(1)]:ml-1 lg:[&:nth-child(1)]:basis-[61%] max-[1024px]:[&:nth-last-child(2)]:w-[100%]`}
                    >
                     {header.heading && <p className="mb-[6px] text-start text-[10px] text-[#6c6c6c]">{header.heading}</p>}
                      {header.Cell ? header.Cell({ value: row[header.accessor], row }) : row[header.accessor]}
                    </div>
                  );
                })}
              </div>
            );
          })
        ) : currentData && currentData.length != 0 ? (
          <tr>
            <td colSpan={12}>
              <p>Loading</p>
            </td>
          </tr>
        ) : (
          <tr>
            <td colSpan={8}>
              <div>No Data Found ...</div>
            </td>
          </tr>
        )}
      </div>

      {showPagination && (
        <section className="item-center mr-3 md:mr-0 md:pt-[31px] pb-[12px] pt-[21px] md:pb-[51px] flex justify-end gap-4">
          <div>
            <p className="text-[10px] pt-[5px] pr-[20px]">
              {' '}
              {currentData && currentData.length !== 0 ? startIndex + 1 : startIndex} - {totalData && totalData} of{' '}
              {data && data.length}
            </p>
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </section>
      )}
    </>
  );
};

export default Table;
