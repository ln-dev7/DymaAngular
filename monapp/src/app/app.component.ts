import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public fruit: string = '';
  public fruits: string[] = ['pomme', 'poire', 'banane'];
  public addFruit(): void {
    this.fruits.push(this.fruit);
    this.fruit = '';
  }
  public deleteFruit(fruit: string): void {
    this.fruits = this.fruits.filter((f: string) => f !== fruit);
  }
  //
  title = 'monapp';
  public content = 'Mon contenu';
  public displayButton = true;
  public color = 'red';
  public inputText = 'text';

  public users: Array<{name: string, age: number }> = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 40 }
  ];
}
