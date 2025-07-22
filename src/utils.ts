export const RouteTo = {
  // Static routes
  home: "/",
  overallResults: "/vysledky",

  // Dynamic routes
  organizationResults: (individualId: string) => `/organizace/${individualId}`,

  // External routes
  /** The URL of the Fillout form */
  form: "https://forms.fillout.com/t/rMoYry5Shaus",
  /** The URL to lead capture form */
  leadFormUrl:
    "https://crm.cesko.digital?entryPoint=leadCaptureForm&id=6862594be878a533b",
};
