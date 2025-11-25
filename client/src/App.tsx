import React, { ReactNode, useState, useEffect, useMemo, useRef } from 'react';
import { Menu, X, Phone, MapPin, ArrowRight, Truck, Pill, Baby, FileText, Activity, ShieldCheck, UserPlus, Star, Car, BookOpen, ChevronRight, ArrowLeft, Info, AlertCircle, ChevronDown, Download, ExternalLink, HelpCircle, Search, FlaskConical, Plane, Syringe, HeartHandshake, ChevronUp, ChevronLeft, Package, LayoutGrid, MessageCircle, FileQuestion, Book, Users } from 'lucide-react';
import { Section, Card, Button, StatCard } from '@/components/ui';
import { FormStatus, BlogPost, Category, ViewState, FormItem, FaqItem, GlossaryItem, FaqCategory, ServiceData, GoogleReviewStats } from '@shared/types';

// --- DATA: BLOG ---
const BLOG_POSTS: BlogPost[] = [
  {
    id: 'mixing-meds-kids',
    title: "Is it safe to mix these medications?",
    subtitle: "A guide for parents on combining common fever reducers and allergy meds.",
    category: "For Parents",
    readTime: "3 min read",
    date: "Oct 2023",
    author: "Harsh",
    keyPoints: [
      "Ibuprofen and Acetaminophen can be alternated but require tracking.",
      "Never double up on multi-symptom cold syrups without checking ingredients.",
      "Antihistamines often cause drowsiness; timing matters for school."
    ],
    content: (
      <>
        <h3 className="font-serif text-xl md:text-2xl text-ink mt-8 mb-4">What people usually ask us</h3>
        <p className="mb-4 text-ink-light leading-relaxed">
          It’s 2 AM, your child has a fever, and their nose is running. You gave them Tylenol three hours ago. Can you give them Advil now? What about that cough syrup in the cabinet? This is one of the most frequent late-night calls we get. The short answer is often yes, but the details matter to keep your little one safe.
        </p>

        <h3 className="font-serif text-xl md:text-2xl text-ink mt-8 mb-4">What you should know</h3>
        <p className="mb-4 text-ink-light leading-relaxed">
          <strong>Alternating Fever Reducers:</strong> Generally, Acetaminophen (Tylenol) and Ibuprofen (Advil/Motrin) work through different pathways in the body. It is usually safe to alternate them every 3-4 hours if one isn't bringing the fever down, but strict tracking is essential to avoid overdosing.
        </p>
        <p className="mb-4 text-ink-light leading-relaxed">
          <strong>The "Hidden Ingredient" Trap:</strong> Many over-the-counter cold and flu syrups already contain acetaminophen. If you give a dose of plain Tylenol alongside a "Multi-Symptom Cold & Flu" syrup, you might accidentally give a double dose. Always read the label or bring the bottle to us to check.
        </p>

        <h3 className="font-serif text-xl md:text-2xl text-ink mt-8 mb-4">How we can help at Golf Links IDA</h3>
        <ul className="list-disc pl-5 space-y-2 text-ink-light mb-6">
          <li><strong>Medication Reviews:</strong> Bring in your current cabinet contents. We'll verify what is safe to use together.</li>
          <li><strong>Custom Dosing:</strong> We can calculate the exact dose based on your child's current weight, not just the age brackets on the box.</li>
          <li><strong>Flavoring:</strong> If they refuse the medicine, we can compound it with a flavor they actually like.</li>
        </ul>

        <h3 className="font-serif text-xl md:text-2xl text-ink mt-8 mb-4">When to talk to your doctor instead</h3>
        <p className="mb-4 text-ink-light leading-relaxed">
          If a fever persists for more than 3 days, if the child is under 3 months old, or if they are showing signs of dehydration (no tears, dry diapers), please skip the pharmacy and contact your pediatrician or visit urgent care immediately.
        </p>
      </>
    )
  },
  {
    id: 'transferring-prescriptions',
    title: "Moving your prescriptions: How it actually works",
    subtitle: "It’s easier than you think. You don't need to call your old pharmacy.",
    category: "Medication Basics",
    readTime: "2 min read",
    date: "Sep 2023",
    author: "Harsh",
    keyPoints: [
      "We handle the entire transfer process for you.",
      "Most transfers are completed within 24 hours.",
      "You keep your existing refills and doctor instructions."
    ],
    content: (
      <>
        <h3 className="font-serif text-xl md:text-2xl text-ink mt-8 mb-4">What people usually ask us</h3>
        <p className="mb-4 text-ink-light leading-relaxed">
          "Do I have to call the big chain pharmacy to tell them I'm leaving? Will it be awkward?" We hear this all the time. The answer is no. You actually don't need to speak to them at all. The system is designed to let patients choose their provider freely.
        </p>

        <h3 className="font-serif text-xl md:text-2xl text-ink mt-8 mb-4">What you should know</h3>
        <p className="mb-4 text-ink-light leading-relaxed">
          To transfer, you simply provide us with your name, birth date, and the name of your old pharmacy. If you have the bottle labels, that helps, but it's not strictly necessary. We send a formal request to the other pharmacy, and by law, they must send us your prescription details, insurance info, and remaining refills.
        </p>

        <h3 className="font-serif text-xl md:text-2xl text-ink mt-8 mb-4">How we can help at Golf Links IDA</h3>
        <ul className="list-disc pl-5 space-y-2 text-ink-light mb-6">
          <li><strong>We do the paperwork:</strong> We fax and call for you.</li>
          <li><strong>Syncing Refills:</strong> Once we have your file, we can line up your medications so they all renew on the same day.</li>
          <li><strong>Free Delivery:</strong> Once transferred, you qualify for our free local delivery immediately.</li>
        </ul>
      </>
    )
  },
  {
    id: 'seasonal-allergies',
    title: "Preparing for Spring Allergies",
    subtitle: "Start treatment before the pollen hits for best results.",
    category: "Seasonal Health",
    readTime: "4 min read",
    date: "Mar 2024",
    author: "Team",
    keyPoints: [
      "Start nasal sprays 2 weeks before allergy season peaks.",
      "Shower before bed to remove pollen from hair and skin.",
      "Keep windows closed on high pollen count days."
    ],
    content: (
      <>
        <h3 className="font-serif text-xl md:text-2xl text-ink mt-8 mb-4">What people usually ask us</h3>
        <p className="mb-4 text-ink-light leading-relaxed">
          Many patients come in when their eyes are already swollen and red. While we can treat symptoms then, the best strategy is prevention.
        </p>
        <p className="mb-4 text-ink-light leading-relaxed">
          By starting a corticosteroid nasal spray or a daily antihistamine a couple of weeks before the blooms open in Ancaster, you prime your immune system to be less reactive.
        </p>
         <h3 className="font-serif text-xl md:text-2xl text-ink mt-8 mb-4">How we can help at Golf Links IDA</h3>
        <ul className="list-disc pl-5 space-y-2 text-ink-light mb-6">
          <li><strong>Selection:</strong> We can guide you between drowsy and non-drowsy options suitable for work or school.</li>
          <li><strong>Interaction Check:</strong> Some allergy meds interact with blood pressure medication. We check this every time.</li>
        </ul>
      </>
    )
  }
];

// --- DATA: FORMS ---
const FORMS_DATA: FormItem[] = [
  {
    id: 'transfer-request',
    title: 'Prescription Transfer Request',
    description: 'Authorize us to move your prescriptions from another pharmacy. We handle the faxing.',
    tags: ['New Patients', 'Transfer'],
    actionType: 'PDF'
  },
  {
    id: 'delivery-auth',
    title: 'Delivery Authorization',
    description: 'Give us permission to leave packages if you aren’t home, or designate an agent.',
    tags: ['Delivery', 'Convenience'],
    actionType: 'PDF'
  },
  {
    id: 'medscheck-consent',
    title: 'MedsCheck Consent Form',
    description: 'For patients taking 3+ chronic medications. Allows us to book a full annual review.',
    tags: ['Adults', 'Seniors'],
    actionType: 'PDF'
  },
  {
    id: 'flu-shot-consent',
    title: 'Flu Shot Consent',
    description: 'Fill this out before your appointment to save time in the clinic.',
    tags: ['Seasonal', 'Vaccines'],
    actionType: 'PDF'
  },
];

// --- DATA: FAQS ---
const FAQS_DATA: FaqItem[] = [
  {
    id: 'q1',
    category: 'Transfers & Refills',
    question: 'How long does a transfer take?',
    answer: 'Usually less than 24 hours. If we request it in the morning, we often have it ready by the afternoon. We will text you as soon as it is complete.'
  },
  {
    id: 'q2',
    category: 'Transfers & Refills',
    question: 'Do I need to tell my old pharmacy?',
    answer: 'No. We handle all communication with your previous pharmacy. It is a standard professional procedure.'
  },
  {
    id: 'q3',
    category: 'Delivery',
    question: 'Is delivery really free?',
    answer: 'Yes, for all prescription medications within Meadowlands and Ancaster. We deliver Monday through Friday afternoons.'
  },
  {
    id: 'q4',
    category: 'Insurance & Billing',
    question: 'Do you take my insurance?',
    answer: 'We accept all major private insurance plans (Sunlife, Manulife, Canada Life, etc.) as well as ODB (Ontario Drug Benefit).'
  },
  {
    id: 'q5',
    category: 'Kids Health',
    question: 'Can you flavor liquid medicine?',
    answer: 'Yes! We have a specialized compounding service that can add flavors like bubblegum, grape, or cherry to many liquid antibiotics and medicines.'
  }
];

// --- DATA: GLOSSARY ---
const GLOSSARY_DATA: GlossaryItem[] = [
  { term: 'Adherence', definition: 'Taking your medication exactly as prescribed (dosage and timing).', importance: 'Missing doses can make treatments like antibiotics ineffective.' },
  { term: 'Compounding', definition: 'Creating a personalized medication by mixing ingredients (e.g., liquid from a pill).', importance: 'Crucial for kids or pets who can’t swallow tablets.' },
  { term: 'Co-pay', definition: 'The portion of the drug cost you pay out of pocket after insurance.', importance: 'Knowing this helps you budget for monthly refills.' },
  { term: 'Dispensing Fee', definition: 'The professional fee charged by the pharmacy for checking and filling the script.', importance: 'This covers the pharmacist’s time to check for interactions and safety.' },
  { term: 'Generic', definition: 'A copy of a brand-name drug with the same active ingredients.', importance: 'Generics are safe and usually much cheaper than brand names.' },
  { term: 'MedsCheck', definition: 'A government-funded appointment to review all your medications one-on-one.', importance: 'Free for Ontario residents taking 3+ chronic meds.' },
  { term: 'ODB', definition: 'Ontario Drug Benefit. Provincial coverage for seniors (65+) and eligible residents.', importance: 'Covers most chronic medications but may have a small deductible.' },
  { term: 'Refill vs. Renewal', definition: 'A refill is already authorized. A renewal requires the pharmacist to call the doctor.', importance: 'Renewals take longer (1-2 days), so request them early.' },
  { term: 'Therapeutic Substitution', definition: 'Switching to a different drug that treats the same condition.', importance: 'Sometimes done if your specific brand is backordered.' },
];

// --- DATA: SERVICES (Centralized) ---
const ALL_SERVICES_DATA: ServiceData[] = [
  {
    id: 'prescriptions',
    title: 'Everyday Prescriptions',
    shortDescription: 'Fast, accurate fills for your regular medications, from minor issues to long-term conditions.',
    fullDescription: 'We prioritize accuracy and speed, ensuring you have the medications you need without the wait. Whether dealing with a sudden illness or managing a chronic condition, our team coordinates with your doctor to keep your health on track.',
    icon: Pill,
    subServices: [
      { items: ['Minor conditions and ailments', 'Long-term chronic disease management', 'Medication safety reviews', 'Prescription renewals and authorization'] }
    ],
    relatedServices: ['medication-customization', 'health-advice-support']
  },
  {
    id: 'kids-meds-vaccines',
    title: "Kids’ Meds & Vaccines",
    shortDescription: 'Expert pediatric medication support and gentle, kid-friendly care for your little ones.',
    fullDescription: 'Our pharmacy is located inside a children’s clinic, giving us unique expertise in pediatric care. We know how stressful it is when a child is sick, and we offer gentle, quick service to get you back home sooner.',
    icon: Baby,
    subServices: [
      { items: ['Pediatric prescription support', 'Childhood vaccinations and flu shots', 'Fever, allergy, and respiratory care', 'Liquid medication flavoring'] }
    ],
    relatedServices: ['prescriptions', 'health-advice-support']
  },
  {
    id: 'vaccinations-travel',
    title: 'Vaccinations & Travel',
    shortDescription: 'Stay safe with seasonal shots, respiratory virus protection, and travel health advice.',
    fullDescription: 'Protect yourself and your family whether you are staying home or traveling abroad. We offer a convenient way to stay up-to-date with your immunizations without a long wait at the clinic.',
    icon: Plane,
    subServices: [
      { items: ['Vaccination against respiratory viruses (Flu, COVID-19)', 'Routine immunizations (Shingles, Tetanus, etc.)', 'Travel vaccines (Hepatitis, Typhoid)', 'Travel health advice and kits'] }
    ],
    relatedServices: ['kids-meds-vaccines', 'health-advice-support']
  },
  {
    id: 'assessments-monitoring',
    title: 'Assessments & Monitoring',
    shortDescription: 'Diabetes checks, heart health monitoring, and medication safety reviews.',
    fullDescription: 'Your health doesn’t stop at the prescription counter. We offer regular check-ins and assessments to help you and your doctor ensure your treatment plan is working effectively and safely.',
    icon: Activity,
    subServices: [
      { items: ['Diabetes assessments and monitoring', 'Heart and cardiovascular risk checks', 'Respiratory and asthma assessments', 'Annual MedsCheck medication reviews'] }
    ],
    relatedServices: ['prescriptions', 'medication-customization']
  },
  {
    id: 'medication-customization',
    title: 'Custom Meds & Packaging',
    shortDescription: 'Compounding, personalized dosages, and blister packaging to fit your lifestyle.',
    fullDescription: 'We adapt medications to fit your needs, not the other way around. From easy-to-use blister packs that organize your pills by time of day to custom-compounded creams and liquids, we make taking medication simpler.',
    icon: FlaskConical,
    subServices: [
      { items: ['Therapy adjustment and dose optimization', 'Personalized / compounded medications', 'Blister packs (compliance packaging)', 'Maternity & pregnancy medication support'] }
    ],
    relatedServices: ['prescriptions', 'assessments-monitoring']
  },
  {
    id: 'health-advice-support',
    title: 'Health Advice & Support',
    shortDescription: 'Friendly guidance on pregnancy, smoking cessation, and general seasonal wellness.',
    fullDescription: 'Your pharmacist is your most accessible healthcare provider. We are here to answer your questions, bust myths, and provide evidence-based advice to help you make better health decisions for your family.',
    icon: HeartHandshake,
    subServices: [
      { items: ['Smoking cessation support', 'Maternity and pregnancy medication counseling', 'General wellness and seasonal health advice', 'Understanding side effects and interactions'] }
    ],
    relatedServices: ['kids-meds-vaccines', 'assessments-monitoring']
  },
  {
    id: 'free-delivery',
    title: 'Free Same-Day Delivery',
    shortDescription: 'We deliver prescription medications to Meadowlands and Ancaster for free.',
    fullDescription: 'We believe access to medication shouldn’t be a hassle. That’s why we offer free, reliable delivery service to families across Meadowlands and Ancaster. Just ask us to set it up when we fill your prescription.',
    icon: Truck,
    subServices: [
      { items: ['Free delivery within Meadowlands and Ancaster', 'Same-day service for orders before cutoff', 'Secure, contactless options available'] }
    ],
    relatedServices: ['prescriptions', 'medication-customization']
  }
];


// --- SHARED COMPONENTS ---

const ResourcesFooterCTA = ({ onNavigateToTransfer }: { onNavigateToTransfer: () => void }) => (
  <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center border-t border-stone-200 pt-12 mt-16">
    <p className="text-ink font-serif text-lg">Prefer to talk it through instead?</p>
    <span className="hidden md:inline text-stone-300">|</span>
    <p className="text-sm">
      Call us at <a href="tel:2892398000" className="text-ida font-medium hover:underline">(289) 239-8000</a> or <a href="#transfer" onClick={(e) => { e.preventDefault(); onNavigateToTransfer(); }} className="text-ida font-medium hover:underline">move your prescriptions in a few clicks →</a>
    </p>
  </div>
);

const Breadcrumbs = ({ 
  items, 
  onNavigate 
}: { 
  items: { label: string; view?: ViewState }[], 
  onNavigate: (view?: ViewState) => void 
}) => (
  <nav aria-label="Breadcrumb" className="mb-8 w-full max-w-full overflow-x-auto">
    <ol className="flex items-center gap-2 text-xs text-ink-light whitespace-nowrap">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center">
          {idx > 0 && <ChevronRight className="w-3 h-3 text-stone-300 mx-2 shrink-0" />}
          {item.view ? (
            <button 
              className="hover:text-ida cursor-pointer transition-colors focus:outline-none focus:underline" 
              onClick={() => item.view && onNavigate(item.view)}
            >
              {item.label}
            </button>
          ) : (
            <span className="text-ink font-semibold" aria-current="page">
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

// --- COMPONENT: STATUS CARD (With Blog Teaser) ---
const StatusCard = ({ onNavigate, reviewStats }: { onNavigate: (slug: string) => void, reviewStats: GoogleReviewStats }) => (
  <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm relative overflow-hidden h-full flex flex-col">
      {/* Header Row */}
      <div className="flex justify-between items-start mb-6">
         <div>
            <h3 className="font-serif text-xl text-ink mb-1">Today at Golf Links</h3>
            <div className="flex items-center gap-2 mt-1">
               <span className="relative flex h-2.5 w-2.5">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
               </span>
               <span className="text-sm font-medium text-green-700">Open · Closes 6:00 pm</span>
            </div>
         </div>
         <div className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
            Wait time: &lt; 2 min
         </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <a href="tel:2892398000" className="flex items-center justify-center gap-2 bg-ida text-white hover:bg-ida-light text-sm font-medium py-2.5 rounded-lg transition-colors shadow-sm">
           <Phone className="w-4 h-4" />
           Call Us Today
        </a>
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Golf+Links+I.D.A.+Pharmacy&query_place_id=ChIJKWKmFaCFLIgR-DL7zWjlxb4" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-ink text-sm font-medium py-2.5 rounded-lg transition-colors border border-stone-200 shadow-sm"
        >
           <MapPin className="w-4 h-4 text-stone-400" />
           Map
        </a>
      </div>

      {/* Info List */}
      <div className="space-y-4 mb-6">
         <div className="flex items-start gap-3">
            <div className="bg-yellow-50 p-1.5 rounded-md shrink-0 mt-0.5">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            </div>
            <div>
               <p className="text-sm font-medium text-ink flex items-center gap-1">
                 {reviewStats.rating.toFixed(1)} Rating
                 <span className="text-stone-300">|</span>
                 <span className="text-ink-light font-normal underline decoration-stone-200 underline-offset-2 cursor-pointer">{reviewStats.totalReviews} reviews</span>
               </p>
               {reviewStats.reviews[1] && (
                  <p className="text-xs text-ink-light mt-0.5 italic">"{reviewStats.reviews[1].text}"</p>
               )}
            </div>
         </div>
         
         <div className="flex items-start gap-3">
            <div className="bg-stone-100 p-1.5 rounded-md shrink-0 mt-0.5">
              <Car className="w-4 h-4 text-stone-500" />
            </div>
             <div>
               <p className="text-sm font-medium text-ink">Easy Parking</p>
               <p className="text-xs text-ink-light mt-0.5">Free spots right in front.</p>
            </div>
         </div>

         <div className="flex items-start gap-3">
            <div className="bg-stone-100 p-1.5 rounded-md shrink-0 mt-0.5">
              <Truck className="w-4 h-4 text-stone-500" />
            </div>
             <div>
               <p className="text-sm font-medium text-ink">Free Delivery</p>
               <p className="text-xs text-ink-light mt-0.5">Same-day for local families.</p>
            </div>
         </div>
      </div>

      {/* Featured Read */}
      <div className="mt-auto bg-stone-50 -mx-6 -mb-6 p-5 border-t border-stone-100 group cursor-pointer hover:bg-stone-100 transition-colors" onClick={() => onNavigate(BLOG_POSTS[0].id)}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-ink-light/70">Pharmacy Desk</span>
          <span className="text-[10px] font-medium text-ida bg-white border border-ida/20 px-1.5 py-0.5 rounded shadow-sm">New Post</span>
        </div>
        
        <h4 className="font-serif text-lg text-ink leading-snug mb-1 group-hover:text-ida transition-colors">
          {BLOG_POSTS[0].title}
        </h4>
        <p className="text-xs text-ink-light mb-0 line-clamp-1">{BLOG_POSTS[0].subtitle}</p>
      </div>
  </div>
);

// --- COMPONENT: RESOURCES INDEX VIEW ---
const ResourcesIndexView = ({ onNavigate }: { onNavigate: (view: ViewState) => void }) => (
  <div className="pt-24 md:pt-32 pb-16 min-h-screen">
    <Section>
       <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6">Patient Resources</h1>
          <p className="text-ink-light text-lg">Helpful tools, forms, and guides to manage your family's health.</p>
       </div>
       
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card title="Articles & News" icon={<BookOpen className="w-6 h-6"/>} actionLabel="Read articles" onClick={() => onNavigate('BLOG_INDEX')}>
             Expert advice on common ailments, medication safety, and seasonal health tips from our pharmacists.
          </Card>
          <Card title="Patient Forms" icon={<FileText className="w-6 h-6"/>} actionLabel="View forms" onClick={() => onNavigate('RESOURCES_FORMS')}>
             Downloadable forms for prescription transfers, delivery authorization, and more. Save time by filling them out at home.
          </Card>
          <Card title="Common Questions" icon={<HelpCircle className="w-6 h-6"/>} actionLabel="Get answers" onClick={() => onNavigate('RESOURCES_FAQS')}>
             Answers to frequently asked questions about transfers, insurance, delivery, and payments.
          </Card>
          <Card title="Pharmacy Glossary" icon={<Book className="w-6 h-6"/>} actionLabel="Learn terms" onClick={() => onNavigate('RESOURCES_GLOSSARY')}>
             Confused by medical jargon? Our glossary explains common pharmacy terms in plain English.
          </Card>
       </div>
    </Section>
  </div>
);

// --- COMPONENT: BLOG INDEX ---
const BlogIndex = ({ onSelectPost, onNavigate }: { onSelectPost: (post: BlogPost) => void, onNavigate: (view?: ViewState) => void }) => (
  <div className="pt-24 md:pt-32 pb-16 min-h-screen">
    <Section>
      <Breadcrumbs items={[{ label: 'Resources', view: 'RESOURCES_INDEX' }, { label: 'Articles' }]} onNavigate={onNavigate} />
      <div className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6">Health Articles</h1>
        <p className="text-ink-light text-lg max-w-2xl">Practical advice for parents and families.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <div key={post.id} className="group cursor-pointer flex flex-col h-full" onClick={() => onSelectPost(post)}>
            <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md h-full flex flex-col">
              <div className="flex justify-between items-center mb-4 text-xs font-medium uppercase tracking-wider">
                <span className="text-ida bg-ida/5 px-2 py-1 rounded">{post.category}</span>
                <span className="text-ink-light">{post.readTime}</span>
              </div>
              <h3 className="font-serif text-xl text-ink font-medium mb-3 group-hover:text-ida transition-colors">{post.title}</h3>
              <p className="text-ink-light text-sm leading-relaxed mb-6 flex-grow">{post.subtitle}</p>
              <div className="mt-auto flex items-center text-sm text-ink-light font-medium border-t border-stone-100 pt-4">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  </div>
);

// --- COMPONENT: BLOG POST VIEW ---
const BlogPostView = ({ post, onBack, onNavigateToTransfer }: { post: BlogPost, onBack: () => void, onNavigateToTransfer: () => void }) => (
  <div className="pt-24 md:pt-32 pb-16 min-h-screen bg-white">
     <article className="max-w-3xl mx-auto px-6">
        <button onClick={onBack} className="flex items-center text-sm text-ink-light hover:text-ida mb-8 transition-colors group">
           <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Back to articles
        </button>
        
        <header className="mb-10">
           <div className="flex gap-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider bg-stone-100 text-ink-light px-2 py-1 rounded">{post.category}</span>
           </div>
           <h1 className="font-serif text-3xl md:text-5xl text-ink leading-tight mb-6">{post.title}</h1>
           <p className="text-xl text-ink-light leading-relaxed mb-6">{post.subtitle}</p>
           <div className="flex items-center text-sm text-ink-light border-y border-stone-100 py-4">
              <span className="font-medium text-ink">By {post.author}</span>
              <span className="mx-3 text-stone-300">|</span>
              <span>{post.date}</span>
              <span className="mx-3 text-stone-300">|</span>
              <span>{post.readTime}</span>
           </div>
        </header>

        {/* Key Points Box */}
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 md:p-8 mb-10">
           <h3 className="font-serif text-lg text-ink mb-4">Key Takeaways</h3>
           <ul className="space-y-2">
              {post.keyPoints.map((point, idx) => (
                 <li key={idx} className="flex items-start gap-3 text-ink text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-ida mt-2 shrink-0"></span>
                    <span className="leading-relaxed">{point}</span>
                 </li>
              ))}
           </ul>
        </div>

        <div className="prose prose-stone prose-lg max-w-none text-ink">
           {post.content}
        </div>

        <ResourcesFooterCTA onNavigateToTransfer={onNavigateToTransfer} />
     </article>
  </div>
);

// --- COMPONENT: FORMS VIEW ---
const FormsView = ({ onNavigate, onNavigateToTransfer }: { onNavigate: (view?: ViewState) => void, onNavigateToTransfer: () => void }) => (
  <div className="pt-24 md:pt-32 pb-16 min-h-screen">
    <Section>
      <Breadcrumbs items={[{ label: 'Resources', view: 'RESOURCES_INDEX' }, { label: 'Forms' }]} onNavigate={onNavigate} />
      <div className="mb-12">
         <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6">Patient Forms</h1>
         <p className="text-ink-light text-lg max-w-2xl">Download and fill these out before your visit to save time.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {FORMS_DATA.map((form) => (
            <div key={form.id} className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col sm:flex-row items-start gap-4 hover:border-ida/30 transition-colors">
               <div className="bg-stone-50 p-3 rounded-lg shrink-0 text-stone-400">
                  <FileText className="w-6 h-6" />
               </div>
               <div className="flex-grow">
                  <h3 className="font-medium text-ink text-lg mb-1">{form.title}</h3>
                  <p className="text-sm text-ink-light mb-3 leading-relaxed">{form.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                     {form.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded">{tag}</span>
                     ))}
                  </div>
                  <button className="text-ida text-sm font-medium hover:underline flex items-center gap-1 group">
                     {form.actionType === 'PDF' ? 'Download PDF' : 'Open Link'} 
                     <Download className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
                  </button>
               </div>
            </div>
         ))}
      </div>
      <ResourcesFooterCTA onNavigateToTransfer={onNavigateToTransfer} />
    </Section>
  </div>
);

// --- COMPONENT: FAQ VIEW ---
const FaqView = ({ onNavigate, onNavigateToTransfer }: { onNavigate: (view?: ViewState) => void, onNavigateToTransfer: () => void }) => {
   const [openId, setOpenId] = useState<string | null>(null);

   const toggle = (id: string) => {
      setOpenId(openId === id ? null : id);
   };

   // Group FAQs by category
   const groupedFaqs = FAQS_DATA.reduce((acc, faq) => {
      if (!acc[faq.category]) acc[faq.category] = [];
      acc[faq.category].push(faq);
      return acc;
   }, {} as Record<string, FaqItem[]>);

   return (
      <div className="pt-24 md:pt-32 pb-16 min-h-screen">
         <Section>
            <Breadcrumbs items={[{ label: 'Resources', view: 'RESOURCES_INDEX' }, { label: 'FAQs' }]} onNavigate={onNavigate} />
            <div className="mb-12">
               <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6">Frequently Asked Questions</h1>
               <p className="text-ink-light text-lg max-w-2xl">Common questions about our pharmacy services.</p>
            </div>

            <div className="max-w-3xl">
               {Object.entries(groupedFaqs).map(([category, items]) => (
                  <div key={category} className="mb-10">
                     <h3 className="font-serif text-xl text-ink mb-4 border-b border-stone-200 pb-2">{category}</h3>
                     <div className="space-y-3">
                        {items.map((faq) => (
                           <div key={faq.id} className="border border-stone-200 rounded-lg bg-white overflow-hidden">
                              <button 
                                 onClick={() => toggle(faq.id)}
                                 className="w-full flex items-center justify-between p-4 text-left hover:bg-stone-50 transition-colors"
                              >
                                 <span className="font-medium text-ink pr-4">{faq.question}</span>
                                 {openId === faq.id ? <ChevronUp className="w-4 h-4 text-stone-400 shrink-0"/> : <ChevronDown className="w-4 h-4 text-stone-400 shrink-0"/>}
                              </button>
                              {openId === faq.id && (
                                 <div className="px-4 pb-4 pt-0 text-ink-light text-sm leading-relaxed border-t border-stone-50">
                                    <div className="pt-3">{faq.answer}</div>
                                 </div>
                              )}
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
            <ResourcesFooterCTA onNavigateToTransfer={onNavigateToTransfer} />
         </Section>
      </div>
   );
};

// --- COMPONENT: GLOSSARY VIEW ---
const GlossaryView = ({ onNavigate, onNavigateToTransfer }: { onNavigate: (view?: ViewState) => void, onNavigateToTransfer: () => void }) => (
   <div className="pt-24 md:pt-32 pb-16 min-h-screen">
      <Section>
         <Breadcrumbs items={[{ label: 'Resources', view: 'RESOURCES_INDEX' }, { label: 'Glossary' }]} onNavigate={onNavigate} />
         <div className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6">Pharmacy Glossary</h1>
            <p className="text-ink-light text-lg max-w-2xl">Understanding your prescription coverage and care.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GLOSSARY_DATA.map((item, idx) => (
               <div key={idx} className="bg-white border border-stone-200 rounded-xl p-6">
                  <h3 className="font-serif text-lg text-ink font-bold mb-2">{item.term}</h3>
                  <p className="text-sm text-ink mb-3 leading-relaxed">{item.definition}</p>
                  <div className="bg-stone-50 p-3 rounded text-xs text-ink-light">
                     <strong className="text-stone-500 uppercase tracking-wider text-[10px] block mb-1">Why it matters</strong>
                     {item.importance}
                  </div>
               </div>
            ))}
         </div>
         <ResourcesFooterCTA onNavigateToTransfer={onNavigateToTransfer} />
      </Section>
   </div>
);

// --- COMPONENT: SERVICES INDEX VIEW ---
const ServicesIndexView = ({ onNavigate, onNavigateToService, onNavigateToTransfer }: { onNavigate: (view?: ViewState) => void, onNavigateToService: (id: string) => void, onNavigateToTransfer: () => void }) => (
   <div className="pt-24 md:pt-32 pb-16 min-h-screen">
      <Section>
         <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6">Our Services</h1>
            <p className="text-ink-light text-lg">We offer more than just dispensing. We are your partners in family health.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_SERVICES_DATA.map((service) => {
               const Icon = service.icon;
               return (
                  <div key={service.id} className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col h-full hover:shadow-md transition-shadow cursor-pointer" onClick={() => onNavigateToService(service.id)}>
                     <div className="mb-4 text-ida">
                        <Icon className="w-8 h-8" />
                     </div>
                     <h3 className="font-serif text-xl text-ink font-medium mb-3">{service.title}</h3>
                     <p className="text-ink-light text-sm leading-relaxed mb-6 flex-grow">{service.shortDescription}</p>
                     
                     <div className="space-y-2 mb-6">
                        {service.subServices[0].items.slice(0, 3).map((item, i) => (
                           <div key={i} className="flex items-start gap-2 text-xs text-ink">
                              <span className="w-1 h-1 rounded-full bg-stone-300 mt-1.5 shrink-0"></span>
                              <span>{item}</span>
                           </div>
                        ))}
                     </div>

                     <div className="mt-auto pt-4 border-t border-stone-100 flex items-center text-ida font-medium text-sm group">
                        View details <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                     </div>
                  </div>
               );
            })}
         </div>
         <ResourcesFooterCTA onNavigateToTransfer={onNavigateToTransfer} />
      </Section>
   </div>
);

// --- COMPONENT: SERVICE DETAIL VIEW ---
const ServiceDetailView = ({ serviceId, onNavigate, onNavigateToService, onNavigateToTransfer }: { serviceId: string, onNavigate: (view?: ViewState) => void, onNavigateToService: (id: string) => void, onNavigateToTransfer: () => void }) => {
   const service = ALL_SERVICES_DATA.find(s => s.id === serviceId);
   
   if (!service) return <div>Service not found</div>;

   const Icon = service.icon;

   return (
      <div className="pt-24 md:pt-32 pb-16 min-h-screen bg-white">
         <div className="max-w-6xl mx-auto px-6 md:px-12">
            <Breadcrumbs items={[{ label: 'Services', view: 'SERVICES_INDEX' }, { label: service.title }]} onNavigate={onNavigate} />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
               {/* Left: Content */}
               <div className="lg:col-span-7">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 bg-ida/10 rounded-xl flex items-center justify-center text-ida">
                        <Icon className="w-6 h-6" />
                     </div>
                     <h1 className="font-serif text-3xl md:text-5xl text-ink">{service.title}</h1>
                  </div>
                  
                  <p className="text-xl text-ink-light leading-relaxed mb-8">{service.fullDescription}</p>
                  
                  <div className="bg-stone-50 border border-stone-100 rounded-2xl p-8 mb-10">
                     <h3 className="font-serif text-xl text-ink mb-6">What we offer</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.subServices[0].items.map((item, idx) => (
                           <div key={idx} className="flex items-start gap-3">
                              <div className="bg-white p-1 rounded-full shadow-sm mt-0.5 shrink-0">
                                 <div className="w-1.5 h-1.5 rounded-full bg-ida"></div>
                              </div>
                              <span className="text-ink text-sm">{item}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="flex gap-4">
                     <Button variant="primary" onClick={onNavigateToTransfer}>Contact us about this</Button>
                     <Button variant="outline" onClick={() => onNavigate('SERVICES_INDEX')}>Back to services</Button>
                  </div>
               </div>

               {/* Right: Related */}
               <div className="lg:col-span-5 lg:pl-12">
                  <div className="sticky top-32">
                     <h4 className="text-sm font-bold uppercase tracking-wider text-ink-light mb-6">Related Services</h4>
                     <div className="space-y-4">
                        {service.relatedServices.map(relatedId => {
                           const related = ALL_SERVICES_DATA.find(s => s.id === relatedId);
                           if (!related) return null;
                           const RIcon = related.icon;
                           return (
                              <div key={related.id} className="bg-white border border-stone-200 rounded-lg p-4 flex items-center gap-4 cursor-pointer hover:border-ida/50 transition-colors shadow-sm" onClick={() => onNavigateToService(related.id)}>
                                 <div className="text-stone-400">
                                    <RIcon className="w-5 h-5" />
                                 </div>
                                 <div>
                                    <h5 className="font-medium text-ink">{related.title}</h5>
                                    <span className="text-xs text-ink-light flex items-center mt-1 group">View <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" /></span>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                     
                     <div className="mt-10 bg-ida text-white rounded-xl p-6">
                        <h4 className="font-serif text-xl mb-2">Need help deciding?</h4>
                        <p className="text-ida-faint text-sm mb-4">Call us directly to speak with a pharmacist.</p>
                        <a href="tel:2892398000" className="inline-flex items-center font-medium hover:underline">
                           (289) 239-8000 <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

// --- COMPONENT: ABOUT VIEW ---
const AboutView = ({ onNavigate }: { onNavigate: (view: ViewState) => void }) => (
   <div className="pt-24 md:pt-32 pb-16 min-h-screen">
      <Section>
         <Breadcrumbs items={[{ label: 'About Us' }]} onNavigate={onNavigate} />
         
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
               <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6">More than just a pharmacy. <br/>We are your partners in health.</h1>
               <p className="text-xl text-ink-light leading-relaxed max-w-2xl mx-auto">
                  Golf Links I.D.A. Pharmacy was founded with a simple vision: to bring personalized, empathetic care back to the community pharmacy experience.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
               <div className="bg-stone-100 rounded-2xl aspect-square flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for an image of the pharmacy or Harsh */}
                  <Users className="w-24 h-24 text-stone-300" />
                  <div className="absolute inset-0 bg-black/5"></div>
               </div>
               <div>
                  <h2 className="font-serif text-3xl text-ink mb-6">Meet Harsh, Your Pharmacist</h2>
                  <p className="text-ink-light leading-relaxed mb-6">
                     Harsh, our Pharmacist Owner, believes that pharmacy care should be personal. Located right inside the Ancaster Central Children’s Clinic, we are uniquely positioned to understand the needs of young families, from the first fever to seasonal allergies.
                  </p>
                  <p className="text-ink-light leading-relaxed mb-6">
                     "We live here, we work here, and we raise our families here. When you walk into Golf Links IDA, you aren't just a customer number. You are a neighbor."
                  </p>
                  <div className="flex gap-4">
                     <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                        <span className="block font-bold text-ink text-lg">Local</span>
                        <span className="text-sm text-ink-light">Family Owned</span>
                     </div>
                     <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                        <span className="block font-bold text-ink text-lg">Clinic</span>
                        <span className="text-sm text-ink-light">On-site Support</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-ida text-white rounded-3xl p-8 md:p-12 text-center">
               <h2 className="font-serif text-3xl mb-6">Our Philosophy</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                     <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <HeartHandshake className="w-6 h-6 text-white" />
                     </div>
                     <h3 className="font-bold mb-2">Empathy First</h3>
                     <p className="text-sm text-ida-faint opacity-90">We listen before we dispense. Your peace of mind is part of the prescription.</p>
                  </div>
                   <div>
                     <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FlaskConical className="w-6 h-6 text-white" />
                     </div>
                     <h3 className="font-bold mb-2">Custom Care</h3>
                     <p className="text-sm text-ida-faint opacity-90">From compounding to flavouring, we tailor medications to fit your life.</p>
                  </div>
                   <div>
                     <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShieldCheck className="w-6 h-6 text-white" />
                     </div>
                     <h3 className="font-bold mb-2">Safety & Speed</h3>
                     <p className="text-sm text-ida-faint opacity-90">Rigorous checks without the long wait times of big box stores.</p>
                  </div>
               </div>
            </div>
         </div>
      </Section>
   </div>
);

// --- COMPONENT: PRIVACY POLICY VIEW ---
const PrivacyPolicyView = ({ onNavigate }: { onNavigate: (view: ViewState) => void }) => (
  <div className="pt-24 md:pt-32 pb-16 min-h-screen">
     <Section>
        <button onClick={() => onNavigate('HOME')} className="flex items-center text-sm text-ink-light hover:text-ida mb-8 transition-colors group">
           <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Back to home
        </button>
        <div className="max-w-3xl mx-auto prose prose-stone">
           <h1 className="font-serif text-4xl text-ink mb-8">Privacy Policy</h1>
           <p className="lead">At Golf Links I.D.A. Pharmacy, we are committed to protecting your personal health information. This policy outlines how we collect, use, and safeguard your data.</p>
           
           <h3>Collection of Personal Information</h3>
           <p>We collect personal information such as your name, address, health card number, medication history, and insurance details to provide you with pharmacy services, ensuring safety and compliance with Ontario laws.</p>
           
           <h3>Use and Disclosure</h3>
           <p>Your information is used to:</p>
           <ul>
              <li>Dispense medications accurately and safely.</li>
              <li>Submit claims to your insurance provider (ODB or private).</li>
              <li>Consult with your prescriber (doctor/nurse practitioner) regarding your care.</li>
           </ul>
           <p>We do not sell or share your information with third parties for marketing purposes.</p>
           
           <h3>Security</h3>
           <p>We use secure systems and physical safeguards to protect your records. Only authorized staff have access to your health information.</p>
           
           <h3>Questions?</h3>
           <p>If you have any questions about our privacy practices, please contact the pharmacy manager at (289) 239-8000.</p>
        </div>
     </Section>
  </div>
);

// --- GLOBAL FOOTER COMPONENT ---
const Footer = ({ 
  onNavigate, 
  onNavigateToService, 
  onNavigateToHomeAndScroll 
}: { 
  onNavigate: (view: ViewState) => void,
  onNavigateToService: (id: string) => void,
  onNavigateToHomeAndScroll: (section: string) => void
}) => (
  <footer className="bg-ida text-white py-16 px-6 md:px-12 mt-auto border-t border-ida-light/30">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Column 1: Brand & Contact */}
      <div className="space-y-6">
         <div>
            <span className="font-serif text-2xl font-semibold tracking-tight block mb-2">Golf Links IDA</span>
            <p className="text-ida-faint text-sm leading-relaxed opacity-80">
              A calm, modern pharmacy for families in Ancaster and Meadowlands.
            </p>
         </div>
         <ul className="space-y-2 text-sm text-ida-faint opacity-80">
            <li><a href="tel:2892398000" className="hover:text-white transition-colors font-medium">(289) 239-8000</a></li>
            <li>26 Legend Ct Unit 3, Ancaster</li>
            <li>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Golf+Links+I.D.A.+Pharmacy&query_place_id=ChIJKWKmFaCFLIgR-DL7zWjlxb4" 
                target="_blank" 
                rel="noreferrer"
                className="underline decoration-ida-light underline-offset-4 hover:text-white transition-colors"
              >
                Get Directions
              </a>
            </li>
         </ul>
      </div>
      
      {/* Column 2: Services */}
      <div>
        <h4 className="font-bold text-sm uppercase tracking-wider mb-6 opacity-70">Services</h4>
        <ul className="space-y-3 text-sm text-ida-faint opacity-80">
          <li><button onClick={() => onNavigate('SERVICES_INDEX')} className="hover:text-white transition-colors text-left font-medium">Services Overview</button></li>
          <li><button onClick={() => onNavigateToService('prescriptions')} className="hover:text-white transition-colors text-left">Everyday Prescriptions</button></li>
          <li><button onClick={() => onNavigateToService('kids-meds-vaccines')} className="hover:text-white transition-colors text-left">Kids' Health & Vaccines</button></li>
          <li><button onClick={() => onNavigateToService('medication-customization')} className="hover:text-white transition-colors text-left">Compounding & Custom Meds</button></li>
          <li><button onClick={() => onNavigateToService('assessments-monitoring')} className="hover:text-white transition-colors text-left">Assessments & Reviews</button></li>
          <li><button onClick={() => onNavigateToService('vaccinations-travel')} className="hover:text-white transition-colors text-left">Travel Health</button></li>
        </ul>
      </div>

      {/* Column 3: Resources */}
      <div>
        <h4 className="font-bold text-sm uppercase tracking-wider mb-6 opacity-70">Resources</h4>
        <ul className="space-y-3 text-sm text-ida-faint opacity-80">
          <li><button onClick={() => onNavigate('RESOURCES_INDEX')} className="hover:text-white transition-colors text-left font-medium">Resources Hub</button></li>
          <li><button onClick={() => onNavigate('BLOG_INDEX')} className="hover:text-white transition-colors text-left">Articles & News</button></li>
          <li><button onClick={() => onNavigate('RESOURCES_FORMS')} className="hover:text-white transition-colors text-left">Patient Forms</button></li>
          <li><button onClick={() => onNavigate('RESOURCES_FAQS')} className="hover:text-white transition-colors text-left">Common Questions</button></li>
          <li><button onClick={() => onNavigate('RESOURCES_GLOSSARY')} className="hover:text-white transition-colors text-left">Pharmacy Glossary</button></li>
        </ul>
      </div>

      {/* Column 4: Hours */}
      <div>
         <h4 className="font-bold text-sm uppercase tracking-wider mb-6 opacity-70">Hours</h4>
         <ul className="space-y-2 text-sm text-ida-faint opacity-80">
           <li className="flex justify-between border-b border-ida-light/20 pb-2"><span>Mon - Fri</span> <span>9am - 6pm</span></li>
           <li className="flex justify-between border-b border-ida-light/20 pb-2"><span>Saturday</span> <span>10am - 2pm</span></li>
           <li className="flex justify-between pt-1"><span>Sunday</span> <span>Closed</span></li>
         </ul>
         <div className="mt-6 pt-6 border-t border-ida-light/20">
            <button onClick={() => onNavigateToHomeAndScroll('transfer')} className="text-white hover:underline text-sm font-medium flex items-center">
               Transfer Prescriptions <ArrowRight className="w-3 h-3 ml-1"/>
            </button>
         </div>
      </div>
    </div>
    
    {/* Bottom Bar */}
    <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-ida-light/30 flex flex-col md:flex-row justify-between items-center text-xs text-ida-faint opacity-60">
       <p>© {new Date().getFullYear()} Golf Links I.D.A. Pharmacy. All rights reserved.</p>
       <div className="flex gap-6 mt-4 md:mt-0">
         <button onClick={() => onNavigate('HOME')}>Home</button>
         <button onClick={() => onNavigate('ABOUT')}>About Us</button>
         <button onClick={() => onNavigateToHomeAndScroll('contact')}>Contact</button>
         <button onClick={() => onNavigate('PRIVACY_POLICY')}>Privacy Policy</button>
       </div>
    </div>
  </footer>
);

// --- APP COMPONENT ---

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [transferFormStatus, setTransferFormStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false); // Mobile Accordion
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const transferFormRef = useRef<HTMLFormElement>(null);
  
  // Navigation State
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);

  // Dynamic Google Reviews Data
  const [reviewStats, setReviewStats] = useState<GoogleReviewStats>({
      rating: 5.0,
      totalReviews: 12, // Initial Default
      reviews: [
        {
          text: "I get all my kids medications here and they always so helpful, knowledgeable,and kind. Highly Suggest!",
          author: "Meadowlands parent"
        },
        {
          text: "Very nice pharmacy for kids! They also do compounding medications.",
          author: "Ancaster parent"
        }
      ]
  });

  useEffect(() => {
      // Simulate API fetch for Google Reviews
      const fetchReviews = async () => {
          // This simulates a network delay
          await new Promise(resolve => setTimeout(resolve, 800));
          
          // In a real application, you would fetch from your backend API here
          // const response = await fetch('/api/google-reviews');
          // const data = await response.json();
          // setReviewStats(data);
          
          // For now, we update with the "live" data
          setReviewStats({
              rating: 5.0,
              totalReviews: 12,
              reviews: [
                {
                  text: "I get all my kids medications here and they always so helpful, knowledgeable,and kind. Highly Suggest!",
                  author: "Meadowlands parent"
                },
                {
                  text: "Very nice pharmacy for kids! They also do compounding medications.",
                  author: "Ancaster parent"
                }
              ]
          });
      };
      fetchReviews();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigateTo = (view: ViewState, skipScroll = false) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    setIsResourcesOpen(false); // Reset mobile accordion
    if (!skipScroll) {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToHomeAndScroll = (sectionId: string) => {
    setPendingScroll(sectionId);
    navigateTo('HOME', true); 
  };

  const navigateToServiceDetail = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    navigateTo('SERVICE_DETAIL');
  }

  useEffect(() => {
    if (pendingScroll) {
       // Check if current view matches intended destination for scroll
       const isHomeScroll = ['services', 'transfer', 'contact'].includes(pendingScroll) && currentView === 'HOME';
       
       if (isHomeScroll) {
          setTimeout(() => {
             const element = document.getElementById(pendingScroll);
             if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
             }
             setPendingScroll(null);
          }, 100);
       }
    }
  }, [currentView, pendingScroll]);

  const handlePostSelect = (post: BlogPost) => {
     setSelectedPost(post);
     navigateTo('BLOG_POST');
  };

  const handleTransferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTransferFormStatus(FormStatus.SUBMITTING);
    // Simulate API call
    setTimeout(() => {
      setTransferFormStatus(FormStatus.SUCCESS);
    }, 1500);
  };

  const handleBreadcrumbNavigate = (view?: ViewState) => {
    if (view === 'HOME') {
       navigateTo('HOME');
    } else if (view === 'BLOG_INDEX') {
       navigateTo('BLOG_INDEX');
    } else if (view === 'RESOURCES_INDEX') {
       navigateTo('RESOURCES_INDEX');
    } else if (view) {
       navigateTo(view);
    }
  };

  // Helper to get true item width ignoring style tags
  const getCarouselItemWidth = () => {
    if (!carouselRef.current) return 0;
    // The first child is a <style> tag, so we look for the first div
    const firstCard = Array.from(carouselRef.current.children).find(
       el => (el as HTMLElement).tagName === 'DIV'
    ) as HTMLElement;
    
    if (!firstCard) return 0;
    return firstCard.offsetWidth + 24; // Width + gap-6 (24px)
  };

  const scrollNext = () => {
    if (!carouselRef.current) return;
    
    const itemWidth = getCarouselItemWidth();
    if (!itemWidth) return;
    
    const currentScroll = carouselRef.current.scrollLeft;
    // Use Math.round to snap to nearest card
    const currentIdx = Math.round(currentScroll / itemWidth);
    
    // Check max scroll to determine if we are at the end
    const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    const isAtEnd = Math.abs(currentScroll - maxScroll) < 5; // Tolerance

    let nextIdx = currentIdx + 1;
    
    // If we are effectively at the end (even if index isn't len-1 due to visible items), wrap
    if (isAtEnd || nextIdx >= ALL_SERVICES_DATA.length) {
       nextIdx = 0;
    } 
    
    carouselRef.current.scrollTo({ left: nextIdx * itemWidth, behavior: 'smooth' });
  };

  const scrollPrev = () => {
    if (!carouselRef.current) return;
    
    const itemWidth = getCarouselItemWidth();
    if (!itemWidth) return;
    
    const currentScroll = carouselRef.current.scrollLeft;
    const currentIdx = Math.round(currentScroll / itemWidth);
    
    let prevIdx = currentIdx - 1;
    
    if (prevIdx < 0) {
       // Scroll to the very end
       const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
       carouselRef.current.scrollTo({ left: maxScroll, behavior: 'smooth' });
       return;
    }
    
    carouselRef.current.scrollTo({ left: prevIdx * itemWidth, behavior: 'smooth' });
  };

  const handleServiceScroll = () => {
    if (carouselRef.current) {
       const scrollLeft = carouselRef.current.scrollLeft;
       const itemWidth = getCarouselItemWidth();
       
       if (itemWidth > 0) {
         const idx = Math.round(scrollLeft / itemWidth);
         if (idx !== carouselIndex) {
            setCarouselIndex(idx);
         }
       }
    }
  };

  const manualScrollTo = (idx: number) => {
     if (carouselRef.current) {
        const itemWidth = getCarouselItemWidth();
        if (itemWidth > 0) {
          carouselRef.current.scrollTo({ left: idx * itemWidth, behavior: 'smooth' });
          setCarouselIndex(idx);
        }
     }
  };

  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-ida/10 selection:text-ida flex flex-col w-full overflow-x-clip">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-paper/80 border-b border-stone-200 z-50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigateTo('HOME')}>
            <span className="font-serif text-xl font-bold text-ida tracking-tight group-hover:text-ida-light transition-colors">Golf Links IDA</span>
            <span className="h-4 w-px bg-stone-300 hidden sm:block"></span>
            <span className="text-xs uppercase tracking-wider text-ink-light">Pharmacy</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-light">
            <div className="flex items-center gap-6">
               <button onClick={() => navigateTo('SERVICES_INDEX')} className={`transition-colors ${currentView === 'SERVICES_INDEX' || currentView === 'SERVICE_DETAIL' ? 'text-ida font-semibold' : 'hover:text-ida'}`}>Services</button>
               
               {/* Resources Dropdown */}
               <div className="relative group">
                  <button 
                     onClick={() => navigateTo('RESOURCES_INDEX')}
                     className={`flex items-center gap-1 transition-colors py-4 ${currentView.includes('RESOURCES') || currentView.includes('BLOG') ? 'text-ida font-semibold' : 'hover:text-ida'}`}
                  >
                     Resources <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180"/>
                  </button>
                  <div className="absolute top-[3.5rem] left-0 w-48 bg-white border border-stone-100 rounded-xl shadow-soft p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 transform origin-top-left z-50 flex flex-col">
                     <button onClick={() => navigateTo('BLOG_INDEX')} className="text-left px-4 py-2 text-sm text-ink hover:bg-stone-50 rounded-lg transition-colors">Articles</button>
                     <button onClick={() => navigateTo('RESOURCES_FORMS')} className="text-left px-4 py-2 text-sm text-ink hover:bg-stone-50 rounded-lg transition-colors">Forms</button>
                     <button onClick={() => navigateTo('RESOURCES_FAQS')} className="text-left px-4 py-2 text-sm text-ink hover:bg-stone-50 rounded-lg transition-colors">FAQs</button>
                     <button onClick={() => navigateTo('RESOURCES_GLOSSARY')} className="text-left px-4 py-2 text-sm text-ink hover:bg-stone-50 rounded-lg transition-colors">Glossary</button>
                  </div>
               </div>

               <button onClick={() => navigateToServiceDetail('free-delivery')} className="hover:text-ida transition-colors">Free Delivery</button>
            </div>

            <div className="h-4 w-px bg-stone-300"></div>

            <div className="flex items-center gap-4">
               <button onClick={() => navigateToHomeAndScroll('contact')} className="hover:text-ida transition-colors">Contact</button>
               <button onClick={() => navigateToHomeAndScroll('transfer')} className="text-ida font-medium hover:underline">Transfer</button>
               <Button variant="primary" className="py-2 px-4 text-xs shadow-none" onClick={() => navigateToHomeAndScroll('transfer')}>Refill Now</Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-ink" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {isMenuOpen && (
          <div className="md:hidden bg-paper border-b border-stone-200 p-6 flex flex-col space-y-4 shadow-lg absolute w-full h-[calc(100vh-64px)] overflow-y-auto z-40">
            <button className="text-lg font-medium text-left" onClick={() => navigateTo('SERVICES_INDEX')}>Services</button>
            <button className="text-lg font-medium text-left" onClick={() => navigateToServiceDetail('free-delivery')}>Free Delivery</button>
            
            {/* Mobile Resources Accordion */}
            <div>
               <button 
                  className="text-lg font-medium text-left w-full flex justify-between items-center" 
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
               >
                  Resources <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}/>
               </button>
               {isResourcesOpen && (
                  <div className="flex flex-col pl-4 mt-2 space-y-2 border-l-2 border-stone-100 ml-1 bg-stone-50/50 py-2 rounded-r-lg">
                     <button onClick={() => navigateTo('RESOURCES_INDEX')} className="text-left text-ink-light py-2 px-2 hover:bg-stone-100 rounded font-medium">Overview</button>
                     <button onClick={() => navigateTo('BLOG_INDEX')} className="text-left text-ink-light py-2 px-2 hover:bg-stone-100 rounded">Articles</button>
                     <button onClick={() => navigateTo('RESOURCES_FORMS')} className="text-left text-ink-light py-2 px-2 hover:bg-stone-100 rounded">Forms</button>
                     <button onClick={() => navigateTo('RESOURCES_FAQS')} className="text-left text-ink-light py-2 px-2 hover:bg-stone-100 rounded">FAQs</button>
                     <button onClick={() => navigateTo('RESOURCES_GLOSSARY')} className="text-left text-ink-light py-2 px-2 hover:bg-stone-100 rounded">Glossary</button>
                  </div>
               )}
            </div>

            <button className="text-lg font-medium text-left" onClick={() => navigateToHomeAndScroll('contact')}>Contact</button>
            
            <div className="pt-6 mt-2 border-t border-stone-100 grid grid-cols-2 gap-4">
               <Button variant="outline" fullWidth onClick={() => navigateToHomeAndScroll('transfer')}>Transfer</Button>
               <Button variant="primary" fullWidth onClick={() => navigateToHomeAndScroll('transfer')}>Refill Now</Button>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
      {/* VIEW ROUTING */}
      {currentView === 'RESOURCES_INDEX' && (
         <ResourcesIndexView onNavigate={navigateTo} />
      )}

      {currentView === 'BLOG_INDEX' && (
         <BlogIndex onSelectPost={handlePostSelect} onNavigate={handleBreadcrumbNavigate} />
      )}

      {currentView === 'BLOG_POST' && selectedPost && (
         <BlogPostView 
            post={selectedPost} 
            onBack={() => handleBreadcrumbNavigate('BLOG_INDEX')} 
            onNavigateToTransfer={() => navigateToHomeAndScroll('transfer')}
         />
      )}

      {currentView === 'RESOURCES_FORMS' && (
         <FormsView onNavigate={handleBreadcrumbNavigate} onNavigateToTransfer={() => navigateToHomeAndScroll('transfer')} />
      )}

      {currentView === 'RESOURCES_FAQS' && (
         <FaqView onNavigate={handleBreadcrumbNavigate} onNavigateToTransfer={() => navigateToHomeAndScroll('transfer')} />
      )}

      {currentView === 'RESOURCES_GLOSSARY' && (
         <GlossaryView onNavigate={handleBreadcrumbNavigate} onNavigateToTransfer={() => navigateToHomeAndScroll('transfer')} />
      )}

      {currentView === 'SERVICES_INDEX' && (
         <ServicesIndexView 
            onNavigate={handleBreadcrumbNavigate} 
            onNavigateToService={navigateToServiceDetail}
            onNavigateToTransfer={() => navigateToHomeAndScroll('transfer')} 
         />
      )}

      {currentView === 'SERVICE_DETAIL' && selectedServiceId && (
        <ServiceDetailView 
          serviceId={selectedServiceId}
          onNavigate={handleBreadcrumbNavigate}
          onNavigateToService={navigateToServiceDetail}
          onNavigateToTransfer={() => navigateToHomeAndScroll('transfer')}
        />
      )}

      {currentView === 'PRIVACY_POLICY' && (
         <PrivacyPolicyView onNavigate={navigateTo} />
      )}
      
      {currentView === 'ABOUT' && (
         <AboutView onNavigate={navigateTo} />
      )}

      {currentView === 'HOME' && (
      <>
      {/* 1. HERO */}
      <div className="hero pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <span className="text-ida font-bold tracking-widest text-xs uppercase mb-6">Golf Links Neighbourhood Pharmacy</span>
            
            <h1 className="font-serif text-5xl lg:text-6xl text-ink leading-[1.1] mb-6 tracking-tight">
              Your child’s clinic and your family’s meds under one roof.
            </h1>

            <p className="text-lg text-ink-light leading-relaxed mb-10 max-w-md">
              Your neighbourhood pharmacy for the whole family. We work directly with your doctors to sort the details, and we offer free delivery across Meadowlands and Ancaster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="primary" className="px-6" onClick={() => navigateToHomeAndScroll('transfer')}>Move my prescriptions</Button>
              <Button variant="outline" className="border-stone-300 text-ink hover:border-ida" onClick={() => navigateToHomeAndScroll('contact')}>Refill an existing script</Button>
            </div>
            
            {/* Trust / Human Element */}
            <div className="flex flex-col gap-4 border-l-2 border-stone-200 pl-6 py-1">
               <div className="flex items-center gap-2 text-sm text-ink font-medium">
                  <Phone className="w-4 h-4 text-ida" />
                  <span>Prefer to talk? Call <a href="tel:2892398000" className="hover:underline hover:text-ida transition-colors">(289) 239-8000</a></span>
               </div>
               <div className="flex items-center gap-3">
                   <div className="w-6 h-6 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center overflow-hidden">
                       <span className="font-serif text-[10px] font-bold text-ink-light">H</span>
                   </div>
                   <span className="text-sm text-ink-light">Harsh, Pharmacist Owner</span>
               </div>
            </div>

            {/* Mobile Card Insertion */}
            <div className="lg:hidden mt-10">
              <StatusCard 
                onNavigate={(slug) => {
                 const post = BLOG_POSTS.find(p => p.id === slug);
                 if (post) handlePostSelect(post);
                }} 
                reviewStats={reviewStats}
              />
            </div>

          </div>

          {/* RIGHT COLUMN (Desktop) */}
          <div className="lg:col-span-5 lg:col-start-8 hidden lg:block">
            <StatusCard 
              onNavigate={(slug) => {
                 const post = BLOG_POSTS.find(p => p.id === slug);
                 if (post) handlePostSelect(post);
              }} 
              reviewStats={reviewStats}
            />
          </div>

        </div>
      </div>

      {/* PROOF BAND */}
      <div className="border-t border-stone-100 py-12 md:py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
           <h3 className="font-serif text-xl md:text-2xl text-ink mb-8 text-center">What families notice right away</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Tile 1 */}
              <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm flex flex-col h-full">
                 <div className="flex items-center gap-2 mb-2 font-bold text-ink">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 shrink-0" />
                    <span>{reviewStats.rating.toFixed(1)} on Google</span>
                 </div>
                 <p className="text-sm text-ink-light leading-relaxed">{reviewStats.totalReviews} local reviews from Meadowlands & Ancaster families.</p>
              </div>
              
              {/* Tile 2 */}
              <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm flex flex-col h-full">
                 <div className="flex items-center gap-2 mb-2 font-bold text-ink">
                    <Phone className="w-5 h-5 text-ida shrink-0" />
                    <span>Phones picked up</span>
                 </div>
                 <p className="text-sm text-ink-light leading-relaxed">No IVR maze. You call, we answer.</p>
              </div>

              {/* Tile 3 */}
              <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm flex flex-col h-full">
                 <div className="flex items-center gap-2 mb-2 font-bold text-ink">
                    <Truck className="w-5 h-5 text-ida shrink-0" />
                    <span>Same-day delivery</span>
                 </div>
                 <p className="text-sm text-ink-light leading-relaxed">Most prescriptions delivered in Meadowlands & Ancaster the same day.</p>
              </div>

              {/* Tile 4 */}
              <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm flex flex-col h-full">
                 <div className="flex items-center gap-2 mb-2 font-bold text-ink">
                    <FileText className="w-5 h-5 text-ida shrink-0" />
                    <span>Zero-drama transfers</span>
                 </div>
                 <p className="text-sm text-ink-light leading-relaxed">We handle moving everything from your old pharmacy.</p>
              </div>
           </div>
        </div>
      </div>

      {/* 2. WHY PEOPLE SWITCH (Features) */}
      <Section className="border-t border-stone-100">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">Why people leave their old pharmacy for us</h2>
          <p className="text-ink-light">Most people don’t switch pharmacies unless something is wrong. We fix the friction.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Real humans pick up" icon={<Phone className="w-6 h-6"/>}>
            No endless phone trees. When you call, you speak to a pharmacist or technician right here in the clinic.
          </Card>
          <Card title="Delivery is free & clear" icon={<Truck className="w-6 h-6"/>}>
            No hidden fees or vague windows. We deliver to Meadowlands and Ancaster for free, often same-day.
          </Card>
          <Card title="We coordinate care" icon={<Activity className="w-6 h-6"/>}>
            Because we communicate directly with local doctors, we often resolve coverage or dosage issues before you even arrive to pick up.
          </Card>
        </div>
      </Section>

      {/* 3. SERVICES (Carousel) */}
      <Section id="services" className="bg-stone-50 border-t border-stone-100">
         <div className="text-center mb-12 max-w-2xl mx-auto">
           <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">Services at a glance</h2>
           <p className="text-ink-light">Everything you need for your family's health, right here in the neighbourhood.</p>
         </div>
         
         {/* Carousel Container */}
         <div className="relative mb-12 group">
            {/* Left Gradient Mask */}
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 z-20 bg-gradient-to-r from-stone-50 to-transparent pointer-events-none"></div>
            
            {/* Right Gradient Mask */}
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-12 z-20 bg-gradient-to-l from-stone-50 to-transparent pointer-events-none"></div>

            {/* Desktop Controls - Positioned in gutters (-left-16) - HIDDEN ON TOUCH (lg:flex) */}
            <button 
               type="button"
               onClick={scrollPrev}
               className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white border border-stone-200 rounded-full shadow-md items-center justify-center text-ink-light hover:text-ida transition-all focus:outline-none focus:ring-2 focus:ring-ida pointer-events-auto"
               aria-label="Previous Service"
            >
               <ChevronLeft className="w-6 h-6" />
            </button>

             <button 
               type="button"
               onClick={scrollNext}
               className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white border border-stone-200 rounded-full shadow-md items-center justify-center text-ink-light hover:text-ida transition-all focus:outline-none focus:ring-2 focus:ring-ida pointer-events-auto"
               aria-label="Next Service"
            >
               <ChevronRight className="w-6 h-6" />
            </button>

            <div 
               ref={carouselRef}
               className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-8 -my-4 px-6 no-scrollbar scroll-smooth relative z-0"
               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
               onScroll={handleServiceScroll}
            >
               <style>{`
                  .no-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
               `}</style>
               {ALL_SERVICES_DATA.map((service, index) => {
                  const Icon = service.icon;
                  return (
                     <div key={index} className="w-[300px] sm:w-[320px] md:w-[360px] snap-center flex-shrink-0 cursor-pointer" onClick={() => navigateToServiceDetail(service.id)}>
                        <div className="bg-white border border-stone-200 rounded-xl p-6 h-full flex flex-col items-start shadow-sm hover:border-ida/30 hover:shadow-md transition-all duration-300 group">
                           <div className="mb-4 text-ida transition-transform duration-300 group-hover:scale-110"><Icon className="w-6 h-6" /></div>
                           <h3 className="font-serif text-xl text-ink font-medium mb-3 group-hover:text-ida transition-colors">{service.title}</h3>
                           <p className="text-ink-light text-base leading-relaxed mb-6 flex-grow font-sans line-clamp-3 block md:hidden lg:block">{service.shortDescription}</p>
                           <span className="mt-auto pt-2 flex items-center text-ida font-medium text-sm group-hover:underline">
                              Learn more
                              <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                           </span>
                        </div>
                     </div>
                  );
               })}
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center gap-2 mt-4">
               {ALL_SERVICES_DATA.map((_, idx) => (
                  <button 
                     key={idx} 
                     type="button"
                     onClick={() => manualScrollTo(idx)}
                     className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-ida ${carouselIndex === idx ? 'bg-ida w-4' : 'bg-stone-300 hover:bg-stone-400 w-2'}`}
                     aria-label={`Go to slide ${idx + 1}`}
                  />
               ))}
            </div>
         </div>

         <div className="text-center mt-12">
            <button onClick={() => navigateTo('SERVICES_INDEX')} className="text-ink-light hover:text-ida transition-colors border-b border-stone-300 hover:border-ida pb-0.5 text-sm">
               Want the full list? <strong className="font-medium text-ink">View all services</strong>
            </button>
         </div>

      </Section>

      {/* 4. TRANSFER */}
      <Section id="transfer" className="border-t border-stone-200">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">Switching is painless. <br/><span className="text-ink-light">We handle the paperwork.</span></h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-ida text-white flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-ink">Tell us you want to switch</h4>
                  <p className="text-ink-light text-sm mt-1">Fill out a quick form or just call us. That’s strictly all you have to do.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-stone-200 text-ink-light flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-ink">We contact your old pharmacy</h4>
                  <p className="text-ink-light text-sm mt-1">We request your file, insurance info, and active refills. You don’t need to talk to them.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-stone-200 text-ink-light flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-ink">We deliver to your door</h4>
                  <p className="text-ink-light text-sm mt-1">Once ready, we text you. Pick up or get free same-day delivery.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
               <p className="text-sm text-ink-light mb-2">Ready to switch?</p>
               <div className="flex flex-col sm:flex-row gap-3">
                 <Button variant="primary" onClick={() => transferFormRef.current?.requestSubmit()}>
                    {transferFormStatus === FormStatus.SUCCESS ? 'Request Sent!' : 'Start my transfer'}
                 </Button>
                 <a 
                    href="tel:2892398000" 
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-ida bg-stone-200 text-ink hover:bg-stone-300 shadow-sm"
                 >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                 </a>
               </div>
               {transferFormStatus === FormStatus.SUCCESS && <p className="text-green-600 text-sm mt-2">We'll be in touch shortly!</p>}
            </div>
          </div>
          
          <div className="flex-1 bg-white p-8 rounded-2xl border border-stone-200 shadow-sm w-full max-w-md">
            <h3 className="font-serif text-2xl text-ink mb-6">Quick Transfer Request</h3>
            <form className="space-y-4" onSubmit={handleTransferSubmit} ref={transferFormRef}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-light mb-1">Full Name</label>
                <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded p-2 focus:border-ida focus:ring-1 focus:ring-ida outline-none transition-colors" placeholder="Jane Doe" required />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-light mb-1">Phone Number</label>
                <input type="tel" className="w-full bg-stone-50 border border-stone-200 rounded p-2 focus:border-ida focus:ring-1 focus:ring-ida outline-none transition-colors" placeholder="(555) 123-4567" required />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-light mb-1">Current Pharmacy Name</label>
                <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded p-2 focus:border-ida focus:ring-1 focus:ring-ida outline-none transition-colors" placeholder="e.g. Shoppers on Golf Links" required />
              </div>
              <Button type="submit" fullWidth disabled={transferFormStatus === FormStatus.SUBMITTING}>
                {transferFormStatus === FormStatus.SUBMITTING ? 'Sending...' : 'Send Request'}
              </Button>
            </form>
          </div>
        </div>
      </Section>

      {/* Review Strip */}
      <div className="border-t border-stone-200 bg-paper py-8 text-center px-6">
        <p className="text-sm md:text-base text-ink font-medium">
          <Star className="w-4 h-4 text-yellow-500 inline-block mb-1 mr-1 fill-yellow-500" /> 
          {reviewStats.rating.toFixed(1)} on Google 
          <span className="mx-3 text-stone-300">|</span> 
          <span className="italic">“{reviewStats.reviews[0]?.text}”</span> 
          <span className="text-ink-light font-normal ml-2">– {reviewStats.reviews[0]?.author}</span>
        </p>
      </div>

      {/* 5. CONTACT (Map) */}
      <Section id="contact" dark className="border-t border-stone-200 pt-16 pb-24 md:pt-24 md:pb-32">
         <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Map (Left on Desktop, Bottom on Mobile) */}
            <div className="w-full md:w-7/12 order-2 md:order-1 h-[350px] md:h-[500px] rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-stone-50 relative z-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.036735390934!2d-79.94976801439134!3d43.22649053162335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c85001ea69229%3A0xbec5ef68cdfb32f8!2sGolf%20Links%20I.D.A.%20Pharmacy%20(Compounding%20and%20Community%2FRetail%20Pharmacy)!5e0!3m2!1sen!2sca!4v1763971931877!5m2!1sen!2sca"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location for Golf Links I.D.A. Pharmacy"
              ></iframe>
            </div>

            {/* Info (Right on Desktop, Top on Mobile) */}
            <div className="w-full md:w-5/12 order-1 md:order-2 flex flex-col justify-center pt-4 md:pt-8">
               <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">Visit us in Meadowlands Plaza</h2>
               
               <div className="space-y-6 text-ink-light mb-8">
                  <div>
                     <p className="font-bold text-ink text-lg mb-1">Golf Links I.D.A. Pharmacy</p>
                     <p className="text-base">26 Legend Ct Unit 3, Ancaster, ON L9K 1J3</p>
                     <p className="text-sm text-stone-500 mt-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Behind Shell gas station, free plaza parking
                     </p>
                  </div>
                  
                  <div className="bg-stone-50 rounded-lg p-4 border border-stone-100">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-stone-200/50">
                          <td className="py-2 font-medium text-ink">Mon - Fri</td>
                          <td className="py-2 text-right">9:00 am – 6:00 pm</td>
                        </tr>
                        <tr className="border-b border-stone-200/50">
                          <td className="py-2 font-medium text-ink">Saturday</td>
                          <td className="py-2 text-right">10:00 am – 2:00 pm</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium text-stone-400">Sunday</td>
                          <td className="py-2 text-right text-stone-400">Closed</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
               </div>

               <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                   <Button 
                      onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Golf+Links+I.D.A.+Pharmacy&query_place_id=ChIJKWKmFaCFLIgR-DL7zWjlxb4', '_blank')} 
                      variant="primary" 
                      className="w-full sm:w-auto"
                   >
                      Get directions
                   </Button>
                   <a href="tel:2892398000" className="text-ida font-medium hover:underline flex items-center gap-2 px-2 py-2">
                     <Phone className="w-4 h-4" />
                     Call the pharmacy
                   </a>
               </div>
            </div>

         </div>
      </Section>
      </>
      )}

      </main>

      {/* Global Footer */}
      <Footer 
        onNavigate={navigateTo} 
        onNavigateToService={navigateToServiceDetail} 
        onNavigateToHomeAndScroll={navigateToHomeAndScroll} 
      />
    </div>
  );
};

export default App;