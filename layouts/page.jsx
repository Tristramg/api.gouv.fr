import React from 'react';

import Meta from '../components/meta';
import Header from '../components/header';
import Footer from '../components/footer';
import PreFooter from '../components/preFooter';
import '../styles/fonts.scss';
import './layout.scss';

const Page = ({
  title,
  description,
  headerKey,
  usePreFooter = true,
  preFooterBackground,
  children,
}) => (
  <div id="page-layout">
    <Meta title={title} description={description} />
    <Header headerKey={headerKey || 'home'} />
    <main>{children}</main>
    {usePreFooter && <PreFooter background={preFooterBackground} />}
    <Footer />
  </div>
);

export default Page;
