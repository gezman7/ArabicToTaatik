import arabicToTaatik from "./charChanger";

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

export default ListArabicToTaatik;
