import { Injectable } from '@angular/core';
import { Post } from './interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  arrPublicacion: Post[];

  constructor() {
    if (localStorage.getItem('arrPublicacion')) {
      this.arrPublicacion = JSON.parse(localStorage.getItem('arrPublicacion')!);
    } else {
      this.arrPublicacion = [
        {
          titulo: 'Viaje a Londres',
          texto: 'Un viaje muy bonito a Londres. Foto Catedral de St. Paul',
          autor: 'Fernando',
          imagen: 'https://cdn.pixabay.com/photo/2021/08/12/05/19/cathedral-6539937_960_720.jpg',
          fecha: '2021-11-18',
          categoria: 'viajes'
        }
      ];
    }
  }

  agregarPost(nuevaPublicacion: Post) {
    this.arrPublicacion.push(nuevaPublicacion);
    localStorage.setItem('arrPublicacion', JSON.stringify(this.arrPublicacion));
  }

  getAllPost(): Post[] {
    return this.arrPublicacion;
  }

  getPostByCategoria(categoria: string): Post[] {
    if (categoria === '') {
      return this.getAllPost();
    }
    return this.arrPublicacion.filter(post => post.categoria === categoria)
  }
}
