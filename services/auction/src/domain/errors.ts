export class DomainError extends Error {
  constructor(name: string, message: string) {
    super();

    this.name = name;
    this.message = message;
  }
}

export class AuctionNotFoundError extends DomainError {
  constructor(guid: string) {
    super('[AuctionNotFound]', `Auction with guid ${guid} not found`);
  }
}
