import React from 'react';

const EmployeeTable = () => {
  const employees = [
    { name: 'Tony Reichert', role: 'CEO', status: 'Active' },
    { name: 'Zoey Lang', role: 'Technical Lead', status: 'Paused' },
    { name: 'Jane Fisher', role: 'Senior Developer', status: 'Active' },
    { name: 'William Howard', role: 'Community Manager', status: 'Vacation' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-200 text-green-900';
      case 'Paused':
        return 'bg-yellow-200 text-yellow-900';
      case 'Vacation':
        return 'bg-blue-200 text-blue-900';
      default:
        return 'bg-gray-200 text-gray-900';
    }
  };

  return (
    <div className="w-full max-w-4xl p-4">
      <div className="bg-[#1E293B] rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-600 bg-[#334155]">
              <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {employees.map((employee) => (
              <tr key={employee.name} className="hover:bg-[#475569]">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                  {employee.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {employee.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(employee.status)}`}
                  >
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
