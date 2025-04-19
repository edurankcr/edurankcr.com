type Teacher = {
  teacherId: string;
  name: string;
  lastName: string;
  fullName: string;
  createdAt: string;
  updatedAt: string;
};

type Institute = {
  instituteId: string;
  name: string;
  type: number;
  province: number;
  url?: string;
  createdAt: string;
  updatedAt: string;
};

type InstituteProps = {
  institute: Institute;
};

type InstituteSummary = {
  instituteId: string;
  totalReviews: number;
  totalAverageScore: number;
  reputation: number;
  opportunities: number;
  happiness: number;
  location: number;
  facilities: number;
  social: number;
  clubs: number;
  internet: number;
  security: number;
  food: number;
  updatedAt: string;
};

type InstituteSummaryProps = {
  instituteSummary: InstituteSummary;
};

type ReviewTeacher = {
  teacherId: string;
  teacherName: string;
  teacherLastName: string;
  reviewId: string;
  freeCourse: boolean;
  courseCode?: string;
  courseMode: number;
  professorRating: number;
  difficultyRating: number;
  wouldTakeAgain?: boolean;
  mandatoryAttendance?: boolean;
  gradeReceived?: string;
  experienceText: string;
  createdAt: string;
  updatedAt: string;
  userFirstName: string;
  userLastName: string;
  userName: string;
  avatarUrl: string | null;
};

type ReviewInstitute = {
  instituteId: string;
  instituteName: string;
  instituteType: number;
  reputation: number;
  opportunities: number;
  happiness: number;
  location: number;
  facilities: number;
  social: number;
  clubs: number;
  internet: number;
  security: number;
  food: number;
  experienceText: string;
  createdAt: string;
  updatedAt: string;
  userFirstName: string;
  userLastName: string;
  userName: string;
  avatarUrl: string | null;
};

type IInstituteDetails = InstituteProps & InstituteSummaryProps;

export { IInstituteDetails, Institute, InstituteSummary, InstituteSummaryProps, ReviewInstitute, ReviewTeacher, Teacher };
