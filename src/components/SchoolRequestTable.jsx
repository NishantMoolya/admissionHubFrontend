// StudentTable.js
import React from 'react';
import FilledButton from '../ui/FilledButton';

const students = [
  { name: 'Alice Johnson', id: 'S001', schoolId: 'SC001', status: 'Pending' },
  { name: 'Bob Smith', id: 'S002', schoolId: 'SC002', status: 'Verified' },
  { name: 'Charlie Brown', id: 'S003', schoolId: 'SC003', status: 'Pending' },
];

const SchoolRequestTable = () => {
  const handleCheck = (studentId) => {
    console.log(`Check button clicked for student ID: ${studentId}`);
    // Add your check logic here
  };

  const handleVerify = (studentId) => {
    console.log(`Verify button clicked for student ID: ${studentId}`);
    // Add your verify logic here
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-center">Student Name</th>
            <th className="py-3 px-6 text-center">Student ID</th>
            <th className="py-3 px-6 text-center">Applied School ID</th>
            <th className="py-3 px-6 text-center">Check</th>
            <th className="py-3 px-6 text-center">Verify</th>
            <th className="py-3 px-6 text-center">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {students.map((student) => (
            <tr key={student.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-center font-semibold">{student.name}</td>
              <td className="py-3 px-6 text-center font-semibold">{student.id}</td>
              <td className="py-3 px-6 text-center font-semibold">{student.schoolId}</td>
              <td className="py-3 px-6 text-center">
                <FilledButton text={'view'} handleClick={handleCheck} />
              </td>
              <td className="py-3 px-6 text-center">
                <FilledButton text={'verify'} handleClick={handleVerify} />
              </td>
              <td className="py-3 px-6 text-center font-semibold">
                <span
                  className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                    student.status === 'Verified' ? 'bg-green-200 text-green-600' : 'bg-yellow-200 text-yellow-600'
                  }`}
                >
                  {student.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchoolRequestTable;