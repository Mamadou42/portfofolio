import { useEffect } from 'react'
import Acomplishments from '../components/Acomplishments/Acomplishments'
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import Timeline from '../components/TimeLine/TimeLine'
import { Layout } from '../layout/Layout'
import { Section } from '../styles/GlobalComponents'
import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'fr'],
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{ lng }}/translation.json',
    },
    react: {
      useSuspense: false,
    },
  })

const Home = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])
  const { t } = useTranslation()
  return (
    <Layout t={t}>
      <Section grid>
        <Hero t={t} />
        <BgAnimation />
      </Section>
      <Projects t={t} />
      <Technologies t={t} />
      <Timeline t={t} />
      <Acomplishments t={t} />
    </Layout>
  )
}

export default Home
