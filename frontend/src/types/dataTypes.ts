export interface ProviderProps {
  children: React.ReactNode
}

export type RegisterData = {
  name: string,
  email: string,
  image: string,
  givenName: string, 
  familyName: string
};

export interface StateType {
  id?: string | null | undefined,
  token?: string | null | undefined,
  name?: string | null | undefined,
  email?: string | null | undefined,
  image?: string | null | undefined,
  isAuthenticated?: boolean | null | undefined,
  loading?: boolean | null | undefined,
  error?: string | null | undefined,
  //methods
  register?: (data: RegisterData) => void,
  logout?: () => void,
  loadUser?: () => void
};

export interface bookInfo {
  id?: string | null | undefined,
  title?: string | null | undefined,
  authors?: string[] | null | undefined,
  categories?: string[] | null | undefined,
  image?: string | null | undefined,
  description?: string | null | undefined,
  pages?: number | null | undefined,
  publishedDate?: string | null | undefined,
  status?: string | null | undefined,
};

export interface bookResponse extends bookInfo {
  _id?: string | null | undefined,
  user?: string | null | undefined, 
}

export interface bookStateType {
  display?: bookInfo[],
  message?: string,
  read?: bookResponse[],
  reading?: bookResponse[],
  shelf?: bookResponse[],
  //methods
  search?: (text: string) => void,
  clear?: () => void,
  insertRead?: (data: bookInfo) => void,
  getRead?: (status: string) => void
  remove?: (id: any, status: any) => void,
  update?: (id: any, from: string, to: string) => void
}

export interface journeyInfo {
  book?: any,
  from?: number,
  to?: number,
  title?: string,
  date?: string,
  note?: string
}

export interface journeyStateType {
  journeys?: journeyResponse[],
  message?: string,
  //methods
  createJourney?: (data: journeyInfo) => void,
  getJourey?: (bookID: string) => void
}

export interface journeyResponse extends journeyInfo {
  _id?: string 
  user?: string
}

