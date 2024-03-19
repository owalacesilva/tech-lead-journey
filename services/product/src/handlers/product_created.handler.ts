import { IEventHandler } from '@nestjs/cqrs';
import { ClientProxy } from '@nestjs/microservices';

export class ProductCreatedEvent implements IEventHandler<ProductCreatedEvent> {
  constructor(private readonly clientProxy: ClientProxy) {}

  handle(event: ProductCreatedEvent) {
    this.clientProxy.send('product_created', event);
  }
}

1 criar produto
2 replicar produto