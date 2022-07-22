export interface IFooterLayout {}

const FooterLayout: React.FC<IFooterLayout> = () => {
  return (
    <footer className="w-full">
      <section className="w-full flex justify-center items-center p-4">
        <p className="text-center   font-light text-lg">
          Copyright &copy; 2022.
        </p>
      </section>
    </footer>
  );
};

export default FooterLayout;
