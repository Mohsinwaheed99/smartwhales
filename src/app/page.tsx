import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import whale from '../../public/whale.svg';

export default function Home() {
  return (
    <main className="flex h-screen flex-col  items-center justify-center gap-3 p-[27px] text-center md:p-24 home-background">
      <div className="flex h-[246px] md:w-[1078px] flex-col items-center justify-center">
        <Image src={whale} width={41} height={41} alt="Whale logo" />
        <h3 className="font-[700] mt-[20px] mb-[10px]">Get started by connecting your wallet</h3>
        <p className='text-[#8F80AE] mb-[20px] w-[365px] text-[15px]'>Discover new possibilities and more features by connecting your wallet</p>
        <div className="w-50 flex items-center text-black cursor-pointer gap-2 rounded-full bg-white p-[12px_20px_12px_20px] hover:opacity-[0.8] text-black">
          <svg
            className="opacity-80"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#3C3D47"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 16V8C10 7.46957 10.2107 6.96086 10.5858 6.58579C10.9609 6.21071 11.4696 6 12 6H21V5C21 3.9 20.1 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C20.1 21 21 20.1 21 19V18H12C11.4696 18 10.9609 17.7893 10.5858 17.4142C10.2107 17.0391 10 16.5304 10 16ZM13 8C12.45 8 12 8.45 12 9V15C12 15.55 12.45 16 13 16H22V8H13ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z"
              fill="#0B0C19"
            />
          </svg>
          <ConnectButton />
        </div>
      </div>
    </main>
  );
}
