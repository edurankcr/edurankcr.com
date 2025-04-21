type UserReviewInfo = {
  userId: string;
  name: string;
  lastName: string;
  userName: string;
  avatarUrl: string | null;
};

type InstitutionReview = {
  institutionRatingId: string;
  institutionId: string;
  location: number;
  happiness: number;
  safety: number;
  reputation: number;
  opportunities: number;
  internet: number;
  food: number;
  social: number;
  facilities: number;
  clubs: number;
  testimony: string;
  createdAt: string;
  updatedAt: string | null;
  user: UserReviewInfo;
};

type TeacherReview = {
  teacherRatingId: string;
  teacherId: string;
  clarity: number;
  knowledge: number;
  respect: number;
  fairness: number;
  punctuality: number;
  motivation: number;
  wouldTakeAgain: boolean;
  testimony: string;
  createdAt: string;
  updatedAt: string | null;
  user: UserReviewInfo;
};

type LatestReviewsResponse = {
  institutionReviews: InstitutionReview[];
  teacherReviews: TeacherReview[];
};

type SearchMeta = {
  allCount: number;
  allInstitutionCount: number;
  allTeacherCount: number;
};

type SearchInstitutionItem = {
  institutionId: string;
  name: string;
  province: number;
  type: number;
  createdAt: string;
  updatedAt: string;
  overallAverage: number;
  reviewCount: number;
};

type SearchTeacherItem = {
  teacherId: string;
  name: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  overallAverage: number;
  reviewCount: number;
};

type SearchResults = {
  institutions: SearchInstitutionItem[];
  teachers: SearchTeacherItem[];
};

type SearchResponse = {
  meta: SearchMeta;
  results: SearchResults;
};

type Institution = {
  institutionId: string;
  name: string;
  description: string;
  province: number;
  type: number;
  websiteUrl: string;
  aiReviewSummary: string;
  createdAt: string;
  updatedAt: string;
  status: number;
};

type AggregateRatings = {
  location: number;
  happiness: number;
  safety: number;
  reputation: number;
  opportunities: number;
  internet: number;
  food: number;
  social: number;
  facilities: number;
  clubs: number;
  overallAverage: number;
  reviewCount: number;
};

type RelatedInstitution = {
  institutionId: string;
  name: string;
  description: string;
  province: number;
  type: number;
  websiteUrl: string;
  overallAverage: number;
  reviewCount: number;
};

type InstitutionDetailsResponse = {
  institution: Institution;
  aggregateRatings: AggregateRatings;
  relatedInstitutions: RelatedInstitution[];
};

type InstitutionReviewItem = {
  review: {
    institutionRatingId: string;
    institutionId: string;
    userId: string | null;
    location: number;
    happiness: number;
    safety: number;
    reputation: number;
    opportunities: number;
    internet: number;
    food: number;
    social: number;
    facilities: number;
    clubs: number;
    testimony: string;
    createdAt: string;
    updatedAt: string | null;
    status: number;
  };
  user: {
    userId: string;
    name: string;
    lastName: string;
    userName: string;
    avatarUrl: string | null;
  };
};

type InstitutionReviewsResponse = InstitutionReviewItem[];

type InstitutionDetails = {
  institutionId: string;
  name: string;
  description: string;
  province: number;
  type: number;
  websiteUrl: string;
  aiReviewSummary: string;
  createdAt: string;
  updatedAt: string;
  status: number;
};

type InstitutionRatingWithInstitutionResponse = {
  hasRating: boolean;
  rating: {
    institutionRatingId: string;
    institutionId: string;
    userId: string;
    location: number;
    happiness: number;
    safety: number;
    reputation: number;
    opportunities: number;
    internet: number;
    food: number;
    social: number;
    facilities: number;
    clubs: number;
    testimony: string;
    createdAt: string;
    updatedAt: string | null;
    status: number;
  } | null;
  institution: Institution;
};

export type {
  AggregateRatings,
  Institution,
  InstitutionDetails,
  InstitutionDetailsResponse,
  InstitutionRatingWithInstitutionResponse,
  InstitutionReview,
  InstitutionReviewItem,
  InstitutionReviewsResponse,
  LatestReviewsResponse,
  RelatedInstitution,
  SearchInstitutionItem,
  SearchMeta,
  SearchResponse,
  SearchResults,
  SearchTeacherItem,
  TeacherReview,
  UserReviewInfo,
};
