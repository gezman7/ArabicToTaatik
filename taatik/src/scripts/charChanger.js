import {
  specialArabicCode,
  hashToTaatik,
  FIRST_UNICODE_ARABIC
} from "../data/arbicToTaatikTable";

function CharArabicToTaatik(letterCode) {
  if (isNotInArabic(letterCode))
    return String.fromCharCode(parseInt(letterCode, 16));

  if (!hashToTaatik[letterCode])
    return `(/${letterCode},${String.fromCharCode(parseInt(letterCode, 16))}/)`;

  if (!isSpecialLetter(letterCode))
    return String.fromCharCode(parseInt(hashToTaatik[letterCode], 16));
  let specialLetter = "";
  for (let char in hashToTaatik[letterCode]) {
    specialLetter = specialLetter.concat(
      String.fromCharCode(parseInt(hashToTaatik[letterCode][char], 16))
    );
  }
  return specialLetter;
}

function isSpecialLetter(letterCode) {
  return specialArabicCode.includes(letterCode);
}

function isNotInArabic(letterCode) {
  return parseInt(letterCode, 16) < parseInt(FIRST_UNICODE_ARABIC, 16);
}

function arabicToTaatik(input) {
  let output = "";
  let thisLetter = "";
  for (let index in input) {
    thisLetter = input.charCodeAt(index).toString(16);
    if (parseInt(index) === input.length - 1)
      console.log(`${thisLetter} is final letter`);

    output = output.concat(CharArabicToTaatik(thisLetter));
  }
  return output;
}

export default arabicToTaatik;
