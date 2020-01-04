/*
THIS IS A COPY FOR TESTING ONLY. WILL NOT UPDATE.
LAST UPDATED FROM ORIGINAL: 12.29.19
*/
const hashToTaatik = {
  "627": "5d0" /* ا א */,
  "626": "5d0" /* ئ א */,
  "624": "5d0" /*  ؤ א  */,
  "621": "5d0" /*  ء א  */,
  "623": "5d0" /*  ء א  */,

  "628": "5d1" /*ب  ב  */,

  "62f": "5d3" /* د ד  */,
  "629": "5d4" /*ة ה */,
  "647": "5d4" /* ه ה*/,
  "648": "5d5" /*  و ו  */,
  "632": "5d6" /*ز ז  */,
  "62d": "5d7" /*ح ח */,
  "637": "5d8" /* ظ  ט  */,
  "64a": "5d9" /* ي י */,
  "649": "5d9" /* ى י */,
  "643": "5db" /* ى כ */,
  "644": "5dc" /* ل ל */,
  "645": "5de" /*  م מ  */,
  "646": "5e0" /*ن נ */,

  "633": "5e1" /* س ס */,
  "639": "5e2" /* ع ע */,

  "641": "5e4" /* ف פ */,
  "635": "5e6" /* ص צ */,
  "642": "5e7" /*ق ק */,
  "631": "5e8" /* ر ר  */,
  "634": "5e9" /*ش  ש  */,
  "62a": "5ea" /*ت ת */,

  "64b": "5df" /* ן ,ً  */,
  "61f": "61f" /*  ؟ */,
  "20": "20" /* space */,
  // "64e": "5bb" /*   */,

  //punctuation
  "64e": "5b7", //fatha to patach
  "650": "5c5", //kasra to chirik 
  "64f": "5bb",  //damma to kibutz
  "652": "5b0", //sukun to shva
  "64b": "", //tanween fatha
  "64c": "", //tanween damma
  "64d": "", //tanween kasra
  "651": "651", //shadda

  //punctuation

  "630": ["5d3", "5f3"] /*  'ذ ד  */ /* special treatment */,
  "62e": ["5e8", "5f3"] /*  'خ ר  */ /* special treatment */,
  "636": ["5e6", "5f3"] /*  'ض צ  */ /* special treatment */,
  "62b": ["5ea", "5f3"] /*  'ض צ  */ /* special treatment */,
  "62c": ["5d2", "5f3"] /*  'ج ג  */ /* special treatment */,
  "638": ["5d8", "5f3"] /*  'ظ ט  */ /* special treatment */,
  "63a": ["5e2", "5f3"] /*  'غ ע  */ /* special treatment */,
  "625": ["5d0", "5c5"] /*  'غ ע  */ /* special treatment */

  /*
  TODO:
  1.punctuation hash.
  2. add logic to final letters "םןץף"

  

  */
};

const finalFormLetters = {
  "646": "5df" /*ن ן */,
  "645": "5dd" /*  م ם  */,
  "635": "5e5" /* ص ץ */,
  "636": ["5e5", "5f3"] /*  'ض ץ  */ /* special treatment */
}
const specialArabicCode = ["62e", "630", "636", "62c", "5e6", "63a", "625"];

/*
https://utf8-chartable.de/unicode-utf8-table.pl?start=1536&number=128
 - good place for atabic utf-8  convertion. 
 https://en.wikipedia.org/wiki/Hebrew_(Unicode_block)
 - hebrew unicode block

*/
const FIRST_UNICODE_ARABIC = 600;

module.exports = {
  FIRST_UNICODE_ARABIC,
  specialArabicCode,
  hashToTaatik
};
