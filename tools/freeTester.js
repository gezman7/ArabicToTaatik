const { ListArabicToTaatik } = require("./wordArabicToTaatik");
const sample =
  " زواج وطلاق في غرفة الطوارئ كمان الموسم الثاني من دكتور كراج راح يخلص بزواج وبأخبار صاعقة. الحلقة الاخيرة جاهزة لتصدمكم من جديد!  ";

const list = ListArabicToTaatik(sample);

list.map(word => {
  console.log(`${word.arabic},${word.taatik}`);
});
