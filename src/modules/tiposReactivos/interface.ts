export interface Respuesta {
  texto: string
  correcta: boolean
}

export interface Formulario {
  instruccion: string
  respuestas: Respuesta[]
}
