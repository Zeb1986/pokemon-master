import React from 'react';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '../lib/AntdRegistry';
// import styles from './globals.module.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pokemon Master',
  description: 'Choose Your Favorite',
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
    <html lang="en" style={{backgroundColor: "lightgrey", padding: "20px"}}>
    <body style={{margin: 0}} className={inter.className}>
    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
    </html>
);

export default RootLayout;