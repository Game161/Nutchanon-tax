import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;
  const salary = parseFloat(formData.salary || 0);
  const salaryOfYear = salary * 12;
  const bonus = parseFloat(formData.bonus || 0);
  const salaryIncomeYear = salaryOfYear + bonus;
  let expenses = Math.min(salaryIncomeYear * 0.5, 100000);
  const child = parseInt(formData.child || 0);
  const social = Math.min(parseFloat(formData.social * 12 || 0), 30000);
  const life = Math.min(parseFloat(formData.life || 0), 100000);
  const Deduction = Math.min(child * 30000, 60000);
  const RealDeduction = 60000 + Deduction + social + life;
  const income = salaryIncomeYear - expenses - RealDeduction;
  const tax =
    income <= 100000 ? 0 :
    income <= 300000 ? 0.05 :
    income <= 1000000 ? 0.1 : 0.15;
  const taxRate = tax * 100;
  const Realtax = income * tax;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 via-orange-400 to-yellow-300">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-red-600 text-center mb-6">
          ผลการคำนวณ
        </h1>
        <div className="space-y-4">
          <p className="text-lg">
            <strong className="text-orange-600">เงินได้ทั้งปี:</strong>{" "}
            <span className="text-red-500 font-medium">
              {salaryIncomeYear.toLocaleString()} บาท
            </span>
          </p>
          <p className="text-lg">
            <strong className="text-orange-600">ค่าใช้จ่าย:</strong>{" "}
            <span className="text-red-500 font-medium">
              {expenses.toLocaleString()} บาท
            </span>
          </p>
          <p className="text-lg">
            <strong className="text-orange-600">ค่าลดหย่อน:</strong>{" "}
            <span className="text-red-500 font-medium">
              {RealDeduction.toLocaleString()} บาท
            </span>
          </p>
          <p className="text-lg">
            <strong className="text-orange-600">เงินได้พึงประเมินสุทธิ:</strong>{" "}
            <span className="text-red-500 font-medium">
              {income.toLocaleString()} บาท
            </span>
          </p>
          <p className="text-lg">
            <strong className="text-orange-600">อัตราภาษี:</strong>{" "}
            <span className="text-red-500 font-medium">{taxRate} %</span>
          </p>
          <p className="text-lg">
            <strong className="text-orange-600">ภาษีที่ต้องชำระ:</strong>{" "}
            <span className="text-red-500 font-medium">
              {Realtax.toLocaleString()} บาท
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
