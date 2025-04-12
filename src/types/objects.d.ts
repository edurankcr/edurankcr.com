type Institute = {
  name: string;
  type: string;
  province: number;
  url: string;
};

type InstituteProps = {
  institute: Institute;
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
  avatarUrl?: string;
};

type ReviewTeacherProps = {
  review: ReviewTeacher;
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
  avatarUrl?: string;
};

type ReviewInstituteProps = {
  review: ReviewInstitute;
};

export { InstituteProps, ReviewInstituteProps, ReviewTeacherProps };
