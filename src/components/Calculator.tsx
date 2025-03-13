import React from 'react';
import { Calculator as CalculatorIcon, DollarSign, FileText, Home } from 'lucide-react';

type CalculatorProps = {
  formData: {
    income: string;
    marriageYears: string;
    employmentStatus: string;
    divorceReason: string;
    propertyOwnership: string;
  };
  setFormData: (data: any) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export function Calculator({ formData, setFormData, onSubmit }: CalculatorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full backdrop-blur-sm bg-white/90">
        <div className="flex items-center mb-8">
          <CalculatorIcon className="w-10 h-10 text-indigo-600 mr-3" />
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Alimony Calculator
          </h1>
        </div>
        
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Income
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="number"
                  required
                  value={formData.income}
                  onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter annual income"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years of Marriage
              </label>
              <input
                type="number"
                required
                value={formData.marriageYears}
                onChange={(e) => setFormData({ ...formData, marriageYears: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter years"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Employment Status
              </label>
              <select
                value={formData.employmentStatus}
                onChange={(e) => setFormData({ ...formData, employmentStatus: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              >
                <option value="employed">Employed</option>
                <option value="unemployed">Unemployed</option>
              </select>
            </div>

            <div className="col-span-2">
              <label className=" text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Reason for Divorce
              </label>
              <select
                value={formData.divorceReason}
                onChange={(e) => setFormData({ ...formData, divorceReason: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select a reason</option>
                <option value="irreconcilable">Irreconcilable Differences</option>
                <option value="separation">Long-term Separation</option>
                <option value="abandonment">Abandonment</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="col-span-2">
              <label className=" text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Home className="w-4 h-4" />
                Property Ownership
              </label>
              <select
                value={formData.propertyOwnership}
                onChange={(e) => setFormData({ ...formData, propertyOwnership: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              >
                <option value="none">No Shared Property</option>
                <option value="house">Shared House</option>
                <option value="multiple">Multiple Properties</option>
                <option value="business">Business Property</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Calculate Alimony
          </button>
        </form>
      </div>
    </div>
  );
}