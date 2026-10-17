import type { Metadata } from 'next'
import { Fredoka } from 'next/font/google'
import '@/app/styles/globals.css';
import NavigationBar from './components/navbar/NavigationBar';
import Footer from './components/footer/Footer';
import SeaParallax from './components/SeaParallax';

const fredoka = Fredoka({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-fredoka' })

export const metadata: Metadata = {
  title: "Pai (Soravith Puvekit) · Product Engineer & UX/UI Designer",
  description:
    "Portfolio of Soravith (Pai) Puvekit, Product Engineer at HDmall, front-end developer and UX/UI designer in Bangkok, and founder of CoDev Community.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fredoka.variable}>
      <body className="font-line-Regular">
        {/* Noise that pushes the island's edge in and out, so the shore is uneven like a real beach */}
        <svg aria-hidden width="0" height="0" className="absolute">
          <filter id="shoreline" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.008 0.006" numOctaves="3" seed="4" />
            <feDisplacementMap in="SourceGraphic" scale="44" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="shoreline-sm" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.006" numOctaves="3" seed="4" />
            <feDisplacementMap in="SourceGraphic" scale="16" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
        <SeaParallax />
        <div className='fixed w-full z-50 '>
          <NavigationBar />
        </div>
        <div className="island">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
