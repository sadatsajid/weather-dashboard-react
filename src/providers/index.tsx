import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';

import ThemeProviderWrapper from '../themes/ThemeProvider';
import { SidebarProvider } from '../contexts/SidebarContext';
import { ChildrenProps } from '../types/shared';

const Providers = ({ children }: ChildrenProps) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <HelmetProvider>
                <SidebarProvider>
                    <ThemeProviderWrapper>
                        {children}
                    </ThemeProviderWrapper>
                </SidebarProvider>
            </HelmetProvider>
        </QueryClientProvider>
    )
};

export default Providers;