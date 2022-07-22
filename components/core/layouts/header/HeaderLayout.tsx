import Link from 'next/link';

export interface IHeaderLayout {}

const HeaderLayout: React.FC<IHeaderLayout> = () => {
  return (
    <header className="w-full sticky top-0 z-40">
      <section className="flex justify-between items-center p-4">
        <h1>
          <Link href="/">
            <a className="font-bold text-2xl">NextJS App</a>
          </Link>
        </h1>
        <nav className="flex items-center space-x-2">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </section>
    </header>
  );
};

export default HeaderLayout;
