import PrimaryLayout from '@components/core/layouts/primary/PrimaryLayout';
import type { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <div className="p-8 h-[90vh] bg-slate-100 flex items-center justify-center">
      <h3>Hello World!</h3>
    </div>
  );
};

export default Home;

Home.getLayout = (_page) => {
  return <PrimaryLayout>{_page}</PrimaryLayout>;
};
