///////////////// 메뉴 데이터 /////////////////
const menuData = [
  {
    id: 1,
    name: "유자우동",
    top: ["season", "all"],
    bottom: ["noodle"],
    img: "product-img/product1-new.png"
  },
  {
    id: 2,
    name: "시오라멘",
    top: ["all"],
    bottom: ["noodle"],
    img: "product-img/product1.png"
  },
  {
    id: 3,
    name: "돈코츠라멘",
    top: ["all"],
    bottom: ["noodle"],
    img: "product-img/product2.png"
  },
  {
    id: 4,
    name: "미소라멘",
    top: ["all"],
    bottom: ["noodle"],
    img: "product-img/product3.png"
  },
  {
    id: 5,
    name: "붓카케우동",
    top: ["all"],
    bottom: ["noodle"],
    img: "product-img/product4.png"
  },
  {
    id: 6,
    name: "야끼우동",
    top: ["all"],
    bottom: ["noodle"],
    img: "product-img/product5.png"
  },
  {
    id: 7,
    name: "어묵우동",
    top: ["all"],
    bottom: ["noodle"],
    img: "product-img/product6.png"
  },
  {
    id: 8,
    name: "온소바",
    top: ["all"],
    bottom: ["noodle"],
    img: "product-img/product7.png"
  },
  {
    id: 9,
    name: "냉소바",
    top: ["all"],
    bottom: ["noodle"],
    img: "product-img/product8.png"
  },
  {
    id: 10,
    name: "마라새우덮밥",
    top: ["all","new"],
    bottom: ["rice"],
    img: "product-img/product9.png"
  },
  {
    id: 11,
    name: "연어이쿠라덮밥",
    top: ["all"],
    bottom: ["rice"],
    img: "product-img/product10.png"
  },
  {
    id: 12,
    name: "해산물덮밥",
    top: ["all"],
    bottom: ["rice"],
    img: "product-img/product11.png"
  },
  {
    id: 13,
    name: "장어덮밥",
    top: ["all"],
    bottom: ["rice"],
    img: "product-img/product12.png"
  },
  {
    id: 14,
    name: "카츠동",
    top: ["all"],
    bottom: ["rice"],
    img: "product-img/product13.png"
  },
  {
    id: 15,
    name: "규동",
    top: ["all"],
    bottom: ["rice"],
    img: "product-img/product14.png"
  },
  {
    id: 16,
    name: "돈카츠",
    top: ["all"],
    bottom: ["fried"],
    img: "product-img/product15.png"
  },
  {
    id: 17,
    name: "치킨카츠",
    top: ["all"],
    bottom: ["fried"],
    img: "product-img/product16.png"
  },
  {
    id: 18,
    name: "치즈카츠",
    top: ["all"],
    bottom: ["fried"],
    img: "product-img/product17.png"
  },
  {
    id: 19,
    name: "유자소스새우튀김",
    top: ["season","all"],
    bottom: ["side"],
    img: "product-img/product18.png"
  },
  {
    id: 20,
    name: "연어유자셀러드",
    top: ["season","all"],
    bottom: ["side"],
    img: "product-img/product19.png"
  },
  {
    id: 21,
    name: "교자",
    top: ["all"],
    bottom: ["side"],
    img: "product-img/product20.png"
  },
  {
    id: 22,
    name: "가라아게",
    top: ["all"],
    bottom: ["side"],
    img: "product-img/product21.png"
  },
  {
    id: 23,
    name: "에비텐푸라",
    top: ["all"],
    bottom: ["side"],
    img: "product-img/product22.png"
  },
  {
    id: 24,
    name: "고로케",
    top: ["all"],
    bottom: ["side"],
    img: "product-img/product23.png"
  },
  {
    id: 25,
    name: "오차즈케",
    top: ["all"],
    bottom: ["side"],
    img: "product-img/product24.png"
  },
  {
    id: 26,
    name: "콜라",
    top: ["all"],
    bottom: ["drink"],
    img: "product-img/product25.png"
  },
  {
    id: 27,
    name: "녹차",
    top: ["all"],
    bottom: ["drink"],
    img: "product-img/product26.png"
  },
  {
    id: 28,
    name: "사이다",
    top: ["all"],
    bottom: ["drink"],
    img: "product-img/product27.png"
  },
  {
    id: 29,
    name: "삿포로캔맥주",
    top: ["all"],
    bottom: ["drink"],
    img: "product-img/product28.png"
  },
  {
    id: 30,
    name: "테라",
    top: ["all"],
    bottom: ["drink"],
    img: "product-img/product29.png"
  },
  {
    id: 31,
    name: "니혼슈",
    top: ["all"],
    bottom: ["drink"],
    img: "product-img/product30.png"
  },
  {
    id: 32,
    name: "소주",
    top: ["all"],
    bottom: ["drink"],
    img: "product-img/product31.png"
  }
];

//console.log('PRODUCTDETAIL.js 연결됨')

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const topBtns = document.querySelectorAll("#topTabs button");

  const bottomBtns = document.querySelectorAll("#bottomTabs button");

  const menuList = document.getElementById("menuList");

  let currentTop = params.get("top") || "all";

  
  let currentBottom = params.get("bottom") || "";


  function updateActiveButtons() {
    topBtns.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.top === currentTop);
    });

    bottomBtns.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.bottom === currentBottom);
    });
  }


  function getFilteredMenus() {
    return menuData.filter(menu => {

      const topMatch = currentTop === "all" || menu.top.includes(currentTop);


      const bottomMatch = currentBottom === "" || menu.bottom.includes(currentBottom);

      return topMatch && bottomMatch;
    });
  }


  function makeDetailUrl(menuId) {
    const query = new URLSearchParams();
    query.set("id", menuId); 
    query.set("top", currentTop); 

    if (currentBottom) {
      query.set("bottom", currentBottom); 
    }

 
    return `productdetail.html?${query.toString()}#detailArea`;
  }


  function renderMenuList(filteredMenus) {
    if (!filteredMenus.length) {
      menuList.innerHTML = `<p class="empty-message">해당 메뉴가 없습니다.</p>`;
      return;
    }

    menuList.innerHTML = filteredMenus.map(menu => {
      const imageSrc = menu.img || menu.thumb || menu.detailImgs?.[0] || "";

      return `
        <div class="card" onclick="location.href='${makeDetailUrl(menu.id)}'">
          <img src="${imageSrc}" alt="${menu.name}">
          <p>${menu.name}</p>
        </div>
      `;
    }).join("");
  }

  function updateUrl() {
    const query = new URLSearchParams();


    query.set("top", currentTop || "all");


    if (currentBottom) {
      query.set("bottom", currentBottom);
    }

    const newUrl = `${window.location.pathname}?${query.toString()}#productArea`;

  
    window.history.replaceState({}, "", newUrl);
  }


  function renderPage() {
    const filteredMenus = getFilteredMenus(); 
    updateActiveButtons(); 
    renderMenuList(filteredMenus); 
    updateUrl(); 
  }


  topBtns.forEach(btn => {
    btn.addEventListener("click", () => {


      currentTop = btn.dataset.top;

      currentBottom = "";


      renderPage();
    });
  });


  bottomBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      const clickedBottom = btn.dataset.bottom;

      if (currentBottom === clickedBottom) {
      
        currentBottom = "";
      } else {
    
        currentBottom = clickedBottom;
      }
      renderPage();
    });
  });


  renderPage();
});