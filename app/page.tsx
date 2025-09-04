import AnimatedSection from '@/components/AnimatedSection'
import ContactForm from '@/components/ContactForm'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Vision from '@/components/Vision'
import WhoWeAre from '@/components/WhoWeAre'
import { 
  bounceIn, 
  fadeInLeft, 
  fadeInRight, 
  fadeInUp, 
  rotateIn, 
  slideInFromBottom, 
  slideInFromTop 
} from '@/utils/animations'

export default function Home() {
  return (
    <main>
      <Hero />
      <AnimatedSection variants={fadeInUp}>
        <WhoWeAre />
      </AnimatedSection>
      <AnimatedSection variants={slideInFromTop}>
        <Vision />
      </AnimatedSection>
      <AnimatedSection variants={fadeInRight}>
        <Services />
      </AnimatedSection>
      <AnimatedSection variants={bounceIn}>
        <Features />
      </AnimatedSection>
      <AnimatedSection variants={slideInFromBottom}>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection variants={fadeInUp}>
        <ContactForm />
      </AnimatedSection>
      <AnimatedSection variants={fadeInUp}>
        <FAQ />
      </AnimatedSection>
      <AnimatedSection variants={fadeInLeft}>
        <CTA />
      </AnimatedSection>
    </main>
  )
}
