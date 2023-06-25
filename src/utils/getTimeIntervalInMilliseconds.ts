import { TimeInterval } from "../@types/interval";


const getTimeIntervalInMilliseconds = (timeInterval: TimeInterval): number => {
    const timeValue = parseInt(timeInterval.slice(0, -1), 10);
    const timeUnit = timeInterval.slice(-1);
    let milliseconds = 0;

    switch (timeUnit) {
      case 's':
        milliseconds = timeValue * 1000;
        break;
      case 'm':
        milliseconds = timeValue * 60 * 1000;
        break;
      case 'h':
        milliseconds = timeValue * 60 * 60 * 1000;
        break;
      case 'd':
        milliseconds = timeValue * 24 * 60 * 60 * 1000;
        break;
      default:
        break;
    }

    return milliseconds;
  };

  export default getTimeIntervalInMilliseconds
