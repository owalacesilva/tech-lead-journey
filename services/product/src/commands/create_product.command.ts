export class CreateProductCommand {
  constructor(
    public readonly title: string,
    public readonly weight: number,
  ) {}
}
