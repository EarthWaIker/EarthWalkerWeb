'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import MatrixRainBackground from '@/components/MatrixRainBackground'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { useLanguage } from '@/contexts/LanguageContext'

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    system: '// System',
    memory: 'MEMORY',
    processor: 'PROCESSOR',
    status: 'STATUS',
    online: 'ONLINE',
    mainTitle: '// Home',
    personalInfo: '// Personal Information',
    name: 'Name',
    surname: 'Surname',
    age: 'Age',
    dateOfBirth: 'Date of birth',
    town: 'Town',
    maritalStatus: 'Marital status',
    professionalInfo: '// Professional Info',
    role: 'ROLE',
    specialization: 'Specialization',
    experience: 'Experience',
    level: 'Level',
    technicalSkills: '// Technical Skills',
    primary: 'Primary',
    secondary: 'Secondary',
    statusLabel: '// Status',
    availability: 'Availability',
    location: 'Location',
    research: 'Research',
    // Values
    nameValue: 'Andrew',
    surnameValue: 'Ivanov',
    townValue: 'Slavyansk-on-Kuban',
    maritalStatusValue: 'Single',
    roleName: 'IT Engineer',
    specializationName: 'Frontend Development',
    experienceValue: '3 years',
    levelValue: 'Middle',
    primarySkills: 'React, Next.js, TypeScript',
    secondarySkills: 'Node.js, PostgreSQL',
    availabilityValue: 'Open for work',
    locationValue: 'Remote / Relocate',
    // Sections
    section01: '// Section 01 - Personal Data',
    section01Text: '1. This section contains all the information about this person, including their education, work experience, and biography.',
    section01Hint: 'To view the information, click on the button or scan the QR code.',
    section01Contains: '> Contains: education, work experience, biography, skills',
    section02: '// Section 02 - Portfolio',
    section02Text: '2. This section lists all the projects that the author has previously worked on.',
    section02Hint: 'This includes the work of the general education program and personal achievements to date.',
    section02Contains: '> Contains: commercial projects, pet projects, achievements',
    section03: '// Section 03 - Communication',
    section03Text: '3. If you want to contact the author, use the button or scan the QR.',
    section03Hint: 'Available via email, telegram, github, and other social networks.',
    section03Contains: '> Contains: email, telegram, github, linkedin',
  },
  ru: {
    home: 'Главная',
    about: 'Обо мне',
    projects: 'Проекты',
    contact: 'Связь',
    system: '// Система',
    memory: 'ПАМЯТЬ',
    processor: 'ПРОЦЕССОР',
    status: 'СТАТУС',
    online: 'ОНЛАЙН',
    mainTitle: '// Главная',
    personalInfo: '// Персональная информация',
    name: 'Имя',
    surname: 'Фамилия',
    age: 'Возраст',
    dateOfBirth: 'Дата рождения',
    town: 'Город',
    maritalStatus: 'Семейное положение',
    professionalInfo: '// Профессиональная информация',
    role: 'РОЛЬ',
    specialization: 'Специализация',
    experience: 'Опыт работы',
    level: 'Уровень',
    technicalSkills: '// Технические навыки',
    primary: 'Основные',
    secondary: 'Дополнительные',
    statusLabel: '// Статус',
    availability: 'Доступность',
    location: 'Локация',
    research: 'Исследование',
    // Values
    nameValue: 'Андрей',
    surnameValue: 'Иванов',
    townValue: 'Славянск-на-Кубани',
    maritalStatusValue: 'Не женат',
    roleName: 'IT Инженер',
    specializationName: 'Frontend Разработка',
    experienceValue: '3 года',
    levelValue: 'Средний',
    primarySkills: 'React, Next.js, TypeScript',
    secondarySkills: 'Node.js, PostgreSQL',
    availabilityValue: 'Открыт для работы',
    locationValue: 'Удалённо / Релокация',
    // Sections
    section01: '// Раздел 01 - Персональные данные',
    section01Text: '1. Этот раздел содержит всю информацию о человеке, включая образование, опыт работы и биографию.',
    section01Hint: 'Чтобы просмотреть информацию, нажмите на кнопку или отсканируйте QR-код.',
    section01Contains: '> Содержит: образование, опыт работы, биографию, навыки',
    section02: '// Раздел 02 - Портфолио',
    section02Text: '2. В этом разделе перечислены все проекты, над которыми автор работал ранее.',
    section02Hint: 'Это включает работы общеобразовательной программы и личные достижения на данный момент.',
    section02Contains: '> Содержит: коммерческие проекты, пет-проекты, достижения',
    section03: '// Раздел 03 - Связь',
    section03Text: '3. Если вы хотите связаться с автором, используйте кнопку или отсканируйте QR.',
    section03Hint: 'Доступен через email, telegram, github и другие социальные сети.',
    section03Contains: '> Содержит: email, telegram, github, linkedin',
  },
}

export default function HomePage() {
  const { lang } = useLanguage()
  const [typedText, setTypedText] = useState('')
  const [systemStats, setSystemStats] = useState({ mem: 128, cpu: 12 })

  const t = translations[lang]

  useEffect(() => {
    setTypedText('')
    let index = 0
    const text = t.research
    const timer = setInterval(() => {
      setTypedText(text.slice(0, index + 1))
      index++
      if (index >= text.length) clearInterval(timer)
    }, 150)
    return () => clearInterval(timer)
  }, [lang, t.research])

  useEffect(() => {
    const timer = setInterval(() => {
      setSystemStats({
        mem: Math.floor(Math.random() * 20) + 120,
        cpu: Math.floor(Math.random() * 15) + 8,
      })
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  const handleMinimize = () => {
    document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#000;color:#00FF00;font-family:monospace;"><div>Terminal closed. You can close this tab.</div></div>'
  }

  const handleMaximize = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {})
    } else {
      document.exitFullscreen().catch(() => {})
    }
  }

  const handleClose = () => {
    document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#000;color:#00FF00;font-family:monospace;"><div>Terminal closed. You can close this tab.</div></div>'
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <MatrixRainBackground />

      <div className="relative z-10 min-h-screen flex justify-center p-0">
        <div className="w-[90vw] max-w-5xl h-screen bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 shadow-lg flex flex-col">
          {/* Title Bar */}
          <div className="flex items-center justify-between px-1 py-0.5 bg-gradient-to-r from-[#000080] via-[#1084d0] to-[#000080] flex-shrink-0">
            <div className="flex items-center gap-1">
              <div className="w-3.5 h-3.5 bg-gray-400 border border-t-white border-l-white border-r-gray-600 border-b-gray-600 flex items-center justify-center p-[1px]">
                <div className="bg-black w-full h-full flex items-center justify-center">
                  <span className="text-[5px] text-white font-mono leading-none">C:\</span>
                </div>
              </div>
              <span className="text-white text-xs font-bold">Command Prompt</span>
            </div>
            <div className="flex items-center gap-0.5">
              <button onClick={handleMinimize} className="w-4 h-4 flex items-center justify-center bg-[#C0C0C0] border border-t-white border-l-white border-r-gray-600 border-b-gray-600 text-[8px] leading-none hover:bg-gray-400">
                <svg className="w-2 h-2 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="4" strokeLinecap="square"/>
                </svg>
              </button>
              <button onClick={handleMaximize} className="w-4 h-4 flex items-center justify-center bg-[#C0C0C0] border border-t-white border-l-white border-r-gray-600 border-b-gray-600 text-[8px] leading-none hover:bg-gray-400">
                <svg className="w-2 h-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M4 4h16v16H4z" />
                </svg>
              </button>
              <button onClick={handleClose} className="w-4 h-4 flex items-center justify-center bg-[#C0C0C0] border border-t-white border-l-white border-r-gray-600 border-b-gray-600 text-[8px] leading-none hover:bg-red-600">
                <svg className="w-2 h-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Window Content */}
          <div className="flex-1 bg-[#0a0a0a] m-1 flex overflow-hidden">
            {/* Left Sidebar */}
            <div className="w-48 bg-[#0a0a0a] border-r border-gray-800 p-3 flex flex-col flex-shrink-0">
              {/* Navigation */}
              <nav className="space-y-1 mb-6">
                <Link href="/" className="block px-3 py-2 bg-[#003300] border border-[#00FF00] text-[#00FF00] font-mono text-sm hover:bg-[#00FF00] hover:text-black transition-colors">
                  &gt; {t.home}
                </Link>
                <Link href="/about" className="block px-3 py-2 text-gray-400 font-mono text-sm hover:text-[#00FF00] transition-colors">
                  &gt; {t.about}
                </Link>
                <Link href="/projects" className="block px-3 py-2 text-gray-400 font-mono text-sm hover:text-[#00FF00] transition-colors">
                  &gt; {t.projects}
                </Link>
                <Link href="/contact" className="block px-3 py-2 text-gray-400 font-mono text-sm hover:text-[#00FF00] transition-colors">
                  &gt; {t.contact}
                </Link>
              </nav>

              {/* System Info */}
              <div className="mt-auto">
                <p className="text-gray-500 text-xs font-mono mb-2">{t.system}</p>
                <div className="space-y-1 font-mono text-xs">
                  <p className="text-[#00FF00]">{t.memory}: <span className="text-white">{systemStats.mem}MB</span></p>
                  <p className="text-[#00FF00]">{t.processor}: <span className="text-white">{systemStats.cpu}%</span></p>
                  <p className="text-[#00FF00]">{t.status}: <span className="text-white">{t.online}</span></p>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex overflow-hidden">
              <div className="flex-1 overflow-auto p-4">
                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                  <h1 className="text-2xl font-bold text-[#00FF00] font-mono">
                    <span className="text-gray-500">//</span> {t.mainTitle.replace('// ', '')}
                  </h1>
                  <LanguageSwitcher />
                </div>

                <div className="flex gap-4">
                  {/* Left Column - Photo + Personal Info */}
                  <div className="w-[320px] flex-shrink-0">
                    {/* Photo */}
                    <div className="border border-gray-600 p-1 mb-4">
                      <img
                        src="https://i.ibb.co/HT2yYDfz/Face.png"
                        alt="Andrew Ivanov"
                        className="w-full h-[320px] object-cover grayscale contrast-125"
                      />
                    </div>

                    {/* Personal Info - Vertical */}
                    <div className="font-mono text-sm space-y-1">
                      <p className="text-gray-500 text-xs">{t.personalInfo}</p>
                      <p><span className="text-[#00FF00]">{t.name}:</span> <span className="text-white">{t.nameValue}</span></p>
                      <p><span className="text-[#00FF00]">{t.surname}:</span> <span className="text-white">{t.surnameValue}</span></p>
                      <p><span className="text-[#00FF00]">{t.age}:</span> <span className="text-white">20</span></p>
                      <p><span className="text-[#00FF00]">{t.dateOfBirth}:</span> <span className="text-white">06.03.2006</span></p>
                      <p><span className="text-[#00FF00]">{t.town}:</span> <span className="text-white">{t.townValue}</span></p>
                      <p><span className="text-[#00FF00]">{t.maritalStatus}:</span> <span className="text-white">{t.maritalStatusValue}</span></p>
                      
                      <p className="text-gray-500 mt-3">{t.professionalInfo}</p>
                      <p><span className="text-[#00FF00]">{t.role}:</span> <span className="text-white">{t.roleName}</span></p>
                      <p><span className="text-[#00FF00]">{t.specialization}:</span> <span className="text-white">{t.specializationName}</span></p>
                      <p><span className="text-[#00FF00]">{t.experience}:</span> <span className="text-white">{t.experienceValue}</span></p>
                      <p><span className="text-[#00FF00]">{t.level}:</span> <span className="text-white">{t.levelValue}</span></p>
                      
                      <p className="text-gray-500 mt-3">{t.technicalSkills}</p>
                      <p><span className="text-[#00FF00]">{t.primary}:</span> <span className="text-white">{t.primarySkills}</span></p>
                      <p><span className="text-[#00FF00]">{t.secondary}:</span> <span className="text-white">{t.secondarySkills}</span></p>
                      
                      <p className="text-gray-500 mt-3">{t.statusLabel}</p>
                      <p><span className="text-[#00FF00]">{t.availability}:</span> <span className="text-white">{t.availabilityValue}</span></p>
                      <p><span className="text-[#00FF00]">{t.location}:</span> <span className="text-white">{t.locationValue}</span></p>
                      
                      <p className="text-gray-400 mt-4">
                        {typedText}<span className="cursor-blink">_</span>
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Sections with QR */}
                  <div className="flex-1 space-y-12">
                    {/* Section 01 */}
                    <div>
                      <p className="text-gray-500 text-xs font-mono mb-2">{t.section01}</p>
                      <div className="border border-[#0066FF] p-0.5 bg-white float-right ml-4 mb-4 flex-shrink-0">
                        <img src="https://i.ibb.co/7t0tztLL/qr-about-main.png" alt="QR About" className="w-20 h-20 invert object-cover" />
                      </div>
                      <div className="text-white font-mono text-sm">
                        <p>{t.section01Text}</p>
                        <p className="text-gray-400 mt-2">{t.section01Hint}</p>
                        <p className="text-[#00FF00] mt-2">{t.section01Contains}</p>
                      </div>
                      <div className="clear-both"></div>
                    </div>

                    {/* Section 02 */}
                    <div>
                      <p className="text-gray-500 text-xs font-mono mb-2">{t.section02}</p>
                      <div className="border border-[#0066FF] p-0.5 bg-white float-right ml-4 mb-4 flex-shrink-0">
                        <img src="https://i.ibb.co/mVbBrx53/qr-projects.png" alt="QR Projects" className="w-20 h-20 invert object-cover" />
                      </div>
                      <div className="text-white font-mono text-sm">
                        <p>{t.section02Text}</p>
                        <p className="text-gray-400 mt-2">{t.section02Hint}</p>
                        <p className="text-[#00FF00] mt-2">{t.section02Contains}</p>
                      </div>
                      <div className="clear-both"></div>
                    </div>

                    {/* Section 03 */}
                    <div>
                      <p className="text-gray-500 text-xs font-mono mb-2">{t.section03}</p>
                      <div className="border border-[#0066FF] p-0.5 bg-white float-right ml-4 mb-4 flex-shrink-0">
                        <img src="https://i.ibb.co/FLJCzR1n/qr-contact.png" alt="QR Contact" className="w-20 h-20 invert object-cover" />
                      </div>
                      <div className="text-white font-mono text-sm">
                        <p>{t.section03Text}</p>
                        <p className="text-gray-400 mt-2">{t.section03Hint}</p>
                        <p className="text-[#00FF00] mt-2">{t.section03Contains}</p>
                      </div>
                      <div className="clear-both"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="border-t border-gray-700 py-1 px-4 flex justify-between items-center text-xs font-mono flex-shrink-0 bg-[#0a0a0a]">
            <div className="text-[#00FF00]">
              <span className="animate-pulse">●</span>
            </div>
            <div className="flex items-center gap-4 text-gray-500">
              <span>СИСТЕМА: ОНЛАЙН | ПАМЯТЬ: {systemStats.mem}MB | ПРОЦЕССОР: {systemStats.cpu}%</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
