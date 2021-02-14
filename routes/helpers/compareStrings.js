const compareAscending = (a, b) => {
  if (a.BRAND < b.BRAND) {
    return -1;
  } else if (a.BRAND > b.BRAND) {
    return 1;
  } else {
    return 0;
  }
};
const compareDescending = (a, b) => {
  if (a.BRAND < b.BRAND) {
    return 1;
  } else if (a.BRAND > b.BRAND) {
    return -1;
  } else {
    return 0;
  }
};

module.exports = { compareAscending, compareDescending };
