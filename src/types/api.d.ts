import type { Institute, ReviewInstitute, ReviewTeacher, Teacher } from './objects';

type ActivityReviewContentResponse = {
  meta: any;
  result: {
    teacherReviews: ReviewTeacher[];
    instituteReviews: ReviewInstitute[];
  };
};

type GlobalSearchContentResponse = {
  teachers: Teacher[];
  institutes: Institute[];
};

export { ActivityReviewContentResponse, GlobalSearchContentResponse };
