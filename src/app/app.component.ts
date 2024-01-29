import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'microfrontend-master';
}

// En el componente de la aplicación principal
const loadMicrofrontend = async (microfrontendName: string) => {
  const script = document.createElement('script');
  script.src = `path/to/${microfrontendName}/main.js`;
  document.head.appendChild(script);
};

// Luego, puedes llamar a esta función para cargar un microfrontend específico cuando sea necesario.
loadMicrofrontend('cursos');
