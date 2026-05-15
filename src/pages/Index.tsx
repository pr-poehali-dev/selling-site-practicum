import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const PORTAL_IMG = 'https://cdn.poehali.dev/projects/4bcbebff-8203-4998-aca5-352d33c9bd63/files/d7c4a660-af38-4203-af90-3f31537fe7f5.jpg';
// Реальные фото экспертов
const ELLA_IMG = 'https://cdn.poehali.dev/projects/4bcbebff-8203-4998-aca5-352d33c9bd63/bucket/21b7d71f-423e-436d-aa1f-342b0ab4b499.png';
const ELENA_IMG = 'https://cdn.poehali.dev/projects/4bcbebff-8203-4998-aca5-352d33c9bd63/bucket/16695ff1-7692-45ba-811b-3f832ebe30ad.jpg';
const MAXIM_IMG = 'https://cdn.poehali.dev/projects/4bcbebff-8203-4998-aca5-352d33c9bd63/bucket/a9b9fa98-df09-49b0-a57b-e7a3a38ee707.png';

const TG_ELLA = 'https://t.me/voroshilinaella';
const TG_ELENA = 'https://t.me/Elena_proresurs';
const TG_MAXIM = 'https://t.me/Alladium';
const TG_REGISTER = 'https://t.me/voroshilinaella';

const reviews = [
  {
    author: 'Татьяна',
    source: 'Переслано от Татьяна',
    screenshot: 'https://cdn.poehali.dev/projects/4bcbebff-8203-4998-aca5-352d33c9bd63/bucket/7fa77c97-b8ba-4b6c-884f-3ca64c64f353.png',
    text: 'Я пришла на Портал с запросом на изменение всех сфер своей жизни. Главный запрос — духовный рост, раскрытие истинного предназначения, своего потенциала. До практикума были серьёзные проблемы в сфере финансов, постоянные эмоциональные качели, ощущение пустоты и замкнутого круга. Я не видела куда двигаться дальше. Портал открыл во мне способности ясно чувствовать, мыслить, получать информацию от Высших Сил Света. Доход начал стабилизироваться, внутреннее состояние изменилось — замкнутый круг исчез. Портал — это семья. Уникальные практики, в процессе которых происходит энерготерапия. Замечательные Духовные наставники, Проводники к Богу.',
    highlight: 'Понимание, что ты больше не сможешь жить по прошлому сценарию — реальность поменялась, я изменилась, прежней меня больше Нет.',
  },
  {
    author: 'Ольга Синельникова',
    source: 'Переслано от Ольга Синельникова',
    screenshot: 'https://cdn.poehali.dev/projects/4bcbebff-8203-4998-aca5-352d33c9bd63/bucket/62948b65-ac24-40c7-b480-419298939e4a.png',
    text: 'Элла, Максим, Лена, я благодарю вас за ПОРТАЛ, и благодарю всех за созвучие и сопричастность. Я соединилась со своей силой, с внутренним спокойствием и уверенностью, меня наполняет большая благодарность и любовь к вам и всему вокруг. Стали понятны многие ситуации, которые были в жизни, и появился уверенный вектор движения вперёд. Приходят новые идеи и хочется их реализовывать.',
    highlight: 'Я искренне благодарю вас за Ваш огромный труд. Пусть к вам приходят многие и многие люди. Бесконечно люблю, то что происходит сейчас 🤍🤍🤍',
  },
  {
    author: 'Татьяна',
    source: 'Переслано от Татьяна',
    screenshot: 'https://cdn.poehali.dev/projects/4bcbebff-8203-4998-aca5-352d33c9bd63/bucket/05262258-4e09-4aa8-965f-28f4fb90a84c.png',
    text: 'Элла, благодарю Вас за индивидуальную работу со мной 🙏💕 Вы мне подсветили вектор направления для трансформации моей Души! Наконец-то я поняла, что конкретно делала не так, почему ходила по кругу. Ухожу от хаоса в осознание своих последовательных действий. Чувствую как энергия простраивается внутри, как меняется пространство вокруг, потому что меняюсь я. Ваш курс — бриллиант! Та информация, которой Вы с нами делитесь, бесценна!',
    highlight: 'Я Вам с Еленой очень благодарна за возможность находиться рядом с вами, в ваших энергетических полях! Благодарю 🙏 Благодарю 🙏 Благодарю 🙏',
  },
  {
    author: 'Наталья А.',
    source: 'Переслано от Наталья А',
    screenshot: 'https://cdn.poehali.dev/projects/4bcbebff-8203-4998-aca5-352d33c9bd63/bucket/68d38f89-933a-47f3-b9f3-fd5bf3e3de2a.png',
    text: 'Элла — ты такая мягкая, чуткая, невероятно приятно было с тобой работать. Энергетика близка мне и мне было очень комфортно. Элла своими словами, вопросами мягко меня направила в нужное русло. Вдруг я резко ощутила что именно здесь и сейчас для меня важно озвучить и очень важно убрать. Во время работы моё тело вибрировали будто и горело огнём, но чувствовала я себя превосходно! Уходила с практики с улыбкой и отличным настроением, мне хотелось петь и танцевать.',
    highlight: 'Было ощущение, что мы знакомы сто лет. Это было волшебно ✨🌟',
  },
];

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
      result: 'После первого модуля вы начнёте по-другому смотреть на свою жизнь и видеть скрытые закономерности. Уйдёт ощущение хаоса — появится понимание.',
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
      result: 'После третьего модуля появляется новое состояние — становится легче проявляться и действовать. Жизнь начинает восприниматься совершенно иначе.',
    },
  ];

  const experts = [
    {
      name: 'Элла Ворошилина',
      role: 'Энергопрактик, проводник трансформационных процессов',
      description: 'Автор пространства «ПОРТАЛ». Работает с внутренними сценариями, энергетическими состояниями, кармическими узлами и переходами на новый уровень жизни и реализации.',
      img: ELLA_IMG,
      tg: TG_ELLA,
    },
    {
      name: 'Елена Манькивская',
      role: 'Мастер-учитель Рэй Ки До Сатори, целитель, регрессолог',
      description: 'Помогает очистить энергосистему и повысить уровень жизненного ресурса с помощью медитативных практик и регресса. Работает с глубинным очищением и родовыми программами.',
      img: ELENA_IMG,
      tg: TG_ELENA,
    },
    {
      name: 'Максим Менц',
      role: 'Финансовый стратег перехода',
      description: 'Энергопрактик, помогает экспертам и предпринимателям, которые выросли, но упёрлись в потолок дохода. Выявляет конфликт идентичности и помогает выстроить правила управления деньгами.',
      img: MAXIM_IMG,
      tg: TG_MAXIM,
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
      features: ['Всё из формата STANDARD', 'Дополнительные разборы', 'Ответы на вопросы', '1 индивидуальная сессия эксперта на выбор'],
      highlight: true,
    },
    {
      name: 'VIP',
      price: '120 000',
      icon: '🔮',
      desc: 'Глубокая индивидуальная работа',
      features: ['Всё из формата PREMIUM', 'Личные диагностические встречи', 'Индивидуальные разборы', 'Персональное сопровождение всех трёх экспертов'],
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
          <img src={PORTAL_IMG} alt="Портал" className="w-full h-full object-cover"
            style={{ maskImage: 'radial-gradient(ellipse at right, black 30%, transparent 80%)' }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <div className="inline-block mb-6">
            <span className="text-xs font-montserrat tracking-[0.3em] uppercase text-gold/70 border border-gold/20 px-6 py-2 rounded-full">
              Трансформационный практикум
            </span>
          </div>

          <div className="text-7xl md:text-8xl mb-6 animate-float">🔮</div>

          {/* Заголовок ПОРТАЛ 3 в одну строку, выровнен по центру */}
          <h1 className="font-cormorant font-light leading-none mb-6 flex items-baseline justify-center gap-4">
            <span className="gradient-gold" style={{ fontSize: 'clamp(3.5rem, 12vw, 8rem)' }}>ПОРТАЛ</span>
            <span className="text-white" style={{ fontSize: 'clamp(3.5rem, 12vw, 8rem)' }}>3</span>
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
            <a
              href={TG_REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-10 py-4 rounded-full text-sm uppercase tracking-widest font-montserrat animate-glow-pulse inline-flex items-center gap-2"
            >
              <Icon name="Send" size={16} />
              Хочу участвовать
            </a>
            <a href="#about" className="btn-outline-gold px-8 py-4 rounded-full text-sm uppercase tracking-widest font-montserrat">
              Узнать подробнее
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10 text-white/30 font-montserrat text-xs">
            <span className="flex items-center gap-1.5"><Icon name="Calendar" size={13} /> Старт: 1 июня 2026</span>
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
              'Много работали над собой, но глубоких изменений так и не произошло',
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
              «Очень часто человек уже многое знает. Но знание не меняет жизнь,
              <br /><span className="text-gold">если внутренний сценарий продолжает управлять решениями.»</span>
            </p>
          </div>

          <div className="text-center mt-10">
            <a
              href={TG_REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold px-10 py-4 rounded-full text-sm uppercase tracking-widest font-montserrat inline-flex items-center gap-2"
            >
              <Icon name="Send" size={14} />
              Узнать подробнее
            </a>
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
              {
                icon: '🌟', title: 'Понимание', items: [
                  'Почему ситуации повторялись годами',
                  'Какие программы влияли на решения',
                  'Где происходила потеря энергии',
                  'Почему не получалось выйти на новый уровень',
                ]
              },
              {
                icon: '✨', title: 'Ощущение', items: [
                  'Больше внутренней лёгкости',
                  'Спокойствие вместо постоянного напряжения',
                  'Ощущение внутренней опоры',
                  'Больше энергии и ясности',
                ]
              },
              {
                icon: '🔮', title: 'Изменения', items: [
                  'Прошлое перестанет так сильно влиять',
                  'Легче принимать решения',
                  'Ощущение движения вперёд',
                  'Жизнь начнёт складываться иначе',
                ]
              },
            ].map((col, i) => (
              <div key={i} className="card-mystic rounded-2xl p-6 text-center flex flex-col">
                <div className="text-4xl mb-4">{col.icon}</div>
                <h3 className="font-cormorant text-2xl gradient-gold mb-4">{col.title}</h3>
                <ul className="space-y-2 flex-1">
                  {col.items.map((item, j) => (
                    <li key={j} className="font-montserrat text-white/60 text-sm flex items-start gap-2 text-left">
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
            <a
              href={TG_REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-10 py-4 rounded-full text-sm uppercase tracking-widest font-montserrat mt-8 inline-flex items-center gap-2"
            >
              <Icon name="Send" size={14} />
              Хочу выйти на новый уровень
            </a>
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

          {/* Равные по высоте рамки */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="flex flex-col gap-6">
              <div className="card-mystic rounded-2xl p-8 flex flex-col gap-5">
                <div>
                  <h3 className="font-cormorant text-2xl text-gold mb-2">Формат</h3>
                  <p className="font-montserrat text-white/70 text-sm leading-relaxed">
                    Глубокий трансформационный онлайн-практикум с сопровождением.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {['Живые эфиры', 'Практики', 'Энерговибрационные сеансы', 'Разборы состояний', 'Сопровождение', 'Доступ к записям'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span className="font-montserrat text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-mystic rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0">
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

            {/* Правая карточка — та же высота что левый столбец */}
            <div className="card-mystic rounded-2xl p-8 flex flex-col justify-between" style={{ border: '1px solid rgba(212,175,106,0.2)' }}>
              <div className="text-center mb-6">
                <div className="text-5xl animate-float">🌀</div>
              </div>
              <p className="font-cormorant text-xl text-white/80 italic text-center leading-relaxed mb-6">
                «Это не самостоятельное обучение, где человек остаётся один на один с информацией.»
              </p>
              <p className="font-montserrat text-white/60 text-sm leading-relaxed text-center">
                ПОРТАЛ 3 — это пространство совместной глубокой работы, где участники проходят внутренний переход вместе с авторами и полем практикума.
              </p>
              <div className="mt-6 pt-6 flex-1 flex flex-col justify-end" style={{ borderTop: '1px solid rgba(212,175,106,0.1)' }}>
                <p className="font-montserrat text-center text-white/40 text-xs uppercase tracking-widest">
                  Работа строится так, чтобы человек не просто получил информацию, а прожил внутренние изменения
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href={TG_REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-10 py-4 rounded-full text-sm uppercase tracking-widest font-montserrat inline-flex items-center gap-2"
            >
              <Icon name="Send" size={14} />
              Записаться
            </a>
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
                  <div className="flex-shrink-0">
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
                    <div className="bg-white/5 rounded-xl p-4 mb-4" style={{ borderLeft: '2px solid rgba(212,175,106,0.4)' }}>
                      <p className="text-xs font-montserrat text-gold/60 uppercase tracking-widest">Практика: {mod.practice}</p>
                    </div>
                    <div className="rounded-xl p-4" style={{ background: 'linear-gradient(to right, rgba(45,16,85,0.3), transparent)' }}>
                      <p className="text-xs font-montserrat text-gold/60 uppercase tracking-widest mb-2">✨ Результат модуля</p>
                      <p className="font-montserrat text-white/60 text-sm leading-relaxed">{mod.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="card-mystic rounded-2xl p-8" style={{ border: '1px solid rgba(212,175,106,0.3)', boxShadow: '0 0 30px rgba(212,175,106,0.15)' }}>
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl flex-shrink-0">✨</span>
                <div>
                  <p className="text-xs font-montserrat text-gold/60 uppercase tracking-widest mb-1">Дополнительный модуль</p>
                  <h3 className="font-cormorant text-2xl text-gold">Энергия, проявление и деньги</h3>
                </div>
              </div>
              <p className="font-montserrat text-white/60 text-sm mb-4 leading-relaxed">
                Особенно важен для: экспертов, помогающих практиков, коучей, психологов, энерготерапевтов
              </p>
              <div className="grid md:grid-cols-2 gap-2">
                {[
                  'Страх больших денег',
                  'Внутренний потолок дохода',
                  'Страх проявления',
                  'Синдром спасателя',
                  'Переход из состояния выживания в состояние проводника',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="font-montserrat text-white/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href={TG_REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-10 py-4 rounded-full text-sm uppercase tracking-widest font-montserrat inline-flex items-center gap-2"
            >
              <Icon name="Send" size={14} />
              Хочу участвовать
            </a>
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
              <div
                key={i}
                className="card-mystic rounded-2xl p-6 flex flex-col items-center text-center hover:border-gold/40 transition-all duration-300"
                style={i === 0 ? { border: '1px solid rgba(212,175,106,0.35)' } : {}}
              >
                {/* Круглое фото */}
                <div
                  className="w-28 h-28 rounded-full mb-5 overflow-hidden flex-shrink-0"
                  style={{ border: '2px solid rgba(212,175,106,0.45)', boxShadow: '0 0 24px rgba(212,175,106,0.18)' }}
                >
                  <img
                    src={expert.img}
                    alt={expert.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <h3 className="font-cormorant text-xl text-gold mb-1">{expert.name}</h3>
                <p className="font-montserrat text-white/40 text-xs mb-3 leading-relaxed">{expert.role}</p>
                <p className="font-montserrat text-white/65 text-sm leading-relaxed flex-1">{expert.description}</p>

                <a
                  href={expert.tg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold mt-5 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-montserrat inline-flex items-center gap-2"
                >
                  <Icon name="Send" size={12} />
                  Написать в Telegram
                </a>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* REVIEWS */}
      <Section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-xs font-montserrat tracking-[0.3em] uppercase text-gold/50 mb-4">Отзывы участников</p>
            <h2 className="font-cormorant text-4xl md:text-6xl text-white font-light">
              Что говорят <span className="gradient-gold">участники</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="card-mystic rounded-2xl flex flex-col overflow-hidden"
                style={{ border: '1px solid rgba(212,175,106,0.15)' }}
              >
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, rgba(212,175,106,0.3), rgba(124,58,237,0.3))', border: '1px solid rgba(212,175,106,0.3)' }}
                    >
                      <span className="font-cormorant text-gold text-lg">{review.author[0]}</span>
                    </div>
                    <div>
                      <p className="font-montserrat text-gold text-sm font-semibold">{review.author}</p>
                      <p className="font-montserrat text-white/30 text-xs">{review.source}</p>
                    </div>
                    <div className="ml-auto text-gold/40 text-3xl font-cormorant leading-none">"</div>
                  </div>

                  <p className="font-montserrat text-white/60 text-sm leading-relaxed mb-4 flex-1">
                    {review.text}
                  </p>

                  <div
                    className="rounded-xl p-4 mt-auto"
                    style={{ background: 'linear-gradient(135deg, rgba(212,175,106,0.08), rgba(124,58,237,0.08))', borderLeft: '2px solid rgba(212,175,106,0.4)' }}
                  >
                    <p className="font-cormorant text-gold/80 italic text-base leading-relaxed">
                      {review.highlight}
                    </p>
                  </div>
                </div>
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
              <span>Старт: 1 июня 2026</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2"
                style={plan.highlight
                  ? { background: 'linear-gradient(to bottom, rgba(45,16,85,0.8), rgba(74,26,122,0.6))', border: '1px solid rgba(212,175,106,0.5)', boxShadow: '0 0 30px rgba(212,175,106,0.3), 0 0 60px rgba(212,175,106,0.1)' }
                  : { background: 'linear-gradient(135deg, rgba(45,16,85,0.6), rgba(26,10,46,0.8))', border: '1px solid rgba(212,175,106,0.2)', backdropFilter: 'blur(10px)' }
                }
              >
                {plan.highlight && (
                  <div className="text-center mb-4">
                    <span
                      className="text-xs font-montserrat tracking-widest uppercase px-4 py-1 rounded-full font-bold"
                      style={{ background: 'linear-gradient(135deg, #D4AF6A, #C9943A)', color: '#080614' }}
                    >
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

                <a
                  href={TG_REGISTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${plan.highlight ? 'btn-gold' : 'btn-outline-gold'} w-full py-4 rounded-xl text-sm uppercase tracking-widest font-montserrat text-center inline-flex items-center justify-center gap-2`}
                >
                  <Icon name="Send" size={14} />
                  Записаться
                </a>
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
              <div
                className="w-96 h-96 rounded-full opacity-10 animate-pulse-slow"
                style={{ background: 'radial-gradient(circle, rgba(212,175,106,0.8) 0%, transparent 70%)' }}
              />
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
                  Очень многие люди годами чувствуют, что могут жить иначе, но не понимают, что именно удерживает их внутри старого сценария.
                </p>
                <p className="font-cormorant text-xl text-white/80 italic mt-4 leading-relaxed">
                  ПОРТАЛ 3 — это пространство, где вы начинаете видеть эти процессы, освобождаться от старых связей и формировать совершенно другое внутреннее состояние.
                </p>
                <p className="font-montserrat text-gold/60 text-sm mt-4">
                  Не через давление. Не через бесконечное «исправление себя». А через глубокое понимание и внутренний переход.
                </p>
              </div>

              <a
                href={TG_REGISTER}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-14 py-5 rounded-full text-base uppercase tracking-widest font-montserrat animate-glow-pulse inline-flex items-center gap-3"
              >
                <Icon name="Send" size={18} />
                Хочу участвовать
              </a>

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
    </div>
  );
}