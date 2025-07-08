import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { Button } from '../../../shared/components/button/button.component';
import { DxButtonComponent } from 'devextreme-angular';

@Component({
  selector: 'app-asset-hierarchy',
  imports: [CardComponent, Button, DxButtonComponent],
  templateUrl: './asset-hierarchy.component.html',
  styleUrl: './asset-hierarchy.component.scss',
  standalone: true
})
export class AssetHierarchyComponent {

}
