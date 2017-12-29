
import { Injectable  } from '@angular/core';
import { IProduct } from '../interface/app.product';

@Injectable()
export class ProductService {

    getProductList(): IProduct[] {
        return [
            {
              name: 'IPhone x',
              price: 10,
              image: 'https://openclipart.org/download/133333/payPhone.svg',
              rating: 2
            },
            {
              name: 'Samsung s8',
              price: 20,
              image: 'https://openclipart.org/download/172958/smart-phone.svg',
              rating: 3
            },
            {
              name: 'Nokia',
              price: 30,
              image: 'https://openclipart.org/download/151093/1311346812.svg',
              rating: 5
            },
            {
                name: 'my',
                price: 30,
                image: 'https://openclipart.org/download/151093/1311346812.svg',
                rating: 5
              }
          ];
    }
}
