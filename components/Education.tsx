import { Header, TextParser } from '@components/Layout';
import { SchoolType } from '@content/content_types';
import { education_content } from '@content/education';

interface Props {}

export const Education = ({}: Props) => {
  return (
    <div>
      <Header>Education</Header>
      {education_content.map((school, i) => {
        return <School school={school} />;
      })}
    </div>
  );
};

interface SchoolProps {
  school: SchoolType;
}

const School = ({ school }: SchoolProps) => {
  return (
    <div className="flex flex-wrap justify-center py-4 text-center md:justify-between">
      <div className="flex flex-col md:text-left min-w-fit">
        <h4 className="text-3xl font-semibold">{school.name}</h4>
        <p className="text-lg font-light">{school.location}</p>
        <p className="">{school.duration}</p>
      </div>
      <div className="col-span-3 md:text-right">
        <p className="font-medium">{school.degree}</p>
        {school.minors.map((minor, i) => {
          return <p className="text-sm italic">{minor}</p>;
        })}
        <mark>GPA: {school.gpa}</mark>
      </div>
    </div>
  );
};
