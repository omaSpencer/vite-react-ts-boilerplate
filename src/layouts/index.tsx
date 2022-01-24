import { memo, FC } from 'react';
//
import { Navbar } from '@/components';

type Props = {
  children: any;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default memo(Layout);
