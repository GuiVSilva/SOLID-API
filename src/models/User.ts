import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";

interface IUserProps {
  name: string;
  email: string;
}

export class User {
  public readonly id: string;
  public name: string;
  public email: string;
  public passwordHash: string;

  constructor(props: IUserProps, id?: string) {
    this.id = id ?? uuidv4();
    this.name = props.name;
    this.email = props.email;
    this.passwordHash = "";
  }

  async comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.passwordHash);
  }

  async setPassword(password: string): Promise<void> {
    this.passwordHash = await bcrypt.hash(password, 8);
  }
}
