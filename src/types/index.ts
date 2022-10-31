export type Question = {
  id: string;
  tr: string;
  correctAnswer: string;
  wrongAnswer: string;
  correctWay: number;
};

export type Word = {
  id: string;
  tr: string;
  en: string;
  level: string;
};
