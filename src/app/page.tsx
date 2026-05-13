"use client";

import { useEffect, useMemo, useState } from "react";

const stages = [
  "Строительство железнодорожной магистрали Москва-Васюки",
  "Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов",
  "Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет",
  "Строительство дворца для турнира",
  "Размещение гаражей для гостевого автотранспорта",
  "Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов",
  "Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анджелес и Мельбурн",
];

const participants = [
  "Хозе-Рауль Капабланка",
  "Эммануил Ласкер",
  "Александр Алехин",
  "Арон Нимцович",
  "Рихард Рети",
  "Остап Бендер",
];

const marqueeText =
  "Дело помощи утопающим — дело рук самих утопающих! • Шахматы двигают вперёд не только культуру, но и экономику! • Лёд тронулся, господа присяжные заседатели! •";

export default function Page() {
  const [stageSlide, setStageSlide] = useState(0);
  const [participantSlide, setParticipantSlide] = useState(0);

  const stagePages = useMemo(() => {
    const chunkSize = 3;
    return Array.from(
      { length: Math.ceil(stages.length / chunkSize) },
      (_, i) => stages.slice(i * chunkSize, i * chunkSize + chunkSize),
    );
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setParticipantSlide((current) => (current + 1) % participants.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  const visibleParticipants = useMemo(
    () =>
      [0, 1, 2].map(
        (offset) =>
          participants[(participantSlide + offset) % participants.length],
      ),
    [participantSlide],
  );

  return (
    <main className="landing">
      <section className="hero" id="top">
        <div className="page-shell hero__inner">
          <a className="brand" href="#top" aria-label="Клуб четырех коней">
            <span className="brand__horses">♞♞♞♞</span>
            <span>
              Клуб
              <br />
              четырех коней
            </span>
          </a>

          <div className="hero__content animate-rise">
            <h1>
              Превратите уездный город
              <span className="hero__title-line">в столицу земного шара</span>
            </h1>
            <p>
              Оплатите взнос на телеграммы для организации Международного
              васюкинского турнира по шахматам
            </p>
            <div className="hero__actions">
              <a className="button button--dark" href="#support">
                Поддержать шахматную мысль
              </a>
              <a className="button button--light" href="#stages">
                Подробнее о турнире
              </a>
            </div>
          </div>

          <div className="hero__art" aria-hidden="true">
            <div className="sun" />
            <div className="city city--back" />
            <div className="city city--front" />
            <span className="piece piece--king">♜</span>
            <span className="piece piece--queen">♛</span>
            <span className="piece piece--knight">♞</span>
            <span className="piece piece--pawn">♟</span>
          </div>
        </div>
        <Marquee />
      </section>

      <section className="support page-shell section" id="support">
        <div className="support__lead animate-rise">
          <h2>
            Чтобы поддержать Международный васюкинский турнир посетите лекцию на
            тему: <strong>«Плодотворная дебютная идея»</strong>
          </h2>
          <div className="lecture-photo" aria-hidden="true">
            <span>♟ ♙ ♛</span>
          </div>
        </div>

        <div className="event-grid">
          <div className="event-collage" aria-hidden="true">
            <div className="burst" />
            <div className="player-card">♚</div>
            <div className="banknote banknote--one" />
            <div className="banknote banknote--two" />
            <span className="hand hand--top">♟</span>
            <span className="hand hand--bottom">♞</span>
          </div>

          <div className="event-info animate-rise">
            <h2>
              И сеанс{" "}
              <strong>одновременной игры в шахматы на 160 досках</strong>{" "}
              гроссмейстера О. Бендера
            </h2>
            <dl className="facts">
              <div>
                <dt>Место проведения:</dt>
                <dd>Клуб «Картонажник»</dd>
              </div>
              <div>
                <dt>Дата и время мероприятия:</dt>
                <dd>22 июня 1927 г. в 18:00</dd>
              </div>
              <div>
                <dt>Стоимость входных билетов:</dt>
                <dd>20 коп.</dd>
              </div>
              <div>
                <dt>Плата за игру:</dt>
                <dd>50 коп.</dd>
              </div>
              <div>
                <dt>Взнос на телеграммы:</dt>
                <dd>
                  <s>100 руб.</s> 21 руб. 16 коп.
                </dd>
              </div>
            </dl>
            <p className="note">
              По всем вопросам обращаться в администрацию к К. Михельсону
            </p>
          </div>
        </div>
      </section>

      <section className="stages page-shell section" id="stages">
        <div className="section-title">
          <h2>Этапы преображения Васюков</h2>
          <p>Будущие источники обогащения васюкинцев</p>
        </div>

        <div className="stages__desktop">
          {stages.map((stage, index) => (
            <article
              className={`stage-card stage-card--${index + 1}`}
              key={stage}
            >
              <span className="stage-card__number">{index + 1}</span>
              <p>{stage}</p>
            </article>
          ))}
          <div className="plane" aria-hidden="true">
            ✈
          </div>
        </div>

        <div className="stages__mobile" aria-live="polite">
          <div className="stage-page">
            {stagePages[stageSlide].map((stage) => {
              const originalIndex = stages.indexOf(stage);
              return (
                <article className="stage-card" key={stage}>
                  <span className="stage-card__number">
                    {originalIndex + 1}
                  </span>
                  <p>{stage}</p>
                </article>
              );
            })}
          </div>
          <CarouselControls
            current={stageSlide}
            total={stagePages.length}
            onPrev={() => setStageSlide((current) => Math.max(0, current - 1))}
            onNext={() =>
              setStageSlide((current) =>
                Math.min(stagePages.length - 1, current + 1),
              )
            }
          />
        </div>
      </section>

      <section className="members page-shell section" id="members">
        <div className="members__head">
          <h2>Участники турнира</h2>
          <CarouselControls
            current={participantSlide}
            total={participants.length}
            onPrev={() =>
              setParticipantSlide(
                (current) =>
                  (current - 1 + participants.length) % participants.length,
              )
            }
            onNext={() =>
              setParticipantSlide(
                (current) => (current + 1) % participants.length,
              )
            }
            loop
          />
        </div>

        <div className="members__grid" aria-live="polite">
          {visibleParticipants.map((participant) => (
            <article className="member-card" key={participant}>
              <div className="avatar" aria-hidden="true">
                <span className="avatar__piece">♟</span>
              </div>
              <h3>{participant}</h3>
              <p>Чемпион мира по шахматам</p>
              <a href="#support">Подробнее</a>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <Marquee />
        <div className="page-shell footer__text">
          Все персонажи, события и цитаты являются вымышленными и не принадлежат
          создателям сайта. С подробностями можно познакомиться в главе XXXIV
          романа Ильи Ильфа и Евгения Петрова «Двенадцать стульев».
        </div>
      </footer>
    </main>
  );
}

function Marquee() {
  return (
    <section className="marquee" aria-label={marqueeText}>
      <div className="marquee__track">
        <span className="marquee__item">{marqueeText}</span>
        <span className="marquee__item">{marqueeText}</span>
      </div>
    </section>
  );
}

type CarouselControlsProps = {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  loop?: boolean;
};

function CarouselControls({
  current,
  total,
  onPrev,
  onNext,
  loop = false,
}: CarouselControlsProps) {
  const prevDisabled = !loop && current === 0;
  const nextDisabled = !loop && current === total - 1;

  return (
    <div className="carousel-controls">
      <button
        aria-label="Предыдущий слайд"
        disabled={prevDisabled}
        onClick={onPrev}
        type="button"
      >
        ‹
      </button>
      <span>
        {current + 1} / {total}
      </span>
      <button
        aria-label="Следующий слайд"
        disabled={nextDisabled}
        onClick={onNext}
        type="button"
      >
        ›
      </button>
    </div>
  );
}
