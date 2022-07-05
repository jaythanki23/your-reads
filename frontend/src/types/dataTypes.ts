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
  publishedDate?: string | null | undefined
};

export interface bookStateType {
  display?: bookInfo[],
  error?: string,
  //methods
  search?: (text: string) => void,
  clear?: () => void
}