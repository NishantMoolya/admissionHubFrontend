//SchoolOverview.jsx
import React from 'react'

const classAdmissionsData = [
    { className: 'Class 1', availableAdmissions: 30 },
    { className: 'Class 2', availableAdmissions: 25 },
    { className: 'Class 3', availableAdmissions: 20 },
    { className: 'Class 4', availableAdmissions: 15 },
    { className: 'Class 5', availableAdmissions: 10 },
  ];
  
  const AdmissionsTable = () => {
    return (
      <div className="bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Available Admissions</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-2 px-4 text-center text-sm font-semibold text-slate-900">Class</th>
              <th className="py-2 px-4 text-center text-sm font-semibold text-slate-900">
                Available Admissions
              </th>
            </tr>
          </thead>
          <tbody>
            {classAdmissionsData.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 text-sm text-center font-semibold text-slate-700">{item.className}</td>
                <td className="py-2 px-4 text-sm text-center font-semibold text-slate-700">{item.availableAdmissions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

const SchoolOverview = () => {
  return (
    <div className='px-2 py-2 flex flex-col gap-4'>
    <div>
    <h2 className="text-xl font-bold">Principal</h2>
    <p className='font-semibold text-slate-700 ml-2'>Dr.Name school</p>
    <p className='font-semibold text-slate-700 ml-2'>Qualifications</p>
    </div>
    <hr />
    <div>
    <h2 className="text-xl font-bold">Affiliated to</h2>
    <p className='font-semibold text-slate-700 ml-2'>Teerthankar Society</p>
    </div>
    <hr />
    <div>
    <h2 className="text-xl font-bold">About Us</h2>
    <p className='font-semibold text-slate-700 ml-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas obcaecati sequi fugiat rerum quidem optio dicta id ut laudantium tempora.</p>
    </div>
    <hr />
    <div>
    <h2 className="text-xl font-bold">Available Courses</h2>
    <p className='font-semibold text-slate-700 ml-2'>Class 1 to Class 10</p>
    </div>
    <hr />
    <div>
    <h2 className="text-xl font-bold">Available Laboratory</h2>
    <p className='font-semibold text-slate-700 ml-2'>Physics,Chemistry,Computer Science</p>
    </div>
    <hr />
    <div>
    <h2 className="text-xl font-bold">Total Available Faculty</h2>
    <p className='font-semibold text-slate-700 ml-2'>30</p>
    </div>
    <hr />
    <AdmissionsTable />
    <hr />
    </div>
  )
}

export default SchoolOverview