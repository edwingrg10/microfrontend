import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  menu: any[] = [
    {
      displayName: 'Cursos',
      route: '../cursos',
      iconName: 'home'
    },
    {
      displayName: 'Alumnos',
      route: '../alumnos',
      iconName: 'supervised_user_circle'
    },
    {
      displayName: 'Profesores',
      route: '../profesores',
      iconName: 'supervised_user_circle'
    }
  ];
  mobileQuery: MediaQueryList;
  username: string = '';
  private _mobileQueryListener: () => void;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

}
