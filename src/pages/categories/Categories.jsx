import React from 'react';
import { PageLayout, PageContent } from '../../components/PageLayout';

const Categories = () => {
  return (
    <PageLayout title="Categories">
      <PageContent>
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Add New Category
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-lg">Category {item}</h3>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    Delete
                  </button>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                Description for category {item}
              </p>
              <div className="mt-3 text-sm text-gray-500">
                <span>Books: {item * 5}</span>
              </div>
            </div>
          ))}
        </div>
      </PageContent>
    </PageLayout>
  );
};

export default Categories;
