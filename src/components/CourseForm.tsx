"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Course } from "@/types/course";

export type CourseDraft = {
  code: string;
  name: string;
  credit: string;
  instructor: string;
};

const emptyDraft: CourseDraft = {
  code: "",
  name: "",
  credit: "",
  instructor: "",
};

type FormErrors = Partial<Record<keyof CourseDraft, string>>;

type CourseFormProps = {
  initialCourse?: Course;
  onSave: (draft: CourseDraft) => void;
  onCancel: () => void;
};

function toDraft(course?: Course): CourseDraft {
  if (!course) {
    return emptyDraft;
  }
  return {
    code: course.code,
    name: course.name,
    credit: String(course.credit),
    instructor: course.instructor,
  };
}

function validate(value: CourseDraft): FormErrors {
  const nextErrors: FormErrors = {};
  if (value.code.trim() === "") {
    nextErrors.code = "กรุณาระบุรหัสวิชา";
  }
  if (value.name.trim() === "") {
    nextErrors.name = "กรุณาระบุชื่อวิชา";
  }
  const credit = Number(value.credit);
  if (!Number.isInteger(credit) || credit < 1 || credit > 6) {
    nextErrors.credit = "หน่วยกิตต้องเป็นจำนวนเต็มตั้งแต่ 1 ถึง 6";
  }
  return nextErrors;
}

export default function CourseForm({
  initialCourse,
  onSave,
  onCancel,
}: CourseFormProps) {
  const [draft, setDraft] = useState<CourseDraft>(toDraft(initialCourse));
  const [errors, setErrors] = useState<FormErrors>({});

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setDraft((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(draft);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }
    onSave(draft);
    setDraft(emptyDraft);
    setErrors({});
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg space-y-4 mb-8">
      <h2 className="text-xl font-bold text-gray-100 mb-4">
        {initialCourse ? "แก้ไขรายวิชา" : "เพิ่มรายวิชาใหม่"}
      </h2>
      
      <div>
        <label htmlFor="code" className="block text-sm font-medium text-gray-300 mb-1">รหัสวิชา</label>
        <input
          id="code"
          name="code"
          type="text"
          value={draft.code}
          onChange={handleChange}
          aria-invalid={!!errors.code}
          aria-describedby={errors.code ? "code-error" : undefined}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-blue-600"
        />
        {errors.code ? <p id="code-error" className="text-red-400 text-xs mt-1">{errors.code}</p> : null}
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">ชื่อวิชา</label>
        <input
          id="name"
          name="name"
          type="text"
          value={draft.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-blue-600"
        />
        {errors.name ? <p id="name-error" className="text-red-400 text-xs mt-1">{errors.name}</p> : null}
      </div>

      <div>
        <label htmlFor="credit" className="block text-sm font-medium text-gray-300 mb-1">หน่วยกิต</label>
        <input
          id="credit"
          name="credit"
          type="number"
          inputMode="numeric"
          min="1"
          max="6"
          value={draft.credit}
          onChange={handleChange}
          aria-invalid={!!errors.credit}
          aria-describedby={errors.credit ? "credit-error" : undefined}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-blue-600"
        />
        {errors.credit ? <p id="credit-error" className="text-red-400 text-xs mt-1">{errors.credit}</p> : null}
      </div>

      <div>
        <label htmlFor="instructor" className="block text-sm font-medium text-gray-300 mb-1">ผู้สอน</label>
        <input
          id="instructor"
          name="instructor"
          type="text"
          value={draft.instructor}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-blue-600"
        />
      </div>

      <div className="flex gap-4 pt-2">
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all">
          บันทึก
        </button>
        {initialCourse ? (
          <button type="button" onClick={onCancel} className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-6 py-2 rounded-lg transition-all">
            ยกเลิก
          </button>
        ) : null}
      </div>
    </form>
  );
}