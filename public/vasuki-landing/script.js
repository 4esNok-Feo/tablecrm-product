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

const chunk = (items, size) =>
  Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
    items.slice(index * size, index * size + size),
  );

const stagePages = chunk(stages, 3);
let stageSlide = 0;
let participantSlide = 0;

const stagePage = document.querySelector("[data-stage-page]");
const stageCounter = document.querySelector("[data-stage-counter]");
const stagePrev = document.querySelector("[data-stage-prev]");
const stageNext = document.querySelector("[data-stage-next]");
const membersList = document.querySelector("[data-members-list]");
const membersCounter = document.querySelector("[data-members-counter]");
const membersPrev = document.querySelector("[data-members-prev]");
const membersNext = document.querySelector("[data-members-next]");

function renderStages() {
  if (!stagePage || !stageCounter || !stagePrev || !stageNext) {
    return;
  }

  stagePage.innerHTML = stagePages[stageSlide]
    .map((stage) => {
      const number = stages.indexOf(stage) + 1;
      return `<article class="stage-card"><span class="stage-card__number">${number}</span><p>${stage}</p></article>`;
    })
    .join("");

  stageCounter.textContent = `${stageSlide + 1} / ${stagePages.length}`;
  stagePrev.disabled = stageSlide === 0;
  stageNext.disabled = stageSlide === stagePages.length - 1;
}

function renderMembers() {
  if (!membersList || !membersCounter) {
    return;
  }

  const visibleMembers = [0, 1, 2].map(
    (offset) => participants[(participantSlide + offset) % participants.length],
  );

  membersList.innerHTML = visibleMembers
    .map(
      (participant) => `
        <article class="member-card">
          <div class="avatar" aria-hidden="true"><span class="avatar__piece">♟</span></div>
          <h3>${participant}</h3>
          <p>Чемпион мира по шахматам</p>
          <a href="#support">Подробнее</a>
        </article>
      `,
    )
    .join("");

  membersCounter.textContent = `${participantSlide + 1} / ${participants.length}`;
}

stagePrev?.addEventListener("click", () => {
  stageSlide = Math.max(0, stageSlide - 1);
  renderStages();
});

stageNext?.addEventListener("click", () => {
  stageSlide = Math.min(stagePages.length - 1, stageSlide + 1);
  renderStages();
});

membersPrev?.addEventListener("click", () => {
  participantSlide =
    (participantSlide - 1 + participants.length) % participants.length;
  renderMembers();
});

membersNext?.addEventListener("click", () => {
  participantSlide = (participantSlide + 1) % participants.length;
  renderMembers();
});

window.setInterval(() => {
  participantSlide = (participantSlide + 1) % participants.length;
  renderMembers();
}, 4000);

renderStages();
renderMembers();
