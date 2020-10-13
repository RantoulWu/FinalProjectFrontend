import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../models/product';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform{
  transform(products: Product[], category: string): Product[] {
    if (!category){
      return products;
    }
    return category === '0' ? products : products.filter(p => p.usecategory === category);
  }
}
