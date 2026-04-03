///////////////// 메뉴 데이터 /////////////////
const menuData = [
  {
    id: 1,
    name: "유자우동",
    detailImgs: [
      "product-img/detail1-new.png",
      "product-img/detail1-new2.png"
    ],
    desc: "상큼한 유자 향을 더한 따뜻한 우동 국물에 쫄깃한 면과 바삭한 새우튀김을 올린 산뜻한 우동 메뉴입니다.",
    price: "₩11,000",
    top: ["season", "all"],
    bottom: ["noodle"]
  },
  {
    id: 2,
    name:  "시오라멘",
    detailImgs: [
     "product-img/detail1.png",
     "product-img/detail1-2.png"
    ],
    desc: "맑고 담백한 간장 베이스 국물에 쫄깃한 면과 차슈, 반숙 계란을 더한 깔끔한 시오라멘입니다.",
    price: "₩10,000",
    top: ["all"],
    bottom: ["noodle"]
  },
   {
    id: 3,
    name: "돈코츠라멘",
    detailImgs: [
     "product-img/detail2.png",
     "product-img/detail2-2.png"
    ],
    desc: "진하게 우려낸 돼지뼈 육수의 깊고 고소한 맛에 쫄깃한 면과 차슈, 반숙 계란을 더한 진한 풍미의 돈코츠라멘입니다.",
    price: "₩10,000",
    top: ["all"],
    bottom: ["noodle"]
  },
  {
    id: 4,
    name: "미소라멘",
    detailImgs: [
      "product-img/detail3.png",
      "product-img/detail3-2.png"
    ],
    desc: "구수한 미소(된장) 베이스 국물에 쫄깃한 면과 차슈, 숙주, 채소를 더한 깊고 진한 풍미의 미소라멘입니다.",
    price: "₩10,000",
    top: ["all"],
    bottom: ["noodle"]
  },
   {
    id: 5,
    name: "붓카케우동",
    detailImgs: [
      "product-img/detail4.png",
      "product-img/detail4-2.png"
    ],
    desc: "차갑게 식힌 쫄깃한 면 위에 진한 간장 소스를 곁들이고 튀김과 고명을 올려 깔끔하게 즐기는 붓카케우동입니다.",
    price: "₩9,000",
    top: ["all"],
    bottom: ["noodle"]
  },
  {
    id: 6,
    name: "야끼우동",
    detailImgs: [
      "product-img/detail5.png",
      "product-img/detail5-2.png"
    ],
    desc: "쫄깃한 우동면을 채소와 함께 간장 베이스로 볶아 감칠맛을 살린 든든한 야끼우동입니다.",
    price: "₩9,000",
    top: ["all"],
    bottom: ["noodle"]
  },
  {
    id: 7,
    name: "어묵우동",
    detailImgs: [
      "product-img/detail6.png",
      "product-img/detail6-2.png"
    ],
    desc: "따뜻한 가쓰오 육수에 쫄깃한 면과 다양한 어묵을 듬뿍 넣어 담백하고 편안하게 즐기는 어묵우동입니다.",
    price: "₩7,500",
    top: ["season", "all"],
    bottom: ["noodle"]
  },
  {
    id: 8,
    name: "온소바",
    detailImgs: [
      "product-img/detail7.png",
      "product-img/detail7-2.png"
    ],
    desc: "따뜻한 가쓰오 베이스 국물에 메밀면을 담고 파와 유부를 더해 담백하고 깔끔하게 즐기는 온소바입니다.",
    price: "₩8,000",
    top: ["all"],
    bottom: ["noodle"]
  },
  {
    id: 9,
    name: "냉소바",
    detailImgs: [
      "product-img/detail8.png",
      "product-img/detail8-2.png"
    ],
    desc: "차갑게 식힌 메밀면을 시원한 간장 베이스 육수에 담아 무와 김, 파를 곁들여 깔끔하게 즐기는 냉소바입니다.",
    price: "₩8,000",
    top: ["all"],
    bottom: ["noodle"]
  },
  {
    id: 10,
    name: "마라새우덮밥",
    detailImgs: [
      "product-img/detail9.png",
      "product-img/detail9-2.png"
    ],
    desc: "얼얼한 마라 소스에 통통한 새우를 더해 매콤하고 중독적인 풍미를 살린 마라에비덮밥입니다.",
    price: "₩11,000",
    top: ["all","new"],
    bottom: ["rice"]
  },
  {
    id: 11,
    name: "연어이쿠라덮밥",
    detailImgs: [
      "product-img/detail10.png",
      "product-img/detail10-2.png"
    ],
    desc: "신선한 연어와 톡톡 터지는 이쿠라를 듬뿍 올려 부드럽고 고소한 풍미를 즐길 수 있는 연어이쿠라덮밥입니다.",
    price: "₩13,000",
    top: ["all"],
    bottom: ["rice"]
  },
  {
    id: 12,
    name: "해산물덮밥",
    detailImgs: [
      "product-img/detail11.png",
      "product-img/detail11-2.png"
    ],
    desc: "신선한 참치, 연어, 광어 등 다양한 생선회를 밥 위에 올려, 바다의 신선함을 그대로 즐길 수 있는 기본 해산물 덮밥입니다.",
    price: "₩12,000",
    top: ["all"],
    bottom: ["rice"]
  },
  {
    id: 13,
    name: "장어덮밥",
    detailImgs: [
      "product-img/detail12.png",
      "product-img/detail12-2.png"
    ],
    desc: "달콤짭짤한 간장 소스를 입힌 부드러운 장어를 듬뿍 올려 깊은 풍미를 즐길 수 있는 장어덮밥입니다.",
    price: "₩15,000",
    top: ["all"],
    bottom: ["rice"]
  },
  {
    id: 14,
    name: "카츠동",
    detailImgs: [
      "product-img/detail13.png",
      "product-img/detail13-2.png"
    ],
    desc: "바삭하게 튀긴 돈카츠를 달콤짭짤한 소스와 계란으로 부드럽게 감싸 밥 위에 올린 든든한 카츠동입니다.",
    price: "₩9,000",
    top: ["season", "all"],
    bottom: ["noodle"]
  },
   {
    id: 15,
    name: "규동",
    detailImgs: [
      "product-img/detail14.png",
      "product-img/detail14-2.png"
    ],
    desc: "얇게 썬 소고기를 달콤짭짤한 간장 소스에 졸여 양파와 함께 밥 위에 올린 부드럽고 든든한 규동입니다.",
    price: "₩9,000",
    top: ["all"],
    bottom: ["rice"]
  },
  {
    id: 16,
    name: "돈카츠",
    detailImgs: [
      "product-img/detail15.png",
      "product-img/detail15-2.png"
    ],
    desc: "바삭하게 튀긴 두툼한 돈카츠를 고소한 빵가루 옷으로 감싸 육즙 가득하게 즐기는 대표 일본식 튀김 요리입니다.",
    price: "₩9,500",
    top: ["all"],
    bottom: ["fried"]
  },
   {
    id: 17,
    name: "치킨카츠",
    detailImgs: [
      "product-img/detail16.png",
      "product-img/detail16-2.png"
    ],
    desc: "바삭한 튀김옷 속에 촉촉한 닭고기를 담아 담백하면서도 고소하게 즐길 수 있는 치킨카츠입니다.",
    price: "₩9,500",
    top: ["all"],
    bottom: ["fried"]
  },
  {
    id: 18,
    name: "치즈카츠",
    detailImgs: [
      "product-img/detail17.png",
      "product-img/detail17-2.png"
    ],
    desc: "바삭한 돈카츠 속에 고소하게 녹아내리는 치즈를 더해 풍부한 맛을 즐길 수 있는 치즈카츠입니다.",
    price: "₩10,500",
    top: ["all"],
    bottom: ["fried"]
  },
  {
    id: 19,
    name: "유자소스 새우튀김 (5pcs)",
    detailImgs: [
      "product-img/detail18.png",
      "product-img/detail18-2.png"
    ],
    desc: "바삭하게 튀긴 새우에 상큼한 유자 소스를 더해 산뜻하고 고소하게 즐길 수 있는 유자소스새우튀김입니다.",
    price: "₩7,500",
    top: ["season", "all"],
    bottom: ["side"]
  },
  {
    id: 20,
    name: "연어 유자 샐러드",
    detailImgs: [
      "product-img/detail19.png",
      "product-img/detail19-2.png"
    ],
    desc: "신선한 연어와 아삭한 채소에 상큼한 유자 드레싱을 더해 가볍고 산뜻하게 즐길 수 있는 연어 유자 샐러드입니다.",
    price: "₩12,000",
    top: ["season", "all"],
    bottom: ["side"]
  },
  {
    id: 21,
    name: "교자 (5pcs)",
    detailImgs: [
      "product-img/detail20.png",
      "product-img/detail20-2.png"
    ],
    desc: "겉은 바삭하고 속은 촉촉한 고기와 채소를 채워 담백하게 즐길 수 있는 교자입니다.",
    price: "₩5,000",
    top: ["all"],
    bottom: ["side"]
  },
  {
    id: 22,
    name: "가라아게",
    detailImgs: [
      "product-img/detail21.png",
      "product-img/detail21-2.png"
    ],
    desc: "겉은 바삭하고 속은 촉촉한 닭고기를 특제 간장 양념에 재워 깊은 풍미를 살린 일본식 치킨 가라아게입니다.",
    price: "₩8,000",
    top: ["all"],
    bottom: ["side"]
  },
  {
    id: 23,
    name: "에비텐푸라 (3pcs)",
    detailImgs: [
      "product-img/detail22.png",
      "product-img/detail22-2.png"
    ],
    desc: "바삭하게 튀긴 새우튀김을 가볍고 고소하게 즐길 수 있는 메뉴입니다.",
    price: "₩6,000",
    top: ["all"],
    bottom: ["side"]
  },
  {
    id: 24,
    name: "고로케 (6pcs)",
    detailImgs: [
      "product-img/detail23.png",
      "product-img/detail23-2.png"
    ],
    desc: "겉은 바삭하고 속은 부드러운 감자와 고소한 속재료를 채워 담백하게 즐길 수 있는 고로케입니다.",
    price: "₩6,000",
    top: ["all"],
    bottom: ["side"]
  },
  {
    id: 25,
    name: "오차즈케",
    detailImgs: [
      "product-img/detail24.png",
      "product-img/detail24-2.png"
    ],
    desc: "따뜻한 차를 부어 밥과 함께 연어나 김, 고명을 곁들여 담백하고 편안하게 즐기는 오차즈케입니다.",
    price: "₩7,000",
    top: ["all"],
    bottom: ["side"]
  },
  {
    id: 26,
    name: "콜라",
    detailImgs: [
      "product-img/product25.png",
    ],
    desc: "시원하게 즐기는 탄산음료로 깔끔한 청량감을 더해주는 콜라입니다.",
    price: "₩2,000",
    top: ["all"],
    bottom: ["drink"]
  },
  {
    id: 27,
    name: "녹차 (HOT/ICE)",
    detailImgs: [
      "product-img/product26.png",
    ],
    desc: "은은한 향과 깔끔한 맛으로 식사를 마무리하기 좋은 녹차입니다.",
    price: "₩12,000",
    top: ["all"],
    bottom: ["drink"],
  },
  {
    id: 28,
    name: "사이다",
    detailImgs: [
      "product-img/product27.png",
    ],
    desc: "시원한 탄산과 상큼한 단맛으로 깔끔하게 즐기기 좋은 사이다입니다.",
    price: "₩2,000",
    top: ["all"],
    bottom: ["drink"]
  },
  {
    id: 29,
    name: "삿포로캔맥주",
    detailImgs: [
      "product-img/product28.png",
    ],
    desc: "깔끔한 목넘김과 은은한 쌉쌀함이 특징인 일본 대표 맥주 삿포로 캔맥주입니다.",
    price: "₩4,000",
    top: ["all"],
    bottom: ["drink"]
  },
  {
    id: 30,
    name: "테라",
    detailImgs: [
      "product-img/product29.png"
    ],
    desc: "청량한 탄산감과 깔끔한 맛으로 가볍게 즐기기 좋은 테라 맥주입니다.",
    price: "₩4,000",
    top: ["all"],
    bottom: ["drink"]
  },
  {
    id: 31,
    name: "니혼슈",
    detailImgs: [
      "product-img/product30.png",
    ],
    desc: "부드러운 맛과 은은한 향을 즐길 수 있는 전통 일본 청주, 니혼슈입니다.",
    price: "₩10,000",
    top: ["all"],
    bottom: ["drink"]
  },
  {
    id: 32,
    name: "참이슬",
    detailImgs: [
      "product-img/product31.png"
    ],
    desc: "깔끔하고 부드러운 목넘김으로 즐길 수 있는 국내 대표 소주, 참이슬입니다.",
    price: "₩4,000",
    top: ["all"],
    bottom: ["drink"]
  },
];

//console.log('productdetail.js 연결됨')

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const menuId = Number(params.get("id"));

  const detailSlides = document.getElementById("detailSlides");

  const detailContent = document.getElementById("detailContent");

  const badgeArea = document.getElementById("badgeArea");

  const topBtns = document.querySelectorAll("#topTabs button");

  const bottomBtns = document.querySelectorAll("#bottomTabs button");

  let swiper = null;

  const currentMenu = menuData.find(menu => menu.id === menuId) || menuData[0];

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


  function renderBadges(menu) {
    let badgeHTML = "";

    
    if (menu.top.includes("season")) {
      badgeHTML += `<span class="badge">SEASON</span>`;
    }


    if (menu.top.includes("new")) {
      badgeHTML += `<span class="badge">NEW</span>`;
    }

    
    badgeArea.innerHTML = badgeHTML;
  }


  function renderMenu(menu) {
 
    if (!menu) {
      badgeArea.innerHTML = "";
      detailSlides.innerHTML = "";
      detailContent.innerHTML = `<p class="empty-message">메뉴를 찾을 수 없습니다.</p>`;
      return;
    }

 
    renderBadges(menu);

    
    detailSlides.innerHTML = menu.detailImgs.map(img => `
      <div class="swiper-slide">
        <img src="${img}" alt="${menu.name}">
      </div>
    `).join("");


    detailContent.innerHTML = `
      <h2 class="menu-name">${menu.name}</h2>
      <p class="menu-desc">${menu.desc}</p>
      <p class="menu-price">${menu.price}</p>
    `;


    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }

  
    swiper = new Swiper(".detailSwiper", {
      slidesPerView: 1,
      spaceBetween: 0,  
      loop: menu.detailImgs.length > 1, 
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }


  function goToProductPage(nextTop, nextBottom = "") {
    const query = new URLSearchParams();


    query.set("top", nextTop || "all");

  
    if (nextBottom) {
      query.set("bottom", nextBottom);
    }


    location.href = `product.html?${query.toString()}#productArea`;
  }


  topBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const nextTop = btn.dataset.top;

      goToProductPage(nextTop);
    });
  });


  bottomBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const nextBottom = btn.dataset.bottom;


      if (currentBottom === nextBottom) {
        goToProductPage(currentTop);
      } else {
  
        goToProductPage(currentTop, nextBottom);
      }
    });
  });


  updateActiveButtons();


  renderMenu(currentMenu);
});