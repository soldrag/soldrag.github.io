import type { Metadata } from 'next';

import { PersonSchema } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  description: 'Building things with code. Open to ideas.',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <PersonSchema />
      <Hero />
    </PageWrapper>
  );
}
