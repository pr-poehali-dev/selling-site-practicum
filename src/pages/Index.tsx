import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const PORTAL_IMG = 'https://cdn.poehali.dev/projects/4bcbebff-8203-4998-aca5-352d33c9bd63/files/d7c4a660-af38-4203-af90-3f31537fe7f5.jpg';
const ELLA_IMG = 'https://cdn.poehali.dev/projects/4bcbebff-8203-4998-aca5-352d33c9bd63/files/a21088e1-b2b7-4555-85d2-016202ccd613.jpg';

function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${(i * 7 + 3) % 100}%`,
    size: `${(i % 4) + 2}px`,
    duration: `${(i % 8) + 10}s`,
    delay: `${(i % 10)}s`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

function RegistrationModal({ isOpen, onClose, selectedPlan }: { isOpen: boolean; onClose: () => void; selectedPlan: string }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', plan: selectedPlan });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setForm(f => ({ ...f, plan: selectedPlan }));
  }, [selectedPlan]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative card-mystic rounded-2xl p-8 w-full max-w-md border border-gold/30 glow-purple" style={{ animation: 'fade-in 0.3s ease-out forwards' }}>
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-gold transition-colors">
          <Icon name="X" size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <div className="text-2xl mb-1">🔮</div>
              <h3 className="font-cormorant text-2xl gradient-gold font-semibold">Запись на практикум</h3>
              <p className="text-white/50 text-sm mt-1 font-montserrat">Формат: <span className="text-gold">{form.plan}</span></p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-white/50 uppercase tracking-widest font-montserrat">Ваше имя</label>
                <input
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full mt-1 bg-white/5 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-gold/50 transition-colors font-montserrat text-sm"
                  placeholder="Как вас зовут?"
                />
              </div>
              <div>
                <label className="text-xs text-white/50 uppercase tracking-widest font-montserrat">Телефон</label>
                <input
                  required
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full mt-1 bg-white/5 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-gold/50 transition-colors font-montserrat text-sm"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <label className="text-xs text-white/50 uppercase tracking-widest font-montserrat">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full mt-1 bg-white/5 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-gold/50 transition-colors font-montserrat text-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-xs text-white/50 uppercase tracking-widest font-montserrat mb-1 block">Формат участия</label>
                <select
                  value={form.plan}
                  onChange={e => setForm({ ...form, plan: e.target.value })}
                  className="w-full bg-white/5 border border-gold/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors font-montserrat text-sm"
                >
                  <option value="STANDARD" style={{ background: '#1A0A2E' }}>STANDARD — 35 000 ₽</option>
                  <option value="PREMIUM" style={{ background: '#1A0A2E' }}>PREMIUM — 60 000 ₽</option>
                  <option value="VIP" style={{ background: '#1A0A2E' }}>VIP — 120 000 ₽</option>
                </select>
              </div>
              <button type="submit" className="btn-gold w-full py-4 rounded-xl text-sm uppercase tracking-widest font-montserrat font-bold mt-2">
                Подтвердить запись
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-5xl mb-4 animate-float">✨</div>
            <h3 className="font-cormorant text-3xl gradient-gold font-semibold mb-3">Вы записаны!</h3>
            <p className="text-white/70 font-montserrat text-sm leading-relaxed">
              Мы свяжемся с вами в ближайшее время.<br />
              Добро пожаловать в ПОРТАЛ 3.
            </p>
            <button onClick={onClose} className="btn-outline-gold mt-6 px-8 py-3 rounded-xl text-sm uppercase tracking-widest font-montserrat">
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Section({ children, className = '', id = '' }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('revealed'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </section>
  );
}

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('STANDARD');

  const openModal = (plan = 'STANDARD') => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const modules = [
    {
      num: '01',
      title: 'Диагностика жизненного сценария',
      practice: 'Раскрытие корневого сценария',
      items: [
        'Какие сценарии бессознательно повторяются в отношениях, деньгах и реализации',
        'Почему одинаковые ситуации возвращаются снова',
        'Где находится ваш внутренний потолок',
        'Какие страхи и внутренние решения удерживают старую реальность',
      ],
      result: 'После первого модуля вы будете по-другому смотреть на свою жизнь и видеть скрытые закономерности. Уйдёт ощущение хаоса — появится понимание.',
    },
    {
      num: '02',
      title: 'Освобождение от кармических узлов и старых связей',
      practice: 'Развязывание кармических узлов',
      items: [
        'Какие эмоциональные связи продолжают влиять на вашу жизнь',
        'Где происходит потеря энергии',
        'Почему некоторые люди продолжают занимать огромное пространство внутри',
        'Как формируются кармические узлы и эмоциональные привязки',
      ],
      result: 'После второго модуля прошлое перестанет вызывать сильную реакцию. Внутри станет спокойнее, появится больше энергии и ощущение внутренней свободы.',
    },
    {
      num: '03',
      title: 'Возвращение энергии и формирование новой линии жизни',
      practice: 'Активация новой линии жизни',
      items: [
        'Возвращение потерянной энергии',
        'Формирование новой внутренней позиции',
        'Ощущение внутренней опоры',
        'Состояние, из которого начинаются совершенно другие решения',
      ],
      result: 'После третьего модуля появляется новое состояние, становится легче проявляться и действовать. Жизнь начинает восприниматься совершенно иначе.',
    },
  ];

  const experts = [
    {
      name: 'Элла Ворошилина',
      role: 'Энергопрактик, проводник трансформационных процессов',
      description: 'Автор пространства «ПОРТАЛ». Работает с внутренними сценариями, энергетическими состояниями, кармическими узлами и переходами на новый уровень жизни.',
      img: ELLA_IMG,
      tg: false,
    },
    {
      name: 'Елена Манькивская',
      role: 'Мастер-учитель Рей Ки До Сатори, целитель, регрессолог',
      description: 'Помогает очистить энергосистему, повысить уровень жизненного ресурса при помощи медитативных практик и регресса.',
      img: null,
      tg: true,
    },
    {
      name: 'Максим Менц',
      role: 'Финансовый стратег перехода',
      description: 'Помогает экспертам и предпринимателям, которые выросли, но упёрлись в потолок дохода. Выявляет конфликт идентичности.',
      img: null,
      tg: true,
    },
  ];

  const plans = [
    {
      name: 'STANDARD',
      price: '35 000',
      icon: '✨',
      desc: 'Групповой формат',
      features: ['Все живые эфиры', 'Все практики', 'Энерговибрационные сеансы', 'Доступ к записям', 'Общий чат участников'],
      highlight: false,
    },
    {
      name: 'PREMIUM',
      price: '60 000',
      icon: '💫',
      desc: 'Расширенный формат',
      features: ['Всё из STANDARD', 'Дополнительные разборы', 'Ответы на вопросы', '1 индивидуальная сессия эксперта на выбор'],
      highlight: true,
    },
    {
      name: 'VIP',
      price: '120 000',
      icon: '🔮',
      desc: 'Глубокая индивидуальная работа',
      features: ['Всё из PREMIUM', 'Личные диагностические встречи', 'Индивидуальные разборы', 'Персональное сопровождение всех 3 экспертов'],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-portal noise-overlay relative">
      <Particles />

      {/* HERO */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden stars-bg">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full opacity-20 animate-pulse-slow"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.8) 0%, rgba(74,26,122,0.4) 40%, transparent 70%)' }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[400px] h-[400px] rounded-full opacity-10 animate-spin-slow"
            style={{ border: '1px dashed rgba(212,175,106,0.3)' }} />
        </div>

        <div className="absolute right-0 top-0 w-1/2 h-full opacity-15 pointer-events-none hidden lg:block">
          <img src={PORTAL_IMG} alt="Portal" className="w-full h-full object-cover"
            style={{ maskImage: 'radial-gradient(ellipse at right, black 30%, transparent 80%)' }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <div className="inline-block mb-6">
            <span className="text-xs font-montserrat tracking-[0.3em] uppercase text-gold/70 border border-gold/20 px-6 py-2 rounded-full">
              Трансформационный практикум
            </span>
          </div>

          <div className="text-7xl md:text-8xl mb-4 animate-float">🔮</div>

          <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6">
            <span className="gradient-gold">ПОРТАЛ</span>
            <span className="text-white"> 3</span>
          </h1>

          <p className="font-cormorant text-xl md:text-2xl text-white/60 italic mb-4 tracking-wide">
            Пространство выхода из старых жизненных сценариев
          </p>
          <p className="font-cormorant text-lg md:text-xl text-gold/70 italic mb-10">
            и перехода на новую линию жизни
          </p>

          <div className="max-w-2xl mx-auto mb-10">
            <h2 className="font-cormorant text-3xl md:text-4xl text-white font-light mb-4 leading-snug">
              Перестаньте жить по кругу.
            </h2>
            <p className="font-montserrat text-white/60 text-sm md:text-base leading-relaxed">
              Начните проживать свою настоящую жизнь — осознанно, с внутренней опорой и ощущением движения вперёд.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => openModal('STANDARD')} className="btn-gold px-10 py-4 rounded-full text-sm uppercase tracking-widest font-montserrat animate-glow-pulse">
              Хочу участвовать
            </button>
            <a href="#about" className="btn-outline-gold px-8 py-4 rounded-full text-sm uppercase tracking-widest font-montserrat">
              Узнать подробнее
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10 text-white/30 font-montserrat text-xs">
            <span className="flex items-center gap-1.5"><Icon name="Calendar" size={13} /> Старт: 1 июня 2025</span>
            <span className="text-gold/20">•</span>
            <span className="flex items-center gap-1.5"><Icon name="Users" size={13} /> Мест ограничено</span>
            <span className="text-gold/20">•</span>
            <span className="flex items-center gap-1.5"><Icon name="Clock" size={13} /> 30 дней</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gold/40">
          <Icon name="ChevronDown" size={24} />
        </div>
      </div>

      {/* FOR WHOM */}
      <Section id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-xs font-montserrat tracking-[0.3em] uppercase text-gold/50 mb-4">Целевая аудитория</p>
            <h2 className="font-cormorant text-4xl md:text-6xl text-white font-light">
              Кому подойдёт <span className="gradient-gold">практикум</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Вы замечаете, что в жизни повторяются похожие ситуации',
              'Отношения, деньги или внутреннее состояние движутся по кругу',
              'Внутри есть ощущение, что вы способны на большее',
              'Вы устали от постоянного напряжения и внутренней тяжести',
              'Много работали над собой, но глубоких изменений не произошло',
              'Чувствуете потерю энергии и ощущение «живу не свою жизнь»',
              'Не можете отпустить прошлое или старые эмоциональные истории',
              'Хотите понять, что именно удерживает вас на прежнем уровне',
            ].map((item, i) => (
              <div key={i} className="card-mystic rounded-xl p-5 flex items-start gap-4 hover:border-gold/40 transition-all duration-300">
                <div className="w-6 h-6 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                </div>
                <p className="font-montserrat text-white/80 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 card-mystic rounded-2xl p-8 border-gold/20 text-center">
            <p className="font-cormorant text-2xl md:text-3xl text-white/80 italic leading-relaxed">
              "Очень часто человек уже многое знает. Но знание не меняет жизнь,
              <br /><span className="text-gold">если внутренний сценарий продолжает управлять решениями."</span>
            </p>
          </div>

          <div className="text-center mt-10">
            <button onClick={() => openModal('STANDARD')} className="btn-outline-gold px-10 py-4 rounded-full text-sm uppercase tracking-widest font-montserrat">
              Узнать подробнее
            </button>
          </div>
        </div>
      </Section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* RESULTS */}
      <Section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-xs font-montserrat tracking-[0.3em] uppercase text-gold/50 mb-4">Трансформация</p>
            <h2 className="font-cormorant text-4xl md:text-6xl text-white font-light">
              Какой результат <span className="gradient-gold">вы получите</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '🌟', title: 'Понимание', items: ['Почему ситуации повторялись годами', 'Какие программы влияли на решения', 'Где происходила потеря энергии', 'Почему не получалось выйти на новый уровень'] },
              { icon: '✨', title: 'Ощущение', items: ['Больше внутренней лёгкости', 'Спокойствие вместо напряжения', 'Ощущение внутренней опоры', 'Больше энергии и ясности'] },
              { icon: '🔮', title: 'Изменения', items: ['Прошлое перестало так сильно влиять', 'Легче принимать решения', 'Ощущение движения вперёд', 'Жизнь начала складываться иначе'] },
            ].map((col, i) => (
              <div key={i} className="card-mystic rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{col.icon}</div>
                <h3 className="font-cormorant text-2xl gradient-gold mb-4">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className="font-montserrat text-white/60 text-sm flex items-start gap-2">
                      <span className="text-gold mt-0.5 flex-shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-cormorant text-3xl md:text-4xl text-white font-light italic">
              И самое важное: вы перестанете жить{' '}
              <span className="gradient-gold">автоматически.</span>
            </p>
            <button onClick={() => openModal('STANDARD')} className="btn-gold px-10 py-4 rounded-full text-sm uppercase tracking-widest font-montserrat mt-8 inline-block">
              Хочу выйти на новый уровень
            </button>
          </div>
        </div>
      </Section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* HOW IT WORKS */}
      <Section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-xs font-montserrat tracking-[0.3em] uppercase text-gold/50 mb-4">О продукте</p>
            <h2 className="font-cormorant text-4xl md:text-6xl text-white font-light">
              Что это за продукт и <span className="gradient-gold">как он работает</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="card-mystic rounded-2xl p-8 mb-6">
                <h3 className="font-cormorant text-2xl text-gold mb-4">Формат</h3>
                <p className="font-montserrat text-white/70 text-sm leading-relaxed mb-4">
                  Глубокий трансформационный онлайн-практикум с сопровождением.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {['Живые эфиры', 'Практики', 'Энерговибрационные сеансы', 'Разборы состояний', 'Сопровождение', 'Доступ к записям'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span className="font-montserrat text-white/60 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-mystic rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center">
                    <Icon name="Calendar" size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-cormorant text-xl text-gold">30 дней</p>
                    <p className="font-montserrat text-white/40 text-xs">Продолжительность</p>
                  </div>
                </div>
                <p className="font-montserrat text-white/60 text-sm leading-relaxed">
                  3 глубоких трансформационных этапа + дополнительный блок для экспертов
                </p>
              </div>
            </div>

            <div className="card-mystic rounded-2xl p-8 border-gold/20">
              <div className="text-center mb-6">
                <div className="text-5xl animate-float">🌀</div>
              </div>
              <p className="font-cormorant text-xl text-white/80 italic text-center leading-relaxed mb-6">
                "Это не самостоятельное обучение, где человек остаётся один на один с информацией."
              </p>
              <p className="font-montserrat text-white/60 text-sm leading-relaxed text-center">
                ПОРТАЛ 3 — это пространство совместной глубокой работы, где участники проходят внутренний переход вместе с авторами и полем практикума.
              </p>
              <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(212,175,106,0.1)' }}>
                <p className="font-montserrat text-center text-white/40 text-xs uppercase tracking-widest">
                  Работа строится так, чтобы человек не просто получил информацию, а прожил внутренние изменения
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button onClick={() => openModal('STANDARD')} className="btn-gold px-10 py-4 rounded-full text-sm uppercase tracking-widest font-montserrat">
              Записаться
            </button>
          </div>
        </div>
      </Section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* PROGRAM */}
      <Section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-xs font-montserrat tracking-[0.3em] uppercase text-gold/50 mb-4">Содержание</p>
            <h2 className="font-cormorant text-4xl md:text-6xl text-white font-light">
              Программа <span className="gradient-gold">практикума</span>
            </h2>
          </div>

          <div className="space-y-6">
            {modules.map((mod, i) => (
              <div key={i} className="card-mystic rounded-2xl p-8 border-gold/20 hover:border-gold/40 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold/60 transition-colors">
                      <span className="font-cormorant text-2xl gradient-gold">{mod.num}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-cormorant text-2xl text-gold mb-4">🔮 {mod.title}</h3>
                    <ul className="space-y-2 mb-6">
                      {mod.items.map((item, j) => (
                        <li key={j} className="font-montserrat text-white/60 text-sm flex items-start gap-2">
                          <span className="text-gold/60 flex-shrink-0 mt-0.5">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-white/5 rounded-xl p-4" style={{ borderLeft: '2px solid rgba(212,175,106,0.4)' }}>
                      <p className="text-xs font-montserrat text-gold/60 uppercase tracking-widest">Практика: {mod.practice}</p>
                    </div>
                    <div className="mt-4 rounded-xl p-4" style={{ background: 'linear-gradient(to right, rgba(45,16,85,0.3), transparent)' }}>
                      <p className="text-xs font-montserrat text-gold/60 uppercase tracking-widest mb-2">✨ Результат модуля</p>
                      <p className="font-montserrat text-white/60 text-sm leading-relaxed">{mod.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="card-mystic rounded-2xl p-8 glow-gold" style={{ border: '1px solid rgba(212,175,106,0.3)' }}>
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">✨</span>
                <div>
                  <p className="text-xs font-montserrat text-gold/60 uppercase tracking-widest mb-1">Дополнительный модуль</p>
                  <h3 className="font-cormorant text-2xl text-gold">Энергия, проявление и деньги</h3>
                </div>
              </div>
              <p className="font-montserrat text-white/60 text-sm mb-4">Особенно важен для: экспертов, помогающих практиков, коучей, психологов, энерготерапевтов</p>
              <div className="grid md:grid-cols-2 gap-2">
                {['Страх больших денег', 'Внутренний потолок дохода', 'Страх проявления', 'Синдром спасателя', 'Переход из состояния выживания в состояние проводника'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="font-montserrat text-white/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button onClick={() => openModal('STANDARD')} className="btn-gold px-10 py-4 rounded-full text-sm uppercase tracking-widest font-montserrat">
              Хочу участвовать
            </button>
          </div>
        </div>
      </Section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* EXPERTS */}
      <Section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-xs font-montserrat tracking-[0.3em] uppercase text-gold/50 mb-4">Команда</p>
            <h2 className="font-cormorant text-4xl md:text-6xl text-white font-light">
              Почему <span className="gradient-gold">с нами</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {experts.map((expert, i) => (
              <div key={i} className={`card-mystic rounded-2xl p-6 text-center hover:border-gold/40 transition-all duration-300 ${i === 0 ? 'border-gold/30' : ''}`}>
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden" style={{ border: '2px solid rgba(212,175,106,0.2)' }}>
                  {expert.img ? (
                    <img src={expert.img} alt={expert.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #2D1055, #4A1A7A)' }}>
                      <span className="font-cormorant text-3xl text-gold">{expert.name[0]}</span>
                    </div>
                  )}
                </div>
                <h3 className="font-cormorant text-xl text-gold mb-1">{expert.name}</h3>
                <p className="font-montserrat text-white/40 text-xs mb-3 leading-relaxed">{expert.role}</p>
                <p className="font-montserrat text-white/60 text-sm leading-relaxed">{expert.description}</p>
                {expert.tg && (
                  <button className="btn-outline-gold mt-4 px-6 py-2 rounded-full text-xs uppercase tracking-widest font-montserrat flex items-center gap-2 mx-auto">
                    <Icon name="Send" size={12} />
                    Написать в Telegram
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* PRICING */}
      <Section id="pricing" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-xs font-montserrat tracking-[0.3em] uppercase text-gold/50 mb-4">Инвестиция</p>
            <h2 className="font-cormorant text-4xl md:text-6xl text-white font-light">
              Форматы <span className="gradient-gold">участия</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4 text-white/30 font-montserrat text-sm">
              <Icon name="Calendar" size={14} />
              <span>Старт: 1 июня 2025</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                style={plan.highlight
                  ? { background: 'linear-gradient(to bottom, rgba(45,16,85,0.8), rgba(74,26,122,0.6))', border: '1px solid rgba(212,175,106,0.5)', boxShadow: '0 0 30px rgba(212,175,106,0.3), 0 0 60px rgba(212,175,106,0.1)' }
                  : { background: 'linear-gradient(135deg, rgba(45,16,85,0.6), rgba(26,10,46,0.8))', border: '1px solid rgba(212,175,106,0.2)', backdropFilter: 'blur(10px)' }
                }
                onClick={() => openModal(plan.name)}
              >
                {plan.highlight && (
                  <div className="text-center mb-4">
                    <span className="text-xs font-montserrat tracking-widest uppercase px-4 py-1 rounded-full font-bold"
                      style={{ background: 'linear-gradient(135deg, #D4AF6A, #C9943A)', color: '#080614' }}>
                      Популярный
                    </span>
                  </div>
                )}
                <div className="text-3xl mb-3 text-center">{plan.icon}</div>
                <h3 className="font-cormorant text-3xl text-gold text-center mb-1">{plan.name}</h3>
                <p className="font-montserrat text-white/40 text-xs text-center mb-6 uppercase tracking-widest">{plan.desc}</p>

                <div className="text-center mb-6">
                  <span className="font-cormorant text-5xl text-white">{plan.price}</span>
                  <span className="font-montserrat text-white/50 text-sm ml-1">₽</span>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Icon name="Check" size={14} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-montserrat text-white/70 text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={(e) => { e.stopPropagation(); openModal(plan.name); }}
                  className={plan.highlight ? 'btn-gold w-full py-4 rounded-xl text-sm uppercase tracking-widest font-montserrat' : 'btn-outline-gold w-full py-4 rounded-xl text-sm uppercase tracking-widest font-montserrat'}
                >
                  Записаться
                </button>
              </div>
            ))}
          </div>

          <p className="text-center font-montserrat text-white/30 text-xs mt-8">
            Количество мест ограничено — практикум предполагает глубокую работу и сопровождение участников
          </p>
        </div>
      </Section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* FINAL */}
      <Section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 rounded-full opacity-10 animate-pulse-slow"
                style={{ background: 'radial-gradient(circle, rgba(212,175,106,0.8) 0%, transparent 70%)' }} />
            </div>

            <div className="relative z-10">
              <div className="text-6xl mb-8 animate-float">🔮</div>

              <h2 className="font-cormorant text-4xl md:text-6xl text-white font-light leading-tight mb-8">
                Если вы чувствуете, что готовы выйти из старой линии жизни —
                <br />
                <span className="gradient-gold italic">значит, вы уже в точке изменений.</span>
              </h2>

              <div className="card-mystic rounded-2xl p-8 mb-10 text-left">
                <p className="font-montserrat text-white/70 text-sm leading-relaxed">
                  Очень многие люди годами чувствуют: что могут жить иначе, но не понимают, что именно удерживает их внутри старого сценария.
                </p>
                <p className="font-cormorant text-xl text-white/80 italic mt-4 leading-relaxed">
                  ПОРТАЛ 3 — это пространство, где вы начинаете видеть эти процессы, освобождаться от старых связей и формировать совершенно другое внутреннее состояние.
                </p>
                <p className="font-montserrat text-gold/60 text-sm mt-4">
                  Не через давление. Не через бесконечное «исправление себя». А через глубокое понимание и внутренний переход.
                </p>
              </div>

              <button onClick={() => openModal('STANDARD')} className="btn-gold px-14 py-5 rounded-full text-base uppercase tracking-widest font-montserrat animate-glow-pulse">
                Хочу участвовать
              </button>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-white/20 font-montserrat text-xs">
                <span className="flex items-center gap-1.5"><Icon name="Calendar" size={12} /> Старт 1 июня 2025</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><Icon name="Shield" size={12} /> Безопасное пространство</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><Icon name="Heart" size={12} /> Глубокая работа</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-10 px-6 text-center" style={{ borderTop: '1px solid rgba(212,175,106,0.1)' }}>
        <p className="font-cormorant text-2xl gradient-gold mb-2">ПОРТАЛ 3</p>
        <p className="font-montserrat text-white/30 text-xs">© 2025 Трансформационный практикум</p>
      </footer>

      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedPlan={selectedPlan} />
    </div>
  );
}
