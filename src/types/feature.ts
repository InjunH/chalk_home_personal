export interface Stat {
  value: string;
  unit: string;
  label: string;
  sub_label?: string;
  icon: string;
}

export interface FeatureValueData {
  subtitle: string;
  stats: Stat[];
}