import { FormResponse, OrganisationMetadata } from "./db";
import { sum, sumScoresByArea, sumScoresByAxis } from "./model";

export type Rating = {
  overallScore: number;
  cultureScore: number;
  skillScore: number;
  toolingScore: number;
};

export type GroupAverageRating = Rating & {
  sampleSize: number;
};

export type OrganisationRatingSummary = {
  name: string;
  rating: Rating;
  type?: string;
  field?: string;
  wholeDatasetAverage: GroupAverageRating;
  segmentAverage?: GroupAverageRating;
};

export function getOrganisationSummary({
  meta,
  scores,
}: FormResponse): OrganisationRatingSummary {
  const [cultureScore, skillScore, toolingScore] = sumScoresByAxis(scores);
  const type = getOrganisationType(meta);
  return {
    name: meta.organisationName,
    field: meta.organisationField,
    wholeDatasetAverage: firstWaveRating,
    segmentAverage: firstWaveSegmentsRating[type ?? "<none>"],
    rating: {
      overallScore: sum(sumScoresByArea(scores)),
      cultureScore,
      skillScore,
      toolingScore,
    },
    type,
  };
}

// TBD: Consult with Matěj
export function getOrganisationType(
  meta: OrganisationMetadata
): string | undefined {
  const { paidFullTimeMembers, paidPartTimeMembers, volunteers } = meta;
  if (!paidFullTimeMembers || !paidPartTimeMembers || !volunteers) {
    return undefined;
  }
  const paidMembers = paidFullTimeMembers + paidPartTimeMembers;
  const totalMembers = paidMembers + volunteers;
  const sizeTag =
    totalMembers > 50 ? "velká" : totalMembers > 10 ? "střední" : "malá";
  if (paidMembers === 0) {
    return "Občanská";
  } else if (volunteers >= paidMembers * 2) {
    return "Dobrovolnická " + sizeTag;
  } else {
    return "Profesionální " + sizeTag;
  }
}

/** Hand-cleaned data from Matěj */
const firstWaveRating: GroupAverageRating = {
  sampleSize: 164,
  overallScore: 198,
  cultureScore: 78,
  skillScore: 66,
  toolingScore: 55,
};

/** Hand-cleaned data from Matěj, post-processed to get averages */
const firstWaveSegmentsRating: Record<string, GroupAverageRating> = {
  "Dobrovolnická malá": {
    sampleSize: 10,
    overallScore: 209,
    cultureScore: 83,
    skillScore: 73,
    toolingScore: 54,
  },
  "Dobrovolnická velká": {
    sampleSize: 16,
    overallScore: 199,
    cultureScore: 77,
    skillScore: 67,
    toolingScore: 56,
  },
  "Občanská": {
    sampleSize: 4,
    overallScore: 238,
    cultureScore: 87,
    skillScore: 83,
    toolingScore: 68,
  },
  "Profesionální malá": {
    sampleSize: 27,
    overallScore: 193,
    cultureScore: 79,
    skillScore: 64,
    toolingScore: 50,
  },
  "Profesionální střední": {
    sampleSize: 69,
    overallScore: 194,
    cultureScore: 77,
    skillScore: 64,
    toolingScore: 53,
  },
  "Profesionální velká": {
    sampleSize: 38,
    overallScore: 203,
    cultureScore: 78,
    skillScore: 67,
    toolingScore: 58,
  },
};
