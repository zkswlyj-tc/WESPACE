document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const app = document.getElementById("app");

  const profileName = document.getElementById("profileName");
  const profileGender = document.getElementById("profileGender");
  const profileAge = document.getElementById("profileAge");
  const profileLocation = document.getElementById("profileLocation");
  const profileStatus = document.getElementById("profileStatus");
  const lastLogin = document.getElementById("lastLogin");
  const mainProfileImage = document.getElementById("mainProfileImage");
  const contactName = document.getElementById("contactName");
  const profileURL = document.getElementById("profileURL");
  const profileMood = document.getElementById("profileMood");
  const profileSong = document.getElementById("profileSong");
  const networkText = document.getElementById("networkText");
  const blurbTitle = document.getElementById("blurbTitle");
  const profileBlurb = document.getElementById("profileBlurb");
  const friendSpaceTitle = document.getElementById("friendSpaceTitle");
  const friendCount = document.getElementById("friendCount");
  const feedTitle = document.getElementById("feedTitle");
  const profileContent = document.getElementById("profileContent");

  const activityScore = document.getElementById("curiosityScore");
  const traceLabel = document.getElementById("traceLabel");

  const systemNotice = document.getElementById("systemNotice");
  const systemNoticeText = document.getElementById("systemNoticeText");
  const closeNotice = document.getElementById("closeNotice");

  const evidenceBoard = document.getElementById("evidenceBoard");
  const finalPost = document.getElementById("finalPost");
  const endScreen = document.getElementById("endScreen");
  const viewAllFriends = document.getElementById("viewAllFriends");
  const signOutLink = document.getElementById("signOutLink");

  const notices = {
    start: [
      "Ava has posted a new blog entry.",
      "You have 1 new bulletin.",
      "New comments have been added."
    ],

    profile: [
      "Profile loaded.",
      "Friend Space loaded.",
      "Profile updated."
    ],

    ava: [
      "Ava updated her mood.",
      "Ava has new comments.",
      "Ava posted a new blog."
    ],

    beth: [
      "Beth posted a new bulletin.",
      "Beth uploaded new photos.",
      "Beth added photos to an album."
    ],

    coco: [
      "CoCo reposted a bulletin.",
      "CoCo updated her blog.",
      "CoCo deleted a recent post."
    ],

    dash: [
      "Dash was online recently.",
      "Dash has no new blog entries.",
      "Dash's profile was updated."
    ],

    emily: [
      "Emily has not logged in for 3 days.",
      "Emily's comments are disabled.",
      "Emily's profile is unavailable."
    ],

    comments: [
      "Comments loaded.",
      "3 new comments found.",
      "New replies have been added."
    ],

    photo: [
      "Photo opened.",
      "Image loaded.",
      "Attachment opened."
    ],

    visible: [
      "Your activity may be visible to others.",
      "This action has been added to recent activity.",
      "This profile view has been saved."
    ],

    cache: [
      "Cached post loaded.",
      "Deleted post recovered.",
      "Archived post opened."
    ],

    private: [
      "Private entry opened.",
      "This post is marked private.",
      "This entry is not public."
    ],

    hidden: [
      "Hidden folder found: digi_autopsy.",
      "System folder opened: digi_autopsy.",
      "Recovered folder loaded."
    ],

    final: [
      "Older post found.",
      "Archived entry opened.",
      "Final blog entry loaded."
    ],

    signout: [
      "Are you sure you want to sign out?",
      "You are still viewing this profile chain.",
      "Session still active."
    ],

    idle: [
      "Session idle.",
      "Still there?",
      "Page still open."
    ],

    search: [
      "Search complete.",
      "Profile search loaded.",
      "Search results updated."
    ],

    noResults: [
      "No exact matches found.",
      "Search returned 0 results.",
      "No profile found."
    ]
  };

  function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  const characters = {
dash: {
  name: "Dash",
  gender: "Male",
  age: "22 years old",
  location: "Melbourne, VIC<br>Australia",
  status: "Offline",
  statusClass: "offline",
  lastLogin: "2 hours ago",
  image: "assets/dash-profile.jpg",
  url: "wespace.com/dash",
  mood: "whatever",
  song: "Lips of an Angel — Hinder",
  network: "Dash is in your extended network",
  blurbTitle: "Dash's Blurbs",
  blurb: `
    <p>not posting about this.</p>
    <p>ppl make everything deeper than it is.</p>
    <p>if someone wanted space they could've just said that properly.</p>
  `,
  feedTitle: "Dash's Latest Blog Entries"
},

    ava: {
      name: "Ava",
      gender: "Female",
      age: "21 years old",
      location: "Melbourne, VIC<br>Australia",
      status: "Online",
      statusClass: "online",
      lastLogin: "now",
      image: "assets/ava-profile.jpg",
      url: "wespace.com/ava",
      mood: "done being nice",
      song: "Misery Business — Paramore",
      network: "Ava is in your extended network",
      blurbTitle: "Ava's Blurbs",
      blurb: `
        <p>i'm done feeling crazy for noticing things.</p>
        <p>don't ask me in messages. if u know, u know.</p>
      `,
      feedTitle: "Ava's Blog"
    },

    beth: {
      name: "Beth",
      gender: "Female",
      age: "21 years old",
      location: "Melbourne, VIC<br>Australia",
      status: "Online",
      statusClass: "online",
      lastLogin: "now",
      image: "assets/beth-profile.jpg",
      url: "wespace.com/beth",
      mood: "i said what i said",
      song: "Paparazzi — Lady Gaga",
      network: "Beth is in your extended network",
      blurbTitle: "Beth's Blurbs",
      blurb: `
        <p>i back my friends. simple.</p>
        <p>and yes i have screenshots.</p>
      `,
      feedTitle: "Beth's Bulletins"
    },

    coco: {
      name: "CoCo",
      gender: "Female",
      age: "21 years old",
      location: "Melbourne, VIC<br>Australia",
      status: "Online",
      statusClass: "online",
      lastLogin: "12 minutes ago",
      image: "assets/coco-profile.jpg",
      url: "wespace.com/coco",
      mood: "not getting involved",
      song: "Teardrops on My Guitar — Taylor Swift",
      network: "CoCo is in your extended network",
      blurbTitle: "CoCo's Blurbs",
      blurb: `
        <p>not involved. just tired of ppl lying.</p>
        <p>don't twist my words.</p>
      `,
      feedTitle: "CoCo's Reposts"
    },

    emily: {
      name: "Emily",
      gender: "Female",
      age: "21 years old",
      location: "Melbourne, VIC<br>Australia",
      status: "Offline",
      statusClass: "offline",
      lastLogin: "3 days ago",
      image: "assets/emily-profile.jpg",
      url: "wespace.com/emily",
      mood: "tired",
      song: "Breathe Me — Sia",
      network: "Emily is no longer in your extended network",
      blurbTitle: "Emily's Blurbs",
      blurb: `
        <p>please stop tagging me.</p>
        <p>i don't want to explain this again.</p>
      `,
      feedTitle: "Emily's Blog"
    }
  };

  const friendLists = {
    dash: ["ava", "coco", "beth", "emily"],
    ava: ["dash", "beth", "coco", "emily"],
    beth: ["ava", "dash", "coco", "emily"],
    coco: ["ava", "dash", "beth", "emily"],
    emily: ["ava", "dash", "beth", "coco"]
  };

  const friendDisplayNames = {
    ava: "Ava",
    beth: "Beth",
    coco: "CoCo",
    dash: "Dash",
    emily: "Em"
  };

  const state = {
    currentCharacter: "dash",
    activity: 0,

    visits: {
      ava: 0,
      beth: 0,
      coco: 0,
      dash: 0,
      emily: 0
    },

    actions: {
      commentsOpened: false,
      leakRevealed: false,
      cacheOpened: false,
      privateEntryOpened: false,
      evidenceOpened: false,
      finalUnlocked: false,
      loggedOut: false
    },

    openedLeaks: new Set(),
    uniqueProfilesVisited: new Set(),

    roamPhase: true,
    roamStartTime: Date.now(),
    minimumRoamTime: 70000,

    noticeCooldown: false,
    firstRoamHint: false,
    secondRoamHint: false,
    thirdRoamHint: false,
    dashWarningGiven: false,
    emilyWarningGiven: false,
    decayStarted: false,
    midScrollTriggered: false,
    deepScrollTriggered: false,
    draggedCount: 0
  };

  function showNotice(message, danger = false, duration = 4200) {
    if (!systemNotice || !systemNoticeText) return;

    systemNoticeText.innerHTML = message;
    systemNotice.classList.remove("hidden");

    if (danger) {
      systemNotice.classList.add("danger");
      triggerRedFlash();
    } else {
      systemNotice.classList.remove("danger");
    }

    clearTimeout(showNotice.timeout);

    showNotice.timeout = setTimeout(() => {
      systemNotice.classList.add("hidden");
    }, duration);
  }

  function softNotice(message, danger = false, duration = 4200) {
    if (state.noticeCooldown) return;

    state.noticeCooldown = true;
    showNotice(message, danger, duration);

    setTimeout(() => {
      state.noticeCooldown = false;
    }, 4600);
  }

  if (closeNotice) {
    closeNotice.addEventListener("click", () => {
      systemNotice.classList.add("hidden");
    });
  }

  function triggerRedFlash() {
    if (!app) return;

    app.classList.remove("red-flash");
    void app.offsetWidth;
    app.classList.add("red-flash");
  }

  function triggerGlitch() {
    if (!app) return;

    app.classList.remove("glitching");
    void app.offsetWidth;
    app.classList.add("glitching");
  }

  function addActivity(points) {
    state.activity += points;

    if (activityScore) {
      activityScore.textContent = state.activity;
    }

    updateTraceLabel();
    checkProgress();
  }

  function updateTraceLabel() {
    if (!traceLabel) return;

    if (state.roamPhase) {
      if (state.uniqueProfilesVisited.size <= 1) {
        traceLabel.textContent = "guest";
      } else if (state.uniqueProfilesVisited.size <= 3) {
        traceLabel.textContent = "recently viewed";
      } else {
        traceLabel.textContent = "still browsing";
      }

      return;
    }

    if (state.activity < 12) {
      traceLabel.textContent = "recent activity";
    } else if (state.activity < 24) {
      traceLabel.textContent = "profile views saved";
    } else if (state.activity < 38) {
      traceLabel.textContent = "activity visible";
    } else if (state.activity < 52) {
      traceLabel.textContent = "included in chain";
    } else {
      traceLabel.textContent = "added to file";
    }
  }

  function hasMinimumRoamTimePassed() {
    return Date.now() - state.roamStartTime >= state.minimumRoamTime;
  }

  function hasVisitedEnoughProfiles() {
    return state.uniqueProfilesVisited.size >= 4;
  }

  function endRoamPhaseIfReady() {
    if (!state.roamPhase) return false;

    if (hasMinimumRoamTimePassed() && hasVisitedEnoughProfiles()) {
      state.roamPhase = false;
      showNotice("New activity found.");
      updateTraceLabel();
      return true;
    }

    return false;
  }

  function checkProgress() {
    endRoamPhaseIfReady();

    if (!state.roamPhase && state.activity >= 30 && !state.decayStarted) {
      state.decayStarted = true;
      body.classList.add("decay-mode");
      softNotice("Page updated.");
    }

    maybeOpenHiddenFolder();
    maybeUnlockFinalPost();
  }

  function maybeOpenHiddenFolder() {
    if (state.actions.evidenceOpened) return;
    if (state.roamPhase) return;

    const ready =
      state.actions.leakRevealed &&
      state.actions.cacheOpened &&
      state.actions.privateEntryOpened;

    if (ready) {
      openEvidenceBoard();
    }
  }

  function maybeUnlockFinalPost() {
    if (state.actions.finalUnlocked) return;
    if (state.roamPhase) return;

    const ready =
      state.actions.leakRevealed &&
      state.actions.cacheOpened &&
      state.actions.privateEntryOpened &&
      state.actions.evidenceOpened &&
      state.draggedCount >= 3 &&
      state.activity >= 42;

    if (ready) {
      unlockFinalPost();
    }
  }

  function renderFriendList(characterKey) {
    const friendGrid = document.querySelector(".friend-grid");
    if (!friendGrid) return;

    const friends = friendLists[characterKey] || [];
    friendGrid.innerHTML = "";

    friends.forEach((friendKey) => {
      const friend = characters[friendKey];
      if (!friend) return;

      const card = document.createElement("article");
      card.className = "friend-card";
      card.dataset.character = friendKey;

      card.innerHTML = `
        <button type="button" class="friend-button">
          <h4>${friendDisplayNames[friendKey]}</h4>
          <img src="${friend.image}" alt="${friend.name} profile image" />
        </button>
      `;

      friendGrid.appendChild(card);
    });
  }

  function renderProfileContent(characterKey) {
    const template = document.getElementById(`feed-${characterKey}`);

    if (!profileContent || !template) return;

    profileContent.innerHTML = "";
    profileContent.appendChild(template.content.cloneNode(true));

    restoreProfileState(characterKey);
  }

  function restoreProfileState(characterKey) {
    if (characterKey === "ava") {
      const commentWall = document.getElementById("commentWall");

      if (commentWall) {
        commentWall.classList.toggle("hidden", !state.actions.commentsOpened);
      }
    }

    if (characterKey === "beth") {
      state.openedLeaks.forEach((leakKey) => {
        const leakItem = document.querySelector(`.leak-item[data-leak="${leakKey}"]`);

        if (!leakItem) return;

        const button = leakItem.querySelector("button");

        leakItem.classList.remove("locked");
        leakItem.classList.add("revealed");

        if (button) {
          button.textContent = "opened";
          button.disabled = true;
        }
      });
    }

    if (characterKey === "coco") {
      startDeletedPostLoop();

      if (state.actions.cacheOpened) {
        const deletedPost = document.getElementById("deletedPost");

        if (deletedPost) {
          deletedPost.style.opacity = "1";
          deletedPost.innerHTML = `
            <p>wait did something happen to Emily?</p>
            <p><strong>cached before deletion</strong></p>
          `;
        }
      }
    }

    if (characterKey === "emily") {
      startEmilyStatusDecay();

      if (state.actions.privateEntryOpened) {
        const lockedEntry = document.querySelector(".locked-entry");
        const blurredText = lockedEntry?.querySelector(".blurred-text");
        const button = lockedEntry?.querySelector("button");

        if (blurredText) {
          blurredText.classList.remove("blurred-text");
          blurredText.innerHTML = `
  i keep replaying the night and wondering what i should have done differently.<br><br>
  i said no gently first because i didn't want to make things awkward.
  then i stopped replying.
  then i blocked him.<br><br>
  somehow that still turned into me needing to defend myself to everyone.
`;
        }

        if (button) {
          button.textContent = "opened";
          button.disabled = true;
        }
      }
    }
  }

  function switchCharacter(characterKey, fromUser = true) {
    const character = characters[characterKey];
    if (!character) return;

    state.currentCharacter = characterKey;
    state.visits[characterKey] += 1;
    state.uniqueProfilesVisited.add(characterKey);

    body.classList.remove(
      "character-ava",
      "character-beth",
      "character-coco",
      "character-dash",
      "character-emily"
    );

    body.classList.add(`character-${characterKey}`);

    profileName.textContent = character.name;
    profileGender.textContent = character.gender;
    profileAge.textContent = character.age;
    profileLocation.innerHTML = character.location;

    profileStatus.innerHTML = `<span class="status-dot"></span>${character.status}`;
    profileStatus.className = `status ${character.statusClass}`;

    lastLogin.textContent = character.lastLogin;
    mainProfileImage.src = character.image;
    mainProfileImage.alt = `${character.name} profile image`;

    contactName.textContent = character.name;
    profileURL.textContent = character.url;
    profileMood.textContent = character.mood;
    profileSong.textContent = character.song;
    networkText.textContent = character.network;
    blurbTitle.textContent = character.blurbTitle;
    profileBlurb.innerHTML = character.blurb;

    friendSpaceTitle.textContent = `${character.name}'s Friend Space`;

    const currentFriends = friendLists[characterKey] || [];
    friendCount.textContent = `${character.name} has ${currentFriends.length} friends.`;

    renderFriendList(characterKey);
    renderProfileContent(characterKey);

    feedTitle.textContent = character.feedTitle;

    updateStoryButtons(characterKey);

    if (fromUser) {
      addActivity(1);
      showProfileNotice(characterKey);
    }

    window.scrollTo({
      top: 160,
      behavior: "smooth"
    });
  }

  function updateStoryButtons(activeKey) {
    document.querySelectorAll(".story-flow button").forEach((button) => {
      button.classList.toggle("active", button.dataset.character === activeKey);
    });
  }

  function showProfileNotice(characterKey) {
    const map = {
      ava: notices.ava,
      beth: notices.beth,
      coco: notices.coco,
      dash: notices.dash,
      emily: notices.emily
    };

    softNotice(pick(map[characterKey] || notices.profile));

    if (!state.roamPhase) {
      if (characterKey === "dash" && state.visits.dash >= 4 && !state.dashWarningGiven) {
        state.dashWarningGiven = true;
        showNotice("Dash viewed your profile.", true);
        addActivity(2);
      }

      if (characterKey === "emily" && state.visits.emily >= 4 && !state.emilyWarningGiven) {
        state.emilyWarningGiven = true;
        showNotice("This profile view has been saved.", true);
        addActivity(3);
      }
    }
  }

  function openComments() {
    const commentWall = document.getElementById("commentWall");

    if (!commentWall) {
      switchCharacter("ava");
      return;
    }

    if (!state.actions.commentsOpened) {
      state.actions.commentsOpened = true;
      addActivity(2);
      showNotice(pick(notices.comments));
    }

    commentWall.classList.remove("hidden");
    commentWall.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function openBethLeaks(scroll = true) {
    if (state.currentCharacter !== "beth") {
      switchCharacter("beth");
    }

    const bethLeaks = document.getElementById("bethLeaks");

    if (!bethLeaks) return;

    if (scroll) {
      bethLeaks.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function revealLeak(button) {
    const leakItem = button.closest(".leak-item");
    if (!leakItem) return;

    const leakKey = leakItem.dataset.leak || `leak-${state.openedLeaks.size + 1}`;
    const isNewLeak = !state.openedLeaks.has(leakKey);

    state.openedLeaks.add(leakKey);

    leakItem.classList.remove("locked");
    leakItem.classList.add("revealed");

    button.textContent = "opened";
    button.disabled = true;

    if (isNewLeak) {
      if (!state.actions.leakRevealed) {
        state.actions.leakRevealed = true;
        addActivity(5);

        showNotice(pick(notices.photo));

        setTimeout(() => {
          showNotice(pick(notices.visible), true);
        }, 1800);

        setTimeout(() => {
          showNotice("File info loaded.");
        }, 3700);
      } else {
        addActivity(2);
        showNotice(pick(notices.photo));
      }
    }

    checkProgress();
  }

  function openCocoFeed(scroll = true) {
    if (state.currentCharacter !== "coco") {
      switchCharacter("coco");
    }

    const cocoFeed = document.getElementById("cocoFeed");

    if (!cocoFeed) return;

    startDeletedPostLoop();

    if (scroll) {
      cocoFeed.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function startDeletedPostLoop() {
    const deletedPost = document.getElementById("deletedPost");
    if (!deletedPost || startDeletedPostLoop.started || state.actions.cacheOpened) return;

    startDeletedPostLoop.started = true;

    let visible = true;

    clearInterval(startDeletedPostLoop.interval);

    startDeletedPostLoop.interval = setInterval(() => {
      const currentDeletedPost = document.getElementById("deletedPost");

      if (!currentDeletedPost || state.actions.cacheOpened) return;

      visible = !visible;
      currentDeletedPost.style.opacity = visible ? "1" : "0.12";
    }, 2200);
  }

  function viewCachedPost() {
    if (state.actions.cacheOpened) return;

    const deletedPost = document.getElementById("deletedPost");
    if (!deletedPost) return;

    state.actions.cacheOpened = true;
    addActivity(5);

    showNotice(pick(notices.cache), true);
    triggerGlitch();

    deletedPost.style.opacity = "1";
    deletedPost.innerHTML = `
      <p>wait did something happen to Emily?</p>
      <p><strong>cached before deletion</strong></p>
    `;

    checkProgress();
  }

  function openEmilyArchive(scroll = true) {
    if (state.currentCharacter !== "emily") {
      switchCharacter("emily");
    }

    const emilyArchive = document.getElementById("emilyArchive");

    if (!emilyArchive) return;

    startEmilyStatusDecay();

    if (scroll) {
      emilyArchive.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function startEmilyStatusDecay() {
    const emilyStatus = document.getElementById("emilyStatus");
    if (!emilyStatus || startEmilyStatusDecay.started) return;

    startEmilyStatusDecay.started = true;

    const statuses = ["3 days ago", "unknown", "no longer available", "X"];
    let index = 0;

    clearInterval(startEmilyStatusDecay.interval);

    startEmilyStatusDecay.interval = setInterval(() => {
      const currentStatus = document.getElementById("emilyStatus");
      if (!currentStatus) return;

      index += 1;

      if (index >= statuses.length) {
        clearInterval(startEmilyStatusDecay.interval);
        currentStatus.classList.add("text-corrupt");
        return;
      }

      currentStatus.textContent = statuses[index];
    }, 2800);
  }

  function viewPrivateEntry() {
    if (state.actions.privateEntryOpened) return;

    const lockedEntry = document.querySelector(".locked-entry");
    if (!lockedEntry) return;

    state.actions.privateEntryOpened = true;
    addActivity(7);

    showNotice(pick(notices.private), true);
    triggerGlitch();

    const blurredText = lockedEntry.querySelector(".blurred-text");
    const button = lockedEntry.querySelector("button");

    if (blurredText) {
      blurredText.classList.remove("blurred-text");
      blurredText.innerHTML = `
        i blocked him and he kept finding ways to talk to me.<br><br>
        then Ava posted like i stole something from her.
        then Beth put pictures online without asking me.
        then CoCo reposted it and said she wasn't involved.<br><br>
        i don't know how to make everyone stop looking.
      `;
    }

    if (button) {
      button.textContent = "opened";
      button.disabled = true;
    }

    setTimeout(() => {
      showNotice(pick(notices.visible), true);
    }, 2200);

    checkProgress();
  }

  function openEvidenceBoard() {
    if (!evidenceBoard) return;

    if (!state.actions.evidenceOpened) {
      state.actions.evidenceOpened = true;
      addActivity(4);

      showNotice(pick(notices.hidden), true, 6200);
      triggerGlitch();
    }

    evidenceBoard.classList.remove("hidden");
    evidenceBoard.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function unlockFinalPost() {
    if (!finalPost || state.actions.finalUnlocked) return;

    state.actions.finalUnlocked = true;
    finalPost.classList.remove("hidden");

    setTimeout(() => {
      showNotice(pick(notices.final), true);

      finalPost.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 1000);
  }

  function performLogout() {
    if (state.actions.loggedOut) return;

    state.actions.loggedOut = true;
    addActivity(1);
    triggerGlitch();

    if (traceLabel) {
      traceLabel.textContent = "added to file";
    }

    setTimeout(() => {
      endScreen.classList.remove("hidden");

      endScreen.innerHTML = `
        <h2>THE DIGI AUTOPSY IS COMPLETE.</h2>

        <div class="end-receipt">
          <p>Ava posted. Beth uploaded. CoCo reposted. Dash stayed quiet.</p>
          <p>You kept opening things.</p>
        </div>

        <button type="button" id="restartExperience">Return to WeSpace</button>
      `;

      const restartButton = document.getElementById("restartExperience");

      if (restartButton) {
        restartButton.addEventListener("click", () => window.location.reload());
      }
    }, 900);
  }

  function setupDragAndDrop() {
    const fragments = document.querySelectorAll(".fragment");
    const zones = document.querySelectorAll(".sort-box");

    fragments.forEach((fragment) => {
      fragment.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", fragment.textContent.trim());
        event.dataTransfer.effectAllowed = "move";
        fragment.classList.add("dragging");
      });

      fragment.addEventListener("dragend", () => {
        fragment.classList.remove("dragging");
      });
    });

    zones.forEach((zone) => {
      zone.addEventListener("dragover", (event) => {
        event.preventDefault();
        zone.classList.add("drag-over");
      });

      zone.addEventListener("dragleave", () => {
        zone.classList.remove("drag-over");
      });

      zone.addEventListener("drop", (event) => {
        event.preventDefault();
        zone.classList.remove("drag-over");

        const text = event.dataTransfer.getData("text/plain");

        const dragged = [...document.querySelectorAll(".fragment")].find(
          (item) => item.textContent.trim() === text
        );

        if (!dragged) return;

        zone.appendChild(dragged);

        state.draggedCount += 1;
        addActivity(1);

        showNotice("Folder updated.");

        maybeUnlockFinalPost();
      });
    });
  }

  function handleContactAction(action) {
    const currentName = characters[state.currentCharacter].name;

    addActivity(1);

    const messages = {
      message: [
        "Message could not be sent.",
        "User is not accepting messages.",
        "Message window unavailable."
      ],

      forward: [
        "Forward window opened.",
        "Forward request cancelled.",
        "Profile could not be forwarded."
      ],

      "add-friend": [
        "Friend request could not be sent.",
        "Friend request pending.",
        "User cannot be added at this time."
      ],

      favorite: [
        "Added to Favorites.",
        "Profile saved to Favorites.",
        "Favorite added."
      ],

      "instant-message": [
        "Instant Message unavailable.",
        "User is offline.",
        "Chat window could not be opened."
      ],

      block: [
        "User blocked.",
        "Block request saved.",
        "Profile visibility updated."
      ],

      group: [
        "Group invitation failed.",
        "User cannot be added to group.",
        "Group request could not be sent."
      ],

      rank: [
        "Rank submitted.",
        "Rating saved.",
        "User ranking updated."
      ]
    };

    showNotice(pick(messages[action] || ["Action saved."]));

    if (currentName === "Dash" && action === "message") {
      setTimeout(() => {
        showNotice("Message could not be sent.", true);
      }, 600);
    }

    if (currentName === "Emily" && action === "message") {
      setTimeout(() => {
        showNotice("User is not accepting messages.", true);
      }, 600);
    }
  }

  document.addEventListener("click", (event) => {
    const characterButton = event.target.closest("[data-character]");
    const actionButton = event.target.closest("[data-action]");

    if (characterButton && characterButton.dataset.character) {
      switchCharacter(characterButton.dataset.character);
      return;
    }

    if (!actionButton) return;

    const action = actionButton.dataset.action;

    switch (action) {
      case "open-comments":
        openComments();
        break;

      case "visit-ava":
        switchCharacter("ava");
        break;

      case "visit-beth":
        switchCharacter("beth");
        openBethLeaks(true);
        break;

      case "visit-coco":
        switchCharacter("coco");
        openCocoFeed(true);
        break;

      case "visit-emily":
        switchCharacter("emily");
        openEmilyArchive(true);
        break;

      case "reveal-leak":
        revealLeak(actionButton);
        break;

      case "view-cache":
        viewCachedPost();
        break;

      case "view-private-entry":
        viewPrivateEntry();
        break;

      case "share-final":
        showNotice("Share unavailable.", true);
        addActivity(3);
        break;

      case "comment-final":
        showNotice("Comments are closed.", true);
        addActivity(2);
        break;

      case "report-final":
        showNotice("Report submitted.", true);
        addActivity(2);
        break;

      case "log-out":
        performLogout();
        break;

      default:
        handleContactAction(action);
        break;
    }
  });

  const searchForm = document.querySelector(".search-form");

  if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const input = searchForm.querySelector("input");
      const query = input.value.trim().toLowerCase();

      if (!query) {
        showNotice("Please enter a search term.");
        return;
      }

      addActivity(2);
      showNotice(pick(notices.search));

      if (query.includes("ava")) {
        switchCharacter("ava");
      } else if (query.includes("beth")) {
        switchCharacter("beth");
        openBethLeaks(true);
      } else if (query.includes("coco") || query.includes("co")) {
        switchCharacter("coco");
        openCocoFeed(true);
      } else if (query.includes("dash")) {
        switchCharacter("dash");
      } else if (query.includes("emily") || query.includes("em")) {
        switchCharacter("emily");
        openEmilyArchive(true);
      } else {
        showNotice(pick(notices.noResults));
      }

      input.value = "";
    });
  }

  let emilyHoverTimer = null;
  let friendSpaceHoverTimer = null;

  document.addEventListener("mouseover", (event) => {
    const friendCard = event.target.closest(".friend-card");

    if (!friendCard) return;

    if (friendCard.dataset.character === "emily") {
      clearTimeout(emilyHoverTimer);

      emilyHoverTimer = setTimeout(() => {
        addActivity(1);
        showNotice("Profile preview loaded.", !state.roamPhase);
      }, 2500);
    }
  });

  document.addEventListener("mouseout", (event) => {
    const friendCard = event.target.closest(".friend-card");

    if (!friendCard) return;

    if (friendCard.dataset.character === "emily") {
      clearTimeout(emilyHoverTimer);
    }
  });

  const friendSpace = document.querySelector(".friend-space");

  if (friendSpace) {
    friendSpace.addEventListener("mouseenter", () => {
      clearTimeout(friendSpaceHoverTimer);

      friendSpaceHoverTimer = setTimeout(() => {
        showNotice("Friend Space loaded.");
        addActivity(1);
      }, 5500);
    });

    friendSpace.addEventListener("mouseleave", () => {
      clearTimeout(friendSpaceHoverTimer);
    });
  }

  if (viewAllFriends) {
    viewAllFriends.addEventListener("click", () => {
      addActivity(2);
      showNotice("All friends displayed.");

      if (!state.roamPhase) {
        triggerGlitch();
      }
    });
  }

  if (signOutLink) {
    signOutLink.addEventListener("click", (event) => {
      event.preventDefault();

      if (state.actions.finalUnlocked) {
        performLogout();
      } else {
        showNotice(pick(notices.signout));
        addActivity(1);
      }
    });
  }

  let idleSeconds = 0;

  setInterval(() => {
    idleSeconds += 1;

    if (idleSeconds === 38) {
      showNotice(pick(notices.idle));
      addActivity(1);
    }

    if (idleSeconds === 78) {
      showNotice("Session still active.", true);
      addActivity(2);
    }
  }, 1000);

  ["mousemove", "keydown", "click", "scroll"].forEach((eventName) => {
    window.addEventListener(eventName, () => {
      idleSeconds = 0;
    });
  });

  let deepestScroll = 0;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;

    if (progress > deepestScroll) {
      deepestScroll = progress;
    }

    if (deepestScroll > 0.45 && !state.midScrollTriggered) {
      state.midScrollTriggered = true;
      addActivity(1);
      showNotice("More posts loaded.");
    }

    if (deepestScroll > 0.78 && !state.deepScrollTriggered) {
      state.deepScrollTriggered = true;
      addActivity(2);

      if (!state.roamPhase) {
        showNotice("Older entries loaded.", true);
        triggerGlitch();
      }
    }
  });

  setInterval(() => {
    if (!state.roamPhase) return;

    const elapsed = Date.now() - state.roamStartTime;

    if (elapsed > 30000 && !state.firstRoamHint) {
      state.firstRoamHint = true;
      showNotice("New activity found.");
    }

    if (elapsed > 55000 && !state.secondRoamHint) {
      state.secondRoamHint = true;
      showNotice("Friend Space updated.");
    }

    if (elapsed > state.minimumRoamTime && !state.thirdRoamHint) {
      state.thirdRoamHint = true;

      if (hasVisitedEnoughProfiles()) {
        endRoamPhaseIfReady();
      } else {
        showNotice("More profiles available.");
      }
    }
  }, 3000);

  function init() {
    setupDragAndDrop();

    evidenceBoard.classList.add("hidden");
    finalPost.classList.add("hidden");
    endScreen.classList.add("hidden");

    switchCharacter("dash", false);

    setTimeout(() => {
      showNotice(pick(notices.start), false, 6000);
    }, 700);
  }

  init();
});