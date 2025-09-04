import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
            {children}
        </div>
    );
};

export default RootLayout;
