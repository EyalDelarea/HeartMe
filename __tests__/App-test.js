/**
 * @format
 */

import 'react-native';

import {fetchDiagnosis} from '../App';

const mockConfig = {
  bloodTestConfig: [
    {
      name: 'HDL Cholesterol',
      threshold: 40,
    },
    {
      name: 'LDL Cholesterol',
      threshold: 100,
    },
    {
      name: 'A1C',
      threshold: 4,
    },
  ],
};

const sampleInputs = [
  ['Cholesterol - HDL', 39, true, 'HDL Cholesterol'],
  ['HDL, Total', 50, false, 'HDL Cholesterol'],
  ['CHOLESTEROL-LDL calc', 99, true, 'LDL Cholesterol'],
  ['HM Hemoglobin - A1C', 12, false, 'A1C'],
];

it('SampleINputs', () => {
  sampleInputs.forEach(item => {
    const res = fetchDiagnosis(item[0], item[1], mockConfig);
    expect(res.result).toBe(item[2]);
    expect(res.catagory).toBe(item[3]);
  });
});

it('Not Found', () => {
  const testCase = ['Triglycerides', 120, '', 'Not Found'];
  const res = fetchDiagnosis(testCase[0], testCase[1], mockConfig);
  expect(res).toBe('Not Found');
});
