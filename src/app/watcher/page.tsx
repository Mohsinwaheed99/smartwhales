import DashHeading from '@/components/DashHeading';
import DashLayout from '@/components/DashLayout';
import { watcherData } from '@/constants';
import WatcherCard from '@/components/WatcherCard';
import watcher from '../../../public/watcher.svg'

const Watcher = () => {
  return (
    <DashLayout>
      <div className=''>
      <DashHeading mobileIcon={watcher} heading="Watcher" desc="Some description some description some description" />
      </div>

      <section className="flex sm:ml-[30px] md:ml-0 flex-wrap align-center mt-[20px] flex-wrap gap-x-[30px]">
        {
          watcherData.map((item,index)=>(
            <>
            <WatcherCard item={item} index={index} />
          </>
        ))}
      </section>
    </DashLayout>
  );
};

export default Watcher;
