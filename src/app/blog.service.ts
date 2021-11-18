import { Injectable } from '@angular/core';
import { Post } from './interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  arrPublicacion: Post[];

  constructor() {
    this.arrPublicacion = [
      { titulo: 'Viaje a Londres', texto: 'Un viaje muy bonito a Londres. Foto Catedral de St. Paul', autor: 'Fernando', imagen: 'https://cdn.pixabay.com/photo/2021/08/12/05/19/cathedral-6539937_960_720.jpg', fecha: '18/11/2021', categoria: 'Viajes' }
    ];
  }

  agregarPost(nuevaPublicacion: Post) {
    this.arrPublicacion.push(nuevaPublicacion);
  }

  getAllPost(): Post[] {
    return this.arrPublicacion;
  }

  getPostByCategoria() { }
}
