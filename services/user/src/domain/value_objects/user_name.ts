export class UserName {
  public readonly first: string;
  public readonly last: string;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  public static create(name: string) {
    return new UserName(name.split(' ')[0], name.split(' ')[1]);
  }
}
