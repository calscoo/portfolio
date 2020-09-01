import {Component, HostListener, OnInit} from '@angular/core';
import { Prints } from '../../constants';
import { SalePrintService } from '../../services/sale-print.service';

@Component({
  selector: 'app-images',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  prints = Prints;

  constructor(public salePrintService: SalePrintService) { }

  ngOnInit(): void {
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick() {
    return false;
  }
}
