'use client';

import { useSection } from '@/contexts/SectionContext';
import { ContentContainer } from '@/components/content';
import { AntdContext } from '@/components/evaluation/context/AntdContext';
import { AntdComponents } from '@/components/evaluation/components/AntdComponents';
import { AntdAdvanced } from '@/components/evaluation/advanced/AntdAdvanced';
import { AntdTradeoffs } from '@/components/evaluation/tradeoffs/AntdTradeoffs';

export default function AntdPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <AntdContext />}
            {activeSection === 'components' && <AntdComponents />}
            {activeSection === 'advanced' && <AntdAdvanced />}
            {activeSection === 'tradeoffs' && <AntdTradeoffs />}
        </ContentContainer>
    );
}