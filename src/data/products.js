// ================= CLUB =================

import realmadridjersey from "../assets/jerseys/club/realmadridjersey.png";
import realmadrid2526away from "../assets/jerseys/club/madrid2526away.png";
import realmadrid2627away from "../assets/jerseys/club/madrid2627away.png";

import barcajersey from "../assets/jerseys/club/barcajersey.png";
import barcahomejersey from "../assets/jerseys/club/barcahomejersey.png";
import barca2425jersey from "../assets/jerseys/club/barca2425jersey.png";
import barca2526jersey from "../assets/jerseys/club/barca2526jersey.png";

import manutdjersey from "../assets/jerseys/club/manutdjersey.png";
import manutdhomejersey from "../assets/jerseys/club/manutdhomejersey.png";

import mancityjersey from "../assets/jerseys/club/mancityjersey.png";
import mancity2526jersey from "../assets/jerseys/club/mancityj2526jersey.png";

import arsenaljersey from "../assets/jerseys/club/arsenaljersey.png";
import arsenahomejersey from "../assets/jerseys/club/arsenahomeljersey.png";

import chelseajersey from "../assets/jerseys/club/chelseajersey.png";

import liverpooljersey from "../assets/jerseys/club/liverpooljersey.png";

import interjersey from "../assets/jerseys/club/interjersey.png";
import intermiami from "../assets/jerseys/club/intermiami.png";

import juventus from "../assets/jerseys/club/juventus.png";
import milanjersey from "../assets/jerseys/club/milanjersey.png";

import atletico from "../assets/jerseys/club/atletico.png";

import bayern from "../assets/jerseys/club/bayern.png";
import bayernaway from "../assets/jerseys/club/bayern-away.png";

import alnassr from "../assets/jerseys/club/alnassr.png";


// ================= INTERNATIONAL =================

import argentinaHome from "../assets/jerseys/international/argentina-home.png";
import argentinaAway from "../assets/jerseys/international/argentina-away.png";

import brazilHome from "../assets/jerseys/international/brazil-home.png";
import brazilAway from "../assets/jerseys/international/brazil-away.png";

import portugalHome from "../assets/jerseys/international/portugal-home.png";
import portugalAway from "../assets/jerseys/international/portugal-away.png";

import germanyHome from "../assets/jerseys/international/germany-home.png";
import germanyAway from "../assets/jerseys/international/germany-away.png";

import franceHome from "../assets/jerseys/international/france-home.png";
import franceAway from "../assets/jerseys/international/france-away.png";

import spainHome from "../assets/jerseys/international/spain-home.png";
import spainAway from "../assets/jerseys/international/spain-away.png";

import japan from "../assets/jerseys/international/japan.png";
import norway from "../assets/jerseys/international/norway.png";
import colombia from "../assets/jerseys/international/colombia.png";


// ================= RETRO =================

import manutd0708 from "../assets/jerseys/retro/manutd07-08.png";
import arsenal0203 from "../assets/jerseys/retro/arsenal02-03.png";

import rm2122 from "../assets/jerseys/retro/realmadrid21-22.png";
import rm1718 from "../assets/jerseys/retro/realmadrid17-18.png";
import rm1415 from "../assets/jerseys/retro/realmadrid14-15.png";
import rm1112 from "../assets/jerseys/retro/realmadrid11-12.png";
import rm1617 from "../assets/jerseys/retro/realmadrid16-17.png";
import rm9798 from "../assets/jerseys/retro/realmadrid97-98.png";

import barca0809 from "../assets/jerseys/retro/barca08-09.png";
import barca1011 from "../assets/jerseys/retro/barca10-11.png";
import barca1415 from "../assets/jerseys/retro/barca1415.png";
import barca1415away from "../assets/jerseys/retro/barca1415away.png";
import barca1516away from "../assets/jerseys/retro/barca1516away.png";
import barca1718away from "../assets/jerseys/retro/barca17-18away.png";

import chelsea1011 from "../assets/jerseys/retro/chelsea10-11.png";
import chelsea1617 from "../assets/jerseys/retro/chelsea16-17.png";

const products = [

  {
    id: 1,
    name: "Real Madrid Home 26/27 Jersey",
    club: "Real Madrid",
    season: "24/25",
    league: "La Liga",
    category: "club",
    section: ["new"],
    image: realmadridjersey,
    price: 2599,
    oldPrice: 2799,
    rating: 4.9,
    reviews: 203,
  },

  {
    id: 2,
    name: "Real Madrid Away 25/26",
    club: "Real Madrid",
    season: "25/26",
    league: "La Liga",
    category: "club",
    section: [],
    image: realmadrid2526away,
    price: 2299,
    oldPrice: 2799,
    rating: 4.8,
    reviews: 148,
  },

  {
    id: 3,
    name: "Real Madrid Away 26/27",
    club: "Real Madrid",
    season: "26/27",
    league: "La Liga",
    category: "club",
    section: ["top"],
    image: realmadrid2627away,
    price: 2499,
    oldPrice: 2799,
    rating: 5.0,
    reviews: 96,
  },

  {
    id: 4,
    name: "Barcelona Away 26/27 Jersey",
    club: "Barcelona",
    season: "24/25",
    league: "La Liga",
    category: "club",
    section: ["new"],
    image: barcajersey,
    price: 2599,
    oldPrice: 2799,
    rating: 4.8,
    reviews: 181,
  },

  {
    id: 5,
    name: "Barcelona Home 26/27 Jersey",
    club: "Barcelona",
    season: "24/25",
    league: "La Liga",
    category: "club",
    section: [],
    image: barcahomejersey,
    price: 2599,
    oldPrice: 2799,
    rating: 4.9,
    reviews: 165,
  },

  {
    id: 6,
    name: "Barcelona Away 24/25 Jersey",
    club: "Barcelona",
    season: "24/25",
    league: "La Liga",
    category: "club",
    section: [],
    image: barca2425jersey,
    price: 2299,
    oldPrice: 2799,
    rating: 4.9,
    reviews: 143,
  },

  {
    id: 7,
    name: "Barcelona 3rd 25/26 Jersey",
    club: "Barcelona",
    season: "25/26",
    league: "La Liga",
    category: "club",
    section: [],
    image: barca2526jersey,
    price: 2499,
    oldPrice: 150,
    rating: 5.0,
    reviews: 77,
  },

  {
    id: 8,
    name: "Manchester United Away 26/27 Jersey",
    club: "Manchester United",
    season: "24/25",
    league: "Premier League",
    category: "club",
    section: ["new"],
    image: manutdjersey,
    price: 2499,
    oldPrice: 2899,
    rating: 4.7,
    reviews: 133,
  },

  {
    id: 9,
    name: "Manchester United Home 26/27 Jersey",
    club: "Manchester United",
    season: "24/25",
    league: "Premier League",
    category: "club",
    section: [],
    image: manutdhomejersey,
    price: 2599,
    oldPrice: 2799,
    rating: 4.8,
    reviews: 162,
  },

  {
    id: 10,
    name: "Manchester City Home 26/27 Jersey",
    club: "Manchester City",
    season: "24/25",
    league: "Premier League",
    category: "club",
    section: [],
    image: mancityjersey,
    price: 2299,
    oldPrice: 2799,
    rating: 4.9,
    reviews: 187,
  },

  {
    id: 11,
    name: "Manchester City Away 25/26 Jersey",
    club: "Manchester City",
    season: "25/26",
    league: "Premier League",
    category: "club",
    section: [],
    image: mancity2526jersey,
    price: 2499,
    oldPrice: 150,
    rating: 5.0,
    reviews: 94,
  },

  {
    id: 12,
    name: "Arsenal Away 26/27 Jersey",
    club: "Arsenal",
    season: "24/25",
    league: "Premier League",
    category: "club",
    section: [],
    image: arsenaljersey,
    price: 2599,
    oldPrice: 2799,
    rating: 4.7,
    reviews: 139,
  },

  {
    id: 13,
    name: "Arsenal Home 26/27 Jersey",
    club: "Arsenal",
    season: "24/25",
    league: "Premier League",
    category: "club",
    section: [],
    image: arsenahomejersey,
    price: 2599,
    oldPrice: 2799,
    rating: 4.8,
    reviews: 170,
  },

  {
    id: 14,
    name: "Chelsea Home 26/27 Jersey",
    club: "Chelsea",
    season: "24/25",
    league: "Premier League",
    category: "club",
    section: [],
    image: chelseajersey,
    price: 2499,
    oldPrice: 2899,
    rating: 4.7,
    reviews: 118,
  },

  {
    id: 15,
    name: "Liverpool Home 26/27 Jersey",
    club: "Liverpool",
    season: "24/25",
    league: "Premier League",
    category: "club",
    section: [],
    image: liverpooljersey,
    price: 2599,
    oldPrice: 2799,
    rating: 4.9,
    reviews: 198,
  },

  {
    id: 16,
    name: "Inter Milan Home 25/26 Jersey",
    club: "Inter Milan",
    season: "24/25",
    league: "Serie A",
    category: "club",
    section: [],
    image: interjersey,
    price: 2599,
    oldPrice: 2799,
    rating: 4.8,
    reviews: 142,
  },

  {
    id: 17,
    name: "Inter Miami Home 26/27 Jersey",
    club: "Inter Miami",
    season: "24/25",
    league: "MLS",
    category: "club",
    section: [],
    image: intermiami,
    price: 2599,
    oldPrice: 2799,
    rating: 4.9,
    reviews: 241,
  },

  {
    id: 18,
    name: "Juventus Away 26/27 Jersey",
    club: "Juventus",
    season: "24/25",
    league: "Serie A",
    category: "club",
    section: [],
    image: juventus,
    price: 2599,
    oldPrice: 2799,
    rating: 4.8,
    reviews: 167,
  },

  {
    id: 19,
    name: "AC Milan Home 26/27 Jersey",
    club: "AC Milan",
    season: "24/25",
    league: "Serie A",
    category: "club",
    section: [],
    image: milanjersey,
    price: 2599,
    oldPrice: 2799,
    rating: 4.8,
    reviews: 155,
  },

  {
    id: 20,
    name: "Atletico Madrid Away 26/27 Jersey",
    club: "Atletico Madrid",
    season: "24/25",
    league: "La Liga",
    category: "club",
    section: [],
    image: atletico,
    price: 2599,
    oldPrice: 2799,
    rating: 4.8,
    reviews: 132,
  },

  {
    id: 21,
    name: "Bayern Munich Home 26/27 Jersey",
    club: "Bayern Munich",
    season: "24/25",
    league: "Bundesliga",
    category: "club",
    section: ["new"],
    image: bayern,
    price: 2599,
    oldPrice: 2799,
    rating: 4.9,
    reviews: 190,
  },

  {
    id: 22,
    name: "Bayern Munich Away 26/27 Jersey",
    club: "Bayern Munich",
    season: "24/25",
    league: "Bundesliga",
    category: "club",
    section: [],
    image: bayernaway,
    price: 2299,
    oldPrice: 2799,
    rating: 4.9,
    reviews: 173,
  },

  {
    id: 23,
    name: "Al Nassr Home 26/27 Jersey",
    club: "Al Nassr",
    season: "24/25",
    league: "Saudi Pro League",
    category: "club",
    section: [],
    image: alnassr,
    price: 2499,
    oldPrice: 2899,
    rating: 4.8,
    reviews: 211,
  },

  // ================= INTERNATIONAL =================

  {
    id: 24,
    name: "Argentina World Cup 2026 Home Jersey",
    country: "Argentina",
    season: "2026",
    league: "International",
    category: "international",
    section: [],
    image: argentinaHome,
    price: 2599,
    oldPrice: 2799,
    rating: 5.0,
    reviews: 281,
  },

  {
    id: 25,
    name: "Argentina World Cup 2026 Away Jersey",
    country: "Argentina",
    season: "2026",
    league: "International",
    category: "international",
    section: [],
    image: argentinaAway,
    price: 2299,
    oldPrice: 2799,
    rating: 5.0,
    reviews: 243,
  },

  {
    id: 26,
    name: "Brazil World Cup 2026 Home Jersey",
    country: "Brazil",
    season: "2026",
    league: "International",
    category: "international",
    section: [],
    image: brazilHome,
    price: 2599,
    oldPrice: 2799,
    rating: 4.9,
    reviews: 212,
  },

  {
    id: 27,
    name: "Brazil World Cup 2026 Away Jersey",
    country: "Brazil",
    season: "2026",
    league: "International",
    category: "international",
    section: [],
    image: brazilAway,
    price: 2599,
    oldPrice: 2799,
    rating: 4.8,
    reviews: 188,
  },

  {
    id: 28,
    name: "Portugal World Cup 2026 Home Jersey",
    country: "Portugal",
    season: "2026",
    league: "International",
    category: "international",
    section: ["top"],
    image: portugalHome,
    price: 2599,
    oldPrice: 2799,
    rating: 4.9,
    reviews: 196,
  },

  {
    id: 29,
    name: "Portugal World Cup 2026 Away Jersey",
    country: "Portugal",
    season: "2026",
    league: "International",
    category: "international",
    section: [],
    image: portugalAway,
    price: 2599,
    oldPrice: 2799,
    rating: 4.8,
    reviews: 171,
  },

  {
    id: 30,
    name: "Germany World Cup 2026 Home Jersey",
    country: "Germany",
    season: "2026",
    league: "International",
    category: "international",
    section: [],
    image: germanyHome,
    price: 2599,
    oldPrice: 2799,
    rating: 4.8,
    reviews: 152,
  },

  {
    id: 31,
    name: "Germany World Cup 2026 Away Jersey",
    country: "Germany",
    season: "2026",
    league: "International",
    category: "international",
    section: [],
    image: germanyAway,
    price: 2599,
    oldPrice: 2799,
    rating: 4.8,
    reviews: 147,
  },

  {
    id: 32,
    name: "France World Cup 2026 Home Jersey",
    country: "France",
    season: "2026",
    league: "International",
    category: "international",
    section: [],
    image: franceHome,
    price: 2599,
    oldPrice: 2799,
    rating: 4.9,
    reviews: 186,
  },

  {
    id: 33,
    name: "France World Cup 2026 Away Jersey",
    country: "France",
    season: "2026",
    league: "International",
    category: "international",
    section: [],
    image: franceAway,
    price: 2599,
    oldPrice: 2799,
    rating: 4.9,
    reviews: 178,
  },

  {
    id: 34,
    name: "Spain World Cup 2026 Home Jersey",
    country: "Spain",
    season: "2026",
    league: "International",
    category: "international",
    section: [],
    image: spainHome,
    price: 2599,
    oldPrice: 2799,
    rating: 4.8,
    reviews: 159,
  },

  {
    id: 35,
    name: "Spain World Cup 2026 Away Jersey",
    country: "Spain",
    season: "2026",
    league: "International",
    category: "international",
    section: [],
    image: spainAway,
    price: 2299,
    oldPrice: 2799,
    rating: 4.9,
    reviews: 214,
  },

  {
    id: 36,
    name: "Japan World Cup 2026 Home Jersey",
    country: "Japan",
    season: "2026",
    league: "International",
    category: "international",
    section: [],
    image: japan,
    price: 2499,
    oldPrice: 2899,
    rating: 4.8,
    reviews: 129,
  },

  {
    id: 37,
    name: "Norway World Cup 2026 Home Jersey",
    country: "Norway",
    season: "2026",
    league: "International",
    category: "international",
    section: [],
    image: norway,
    price: 2499,
    oldPrice: 2899,
    rating: 4.8,
    reviews: 121,
  },

  {
    id: 38,
    name: "Colombia World Cup 2026 Home Jersey",
    country: "Colombia",
    season: "2026",
    league: "International",
    category: "international",
    section: [],
    image: colombia,
    price: 2499,
    oldPrice: 2899,
    rating: 4.7,
    reviews: 116,
  },
  // ================= RETRO =================

  {
    id: 39,
    name: "Manchester United 2007/08 Home Jersey",
    club: "Manchester United",
    season: "2007/08",
    league: "Premier League",
    category: "retro",
    section: [],
    image: manutd0708,
    price: 2899,
    oldPrice: 3299,
    rating: 5.0,
    reviews: 326,
  },

  {
    id: 40,
    name: "Arsenal 2002/03 Home Jersey",
    club: "Arsenal",
    season: "2002/03",
    league: "Premier League",
    category: "retro",
    section: [],
    image: arsenal0203,
    price: 2899,
    oldPrice: 3299,
    rating: 4.9,
    reviews: 248,
  },

  {
    id: 41,
    name: "Real Madrid 2021/22 Home Jersey",
    club: "Real Madrid",
    season: "2021/22",
    league: "La Liga",
    category: "retro",
    section: [],
    image: rm2122,
    price: 2899,
    oldPrice: 3299,
    rating: 4.9,
    reviews: 195,
  },

  {
    id: 42,
    name: "Real Madrid 2017/18 Away Jersey",
    club: "Real Madrid",
    season: "2017/18",
    league: "La Liga",
    category: "retro",
    section: [],
    image: rm1718,
    price: 2949,
    oldPrice: 3349,
    rating: 4.9,
    reviews: 181,
  },

  {
    id: 43,
    name: "Barcelona 2010/11 Home Jersey",
    club: "Barcelona",
    season: "2010/11",
    league: "La Liga",
    category: "retro",
    section: [],
    image: barca1011,
    price: 2999,
    oldPrice: 3399,
    rating: 5.0,
    reviews: 302,
  },

  {
    id: 44,
    name: "Barcelona 2014/15 Home Jersey",
    club: "Barcelona",
    season: "2014/15",
    league: "La Liga",
    category: "retro",
    section: ["top"],
    image: barca1415,
    price: 2999,
    oldPrice: 3499,
    rating: 5.0,
    reviews: 411,
  },

  {
    id: 45,
    name: "Chelsea 2010/11 Home Jersey",
    club: "Chelsea",
    season: "2010/11",
    league: "Premier League",
    category: "retro",
    section: [],
    image: chelsea1011,
    price: 2899,
    oldPrice: 3299,
    rating: 4.8,
    reviews: 172,
  },

  {
    id: 46,
    name: "Barcelona 2008/09 Home Jersey",
    club: "Barcelona",
    season: "2008/09",
    league: "La Liga",
    category: "retro",
    section: [],
    image: barca0809,
    price: 2999,
    oldPrice: 3399,
    rating: 5.0,
    reviews: 357,
  },

  {
    id: 47,
    name: "Real Madrid 2014/15 Home Jersey",
    club: "Real Madrid",
    season: "2014/15",
    league: "La Liga",
    category: "retro",
    section: [],
    image: rm1415,
    price: 2949,
    oldPrice: 3349,
    rating: 4.9,
    reviews: 224,
  },

  {
    id: 48,
    name: "Real Madrid 2011/12 Home Jersey",
    club: "Real Madrid",
    season: "2011/12",
    league: "La Liga",
    category: "retro",
    section: [],
    image: rm1112,
    price: 2949,
    oldPrice: 3349,
    rating: 4.9,
    reviews: 207,
  },

  {
    id: 49,
    name: "Barcelona 2015/16 Away Jersey",
    club: "Barcelona",
    season: "2015/16",
    league: "La Liga",
    category: "retro",
    section: [],
    image: barca1516away,
    price: 2999,
    oldPrice: 3399,
    rating: 5.0,
    reviews: 289,
  },

  {
    id: 50,
    name: "Chelsea 2016/17 Home Jersey",
    club: "Chelsea",
    season: "2016/17",
    league: "Premier League",
    category: "retro",
    section: [],
    image: chelsea1617,
    price: 2949,
    oldPrice: 3349,
    rating: 4.8,
    reviews: 191,
  },

  {
    id: 51,
    name: "Real Madrid 1997/98 Home Jersey",
    club: "Real Madrid",
    season: "1997/98",
    league: "La Liga",
    category: "retro",
    section: [],
    image: rm9798,
    price: 2999,
    oldPrice: 3499,
    rating: 5.0,
    reviews: 438,
  },

  {
    id: 52,
    name: "Real Madrid 2016/17 Away Jersey",
    club: "Real Madrid",
    season: "2016/17",
    league: "La Liga",
    category: "retro",
    section: ["top"],
    image: rm1617,
    price: 2949,
    oldPrice: 3349,
    rating: 4.9,
    reviews: 216,
  },

  {
    id: 53,
    name: "Barcelona 2017/18 Away Jersey",
    club: "Barcelona",
    season: "2017/18",
    league: "La Liga",
    category: "retro",
    section: [],
    image: barca1718away,
    price: 2949,
    oldPrice: 3349,
    rating: 4.9,
    reviews: 184,
  },

  {
    id: 54,
    name: "Barcelona 2014/15 Away Jersey",
    club: "Barcelona",
    season: "2014/15",
    league: "La Liga",
    category: "retro",
    section: [],
    image: barca1415away,
    price: 2999,
    oldPrice: 3499,
    rating: 5.0,
    reviews: 298,
  },

];

export const productImages = {
  realmadridjersey,
  realmadrid2526away,
  realmadrid2627away,
  barcajersey,
  barcahomejersey,
  barca2425jersey,
  barca2526jersey,
  manutdjersey,
  manutdhomejersey,
  mancityjersey,
  mancity2526jersey,
  arsenaljersey,
  arsenahomejersey,
  chelseajersey,
  liverpooljersey,
  interjersey,
  intermiami,
  juventus,
  milanjersey,
  atletico,
  bayern,
  bayernaway,
  alnassr,

  argentinaHome,
  argentinaAway,
  brazilHome,
  brazilAway,
  portugalHome,
  portugalAway,
  germanyHome,
  germanyAway,
  franceHome,
  franceAway,
  spainHome,
  spainAway,
  japan,
  norway,
  colombia,

  manutd0708,
  arsenal0203,
  rm2122,
  rm1718,
  rm1415,
  rm1112,
  rm1617,
  rm9798,
  barca0809,
  barca1011,
  barca1415,
  barca1415away,
  barca1516away,
  barca1718away,
  chelsea1011,
  chelsea1617
};
export default products;