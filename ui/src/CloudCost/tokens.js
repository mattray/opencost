const windowOptions = [
  { name: "Today", value: "today" },
  { name: "Yesterday", value: "yesterday" },
  { name: "Week-to-date", value: "week" },
  { name: "Month-to-date", value: "month" },
  { name: "Last week", value: "lastweek" },
  // { name: "Last month", value: "lastmonth" },
  { name: "Last 24 hours", value: "24h" },
  { name: "Last 48 hours", value: "48h" },
  { name: "Last 7 days", value: "7d" },
  { name: "Last 2 weeks", value: "14d" },
  { name: "Last 30 days", value: "30d" },
  // { name: "Last 60 days", value: "60d" },
  // { name: "Last 90 days", value: "90d" },
];

const aggregationOptions = [
  { name: "Account", value: "accountID" },
  { name: "Invoice Entity", value: "invoiceEntityID" },
  { name: "Provider", value: "provider" },
  { name: "Service ", value: "service" },
  { name: "Category", value: "category" },
  { name: "Item", value: "item" },
];

const costMetricOptions = [
  { name: "Amortized Net Cost", value: "AmortizedNetCost" },
  { name: "List Cost", value: "ListCost" },
  { name: "Invoiced Cost", value: "InvoicedCost" },
  { name: "Amortized Cost", value: "AmortizedCost" },
];

const aggMap = {
  invoiceEntityID: "Invoice Entity",
  provider: "Provider",
  service: "Service",
  accountID: "Account",
};

const costMetricToPropName = {
  AmortizedNetCost: "amortizedNetCost",
  AmortizedCost: "amortizedCost",
  ListCost: "listCost",
  NetCost: "netCost",
  InvoicedCost: "invoicedCost",
};

export {
  windowOptions,
  aggregationOptions,
  costMetricOptions,
  aggMap,
  costMetricToPropName,
};
