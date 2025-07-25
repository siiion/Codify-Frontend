import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Content from './layout/Content';

interface LayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  contentClassName?: string;
}

const Layout: React.FC<LayoutProps> = ({
  title,
  description,
  children,
  contentClassName,
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <Content
        title={title}
        description={description}
        className={contentClassName}
      >
        {children}
      </Content>
      <Footer />
    </div>
  );
};

export default Layout;
