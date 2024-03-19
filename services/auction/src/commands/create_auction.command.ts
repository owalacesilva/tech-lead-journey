export class CreateAuctionCommand {
  constructor(
    public readonly interval: number,
    public readonly optOut: Date | string,
    public readonly products: Array<any>,
  ) {}
}
