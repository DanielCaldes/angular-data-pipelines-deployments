import { CommonModule } from '@angular/common';
import { Component, OnInit, signal} from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Product } from '../../models/product'
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatExpansionModule, MatIconModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent implements OnInit{
  originalProducts : Product[];
  filteredProducts : Product[];
  uniqueCategories : string[];
  categories = new FormControl<string[]>([]);
  readonly panelOpenState = signal(false);
  selectedSort = 'title-asc';

  constructor(private storeService : StoreService){
    this.originalProducts = [];
    this.filteredProducts = [];
    this.uniqueCategories = [];
  }

  ngOnInit(){
    this.storeService.getProducts().subscribe((data)=>{
      this.originalProducts = data;
      this.filteredProducts = data;
      this.uniqueCategories = [...new Set(this.originalProducts.map(p => p.category))];
      this.onSortChange(this.selectedSort);
    });

    this.categories.valueChanges.subscribe(selectedCategories => {
      if(selectedCategories?.length){
        this.filterByCategories(selectedCategories);
      }
      else
      {
        this.filteredProducts = this.originalProducts;
      }
    })
  }

  filterByCategories(categories: string[]){
    this.filteredProducts = this.originalProducts.filter(p => categories.includes(p.category));
  }

  onSortChange(sortType: string) {
    switch (sortType) {
      case 'title-asc':
        this.filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        this.filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'price-asc':
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating-asc':
        this.filteredProducts.sort((a, b) => a.rating.rate - b.rating.rate);
        break;
      case 'rating-desc':
        this.filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
    }
  }
}
