const createFilters = array => {
  const brandList = [];
  for (const el of array) {
    if (!brandList.includes(el.BRAND)) brandList.push(el.BRAND);
  }

  brandList.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });

  return brandList;
};

module.exports = createFilters;
