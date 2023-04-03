export class UserModel {
  id: number;
  name: string;
  email: string;
  role: string;
  created_at: Date;
  updated_at: Date;

  constructor(
    id: number,
    name: string,
    email: string,
    role: string,
    created_at: Date,
    updated_at: Date
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
