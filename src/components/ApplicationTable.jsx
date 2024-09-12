import React, { useState } from 'react';
import FilledButton from '../ui/FilledButton';

const ApplicationTable = ({ students }) => {
  const [studentData, setStudentData] = useState(students);

  const updateStatus = (index) => {
    const updatedStudents = studentData.map((student, i) =>
      i === index ? { ...student, status: 'Approved' } : student
    );
    setStudentData(updatedStudents);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b bg-gray-100">#</th>
            <th className="px-4 py-2 border-b bg-gray-100">Student Name</th>
            <th className="px-4 py-2 border-b bg-gray-100">School ID</th>
            <th className="px-4 py-2 border-b bg-gray-100">Application Status</th>
            <th className="px-4 py-2 border-b bg-gray-100">Action</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b text-center">{index + 1}</td>
              <td className="px-4 py-2 border-b text-center">{student.name}</td>
              <td className="px-4 py-2 border-b text-center">{student.schoolId}</td>
              <td className="px-4 py-2 border-b text-center">{student.status}</td>
              <td className="px-4 py-2 border-b text-center">
                <FilledButton text={'next step'} handleClick={() => updateStatus(index)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationTable;
