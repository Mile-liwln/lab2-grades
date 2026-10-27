const grades = [
  { name: "Макар", score: 85 },
  { name: "Денис", score: 92 },
  { name: "Анна", score: 78 },
  { name: "Даша", score: 88 },
  { name: "Студент_X", score: 45 }
];

function calculateAverage(data) {
  if (data.length === 0) return null;
  return data.reduce((sum, s) => sum + s.score, 0) / data.length;
}

function findTopStudent(data) {
  if (data.length === 0) return null;
  let top = data[0];
  for (const student of data) {
    if (student.score > top.score) top = student;
  }
  return top.name;
}

function filterFailed(data, passScore) {
  return data.filter(s => s.score < passScore).map(s => s.name);
}

function addLetterGrade(data) {
  return data.map(s => ({
    ...s,
    letter: s.score >= 90 ? "A" : s.score >= 75 ? "B" : "C"
  }));
}

console.log("Средний балл:", calculateAverage(grades));
console.log("Лучший студент:", findTopStudent(grades));
console.log("Должники:", filterFailed(grades, 60));
console.log("Итоговый массив:", addLetterGrade(grades));
