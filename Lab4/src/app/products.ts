export interface Product {
  id: number;
  name: string;
  price: number;
  rating: string;
  description: string;
  url:string;
  img:string;
}

export const products = [
  {
    id: 1,
    name: 'Iphone 13',
    price: 389290,
    rating: '8/10',
    description: 'A large phone with 128Gb of memory. The color is black.',
    url:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg'
  },
  {
    id: 2,
    name: 'Iphone 14 Pro Max',
    price: 701558,
    rating: '8.5/10',
    description: 'A great phone with one of the best cameras. the memory is 256Gb and the color is purple',
    url:'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg'
  },
  {
    id: 3,
    name: 'Смарт-часы Apple Watch',
    price: 167320,
    rating: '7.5/10',
    description: 'Смарт-часы Apple Watch SE 2nd Gen 40 мм золотистый',
    url:'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-zolotistyi-106362759/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h46/62711073407006/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-1.jpg'
  },
  {
    id: 4,
    name: 'Смарт-часы Xiaomi Redmi Watch',
    price: 31700,
    rating: '7/10',
    description: 'Смарт-часы Xiaomi Redmi Watch 2 Lite GL черный',
    url:'https://kaspi.kz/shop/p/xiaomi-redmi-watch-2-lite-gl-chernyi-103246651/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h46/62711073407006/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-1.jpg'
  },
  {
    id: 5,
    name: 'Клавиатура для ноутбука Fujitsu ENG для ноутбука',
    price: 10010,
    rating: '5/10',
    description: 'Клавиатура для ноутбука Fujitsu ENG для ноутбука Fujitsu Lifebook LH531',
    url:'https://kaspi.kz/shop/p/fujitsu-eng-dlja-noutbuka-fujitsu-lifebook-lh531-chernyi-103662811/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/h24/48679777206302/fujitsu-eng-dla-noutbuka-fujitsu-lifebook-lh531-cernyj-103662811-1.jpg'
  },
  {
    id: 6,
    name: 'Ноутбук ASUS X515EA-BQ3144W',
    price: 239990,
    rating: '8/10',
    description: 'Ноутбук ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0 темно-серый.Диагональ экрана: 15.6 дюйм ',
    url:'https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hbd/65953424277534/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-1.jpg'
  },
  {
    id: 7,
    name: 'Ноутбук Apple MacBook Air 13',
    price: 478884,
    rating: '9/10',
    description: 'Ноутбук Apple MacBook Air 13 MGN63 серый, диагональ экрана: 13.3 дюйм',
    url:'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg'
  },
  {
    id: 8,
    name: 'Смартфон Samsung Galaxy A33',
    price: 129800,
    rating: '8/10',
    description: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ черный',
    url:'https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/h8c/49894748160030/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg'
  },
  {
    id: 9,
    name: 'Ноутбук Acer Nitro 5 AN515-57',
    price: 389980,
    rating: '8/10',
    description: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    url:'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg'
  },
  {
    id: 10,
    name: 'Телевизор LG 43LM5772PLA ',
    price: 184301,
    rating: '8.5/10',
    description: 'Телевизор LG 43LM5772PLA 109 см черный',
    url:'https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/he4/49320430370846/lg-43lm5772pla-108-sm-cernyj-101293496-1-Container.jpg'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/