export const categoryList = [
  {
    id: 1,
    name: "top",
    image: "https://firebasestorage.googleapis.com/v0/b/douple-studio.appspot.com/o/banner%2Fcategory-top.png?alt=media&token=bbe46e94-9f99-45a4-994c-f324adb0d59a"
  },
  {
    id: 2,
    name: "accessories",
    image: "https://firebasestorage.googleapis.com/v0/b/douple-studio.appspot.com/o/banner%2Fcategory-accessories.png?alt=media&token=898757dc-d5a0-4e01-913d-37e16731e783"
  },
  {
    id: 3,
    name: "bottom",
    image: "https://firebasestorage.googleapis.com/v0/b/douple-studio.appspot.com/o/banner%2Fcategory-bottom.png?alt=media&token=9621ccbb-4098-44d4-ba83-00bb6e89aa1c"
  }
]

export const headerMenuItem = [
  {
    "id": 1,
    "url": "/",
    "title": "Home"
  },
  {
    "id": 2,
    "url": "/collection/top",
    "title": "Top"
  },
  {
    "id": 3,
    "url": "/collection/bottom",
    "title": "Bottom"
  },
  {
    "id": 4,
    "url": "/collection/accessories",
    "title": "Accessories"
  },
  {
    "id": 5,
    "url": "/collection/sale",
    "title": "Sale"
  },
  {
    "id": 6,
    "url": "/about-us",
    "title": "About us"
  },
]

export const footerItemList = [
  {
    "id": 1,
    "title": "Company Info",
    "child": [
      {
        "id": 1,
        "title": "About Us"
      },
      {
        "id": 2,
        "title": "Store Location"
      },
      {
        "id": 3,
        "title": "Blog"
      },
      {
        "id": 4,
        "title": "Career"
      },
    ]
  },
  {
    "id": 2,
    "title": "Help & Support",
    "child": [
      {
        "id": 1,
        "title": "Help Center"
      },
      {
        "id": 2,
        "title": "FAQ"
      },
      {
        "id": 3,
        "title": "Terms and Conditions"
      },
      {
        "id": 4,
        "title": "Size Chart"
      },
    ]
  }
]

export const compositionAndCare = `
  <h4>COMPOSITION</h4>
  <p>External: 100 % cotton - 0 % elastane</p>
  <h4>CARE</h4>
  <ul>
    <li>- Machine wash up to 30ºC/86ºF gentle cycle</li>
    <li>- Do not bleach</li>
    <li>- Iron up to 110ºC/230ºF</li>
    <li>- Do not dry clean</li>
    <li>- Do not tumble dry</li>
  </ul>`

export const socialMediaShare = `
  <div style="display: flex; gap: 8px;">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_109_276)">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.9489 0.484863C18.8335 0.51778 21.4394 1.22672 23.7667 2.61169C26.0662 3.96902 27.9791 5.89358 29.3224 8.20136C30.6989 10.5427 31.4036 13.1644 31.4364 16.0665C31.3547 20.0374 30.1022 23.4288 27.6791 26.241C25.256 29.0531 22.1526 30.7928 18.9399 31.4598V20.3268H21.9772L22.6641 15.9518H18.0649V13.0863C18.0394 12.4923 18.2272 11.9087 18.5945 11.4411C18.9623 10.9722 19.61 10.7258 20.5376 10.7018H23.3149V6.86941C23.2751 6.85659 22.8969 6.80589 22.1805 6.71731C21.3681 6.62224 20.551 6.57147 19.733 6.56521C17.8817 6.57375 16.4175 7.09598 15.3405 8.13192C14.2634 9.16756 13.7133 10.6659 13.6899 12.627V15.9518H10.1899V20.3268H13.6899V31.4598C9.74525 30.7928 6.64181 29.0531 4.21869 26.241C1.79556 23.4288 0.543188 20.0374 0.461426 16.0665C0.494138 13.1643 1.1988 10.5425 2.5754 8.20136C3.9187 5.89359 5.83158 3.96902 8.13113 2.61169C10.4584 1.22699 13.0643 0.518047 15.9489 0.484863Z" fill="#121212" />
      </g>
      <defs>
        <clipPath id="clip0_109_276">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_109_278)">
        <path d="M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM23.3054 12.4751C23.3125 12.6326 23.3159 12.7908 23.3159 12.9497C23.3159 17.8025 19.6221 23.3984 12.8669 23.3987H12.8672H12.8669C10.793 23.3987 8.86304 22.7908 7.23779 21.749C7.52515 21.783 7.81763 21.7998 8.11377 21.7998C9.83447 21.7998 11.418 21.2129 12.675 20.2278C11.0674 20.198 9.71191 19.1362 9.24414 17.677C9.46802 17.72 9.69824 17.7434 9.93433 17.7434C10.2695 17.7434 10.5942 17.6982 10.9028 17.614C9.22241 17.2776 7.95654 15.7925 7.95654 14.0142C7.95654 13.9976 7.95654 13.9827 7.95703 13.9673C8.4519 14.2424 9.01782 14.408 9.62036 14.4265C8.63428 13.7686 7.98608 12.6438 7.98608 11.3696C7.98608 10.6968 8.16797 10.0664 8.4834 9.52368C10.2944 11.7458 13.001 13.2073 16.0532 13.3608C15.9902 13.0918 15.9578 12.8115 15.9578 12.5234C15.9578 10.4961 17.6025 8.85132 19.6306 8.85132C20.687 8.85132 21.6411 9.29785 22.3113 10.0117C23.1479 9.84668 23.9336 9.54102 24.6433 9.12036C24.3687 9.97754 23.7866 10.6968 23.0283 11.1516C23.7712 11.0627 24.4792 10.8657 25.1372 10.5732C24.6458 11.3098 24.0225 11.9568 23.3054 12.4751Z" fill="#121212" />
      </g>
      <defs>
        <clipPath id="clip0_109_278">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_109_280)">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.9999 12.5011C18.1637 12.5011 19.9177 14.228 19.9177 16.3583C19.9177 18.4881 18.1637 20.215 15.9999 20.215C13.8362 20.215 12.0822 18.4881 12.0822 16.3583C12.0822 14.228 13.8362 12.5011 15.9999 12.5011ZM15.9999 10.9587C12.9707 10.9587 10.515 13.3761 10.515 16.3583C10.515 19.34 12.9707 21.7578 15.9999 21.7578C19.0292 21.7578 21.4848 19.34 21.4848 16.3583C21.4848 13.3761 19.0292 10.9587 15.9999 10.9587ZM21.6542 9.66077C21.3501 9.66553 21.0542 9.76006 20.8036 9.93248C20.5531 10.1049 20.3591 10.3475 20.246 10.6299C20.1329 10.9122 20.1058 11.2217 20.1681 11.5194C20.2303 11.8171 20.3792 12.0897 20.5959 12.3031C20.8126 12.5165 21.0876 12.661 21.3862 12.7186C21.6849 12.7762 21.9939 12.7442 22.2744 12.6268C22.5549 12.5093 22.7945 12.3115 22.963 12.0583C23.1314 11.8051 23.2213 11.5077 23.2213 11.2036C23.2181 10.7912 23.0511 10.397 22.7572 10.1076C22.4634 9.81832 22.0666 9.65758 21.6542 9.66077ZM12.1714 7.98169H19.8285C22.3196 7.98169 24.339 9.96967 24.339 12.4216V20.2945C24.339 22.7469 22.3196 24.7344 19.8285 24.7344H12.1714C9.68032 24.7344 7.66092 22.7469 7.66092 20.2945V12.4216C7.66092 9.96967 9.68029 7.98169 12.1714 7.98169ZM11.4492 6.44616C8.48825 6.44616 6.08793 8.80929 6.08793 11.7239V20.9922C6.08793 23.9073 8.48822 26.27 11.4492 26.27H20.5507C23.5116 26.27 25.9119 23.9073 25.9119 20.9922V11.7239C25.9119 8.80926 23.5116 6.44616 20.5507 6.44616H11.4492ZM15.9999 0.870605C24.5535 0.870605 31.4874 7.80436 31.4874 16.3583C31.4874 24.9118 24.5535 31.8455 15.9999 31.8455C7.44642 31.8455 0.512451 24.9118 0.512451 16.3583C0.512451 7.80438 7.44642 0.870605 15.9999 0.870605Z" fill="#121212" />
      </g>
      <defs>
        <clipPath id="clip0_109_280">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>`

export const productList = [
  {
    "id": 530091965,
    "name": "Short sleeve distortion T-shirt",
    "image": "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/561/250/8246561250_2_6_8.jpg?t=1658241381001&imwidth=563",
    "price": "499000",
    "category": "top",
    "colors": [
      {
        "id": 250,
        "name": "WHITE"
      }
    ],
    "image_list": [
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/561/250/8246561250_2_1_8.jpg?t=1659364230802",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/561/250/8246561250_2_2_8.jpg?t=1658931832792",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/561/250/8246561250_2_3_8.jpg?t=1658931832792",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/561/250/8246561250_2_4_8.jpg?t=1658931832792",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/561/250/8246561250_2_5_8.jpg?t=1658931832792",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/561/250/8246561250_2_6_8.jpg?t=1658931832792",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/561/250/8246561250_2_7_8.jpg?t=1658931832792",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/561/250/8246561250_2_8_8.jpg?t=1658931832792",
    ],
    "description": "Distortion short sleeve T-shirt with a black and white design graphic and a contrast white slogan print.",
    "url": "short-sleeve-distortion-tshirt-l08246561",
  },
  {
    "id": 530091966,
    "name": "Short sleeve tie-dye T-shirt",
    "image": "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/530/527/8246530527_2_6_8.jpg?t=1660651154957",
    "price": "599000",
    "category": "top",
    "colors": [
      {
        "id": 527,
        "name": "MEDIUM GREEN"
      }
    ],
    "image_list": [
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/530/527/8246530527_2_1_8.jpg?t=1660651154957",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/530/527/8246530527_2_2_8.jpg?t=1660651154957",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/530/527/8246530527_2_3_8.jpg?t=1660651154957",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/530/527/8246530527_2_4_8.jpg?t=1660651154957",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/530/527/8246530527_2_5_8.jpg?t=1660651154957",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/530/527/8246530527_2_6_8.jpg?t=1660651154957",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/530/527/8246530527_2_8_8.jpg?t=1660651154957",
    ],
    "description": "Short sleeve T-shirt with a round neck and a tie-dye print, slogan detail on the chest and made of 100% cotton.",
    "url": "short-sleeve-tiedye-tshirt-l08246530",
  },
  {
    "id": 529122111,
    "name": "Short sleeve T-shirt with bike print",
    "image": "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/514/800/8246514800_2_6_8.jpg?t=1659364196862",
    "price": "499000",
    "category": "top",
    "colors": [
      {
        "id": 800,
        "name": "BLACK"
      }
    ],
    "image_list": [
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/514/800/8246514800_2_1_8.jpg?t=1659364196862",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/514/800/8246514800_2_2_8.jpg?t=1659364196862",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/514/800/8246514800_2_3_8.jpg?t=1659364196862",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/514/800/8246514800_2_4_8.jpg?t=1659364196862",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/514/800/8246514800_2_6_8.jpg?t=1659364196862",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/514/800/8246514800_2_8_8.jpg?t=1659364196862",
    ],
    "description": "Short sleeve T-shirt featuring a round neck, a print of a street with bicycle and slogan detail.",
    "url": "short-sleeve-tshirt-with-bike-print-l08246514"
  },
  {
    "id": 539668848,
    "name": "Basic muscle fit T-shirt",
    "image": "https://static.pullandbear.net/2/photos//2022/I/0/2/p/9247/599/250/9247599250_2_6_8.jpg?t=1661426144309",
    "price": "299000",
    "category": "top",
    "colors": [
      {
        "id": 250,
        "name": "WHITE"
      },
      {
        "id": 505,
        "name": "KHAKI"
      },
      {
        "id": 300,
        "name": "YELLOW"
      },
      {
        "id": 400,
        "name": "BLUE"
      },
      {
        "id": 500,
        "name": "GREEN"
      },
      {
        "id": 622,
        "name": "ROSE PINK"
      },
      {
        "id": 802,
        "name": "GREY"
      },
      {
        "id": 712,
        "name": "ECRU"
      },
      {
        "id": 800,
        "name": "BLACK"
      }
    ],
    "image_list": [
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/9247/599/250/9247599250_2_1_8.jpg?t=1661426144309",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/9247/599/250/9247599250_2_2_8.jpg?t=1661426144309",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/9247/599/250/9247599250_2_3_8.jpg?t=1661426144309",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/9247/599/250/9247599250_2_4_8.jpg?t=1661426144309",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/9247/599/250/9247599250_2_6_8.jpg?t=1661426144309",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/9247/599/250/9247599250_2_8_8.jpg?t=1661426144309",
    ],
    "description": "MUSCLE FIT. Basic T-shirt with short sleeves and a round neckline. Available in several plain colours. Made of 100% cotton.",
    "url": "basic-muscle-fit-tshirt-l09247599",
  },
  {
    "id": 529819441,
    "name": "Short sleeve T-shirt with tie-dye print",
    "image": "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8245/507/500/8245507500_2_6_8.jpg?t=1653294526073",
    "price": "499000",
    "category": "top",
    "colors": [
      {
        "id": 300,
        "name": "YELLOW"
      },
      {
        "id": 400,
        "name": "BLUE"
      },
      {
        "id": 500,
        "name": "GREEN"
      },
      {
        "id": 622,
        "name": "ROSE PINK"
      },
      {
        "id": 802,
        "name": "GREY"
      },
      {
        "id": 712,
        "name": "ECRU"
      }
    ],
    "image_list": [
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8245/507/500/8245507500_2_1_8.jpg?t=1653294526073",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8245/507/500/8245507500_2_2_8.jpg?t=1653294526073",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8245/507/500/8245507500_2_3_8.jpg?t=1653294526073",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8245/507/500/8245507500_2_4_8.jpg?t=1653294526073",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8245/507/500/8245507500_2_6_8.jpg?t=1653294526073",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8245/507/500/8245507500_2_8_8.jpg?t=1653294526073",
    ],
    "description": "White short sleeve cotton T-shirt with contrast graphics and slogan, and a round neck.",
    "url": "short-sleeve-tshirt-with-tiedye-print-l08245507",
  },
  {
    "id": 539668849,
    "name": "Striped T-shirt with embroidery",
    "image": "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/529/251/8246529251_2_6_8.jpg?t=1660651157639",
    "price": "359000",
    "category": "top",
    "colors": [
      {
        "id": 250,
        "name": "WHITE"
      }
    ],
    "image_list": [
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/529/251/8246529251_2_1_8.jpg?t=1660651157639",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/529/251/8246529251_2_2_8.jpg?t=1660651157639",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/529/251/8246529251_2_3_8.jpg?t=1660651157639",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/529/251/8246529251_2_4_8.jpg?t=1660651157639",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/529/251/8246529251_2_6_8.jpg?t=1660651157639",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/529/251/8246529251_2_8_8.jpg?t=1660651157639",
    ],
    "description": "Long sleeve T-shirt with a round neckline, striped print and embroidered whale on the chest, and ribbed trims on the sleeves, neckline and hem.",
    "url": "striped-tshirt-with-embroidery-l08246529",
  },
  {
    "id": 539668847,
    "name": "Basic short sleeve cotton T-shirt",
    "image": "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8242/500/505/8242500505_2_6_8.jpg?t=1656668953602",
    "price": "299000",
    "category": "top",
    "colors": [
      {
        "id": 250,
        "name": "WHITE"
      },
      {
        "id": 300,
        "name": "YELLOW"
      },
      {
        "id": 400,
        "name": "BLUE"
      },
      {
        "id": 500,
        "name": "GREEN"
      },
      {
        "id": 622,
        "name": "ROSE PINK"
      },
      {
        "id": 802,
        "name": "GREY"
      },
      {
        "id": 712,
        "name": "ECRU"
      },
      {
        "id": 800,
        "name": "BLACK"
      }
    ],
    "image_list": [
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8242/500/505/8242500505_2_1_8.jpg?t=1656668953602",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8242/500/505/8242500505_2_2_8.jpg?t=1656668953602",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8242/500/505/8242500505_2_3_8.jpg?t=1656668953602",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8242/500/505/8242500505_2_4_8.jpg?t=1656668953602",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8242/500/505/8242500505_2_6_8.jpg?t=1656668953602",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8242/500/505/8242500505_2_7_8.jpg?t=1656668953602",
    ],
    "description": "Basic short sleeve T-shirt with a round neck. Made of 100% cotton.",
    "url": "basic-short-sleeve-cotton-tshirt-l08242500",
  },
  {
    "id": 529129095,
    "name": "Long fit basic T-shirt",
    "image": "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8240/540/800/8240540800_2_6_8.jpg?t=1657036932796",
    "price": "399000",
    "category": "top",
    "colors": [
      {
        "id": 250,
        "name": "WHITE"
      },
      {
        "id": 622,
        "name": "ROSE PINK"
      },
      {
        "id": 802,
        "name": "GREY"
      },
      {
        "id": 700,
        "name": "BROWN"
      },
      {
        "id": 710,
        "name": "BEIGE"
      },
      {
        "id": 712,
        "name": "ECRU"
      },
      {
        "id": 800,
        "name": "BLACK"
      }
    ],
    "image_list": [
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8240/540/800/8240540800_2_1_8.jpg?t=1657036932796",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8240/540/800/8240540800_2_2_8.jpg?t=1657036932796",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8240/540/800/8240540800_2_3_8.jpg?t=1657036932796",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8240/540/800/8240540800_2_4_8.jpg?t=1657036932796",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8240/540/800/8240540800_2_6_8.jpg?t=1657036932796",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8240/540/800/8240540800_2_8_8.jpg?t=1657036932796",
    ],
    "description": "Long fit basic T-shirt available in several colours, with short sleeves, a round neckline and in 100% cotton.",
    "url": "long-fit-basic-tshirt-l08240540",
  },
  {
    "id": 529122114,
    "name": "Short sleeve T-shirt with tree photo",
    "image": "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/512/250/8246512250_2_6_8.jpg?t=1659365691187",
    "price": "399000",
    "category": "top",
    "colors": [
      {
        "id": 250,
        "name": "WHITE"
      }
    ],
    "image_list": [
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/512/250/8246512250_2_1_8.jpg?t=1659365691187",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/512/250/8246512250_2_2_8.jpg?t=1659365691187",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/512/250/8246512250_2_3_8.jpg?t=1659365691187",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/512/250/8246512250_2_4_8.jpg?t=1659365691187",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/512/250/8246512250_2_6_8.jpg?t=1659365691187",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/512/250/8246512250_2_8_8.jpg?t=1659365691187",
    ],
    "description": "Short sleeve T-shirt with a round neckline, a print of a tree with a blue sky and a label detail at the hem. Made of 100% cotton.",
    "url": "short-sleeve-tshirt-with-tree-photo-l08246512",
  },
  {
    "id": 539668778,
    "name": "Short sleeve T-shirt with buttons",
    "image": "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8240/702/250/8240702250_2_6_8.jpg?t=1661257256798",
    "price": "399000",
    "category": "top",
    "colors": [
      {
        "id": 250,
        "name": "WHITE"
      },
      {
        "id": 800,
        "name": "BLACK"
      },
      {
        "id": 802,
        "name": "GREY"
      },
      {
        "id": 401,
        "name": "NAVY"
      }
    ],
    "image_list": [
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8240/702/250/8240702250_2_1_8.jpg?t=1661257256798",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8240/702/250/8240702250_2_2_8.jpg?t=1661257256798",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8240/702/250/8240702250_2_3_8.jpg?t=1661257256798",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8240/702/250/8240702250_2_4_8.jpg?t=1661257256798",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8240/702/250/8240702250_2_6_8.jpg?t=1661257256798",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8240/702/250/8240702250_2_8_8.jpg?t=1661257256798",
    ],
    "description": "Short sleeve T-shirt with a round neck and button fastening at the top. Made from 100% cotton.",
    "url": "short-sleeve-tshirt-with-buttons-l08240702",
  },
  {
    "id": 531899035,
    "name": "Short sleeve T-shirt with graphic",
    "image": "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/598/803/8246598803_2_6_8.jpg?t=1659364263530",
    "price": "599000",
    "category": "top",
    "colors": [
      {
        "id": 802,
        "name": "GREY"
      },
    ],
    "image_list": [
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/598/803/8246598803_2_1_8.jpg?t=1659364263530",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/598/803/8246598803_2_2_8.jpg?t=1659364263530",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/598/803/8246598803_2_3_8.jpg?t=1659364263530",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/598/803/8246598803_2_4_8.jpg?t=1659364263530",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/598/803/8246598803_2_6_8.jpg?t=1659364263530",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/8246/598/803/8246598803_2_8_8.jpg?t=1659364263530",
    ],
    "description": "Short sleeve T-shirt featuring a round neck with print and slogan detail on the chest.",
    "url": "short-sleeve-tshirt-with-graphic-l08246598",
  },
  {
    "id": 529819441,
    "name": "White T-shirt with graphic detail",
    "image": "https://static.pullandbear.net/2/photos//2022/I/0/2/p/4244/586/250/4244586250_2_6_8.jpg?t=1652082969053",
    "price": "599000",
    "category": "top",
    "colors": [
      {
        "id": 250,
        "name": "WHITE"
      }
    ],
    "image_list": [
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/4244/586/250/4244586250_2_1_8.jpg?t=1652087114183",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/4244/586/250/4244586250_2_2_8.jpg?t=1652087114183",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/4244/586/250/4244586250_2_3_8.jpg?t=1652087114183",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/4244/586/250/4244586250_2_4_8.jpg?t=1652087114183",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/4244/586/250/4244586250_2_6_8.jpg?t=1652087114183",
      "https://static.pullandbear.net/2/photos//2022/I/0/2/p/4244/586/250/4244586250_2_8_8.jpg?t=1652087114183",
    ],
    "description": "White short sleeve cotton T-shirt with contrast graphics and slogan, and a round neck.",
    "url": "white-tshirt-with-graphic-detail-l04244586",
  }
]