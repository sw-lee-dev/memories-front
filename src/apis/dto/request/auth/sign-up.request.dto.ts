import { JoinType } from "src/types/aliases";

// interface: Sign up request body DTO //
export default interface SignUpRequestDto {
  userId: string;
  userPassword: string;
  name: string;
  address: string;
  detailAddress: string | null;
  joinType: JoinType;
  snsId?: string;
}