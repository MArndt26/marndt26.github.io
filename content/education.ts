import { SchoolType } from '@content/content_types';

const BS: SchoolType = {
  name: 'Purdue University',
  location: 'West Lafayette, IN',
  duration: 'August 2018 — December 2021',
  degree: 'Bachelor of Science in Electrical Engineering — Honors College',
  minors: [
    'Certificate of Entrepreneurship and Innovation',
    'Minor in Computer Science',
  ],
  gpa: '3.96',
};

const MS: SchoolType = {
  name: 'Purdue University',
  location: 'West Lafayette, IN',
  duration: 'August 2021 — Present',
  degree: 'Master of Science in Electrical Engineering',
  minors: ['Focus in Computer Architecture'],
  gpa: '3.92',
};

export const education_content = [MS, BS];
