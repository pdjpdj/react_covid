import { CountryTotalItem } from '../reducers/country';

interface PickerChoice {
  label: string;
  value: string;
}

export const pickerChoices: PickerChoice[] = [{
  label: 'Total deaths',
  value: 'deaths'
}, {
  label: 'Total confirmed',
  value: 'confirmed'
}, {
  label: 'Daily deaths',
  value: 'dailyDeaths'
}, {
  label: 'Daily confirmed',
  value: 'dailyConfirmed'
}, {
  label: 'Deaths 7 days avg.',
  value: 'daily7Deaths'
}, {
  label: 'Confirmed 7 days avg.',
  value: 'daily7Confirmed'
},];

const movingAvg = (array: number[], count: number): number[] => {
  const avg = (array: number[]): number => {
    let sum = 0, num = 0;

    array.map(val => {
      sum += val;
      num++;
    });

    return sum / num;
  };

  const result = [];

  for (let i = 0; i < count - 1; i++) {
    result.push(0);
  }
  for (let i = 0, len = array.length - count; i <= len; i++) {
    const val = avg(array.slice(i, i + count));
    if (isNaN(val)) {
      result.push(0);
    } else {
      result.push(val);
    }
  }

  return result;
};

const dailyResults = (array: number[]): number[] => {
  return array.map((value, index) => {
    if (index > 0 && index < array.length) {

      const daily = (value - array[index - 1]);
      return Math.abs(daily);
    } else {
      return 0;
    }
  });
};

export const getData = (totals: CountryTotalItem[], choice: string): number[] => {
  switch (choice) {
    case 'deaths':
      return totals.map(value => value.Deaths);
    case 'confirmed':
      return totals.map(value => value.Confirmed);
    case 'dailyDeaths':
      return dailyResults(totals.map(value => value.Deaths));
    case 'dailyConfirmed':
      return dailyResults(totals.map(value => value.Confirmed));
    case 'daily7Deaths':
      return movingAvg(dailyResults(totals.map(value => value.Deaths)), 7);
    case 'daily7Confirmed':
      return movingAvg(dailyResults(totals.map(value => value.Confirmed)), 7);
  }
  return [];
};
