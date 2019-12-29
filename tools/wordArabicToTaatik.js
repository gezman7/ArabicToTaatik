/*
THIS IS A COPY FOR TESTING ONLY. WILL NOT UPDATE.
LAST UPDATED FROM ORIGINAL: 12.29.19
*/

const arabicToTaatik = require("./charChanger");

/* recives text as an input and returns a list of strings by words. */

function ListArabicToTaatik(str) {
  const listArabic = str.split(" ");
  console.log(listArabic.length);
  for (let i = 0; i < listArabic.length; i++) {
    listArabic[i] = {
      taatik: arabicToTaatik(listArabic[i]),
      arabic: listArabic[i]
    };
  }
  return listArabic;
}
module.exports = { ListArabicToTaatik };
