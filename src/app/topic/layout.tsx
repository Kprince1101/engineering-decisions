import type { ReactNode } from 'react';
import { DomainMenu } from '@/components/shell/DomainMenu';
import { Header } from '@/components/shell/Header';

export default function TopicLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <>
            <Header />

            <main className="bg-slate-100 pt-20 pb-12">
                <div className="w-full px-8 grid grid-cols-[auto_1fr] gap-10">
                    <DomainMenu />
                    <div className="flex-1 min-w-0 flex justify-center">
                        {children}
                    </div>
                </div>
            </main>
        </>
    );
}
