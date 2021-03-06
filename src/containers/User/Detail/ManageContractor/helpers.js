export const typeOptions = [
  "No type defined",
  "Direct",
  "Supervisor",
  "Sub Contractor",
  "Nominee",
  "Revoked",
  "Temp. Contractor",
  "Revoked Temp."
];

export const domainOptions = [
  "No domain defined",
  "Development",
  "Marketing",
  "Design",
  "Research",
  "Documentation",
  "Community Management"
];

export const selectTypeOptions = typeOptions
  .map((op, idx) => ({
    value: idx,
    label: op
  }))
  .filter((option) => option.value !== 4); // filter out 'Nominee' from select possible values

export const selectDomainOptions = domainOptions.map((op, idx) => ({
  value: idx,
  label: op
}));
