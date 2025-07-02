import { promises as fs } from "fs";
import path from "path";

/** The URL of the Fillout form */
export const formUrl = "https://forms.fillout.com/t/rMoYry5Shaus";

/** The URL to lead capture form */
export const leadFormUrl =
  "https://crm.cesko.digital?entryPoint=leadCaptureForm&id=6862594be878a533b";

/** The Markdoc source of the result page */
export const resultsMarkdocSource = async () =>
  fs.readFile(path.join(process.cwd(), "/components/results.md"), "utf-8");
