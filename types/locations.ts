export interface Location {
  id: string;
  name: string;
  slug: string;
}

export interface LocationReq {
  name: string;
}

export interface UpdateLocationReq {
  id: string;
  name: string;
}
