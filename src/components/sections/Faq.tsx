import { ArrowRight, MessageCircle, Phone, Plus, X } from 'lucide-react';
import type { ReactNode } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Reveal } from '@/components/shared/Reveal';
import {
  LANDING_FAQ_HEADING,
  LANDING_FAQ_SUBHEADING,
  LANDING_FAQ_CONTACTS,
  LANDING_FAQ_CONTACT_LINK,
  LANDING_FAQ_DEFAULT_OPEN,
  LANDING_FAQ_ITEMS,
} from '@/constants/faq';
import type { FaqContactId, FaqItem } from '@/types/landing';

const CONTACT_ICONS: Record<FaqContactId, ReactNode> = {
  whatsapp: <MessageCircle className='size-6 text-[#25D366]' />,
  phone: <Phone className='size-6 text-[#2870BD]' />,
};

function FaqToggleIcon() {
  return (
    <span className='relative flex size-6 shrink-0 items-center justify-center'>
      <Plus className='absolute size-6 text-[#2870BD] transition-opacity group-data-[panel-open]:opacity-0' />
      <X className='absolute size-6 text-[#2870BD] opacity-0 transition-opacity group-data-[panel-open]:opacity-100' />
    </span>
  );
}

function FaqContactColumn() {
  return (
    <Reveal>
      <h2 className='text-[48px] font-medium text-white'>{LANDING_FAQ_HEADING}</h2>
      <p className='mt-4 max-w-md text-lg font-medium text-white/60'>
        {LANDING_FAQ_SUBHEADING}
      </p>

      <div className='mt-10 flex flex-col gap-6'>
        {LANDING_FAQ_CONTACTS.map((contact) => (
          <div key={contact.id} className='flex items-center gap-4'>
            <span className='flex size-14 shrink-0 items-center justify-center rounded-full bg-white'>
              {CONTACT_ICONS[contact.id]}
            </span>
            <div>
              <p className='text-xl font-medium text-white'>{contact.title}</p>
              <p className='text-lg font-normal text-white/60'>{contact.description}</p>
            </div>
          </div>
        ))}
      </div>

      <a
        href='#contact'
        className='mt-8 inline-flex items-center gap-2 text-lg font-medium text-[#2870BD] hover:opacity-80'
      >
        {LANDING_FAQ_CONTACT_LINK}
        <ArrowRight className='size-5' />
      </a>
    </Reveal>
  );
}

function FaqAccordionItem({ item, delayMs = 0 }: { item: FaqItem; delayMs?: number }) {
  return (
    <Reveal delayMs={delayMs} distance={4}>
      <AccordionItem value={item.id} className='border-b border-white/10 last:border-b-0'>
        <AccordionTrigger
          className='py-5 text-2xl font-medium text-white hover:no-underline'
          icon={<FaqToggleIcon />}
        >
          {item.question}
        </AccordionTrigger>
        <AccordionContent className='text-lg font-normal text-white/75'>
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    </Reveal>
  );
}

export function Faq() {
  return (
    <section id='faq' className='bg-[#0a0a0c] py-24'>
      <div className='grid grid-cols-1 items-start gap-[10px] px-[140px] lg:grid-cols-2'>
        <FaqContactColumn />

        <Accordion
          defaultValue={[LANDING_FAQ_DEFAULT_OPEN]}
          className='flex flex-col gap-[10px]'
        >
          {LANDING_FAQ_ITEMS.map((item, index) => (
            <FaqAccordionItem key={item.id} item={item} delayMs={index * 80} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}
