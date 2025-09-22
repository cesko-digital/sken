import crypto from "crypto";
import { DecoderFunction, string } from "typescript-json-decoder";

/** Common routing targets */
export const RouteTo = {
  /** Home page */
  home: "/",
  /** Overall results */
  overallResults: "/vysledky",

  /** Organization results */
  organizationResults: (organizationName: string) =>
    "/organizace/" + hashOrganizationName(organizationName),
  /** Individual rating results */
  individualRating: (ratingId: string) => `/vysledky/${ratingId}/cisla`,
  /** LLM summary of individual rating */
  llmSummary: (individualRatingId: string) => `/vysledky/${individualRatingId}`,

  /** The URL of the Fillout form */
  form: "https://forms.fillout.com/t/rMoYry5Shaus",
  /** The URL to lead capture form */
  leadFormUrl:
    "https://crm.cesko.digital?entryPoint=leadCaptureForm&id=6862594be878a533b",
};

/** Are we running in development mode? */
export const devMode = () => process.env.NODE_ENV === "development";

/**
 * Compute a simple message digest
 *
 * The algorithm hashes the params together and returns first 10 hex digits of that.
 */
export const hashDigest = (params: string[]) =>
  // Create SHA1 cipher
  crypto
    .createHash("sha1")
    // Hash params to gether
    .update(params.join(":"))
    // Convert to a hex string
    .digest("hex")
    // Return first 10 chars
    .slice(0, 10);

export const hashOrganizationName = (organizationName: string) =>
  hashDigest([organizationName, process.env.SHASUM_SECRET!]);

export const decodeStringAsNumber = (val: unknown) => Number(string(val));

/** Try a decoder and return a default value in case it fails or returns `undefined` */
export const withDefault = <T>(
  decoder: DecoderFunction<T | undefined>,
  defaultValue: T
): DecoderFunction<T> => {
  return (value: unknown) => {
    try {
      return decoder(value) ?? defaultValue;
    } catch {
      return defaultValue;
    }
  };
};
