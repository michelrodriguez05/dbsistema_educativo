# basedb_tematica_libre
Esta es una base de datos hecha en Mongodb que representa el sistema educativo de un colegio.
Incluye colecciones para gestionar estudiantes, cursos, materias, directivos, horarios, inscripciones y sedes.


## 🚀 Cómo crear la base de datos

1. Abrir **MongoDB Compass** o usar la terminal con **MongoDB Shell**.
2. Crear la base de datos:
   ```js
   use sistema_educativo
   ````

## 🔍 Consultas MongoDB

A continuación se presentan **25 consultas** realizadas sobre las colecciones del sistema.  
Cada una incluye la **expresión** y una **explicación de su utilidad**.

---

### 1. Buscar estudiantes cuyo nombre comience con "M"
```js
db.estudiantes.find({ nombre: { $regex: /^M/, $options: "i" } })
````
**📌 Explicación:** Filtra estudiantes cuyos nombres inician con "M". Útil para generar listados alfabéticos.

### 2. Buscar directivos cuyo apellido termine en "ez"
````js
db.directivos.find({ apellido: { $regex: /ez$/, $options: "i" } })
````


**📌 Explicación:** Encuentra directivos con apellidos comunes como "Gómez" o "Hernández". Útil para clasificar registros.

### 3. Buscar materias que contengan la palabra "Básico"
````js
db.materias.find({ nombre_materia: { $regex: /Básico/i } })
````

**📌 Explicación:** Devuelve todas las materias de nivel básico. Útil para identificar cursos introductorios.

### 4. Buscar sedes en ciudades que empiecen con "B"
````js
db.sedes.find({ ciudad: { $regex: /^B/i } })
````

**📌 Explicación:** Permite localizar sedes en ciudades como Bogotá o Bucaramanga.

### 5. Buscar estudiantes con correos que terminen en @example.com
````js
db.estudiantes.find({ correo: { $regex: /@example\.com$/i } })
````

**📌 Explicación:** Filtra estudiantes con un dominio de correo específico. Útil para revisar correos institucionales.

### 6. Buscar directivos con especialidad que contenga "Ciencias"
````js
db.directivos.find({ especialidad: { $regex: /Ciencias/i } })
````

**📌 Explicación:** Lista directivos especializados en ciencias. Facilita la asignación académica.

### 7. Buscar cursos cuyo nombre empiece con "Inglés"
````js
db.cursos.find({ nombre_curso: { $regex: /^Inglés/i } })
````

**📌 Explicación:** Filtra cursos relacionados con el idioma inglés. Útil para separar áreas lingüísticas.

### 8. Buscar estudiantes cuyo apellido contenga "ra"
````js
db.estudiantes.find({ apellido: { $regex: /ra/i } })
````

**📌 Explicación:** Encuentra estudiantes con coincidencias de letras en su apellido. Facilita búsquedas flexibles.

### 9. Buscar directivos cuyo cargo tenga la palabra "Académico"
````js
db.directivos.find({ cargo: { $regex: /Académico/i } })
````

**📌 Explicación:** Muestra directivos vinculados a la parte académica. Útil para separar roles.

### 10. Buscar materias cuyo código comience con "MAT"
````js
db.materias.find({ codigo_materia: { $regex: /^MAT/i } })
````

**📌 Explicación:** Identifica materias de matemáticas o codificadas con "MAT". Facilita clasificación.

### 11. Estudiantes nacidos después de 2005
````js
db.estudiantes.find({ fecha_nacimiento: { $gt: ISODate("2005-12-31") } })
````

**📌 Explicación:** Obtiene estudiantes menores de edad. Útil para reportes de rangos etarios.

### 12. Directivos ingresados antes de 2020
````js
db.directivos.find({ fecha_ingreso: { $lt: ISODate("2020-01-01") } })
````

**📌 Explicación:** Identifica directivos con más antigüedad en la institución.

### 13. Materias con más de 3 créditos
````js
db.materias.find({ creditos: { $gt: 3 } })
````

**📌 Explicación:** Filtra materias con alta carga académica. Útil para organizar planes de estudio.

### 14. Horarios que terminen antes de las 12:00
````js
db.horarios.find({ hora_fin: { $lt: "12:00" } })
````

**📌 Explicación:** Lista los horarios de la mañana. Útil para separar jornadas académicas.

### 15. Estudiantes registrados en el 2025
````js
db.estudiantes.find({
  fecha_registro: {
    $gte: ISODate("2025-01-01"),
    $lte: ISODate("2025-12-31")
  }
})
````

**📌 Explicación:** Permite ver estudiantes que ingresaron en el año actual.

### 16. Directivos que no sean profesores
````js
db.directivos.find({ tipo: { $ne: "Profesor" } })
````

**📌 Explicación:** Identifica directivos con roles administrativos.

### 17. Materias con exactamente 3 créditos
````js
db.materias.find({ creditos: 3 })
````

**📌 Explicación:** Útil para agrupar materias estándar de mediana carga.

### 18. Estudiantes con documento entre "20000000" y "40000000"
````js
db.estudiantes.find({ documento: { $gte: "20000000", $lte: "40000000" } })
````

**📌 Explicación:** Busca estudiantes por rango de identificación. Útil para filtros administrativos.

### 19. Horarios que comiencen después de las 09:00
````js
db.horarios.find({ hora_inicio: { $gt: "09:00" } })
````

**📌 Explicación:** Lista horarios de media mañana en adelante. Facilita planeación de jornadas.

### 20. Sedes abiertas después de 2015
````js
db.sedes.find({ fecha_apertura: { $gt: ISODate("2015-01-01") } })
````

**📌 Explicación:** Identifica sedes recientes. Útil para evaluar crecimiento institucional.

### 21. Directivos con apellido terminado en "z" y que ingresaron antes de 2020
````js
db.directivos.find({
  apellido: { $regex: /z$/i },
  fecha_ingreso: { $lt: ISODate("2020-01-01") }
})
````

**📌 Explicación:** Filtra directivos antiguos con apellido específico. Útil para búsquedas cruzadas.

### 22. Materias con la palabra "Inglés" y más de 2 créditos
````js
db.materias.find({
  nombre_materia: { $regex: /Inglés/i },
  creditos: { $gt: 2 }
})
````

**📌 Explicación:** Muestra materias de inglés avanzadas. Útil para planes de idiomas.

### 23. Cursos que contengan "Grupo A" y sean de la Sede Central
````js
db.cursos.find({
  nombre_curso: { $regex: /Grupo A/i },
  id_sede: ObjectId("689f9029f6a8495366175615")
})
````

**📌 Explicación:** Filtra cursos por grupo y sede específica. Útil para gestión administrativa.

### 24. Buscar estudiantes cuyo nombre empiece con "J" o "M" y que nacieron antes de 2005
````js
db.estudiantes.find({
  $or: [
    { nombre: { $regex: /^J/i } },
    { nombre: { $regex: /^M/i } }
  ],
  fecha_nacimiento: { $lt: ISODate("2005-01-01") }
})
````

**📌 Explicación:** Filtra estudiantes por inicial del nombre y año de nacimiento. Útil para segmentar población.

### 25. Estudiantes inscritos en más de un curso
````js
db.inscripciones.aggregate([
  { $group: { _id: "$id_estudiante", total: { $sum: 1 } } },
  { $match: { total: { $gt: 1 } } }
])
````

**📌 Explicación:** Encuentra estudiantes con múltiples inscripciones. Útil para identificar sobrecarga académica.

## ✨ Autor

**Desarrollado por Michel Rodriguez**