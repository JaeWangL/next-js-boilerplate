type EventLogType<T> = {
  action: string;
  params: T;
};

export const pageviewLog = (url: string): void => {
  // @ts-ignore
  window.gtag('config', process.env.GOOGLE_ANALYTICS_ID, {
    page_path: url,
  });
};

export const eventLog = <T>(type: EventLogType<T>): void => {
  // @ts-ignore
  window.gtag('event', type.action, {
    event_category: 'Custom Metric',
    non_interaction: true, // avoids affecting bounce rate.
    ...type.params,
  });
};
