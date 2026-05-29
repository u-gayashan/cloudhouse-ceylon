export type RegionPin = {
  id: string;
  name: string;
  x: string;
  y: string;
};

export type CeylonMapProps = {
  activeRegion?: string | null;
  onRegionHover?: (id: string | null) => void;
};

export type MarqueeProps = {
  items: string[];
};
