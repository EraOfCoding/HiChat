export default function calculateAge() {
  let birthday = new Date("2007-07-24");
  return ~~((Date.now() - birthday) / 31557600000);
}
