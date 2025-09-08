"use client";

import { useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export default function ROICalculatorPage() {
  const [formData, setFormData] = useState({
    employees: '',
    avgSalary: '',
    hoursPerWeek: '',
    automationPercentage: ''
  });
  const [results, setResults] = useState<{
    annualSavings: number;
    roi: number;
    paybackMonths: number;
    threeYearValue: number;
  } | null>(null);

  const calculateROI = () => {
    const employees = parseInt(formData.employees) || 0;
    const avgSalary = parseInt(formData.avgSalary) || 0;
    const hoursPerWeek = parseInt(formData.hoursPerWeek) || 0;
    const automationPercentage = parseInt(formData.automationPercentage) || 0;

    const annualLaborCost = employees * avgSalary;
    const hoursAutomated = (hoursPerWeek * 52 * automationPercentage) / 100;
    const costSavings = (hoursAutomated / (40 * 52)) * avgSalary * employees;
    const implementationCost = 50000; // Base implementation cost
    const roi = ((costSavings - implementationCost) / implementationCost) * 100;
    const paybackMonths = implementationCost / (costSavings / 12);

    setResults({
      annualSavings: Math.round(costSavings),
      roi: Math.round(roi),
      paybackMonths: Math.round(paybackMonths),
      threeYearValue: Math.round(costSavings * 3 - implementationCost)
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">ROI Calculator | Augment AI</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            AI Automation ROI Calculator
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            Calculate the potential return on investment for AI automation in your organization.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              Calculate Your ROI
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Employees</label>
                <input
                  type="number"
                  value={formData.employees}
                  onChange={(e) => setFormData({...formData, employees: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  placeholder="100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Average Annual Salary ($)</label>
                <input
                  type="number"
                  value={formData.avgSalary}
                  onChange={(e) => setFormData({...formData, avgSalary: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  placeholder="75000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hours Spent on Manual Tasks (per week)</label>
                <input
                  type="number"
                  value={formData.hoursPerWeek}
                  onChange={(e) => setFormData({...formData, hoursPerWeek: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  placeholder="10"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Automation Potential (%)</label>
                <input
                  type="number"
                  value={formData.automationPercentage}
                  onChange={(e) => setFormData({...formData, automationPercentage: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  placeholder="70"
                />
              </div>
            </div>
            <button
              onClick={calculateROI}
              className="w-full bg-[#4A90E2] text-white py-3 px-6 rounded-lg hover:bg-[#357ABD] transition-colors font-semibold"
            >
              Calculate ROI
            </button>
          </div>

          {results && (
            <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                Your ROI Results
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#4A90E2] mb-2">${results.annualSavings.toLocaleString()}</div>
                  <div className="text-gray-600">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#4A90E2] mb-2">{results.roi}%</div>
                  <div className="text-gray-600">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#4A90E2] mb-2">{results.paybackMonths}</div>
                  <div className="text-gray-600">Payback (Months)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#4A90E2] mb-2">${results.threeYearValue.toLocaleString()}</div>
                  <div className="text-gray-600">3-Year Value</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-[#4A90E2] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Ready to Realize These Savings?
          </h2>
          <p className="text-base text-blue-100 mb-8">
            Schedule a demo to see how Augment AI can deliver these results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-white text-[#4A90E2] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Demo
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#4A90E2] transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
