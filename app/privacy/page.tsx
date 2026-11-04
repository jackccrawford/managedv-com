import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Managed Ventures',
  description: 'Privacy policy for managedv.com. A one-page site with no forms, no accounts, no cookies and no tracking.',
  alternates: { canonical: 'https://managedv.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-300 px-4 py-16">
      <article className="max-w-2xl mx-auto">
        <p className="mb-8"><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Managed Ventures</Link></p>
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Effective November 3, 2026</p>

        <p className="mb-8">managedv.com is a single page that says who Managed Ventures LLC is. There is no contact form, no sign-up and no account, so this site asks you for nothing.</p>

        <h2 className="text-xl font-semibold text-white mb-2">What this site collects</h2>
        <p className="mb-8">Nothing. It sets no cookies and uses no tracking pixels or analytics, and we do not count your visit. Its fonts and video load from this site, not from a third party.</p>

        <h2 className="text-xl font-semibold text-white mb-2">Hosting</h2>
        <p className="mb-8">The site is hosted by Netlify. Like any web host, Netlify receives your IP address and basic request details in order to deliver the page.</p>

        <h2 className="text-xl font-semibold text-white mb-2">Links to other sites</h2>
        <p className="mb-8">This page links to other sites, including mvara.ai, geniuz.life and agentdoor.ai. Each has its own privacy policy, and this one does not cover them.</p>

        <h2 className="text-xl font-semibold text-white mb-2">If you email us</h2>
        <p className="mb-8">We receive what you send, and use it to reply. We do not sell personal information or use it to train AI models.</p>

        <h2 className="text-xl font-semibold text-white mb-2">Your rights</h2>
        <p className="mb-8">To ask what we hold about you, or to have it corrected or deleted, email <a href="mailto:jcc@managedv.com" className="underline hover:text-white">jcc@managedv.com</a>. California residents have additional rights under the CCPA.</p>

        <h2 className="text-xl font-semibold text-white mb-2">Contact</h2>
        <p>
          Managed Ventures LLC<br />
          18291 N Pima Rd, Ste 110-411<br />
          Scottsdale, AZ 85255<br />
          <a href="mailto:jcc@managedv.com" className="underline hover:text-white">jcc@managedv.com</a>
        </p>
      </article>
    </main>
  )
}
