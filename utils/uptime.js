import constants from '../constants';

export const getUptimeState = uptime => {
  const { red, orange, green } = constants.colors;
  let color = red; // Red

  if (uptime >= 98) {
    color = green; // Green
  } else if (uptime >= 90) {
    color = orange; // Orange
  }

  return color;
};

export const roundUptime = (digits = 2) => {
  return uptime => {
    if (typeof uptime === Number) {
      return uptime.toFixed(digits);
    } else {
      // should fail if uptime is neither a string nor a number
      const upTimeAsNum = parseInt(uptime, 10);
      return upTimeAsNum.toFixed(digits);
    }
  };
};
