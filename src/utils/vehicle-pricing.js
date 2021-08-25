const ranges = [
  { rangeFrom: 0.01, rangeTo: 15.0, rangeNo: 1 },
  { rangeFrom: 15.01, rangeTo: 40.0, rangeNo: 2 },
  { rangeFrom: 40.01, rangeTo: 60.0, rangeNo: 3 },
  { rangeFrom: 60.01, rangeTo: 80.0, rangeNo: 4 },
  { rangeFrom: 80.01, rangeTo: 90.0, rangeNo: 5 },
  { rangeFrom: 90.01, rangeTo: 99.0, rangeNo: 6 },
  { rangeFrom: 99.01, rangeTo: 110.0, rangeNo: 7 },
  { rangeFrom: 110.01, rangeTo: 120.0, rangeNo: 8 },
  { rangeFrom: 120.01, rangeTo: 170.0, rangeNo: 9 },
  { rangeFrom: 170.01, rangeTo: 200.0, rangeNo: 10 },
  { rangeFrom: 200.01, rangeTo: 240.0, rangeNo: 11 },
  { rangeFrom: 240.01, rangeTo: 300.0, rangeNo: 12 },
  { rangeFrom: 300.01, rangeTo: 400.0, rangeNo: 13 },
];

const standard = {
  1: { pickupPrice: 40, returnPrice: 38 },
  2: { pickupPrice: 70, returnPrice: 67 },
  3: { pickupPrice: 80, returnPrice: 76 },
  4: { pickupPrice: 100, returnPrice: 95 },
  5: { pickupPrice: 110, returnPrice: 105 },
  6: { pickupPrice: 120, returnPrice: 114 },
  7: { pickupPrice: 200, returnPrice: 190 },
  8: { pickupPrice: 220, returnPrice: 209 },
  9: { pickupPrice: 240, returnPrice: 228 },
  10: { pickupPrice: 260, returnPrice: 247 },
  11: { pickupPrice: 280, returnPrice: 266 },
  12: { pickupPrice: 300, returnPrice: 285 },
  13: { pickupPrice: 400, returnPrice: 380 },
};

const family = {
  1: { pickupPrice: 60, returnPrice: 57 },
  2: { pickupPrice: 105, returnPrice: 100 },
  3: { pickupPrice: 120, returnPrice: 114 },
  4: { pickupPrice: 150, returnPrice: 143 },
  5: { pickupPrice: 165, returnPrice: 157 },
  6: { pickupPrice: 180, returnPrice: 171 },
  7: { pickupPrice: 300, returnPrice: 285 },
  8: { pickupPrice: 330, returnPrice: 314 },
  9: { pickupPrice: 360, returnPrice: 342 },
  10: { pickupPrice: 390, returnPrice: 371 },
  11: { pickupPrice: 420, returnPrice: 399 },
  12: { pickupPrice: 450, returnPrice: 428 },
  13: { pickupPrice: 600, returnPrice: 570 },
};

const vip = {
  1: { pickupPrice: 100, returnPrice: 95 },
  2: { pickupPrice: 175, returnPrice: 166 },
  3: { pickupPrice: 200, returnPrice: 190 },
  4: { pickupPrice: 250, returnPrice: 238 },
  5: { pickupPrice: 275, returnPrice: 261 },
  6: { pickupPrice: 300, returnPrice: 285 },
  7: { pickupPrice: 500, returnPrice: 475 },
  8: { pickupPrice: 550, returnPrice: 523 },
  9: { pickupPrice: 600, returnPrice: 570 },
  10: { pickupPrice: 650, returnPrice: 618 },
  11: { pickupPrice: 700, returnPrice: 665 },
  12: { pickupPrice: 750, returnPrice: 713 },
  13: { pickupPrice: 1000, returnPrice: 950 },
};

const minivan = {
  1: { pickupPrice: 80, returnPrice: 76 },
  2: { pickupPrice: 140, returnPrice: 133 },
  3: { pickupPrice: 160, returnPrice: 152 },
  4: { pickupPrice: 200, returnPrice: 190 },
  5: { pickupPrice: 220, returnPrice: 209 },
  6: { pickupPrice: 240, returnPrice: 228 },
  7: { pickupPrice: 400, returnPrice: 380 },
  8: { pickupPrice: 440, returnPrice: 418 },
  9: { pickupPrice: 480, returnPrice: 456 },
  10: { pickupPrice: 520, returnPrice: 494 },
  11: { pickupPrice: 560, returnPrice: 532 },
  12: { pickupPrice: 600, returnPrice: 570 },
  13: { pickupPrice: 800, returnPrice: 760 },
};

const smallBus = {
  1: { pickupPrice: 130, returnPrice: 124 },
  2: { pickupPrice: 228, returnPrice: 216 },
  3: { pickupPrice: 260, returnPrice: 247 },
  4: { pickupPrice: 325, returnPrice: 309 },
  5: { pickupPrice: 358, returnPrice: 340 },
  6: { pickupPrice: 390, returnPrice: 371 },
  7: { pickupPrice: 650, returnPrice: 618 },
  8: { pickupPrice: 715, returnPrice: 679 },
  9: { pickupPrice: 780, returnPrice: 741 },
  10: { pickupPrice: 845, returnPrice: 803 },
  11: { pickupPrice: 910, returnPrice: 865 },
  12: { pickupPrice: 975, returnPrice: 926 },
  13: { pickupPrice: 1300, returnPrice: 1235 },
};

const coach = {
  1: { pickupPrice: 240, returnPrice: 228 },
  2: { pickupPrice: 420, returnPrice: 399 },
  3: { pickupPrice: 480, returnPrice: 456 },
  4: { pickupPrice: 600, returnPrice: 570 },
  5: { pickupPrice: 660, returnPrice: 627 },
  6: { pickupPrice: 720, returnPrice: 684 },
  7: { pickupPrice: 1200, returnPrice: 1140 },
  8: { pickupPrice: 1320, returnPrice: 1254 },
  9: { pickupPrice: 1440, returnPrice: 1368 },
  10: { pickupPrice: 1560, returnPrice: 1482 },
  11: { pickupPrice: 1680, returnPrice: 1596 },
  12: { pickupPrice: 1800, returnPrice: 1710 },
  13: { pickupPrice: 2400, returnPrice: 2280 },
};

const rangeNumbers = {};

function getRangeNumber(km) {
  if (rangeNumbers[km]) {
    return rangeNumbers[km];
  }

  let range = 13;

  for (let i = 0; i < ranges.length; i++) {
    const _range = ranges[i];

    if (_range.rangeFrom < km && km < _range.rangeTo) {
      range = _range.rangeNo;
      break;
    }
  }

  rangeNumbers[km] = range;
  return range;
}

function getAppropriateTaxi(taxiCategoryName) {
  const category = {
    standard,
    family,
    "exec & vip": vip,
    minivan,
    "small buss": smallBus,
    coach,
  };

  return category[taxiCategoryName];
}

export function getTaxiPrice({ taxiCategoryName, isOneWay = true, km } = {}) {
  const rangeNo = getRangeNumber(km);
  const taxiCategory = getAppropriateTaxi(taxiCategoryName);

  if (isOneWay) return taxiCategory[rangeNo].pickupPrice;
  return taxiCategory[rangeNo].pickupPrice + taxiCategory[rangeNo].returnPrice;
}
