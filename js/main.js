// header表示
const headerAppearance = () => {
    const header = document.querySelector(".js-header");

    // headerがページ内にない場合returnする
    if (!header) return;

    gsap.to( header, {
        delay: .6, //アニメーションの初期遅延（アニメーションが開始されるまでの指定）
        y: 0,  //y方向移動
        duration: .7, //アニメーションの時間の設定
        ease: "liner",
        autoAlpha: .95, //表示状態の指定
    });
}
headerAppearance();

// section表示
const sectionAppearance = () => {
    const section = document.querySelectorAll(".js-section");

    // sectionがページ内にない場合returnする
    if (!section) return;

    gsap.to(section, {
        delay: 1.2,
        y: 0,
        duration: .7,
        easeInOut: "power1",
        autoAlpha: .95,
    });
}
sectionAppearance();


// 目次の表示・非表示
const tocList = () => {
    const button = document.querySelector(".js-button");
    const list = document.querySelector(".js-toc-list");

    // buttonとmenuがページ内にない場合returnする
    if (!button || !list) return;

    // menuのopen状態
    let isOpen = false;

    // menuをopenする関数
    const openMenu = () => {
        gsap.to(list, {
            autoAlpha: 1,
            x: -48,
            easeOut: "power1",
            duration: .3,
        });
    };

    // menuをcloseする関数
    const closeMenu = () => {
        gsap.to(list, {
            autoAlpha: 0,
            x: 0,
            easeOut: "power1",
            duration: 0.5,
        });
    };

    // buttonをクリックで表示/非表示
    button.addEventListener("click", (event) => {
        event.stopPropagation();

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }

        isOpen = !isOpen;
    });

    // menu外をクリックで非表示
    document.addEventListener("click", () => {
        closeMenu();
        isOpen = false;
    });

    // Escapeキーを押すと非表示
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
            isOpen = false;
        }
    });
};

tocList();