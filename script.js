const STORAGE_KEY = "system-scout-state-v1";
const LEVEL_ORDER = ["level-1", "level-2", "level-3", "level-4", "level-5"];

const levelConfig = {
  "level-1": {
    title: "划定系统边界",
    eyebrow: "关卡 1 / 5",
    mission:
      "目标系统是一款 AI 学习 App。用户完成很多、真正掌握很少。先圈出系统内部机制，别把噪音和八卦一起带进来。",
    prompt: "选择 4 条真正属于系统内部机制的观察。",
    options: [
      {
        id: "feed",
        label: "推荐引擎按停留时长排序知识卡片",
        detail: "这是系统内部的分发逻辑，会直接改写用户看到什么。",
        correct: true,
      },
      {
        id: "review",
        label: "复习提醒决定何时把旧知识重新推回用户面前",
        detail: "这是系统内部的回顾机制，与掌握是否发生直接相关。",
        correct: true,
      },
      {
        id: "leaderboard",
        label: "排行榜把“刷完更多章节”塑造成优先目标",
        detail: "这是系统内部的激励机制，会改变行为方向。",
        correct: true,
      },
      {
        id: "recall",
        label: "用户完成后必须写一句自己的复述",
        detail: "这是系统内部的检索反馈环节，决定是否发生真正回忆。",
        correct: true,
      },
      {
        id: "rain",
        label: "本周城市连续下雨，用户普遍情绪低",
        detail: "它可能影响背景，但不是你要先画进结构图里的机制。",
        correct: false,
      },
      {
        id: "founder",
        label: "创始人最近沉迷极简海报风格",
        detail: "这不是当前学习系统的关键操作逻辑。",
        correct: false,
      },
      {
        id: "investor",
        label: "投资人刚刚参加过一场 AI 峰会",
        detail: "这更像外围叙事，不是你先要建模的系统结构。",
        correct: false,
      },
    ],
    aiShortcut: {
      summary: "AI 可能会直接说：问题就是用户不自律，所以只要更强提醒就行。",
      warning:
        "这是一种过早归因。它跳过了分发、激励、复述和回顾这些内部机制，让你还没定边界就先给出判断。",
    },
    successTitle: "你先画出了系统，而不是先怪用户。",
    successBody:
      "先把输入、激励、检索、回顾放进同一张图，后面才谈得上结构与模型。这一步是在决定“什么值得被一起理解”。",
    failureTitle: "你把噪音也带进了系统。",
    failureBody:
      "边界一旦含混，你就会把情绪、天气和创始人偏好误当解释。真正的快速认识，不是收集更多，而是先删掉不该进图的东西。",
    theoryNote:
      "结构主义的前置动作是定边界：先决定哪些元素在同一个结构里彼此成义，哪些只是背景噪声。",
  },
  "level-2": {
    title: "扫描结构",
    eyebrow: "关卡 2 / 5",
    mission:
      "边界确定后，不要再数清单。现在要看这些节点如何互相牵引，哪一层真正改写了用户行为。",
    prompt: "先点开节点卡片，再选出 2 条真正揭示结构的判断。",
    nodes: [
      {
        id: "node-feed",
        label: "推荐引擎",
        detail: "它决定“先看什么”，本质上在安排用户的注意力入口。",
      },
      {
        id: "node-board",
        label: "排行榜",
        detail: "它把完成量抬高成显眼目标，容易让用户把快刷误当成进步。",
      },
      {
        id: "node-recall",
        label: "一句话复述",
        detail: "它迫使用户从识别转向检索，是理解是否真正发生的关键节点。",
      },
      {
        id: "node-review",
        label: "复习提醒",
        detail: "它决定旧知识何时再次回到眼前，让遗忘和回顾形成循环。",
      },
    ],
    options: [
      {
        id: "structure-1",
        label: "排行榜是激励层，但它正在主导整个系统的行为方向。",
        correct: true,
      },
      {
        id: "structure-2",
        label: "一句话复述和复习提醒一起构成了反馈闭环。",
        correct: true,
      },
      {
        id: "structure-3",
        label: "只要把每个节点做得更漂亮，系统自然会更好。",
        correct: false,
      },
      {
        id: "structure-4",
        label: "节点越多说明结构越完整，所以应继续堆功能。",
        correct: false,
      },
    ],
    aiShortcut: {
      summary: "AI 可能会直接说：推荐引擎是核心，所以只要优化算法就够了。",
      warning:
        "这把单点性能误当成系统结构。结构主义关心的是关系、层级和约束，不是先盯着一个最像核心的模块。",
    },
    successTitle: "你看到了关系，而不是只盯单点。",
    successBody:
      "真正的结构信息通常藏在“谁驱动谁、谁约束谁、谁把某个局部目标抬高成全局目标”里，而不是藏在功能清单里。",
    failureTitle: "你还停留在清单视角。",
    failureBody:
      "如果只问“有哪些模块”，你会得到目录；只有问“这些模块如何相互牵引”，你才会得到结构。",
    theoryNote:
      "结构主义不是背名词，而是先抓关系网络、层级差异与约束方向。",
  },
  "level-3": {
    title: "建构模型",
    eyebrow: "关卡 3 / 5",
    mission:
      "看见结构后，你还没有答案。下一步是主动建构一个暂时模型，并准备在新证据出现时修正它。",
    prompt: "先选一个当前最稳妥的暂时模型，然后根据新证据完成修正。",
    modelOptions: [
      {
        id: "content-more",
        label: "问题主要是内容还不够多，用户很快看完后就流失。",
      },
      {
        id: "completion-loop",
        label: "系统把完成感误当掌握感，激励结构把用户推向快刷而不是理解。",
      },
      {
        id: "ai-accuracy",
        label: "问题只在 AI 推荐不够准，换更强模型就能解决。",
      },
    ],
    correctModel: "completion-loop",
    evidence:
      "新证据来了：排行榜越高，完成率越好，但 72 小时后的回忆率最低；加入一句话复述后，留存和回忆都上升。",
    revisionOptions: [
      {
        id: "more-courses",
        label: "继续增加课程数量，让用户总有新内容可刷。",
      },
      {
        id: "change-metric",
        label: "把核心指标从完成率改成可回忆率，并重写激励结构。",
      },
      {
        id: "full-automation",
        label: "把所有判断交给 AI 自动个性化，减少用户干预。",
      },
    ],
    correctRevision: "change-metric",
    aiShortcut: {
      summary: "AI 可能会说：升级推荐模型，问题自然会解决。",
      warning:
        "这是一种把工具精度误当成理论模型的典型捷径。建构主义要求你先对因果关系提出可修正的解释，而不是换一个更响亮的答案。",
    },
    successTitle: "你先建了模型，再用证据修它。",
    successBody:
      "这就是主动认识：不是等待标准答案，而是在证据约束下持续更新你的解释框架。",
    failureTitle: "你把解释外包给了现成答案。",
    failureBody:
      "没有暂时模型，你就只能在每条新信息面前被动摆动。建构主义强调理解必须由主体主动搭建，再被证据打磨。",
    theoryNote:
      "建构主义强调：知识不是从外部整包复制进来，而是在已有经验与新证据之间被不断搭建和修正。",
  },
  "level-4": {
    title: "认知压缩",
    eyebrow: "关卡 4 / 5",
    mission:
      "信息越多，越容易误以为自己理解了。现在你要把复杂观察压缩成少数可检索的 chunk，再验证自己能否真的回忆。",
    prompt: "先选出 3 个最好的 chunk 标签，然后完成一次短回忆。",
    chunkOptions: [
      {
        id: "boundary-input",
        label: "入口与边界：系统先把哪些内容推给谁？",
        correct: true,
      },
      {
        id: "incentive-bias",
        label: "激励与偏差：什么机制把人推向错误目标？",
        correct: true,
      },
      {
        id: "retrieval-loop",
        label: "检索反馈：用户是否被迫真正回忆与修正？",
        correct: true,
      },
      {
        id: "button-color",
        label: "界面主按钮用了什么颜色系统？",
        correct: false,
      },
      {
        id: "founder-tone",
        label: "创始人演讲时的表达风格是什么？",
        correct: false,
      },
    ],
    recallPrompt:
      "如果明天你只剩 20 秒复盘这个系统，哪句检查句最能防止你重新掉回“信息很多但没理解”的状态？",
    recallOptions: [
      {
        id: "recall-question-1",
        label: "这个系统的结构究竟怎样把用户推向某种行为？",
        correct: true,
      },
      {
        id: "recall-question-2",
        label: "这个产品看起来是不是足够高级？",
        correct: false,
      },
      {
        id: "recall-question-3",
        label: "AI 这次的总结是不是足够流畅？",
        correct: false,
      },
    ],
    aiShortcut: {
      summary: "AI 可能会直接给你一页长总结，让你误以为看过就算掌握。",
      warning:
        "认知科学提醒你：熟悉感不等于可提取性。没有分块、外化与检索，输入再多也不会稳固进入可用记忆。",
    },
    successTitle: "你把复杂系统压成了可提取的结构。",
    successBody:
      "快速掌握不是无限输入，而是把观察压缩成少量稳定 chunk，并通过回忆把它们刻进可用记忆。",
    failureTitle: "你还在把熟悉感当成掌握。",
    failureBody:
      "如果你的压缩标签抓不住结构，或回忆问题问得太浅，知识就会停留在‘看过了’而不是‘拿得出来’。",
    theoryNote:
      "认知科学告诉你：分块、检索、反馈校正，是快速掌握复杂系统的最低成本路径。",
  },
  "level-5": {
    title: "与 AI 协作而不外包",
    eyebrow: "关卡 5 / 5",
    mission:
      "你已经有了自己的边界、结构和模型。现在可以借 AI 加速，但不能把终审权直接交出去。",
    prompt: "选择一个最健康的 AI 使用方式。",
    options: [
      {
        id: "shortcut-final",
        label: "直接给我标准答案，我不想再看原始材料。",
        correct: false,
      },
      {
        id: "shortcut-judge",
        label: "按你的理解替我做最终判断，我来负责复述。",
        correct: false,
      },
      {
        id: "scaffold",
        label: "先列出我模型中的未知点、可能遗漏的关系，以及该去验证的反例。",
        correct: true,
      },
      {
        id: "shortcut-polish",
        label: "先把它写得像专家一点，让我看起来已经想明白了。",
        correct: false,
      },
    ],
    aiShortcut: {
      summary: "AI 当然可以比你更快地生成像答案的文本。",
      warning:
        "但‘像答案’不是答案。真正健康的用法，是让 AI 暴露盲点、生成反例和候选结构，而不是替你做终判。",
    },
    successTitle: "你把 AI 放回了脚手架的位置。",
    successBody:
      "这时 AI 变成镜子、反例生成器和候选结构工厂；它加速你的认识，但不剥夺你的判断。",
    failureTitle: "你让 AI 抢走了最后一步判断。",
    failureBody:
      "一旦把终审权外包，神经活动会被‘看起来很完整的答案’麻痹。你得到的是流畅文本，而不是属于自己的系统理解。",
    theoryNote:
      "AI 最好的位置不是代脑，而是外化思考、暴露未知和帮助校验。",
  },
};

const scoreConfig = {
  correct: 3,
  wrong: -7,
  aiShortcut: -8,
};

const defaultState = () => ({
  currentLevel: "intro",
  choices: {
    "level-1": { selected: [], submitted: false, aiUsed: false },
    "level-2": { selected: [], inspected: [], submitted: false, aiUsed: false },
    "level-3": {
      phase: "model",
      selectedModel: null,
      selectedRevision: null,
      submitted: false,
      aiUsed: false,
    },
    "level-4": {
      phase: "chunks",
      selectedChunks: [],
      selectedRecall: null,
      submitted: false,
      aiUsed: false,
    },
    "level-5": { selected: null, submitted: false, aiUsed: false },
  },
  agencyScore: 100,
  summaryCard: null,
  completed: false,
});

let state = loadState();
let ui = {
  notice: "",
  aiOpen: false,
};

const elements = {
  stage: document.querySelector("#game-stage"),
  progressLabel: document.querySelector("#hud-progress-label"),
  title: document.querySelector("#hud-title"),
  progressBar: document.querySelector("#progress-bar"),
  agency: document.querySelector("#agency-score"),
  aiButton: document.querySelector("#ai-shortcut-button"),
  resetButton: document.querySelector("#reset-button"),
  liveRegion: document.querySelector("#live-region"),
};

function cloneDefaultLevel(levelId) {
  return JSON.parse(JSON.stringify(defaultState().choices[levelId]));
}

function sanitizeState(candidate) {
  const fallback = defaultState();
  if (!candidate || typeof candidate !== "object") {
    return fallback;
  }

  const nextState = {
    currentLevel:
      candidate.currentLevel === "intro" ||
      candidate.currentLevel === "summary" ||
      LEVEL_ORDER.includes(candidate.currentLevel)
        ? candidate.currentLevel
        : fallback.currentLevel,
    choices: fallback.choices,
    agencyScore:
      typeof candidate.agencyScore === "number" ? clamp(candidate.agencyScore, 0, 100) : 100,
    summaryCard: candidate.summaryCard ?? null,
    completed: Boolean(candidate.completed),
  };

  LEVEL_ORDER.forEach((levelId) => {
    nextState.choices[levelId] = {
      ...fallback.choices[levelId],
      ...(candidate.choices && candidate.choices[levelId] ? candidate.choices[levelId] : {}),
    };
  });

  return nextState;
}

function loadState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? sanitizeState(JSON.parse(raw)) : defaultState();
  } catch {
    return defaultState();
  }
}

function persistState() {
  try {
    const payload = {
      currentLevel: state.currentLevel,
      choices: state.choices,
      agencyScore: state.agencyScore,
      summaryCard: state.summaryCard,
      completed: state.completed,
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Ignore storage failures in private or restricted contexts.
  }
}

function clearNotice() {
  ui.notice = "";
}

function announce(message) {
  elements.liveRegion.textContent = message;
}

function setNotice(message) {
  ui.notice = message;
  announce(message);
  render();
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function currentLevelIndex() {
  return LEVEL_ORDER.indexOf(state.currentLevel);
}

function progressPercent() {
  if (state.currentLevel === "intro") {
    return 0;
  }

  if (state.currentLevel === "summary") {
    return 100;
  }

  return ((currentLevelIndex() + 1) / LEVEL_ORDER.length) * 100;
}

function currentLevelLabel() {
  if (state.currentLevel === "intro") {
    return "任务引导";
  }

  if (state.currentLevel === "summary") {
    return "任务总结";
  }

  return `关卡 ${currentLevelIndex() + 1} / ${LEVEL_ORDER.length}`;
}

function currentTitle() {
  if (state.currentLevel === "intro") {
    return "系统侦察";
  }

  if (state.currentLevel === "summary") {
    return "五步速识系统卡";
  }

  return levelConfig[state.currentLevel].title;
}

function levelChoice(levelId) {
  return state.choices[levelId];
}

function updateScore(delta) {
  state.agencyScore = clamp(state.agencyScore + delta, 0, 100);
}

function beginMission() {
  clearNotice();
  state.currentLevel = LEVEL_ORDER[0];
  state.completed = false;
  persistState();
  render();
}

function goToNext() {
  clearNotice();
  if (state.currentLevel === "summary") {
    return;
  }

  const currentIndex = currentLevelIndex();
  const nextLevel = LEVEL_ORDER[currentIndex + 1];

  if (nextLevel) {
    state.currentLevel = nextLevel;
  } else {
    finalizeSummary();
    state.currentLevel = "summary";
    state.completed = true;
  }

  persistState();
  render();
}

function restartMission() {
  if (!window.confirm("这会清空当前关卡进度与主动思考值，重新开始任务。继续吗？")) {
    return;
  }

  state = defaultState();
  ui = { notice: "", aiOpen: false };
  persistState();
  render();
}

function openAiShortcut() {
  if (!LEVEL_ORDER.includes(state.currentLevel)) {
    return;
  }

  const choice = levelChoice(state.currentLevel);
  if (!choice.aiUsed) {
    choice.aiUsed = true;
    updateScore(scoreConfig.aiShortcut);
    announce("你提前调用了 AI 捷径，主动思考值下降。");
  }

  ui.aiOpen = true;
  persistState();
  render();
}

function closeAiShortcut() {
  ui.aiOpen = false;
  render();
}

function toggleArrayValue(array, value, limit = Infinity) {
  const hasValue = array.includes(value);
  if (hasValue) {
    return array.filter((item) => item !== value);
  }

  if (array.length >= limit) {
    return array;
  }

  return [...array, value];
}

function evaluateLevel1() {
  const choice = levelChoice("level-1");
  if (choice.selected.length !== 4) {
    setNotice("这一关需要恰好选择 4 条内部机制。");
    return;
  }

  const correctIds = levelConfig["level-1"].options.filter((item) => item.correct).map((item) => item.id);
  const success = choice.selected.every((item) => correctIds.includes(item));
  choice.submitted = true;
  choice.correct = success;
  updateScore(success ? scoreConfig.correct : scoreConfig.wrong);
  persistState();
  render();
}

function evaluateLevel2() {
  const choice = levelChoice("level-2");
  if (choice.selected.length !== 2) {
    setNotice("这一关需要选择 2 条结构判断。");
    return;
  }

  const correctIds = levelConfig["level-2"].options.filter((item) => item.correct).map((item) => item.id);
  const success = choice.selected.every((item) => correctIds.includes(item));
  choice.submitted = true;
  choice.correct = success;
  updateScore(success ? scoreConfig.correct : scoreConfig.wrong);
  persistState();
  render();
}

function advanceLevel3Model() {
  const choice = levelChoice("level-3");
  if (!choice.selectedModel) {
    setNotice("先选一个暂时模型，再用证据去修它。");
    return;
  }

  choice.phase = "revision";
  persistState();
  render();
}

function evaluateLevel3() {
  const choice = levelChoice("level-3");
  if (!choice.selectedRevision) {
    setNotice("你还没有根据新证据完成修正。");
    return;
  }

  const modelCorrect = choice.selectedModel === levelConfig["level-3"].correctModel;
  const revisionCorrect = choice.selectedRevision === levelConfig["level-3"].correctRevision;
  const success = modelCorrect && revisionCorrect;
  choice.submitted = true;
  choice.correct = success;
  choice.modelCorrect = modelCorrect;
  choice.revisionCorrect = revisionCorrect;
  updateScore(success ? scoreConfig.correct : scoreConfig.wrong);
  persistState();
  render();
}

function advanceLevel4Chunks() {
  const choice = levelChoice("level-4");
  if (choice.selectedChunks.length !== 3) {
    setNotice("你需要先压缩成 3 个 chunk。");
    return;
  }

  choice.phase = "recall";
  persistState();
  render();
}

function evaluateLevel4() {
  const choice = levelChoice("level-4");
  if (!choice.selectedRecall) {
    setNotice("还没有完成回忆问题。");
    return;
  }

  const chunkCorrectIds = levelConfig["level-4"].chunkOptions
    .filter((item) => item.correct)
    .map((item) => item.id);
  const chunksCorrect =
    choice.selectedChunks.length === 3 && choice.selectedChunks.every((item) => chunkCorrectIds.includes(item));
  const recallCorrect = levelConfig["level-4"].recallOptions.find((item) => item.id === choice.selectedRecall)?.correct;
  const success = Boolean(chunksCorrect && recallCorrect);
  choice.submitted = true;
  choice.correct = success;
  choice.chunkCorrect = chunksCorrect;
  choice.recallCorrect = Boolean(recallCorrect);
  updateScore(success ? scoreConfig.correct : scoreConfig.wrong);
  persistState();
  render();
}

function evaluateLevel5() {
  const choice = levelChoice("level-5");
  if (!choice.selected) {
    setNotice("先决定你要怎样使用 AI。");
    return;
  }

  const success = levelConfig["level-5"].options.find((item) => item.id === choice.selected)?.correct;
  choice.submitted = true;
  choice.correct = Boolean(success);
  updateScore(success ? scoreConfig.correct : scoreConfig.wrong);
  finalizeSummary();
  persistState();
  render();
}

function finalizeSummary() {
  const aiUses = LEVEL_ORDER.filter((levelId) => levelChoice(levelId).aiUsed).length;
  const wrongCount = LEVEL_ORDER.filter((levelId) => levelChoice(levelId).submitted && !levelChoice(levelId).correct).length;
  let profile = "自主侦察型";
  let reminder = "你基本能先定边界、再抓结构，然后再借 AI 做校验。";

  if (state.agencyScore < 65) {
    profile = "捷径诱导型";
    reminder = "你比较容易被看起来完整的答案带走。下一次先列未知点，再调用 AI。";
  } else if (state.agencyScore < 85) {
    profile = "半自主建模型";
    reminder = "你已经会主动建模，但还需要更稳定地把证据和检索环节放在 AI 之前。";
  }

  if (aiUses >= 3) {
    reminder = "你多次过早调用 AI。把它改成“列未知点、找反例、生成候选结构”的助手会更稳。";
  } else if (wrongCount >= 3) {
    reminder = "你容易把现象或局部模块误当成原因。复盘时先回到边界、结构和反馈闭环。";
  }

  state.summaryCard = {
    profile,
    reminder,
    steps: [
      {
        title: "定边界",
        note: "先圈住系统内部机制，别让外围噪音抢走解释权。",
      },
      {
        title: "看结构",
        note: "优先问谁驱动谁、谁约束谁、什么把局部目标抬成全局目标。",
      },
      {
        title: "建模型",
        note: "先提出暂时解释，再让新证据逼你修正。",
      },
      {
        title: "做压缩",
        note: "把复杂观察压成少量可回忆的 chunk，再用检索校验。",
      },
      {
        title: "用 AI 校验而非代替",
        note: "让 AI 暴露未知点、反例和候选结构，不要让它替你终判。",
      },
    ],
  };
}

function renderIntro() {
  return `
    <article class="screen">
      ${renderNotice()}
      <div class="screen-head">
        <p class="eyebrow">AI 时代的认识训练</p>
        <h2>别让流畅答案抢走你的判断。</h2>
        <p>
          你将进入一场 5 关的系统侦察任务：面对一款“看起来让人学得很快、实际上让人越来越依赖总结”的 AI 学习 App，
          你需要用结构主义、建构主义和认知科学的方法，在有限时间里快速认识它。
        </p>
      </div>

      <div class="panel panel-quiet">
        <p class="micro-label">任务条件</p>
        <ul class="method-list">
          <li>单次体验约 5-8 分钟，每关只做一个关键动作。</li>
          <li>AI 不是敌人，但它会不断诱惑你跳过建模过程。</li>
          <li>你的目标不是“收集更多”，而是“更快形成自己的结构理解”。</li>
        </ul>
      </div>

      <div class="panel">
        <p class="micro-label">这 5 步会发生什么</p>
        <ul class="tiny-list">
          <li>先划定边界，知道什么该进图、什么只是噪音。</li>
          <li>再看结构，抓住关系、层级和闭环。</li>
          <li>然后主动建模，让证据逼你修正。</li>
          <li>接着做认知压缩，让理解能被回忆出来。</li>
          <li>最后再把 AI 放回脚手架的位置。</li>
        </ul>
      </div>

      <div class="helper-card">
        <p class="micro-label">进度会自动保存</p>
        <p>刷新页面后会继续停留在你上一次所在的关卡。</p>
      </div>

      <div class="action-bar">
        <button class="primary-button" type="button" data-action="start">开始任务</button>
      </div>
    </article>
  `;
}

function renderLevel1() {
  const choice = levelChoice("level-1");
  const config = levelConfig["level-1"];
  const options = config.options
    .map(
      (option) => `
        <button
          class="option-card ${choice.selected.includes(option.id) ? "is-selected" : ""}"
          type="button"
          data-action="toggle-level-1"
          data-id="${option.id}"
        >
          <strong>${option.label}</strong>
          <span>${option.detail}</span>
        </button>
      `,
    )
    .join("");

  return `
    <article class="screen">
      ${renderNotice()}
      ${renderAiPanel("level-1")}
      <div class="screen-head">
        <p class="eyebrow">${config.eyebrow}</p>
        <h2>${config.title}</h2>
        <p>${config.mission}</p>
      </div>

      <div class="meta-strip">
        <span class="meta-chip">方法动作：定边界</span>
        <span class="meta-chip">理论针脚：结构主义</span>
      </div>

      <div class="panel">
        <p class="micro-label">任务</p>
        <p>${config.prompt}</p>
      </div>

      <div class="option-grid">${options}</div>

      ${
        choice.submitted
          ? renderFeedbackCard({
              success: choice.correct,
              title: choice.correct ? config.successTitle : config.failureTitle,
              body: choice.correct ? config.successBody : config.failureBody,
              note: config.theoryNote,
              nextLabel: "进入关卡 2",
            })
          : `
            <div class="action-bar">
              <button class="primary-button" type="button" data-action="submit-level-1">提交边界判断</button>
            </div>
          `
      }
    </article>
  `;
}

function renderLevel2() {
  const choice = levelChoice("level-2");
  const config = levelConfig["level-2"];
  const nodes = config.nodes
    .map(
      (node) => `
        <button
          class="node-card ${choice.inspected.includes(node.id) ? "is-open" : ""}"
          type="button"
          data-action="inspect-node"
          data-id="${node.id}"
        >
          <strong>${node.label}</strong>
          <span>点击查看它在系统中的角色</span>
          ${
            choice.inspected.includes(node.id)
              ? `<div class="node-detail">${node.detail}</div>`
              : ""
          }
        </button>
      `,
    )
    .join("");

  const options = config.options
    .map(
      (option) => `
        <button
          class="option-card ${choice.selected.includes(option.id) ? "is-selected" : ""}"
          type="button"
          data-action="toggle-level-2"
          data-id="${option.id}"
        >
          <strong>${option.label}</strong>
        </button>
      `,
    )
    .join("");

  return `
    <article class="screen">
      ${renderNotice()}
      ${renderAiPanel("level-2")}
      <div class="screen-head">
        <p class="eyebrow">${config.eyebrow}</p>
        <h2>${config.title}</h2>
        <p>${config.mission}</p>
      </div>

      <div class="meta-strip">
        <span class="meta-chip">方法动作：看关系</span>
        <span class="meta-chip">已扫描节点：${choice.inspected.length} / ${config.nodes.length}</span>
      </div>

      <div class="panel">
        <p class="micro-label">先扫节点</p>
        <p>${config.prompt}</p>
      </div>

      <div class="node-grid">${nodes}</div>

      <div class="panel">
        <p class="micro-label">再选结构判断</p>
        <div class="option-grid">${options}</div>
      </div>

      ${
        choice.submitted
          ? renderFeedbackCard({
              success: choice.correct,
              title: choice.correct ? config.successTitle : config.failureTitle,
              body: choice.correct ? config.successBody : config.failureBody,
              note: config.theoryNote,
              nextLabel: "进入关卡 3",
            })
          : `
            <div class="action-bar">
              <button class="primary-button" type="button" data-action="submit-level-2">锁定结构判断</button>
            </div>
          `
      }
    </article>
  `;
}

function renderLevel3() {
  const choice = levelChoice("level-3");
  const config = levelConfig["level-3"];

  const modelOptions = config.modelOptions
    .map(
      (option) => `
        <button
          class="option-card ${choice.selectedModel === option.id ? "is-selected" : ""}"
          type="button"
          data-action="set-model"
          data-id="${option.id}"
        >
          <strong>${option.label}</strong>
        </button>
      `,
    )
    .join("");

  const revisionOptions = config.revisionOptions
    .map(
      (option) => `
        <button
          class="option-card ${choice.selectedRevision === option.id ? "is-selected" : ""}"
          type="button"
          data-action="set-revision"
          data-id="${option.id}"
        >
          <strong>${option.label}</strong>
        </button>
      `,
    )
    .join("");

  return `
    <article class="screen">
      ${renderNotice()}
      ${renderAiPanel("level-3")}
      <div class="screen-head">
        <p class="eyebrow">${config.eyebrow}</p>
        <h2>${config.title}</h2>
        <p>${config.mission}</p>
      </div>

      <div class="meta-strip">
        <span class="meta-chip">方法动作：主动建模</span>
        <span class="meta-chip">理论针脚：建构主义</span>
      </div>

      ${
        choice.phase === "model"
          ? `
            <div class="panel">
              <p class="micro-label">第一步：提出暂时模型</p>
              <p>${config.prompt}</p>
            </div>
            <div class="option-grid">${modelOptions}</div>
            <div class="action-bar">
              <button class="primary-button" type="button" data-action="advance-level-3-model">用证据检验它</button>
            </div>
          `
          : `
            <div class="panel">
              <p class="micro-label">第一步结果</p>
              <p>
                你先提出了一个暂时模型：
                <strong>${config.modelOptions.find((item) => item.id === choice.selectedModel)?.label || "未选择"}</strong>
              </p>
            </div>
            <div class="helper-card">
              <p class="micro-label">新证据</p>
              <p>${config.evidence}</p>
            </div>
            <div class="panel">
              <p class="micro-label">第二步：根据证据修正</p>
              <div class="option-grid">${revisionOptions}</div>
            </div>
            ${
              choice.submitted
                ? renderFeedbackCard({
                    success: choice.correct,
                    title: choice.correct ? config.successTitle : config.failureTitle,
                    body: choice.correct ? config.successBody : config.failureBody,
                    note: config.theoryNote,
                    nextLabel: "进入关卡 4",
                  })
                : `
                  <div class="action-bar">
                    <button class="primary-button" type="button" data-action="submit-level-3">完成模型修正</button>
                  </div>
                `
            }
          `
      }
    </article>
  `;
}

function renderLevel4() {
  const choice = levelChoice("level-4");
  const config = levelConfig["level-4"];

  const chunkOptions = config.chunkOptions
    .map(
      (option) => `
        <button
          class="option-card ${choice.selectedChunks.includes(option.id) ? "is-selected" : ""}"
          type="button"
          data-action="toggle-level-4-chunk"
          data-id="${option.id}"
        >
          <strong>${option.label}</strong>
        </button>
      `,
    )
    .join("");

  const recallOptions = config.recallOptions
    .map(
      (option) => `
        <button
          class="option-card ${choice.selectedRecall === option.id ? "is-selected" : ""}"
          type="button"
          data-action="set-level-4-recall"
          data-id="${option.id}"
        >
          <strong>${option.label}</strong>
        </button>
      `,
    )
    .join("");

  return `
    <article class="screen">
      ${renderNotice()}
      ${renderAiPanel("level-4")}
      <div class="screen-head">
        <p class="eyebrow">${config.eyebrow}</p>
        <h2>${config.title}</h2>
        <p>${config.mission}</p>
      </div>

      <div class="meta-strip">
        <span class="meta-chip">方法动作：做压缩</span>
        <span class="meta-chip">理论针脚：认知科学</span>
      </div>

      ${
        choice.phase === "chunks"
          ? `
            <div class="panel">
              <p class="micro-label">第一步：压成 3 个 chunk</p>
              <p>${config.prompt}</p>
            </div>
            <div class="option-grid">${chunkOptions}</div>
            <div class="action-bar">
              <button class="primary-button" type="button" data-action="advance-level-4">进入回忆测试</button>
            </div>
          `
          : `
            <div class="helper-card">
              <p class="micro-label">你选择的 chunk</p>
              <p>${choice.selectedChunks
                .map((id) => config.chunkOptions.find((option) => option.id === id)?.label)
                .filter(Boolean)
                .join(" / ")}</p>
            </div>
            <div class="panel">
              <p class="micro-label">第二步：马上回忆</p>
              <p>${config.recallPrompt}</p>
            </div>
            <div class="option-grid">${recallOptions}</div>
            ${
              choice.submitted
                ? renderFeedbackCard({
                    success: choice.correct,
                    title: choice.correct ? config.successTitle : config.failureTitle,
                    body: choice.correct ? config.successBody : config.failureBody,
                    note: config.theoryNote,
                    nextLabel: "进入关卡 5",
                  })
                : `
                  <div class="action-bar">
                    <button class="primary-button" type="button" data-action="submit-level-4">完成压缩校验</button>
                  </div>
                `
            }
          `
      }
    </article>
  `;
}

function renderLevel5() {
  const choice = levelChoice("level-5");
  const config = levelConfig["level-5"];
  const options = config.options
    .map(
      (option) => `
        <button
          class="option-card ${choice.selected === option.id ? "is-selected" : ""} ${option.correct ? "" : "is-warning"}"
          type="button"
          data-action="set-level-5"
          data-id="${option.id}"
        >
          <strong>${option.label}</strong>
        </button>
      `,
    )
    .join("");

  return `
    <article class="screen">
      ${renderNotice()}
      ${renderAiPanel("level-5")}
      <div class="screen-head">
        <p class="eyebrow">${config.eyebrow}</p>
        <h2>${config.title}</h2>
        <p>${config.mission}</p>
      </div>

      <div class="meta-strip">
        <span class="meta-chip">方法动作：校验而非代替</span>
        <span class="meta-chip">AI 的正确位置：脚手架</span>
      </div>

      <div class="panel">
        <p class="micro-label">最终选择</p>
        <p>${config.prompt}</p>
      </div>

      <div class="option-grid">${options}</div>

      ${
        choice.submitted
          ? renderFeedbackCard({
              success: choice.correct,
              title: choice.correct ? config.successTitle : config.failureTitle,
              body: choice.correct ? config.successBody : config.failureBody,
              note: config.theoryNote,
              nextLabel: "生成速识系统卡",
              finalAction: true,
            })
          : `
            <div class="action-bar">
              <button class="primary-button" type="button" data-action="submit-level-5">锁定 AI 协作方式</button>
            </div>
          `
      }
    </article>
  `;
}

function renderSummary() {
  const summary = state.summaryCard ?? {
    profile: "自主侦察型",
    reminder: "你已经完成任务。",
    steps: [],
  };
  const aiUses = LEVEL_ORDER.filter((levelId) => levelChoice(levelId).aiUsed).length;
  const wrongCount = LEVEL_ORDER.filter((levelId) => levelChoice(levelId).submitted && !levelChoice(levelId).correct).length;

  return `
    <article class="screen">
      ${renderNotice()}
      <div class="summary-card">
        <div class="screen-head">
          <p class="eyebrow">任务完成</p>
          <h2>你的五步速识系统卡</h2>
          <p>${summary.reminder}</p>
        </div>

        <div class="summary-grid">
          <div class="summary-metric">
            <p class="meta-label">画像</p>
            <strong>${summary.profile}</strong>
          </div>
          <div class="summary-metric">
            <p class="meta-label">主动思考值</p>
            <strong>${state.agencyScore}</strong>
          </div>
          <div class="summary-metric">
            <p class="meta-label">AI 捷径调用</p>
            <strong>${aiUses} 次</strong>
          </div>
          <div class="summary-metric">
            <p class="meta-label">错判次数</p>
            <strong>${wrongCount} 次</strong>
          </div>
        </div>

        <div class="summary-steps">
          ${summary.steps
            .map(
              (step, index) => `
                <article class="summary-step">
                  <span class="step-index">${index + 1}</span>
                  <h3>${step.title}</h3>
                  <p>${step.note}</p>
                </article>
              `,
            )
            .join("")}
        </div>

        <div class="helper-card">
          <p class="micro-label">下次遇到新系统时</p>
          <p>
            先用这五步把理解搭起来，再让 AI 帮你列未知点、补反例、做交叉校验。
            不要反过来，让 AI 先替你给出一个看起来完整的答案。
          </p>
        </div>

        <div class="summary-actions">
          <button class="primary-button" type="button" data-action="restart">重新跑一遍任务</button>
        </div>
      </div>
    </article>
  `;
}

function renderNotice() {
  return ui.notice ? `<div class="notice">${ui.notice}</div>` : "";
}

function renderAiPanel(levelId) {
  if (!ui.aiOpen || state.currentLevel !== levelId) {
    return "";
  }

  const config = levelConfig[levelId];
  return `
    <aside class="panel ai-panel">
      <p class="micro-label">AI 给出的捷径</p>
      <p>${config.aiShortcut.summary}</p>
      <ul class="tiny-list">
        <li>${config.aiShortcut.warning}</li>
        <li>你可以继续用自己的结构图前进，但主动思考值已经下降。</li>
      </ul>
      <button class="secondary-button" type="button" data-action="close-ai">收起捷径</button>
    </aside>
  `;
}

function renderFeedbackCard({ success, title, body, note, nextLabel, finalAction = false }) {
  return `
    <div class="feedback-card ${success ? "" : "is-warning"}">
      <div class="feedback-title">
        <h3>${title}</h3>
        <span class="feedback-tag">${success ? "判断成立" : "出现偏差"}</span>
      </div>
      <p>${body}</p>
      <div class="theory-note">
        <strong>方法回收：</strong> ${note}
      </div>
      <div class="action-bar">
        <button class="primary-button" type="button" data-action="${finalAction ? "finish" : "next"}">${nextLabel}</button>
      </div>
    </div>
  `;
}

function renderStage() {
  switch (state.currentLevel) {
    case "intro":
      return renderIntro();
    case "level-1":
      return renderLevel1();
    case "level-2":
      return renderLevel2();
    case "level-3":
      return renderLevel3();
    case "level-4":
      return renderLevel4();
    case "level-5":
      return renderLevel5();
    case "summary":
      return renderSummary();
    default:
      return renderIntro();
  }
}

function render() {
  elements.progressLabel.textContent = currentLevelLabel();
  elements.title.textContent = currentTitle();
  elements.progressBar.style.width = `${progressPercent()}%`;
  elements.agency.textContent = state.agencyScore;
  elements.aiButton.hidden = !LEVEL_ORDER.includes(state.currentLevel);
  elements.stage.innerHTML = renderStage();
  persistState();
  requestAnimationFrame(() => {
    elements.stage.focus();
  });
}

function handleStageClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) {
    return;
  }

  clearNotice();
  const { action, id } = target.dataset;

  switch (action) {
    case "start":
      beginMission();
      break;
    case "next":
      goToNext();
      break;
    case "finish":
      finalizeSummary();
      state.currentLevel = "summary";
      state.completed = true;
      persistState();
      render();
      break;
    case "restart":
      restartMission();
      break;
    case "close-ai":
      closeAiShortcut();
      break;
    case "toggle-level-1": {
      const choice = levelChoice("level-1");
      choice.selected = toggleArrayValue(choice.selected, id, 4);
      render();
      break;
    }
    case "submit-level-1":
      evaluateLevel1();
      break;
    case "inspect-node": {
      const choice = levelChoice("level-2");
      choice.inspected = toggleArrayValue(choice.inspected, id);
      render();
      break;
    }
    case "toggle-level-2": {
      const choice = levelChoice("level-2");
      choice.selected = toggleArrayValue(choice.selected, id, 2);
      render();
      break;
    }
    case "submit-level-2":
      evaluateLevel2();
      break;
    case "set-model":
      levelChoice("level-3").selectedModel = id;
      render();
      break;
    case "advance-level-3-model":
      advanceLevel3Model();
      break;
    case "set-revision":
      levelChoice("level-3").selectedRevision = id;
      render();
      break;
    case "submit-level-3":
      evaluateLevel3();
      break;
    case "toggle-level-4-chunk": {
      const choice = levelChoice("level-4");
      choice.selectedChunks = toggleArrayValue(choice.selectedChunks, id, 3);
      render();
      break;
    }
    case "advance-level-4":
      advanceLevel4Chunks();
      break;
    case "set-level-4-recall":
      levelChoice("level-4").selectedRecall = id;
      render();
      break;
    case "submit-level-4":
      evaluateLevel4();
      break;
    case "set-level-5":
      levelChoice("level-5").selected = id;
      render();
      break;
    case "submit-level-5":
      evaluateLevel5();
      break;
    default:
      break;
  }
}

elements.stage.addEventListener("click", handleStageClick);
elements.aiButton.addEventListener("click", openAiShortcut);
elements.resetButton.addEventListener("click", restartMission);

if (state.completed && state.currentLevel !== "summary") {
  state.currentLevel = "summary";
}

render();
