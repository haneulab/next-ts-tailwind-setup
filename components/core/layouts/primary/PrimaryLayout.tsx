import FooterLayout from '../footer/FooterLayout';
import HeaderLayout from '../header/HeaderLayout';
import MetaLayout from '../meta/MetaLayout';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <MetaLayout />
      <div id="layout">
        <HeaderLayout />
        <main>{children}</main>
        <FooterLayout />
      </div>
    </>
  );
};

export default PrimaryLayout;
