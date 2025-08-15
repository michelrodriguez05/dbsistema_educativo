//Buscar estudiantes cuyo nombre comience con "M"

db.estudiantes.find({ nombre: { $regex: /^M/, $options: "i" } })

//Buscar directivos cuyo apellido termine en "ez"

db.directivos.find({ apellido: { $regex: /ez$/, $options: "i" } })


//Buscar materias que contengan la palabra "Básico" en el nombre

db.materias.find({ nombre_materia: { $regex: /Básico/i } })

//Buscar sedes que estén en ciudades que empiecen con "B"

db.sedes.find({ ciudad: { $regex: /^B/i } })

//Buscar estudiantes con correo que termine en @example.com

db.estudiantes.find({ correo: { $regex: /@example\.com$/i } })

//Buscar directivos con especialidad que contenga "Ciencias"

db.directivos.find({ especialidad: { $regex: /Ciencias/i } })

//Buscar cursos cuyo nombre empiece con "Inglés"

db.cursos.find({ nombre_curso: { $regex: /^Inglés/i } })

//Buscar estudiantes cuyo apellido contenga "ra" (en cualquier lugar)

db.estudiantes.find({ apellido: { $regex: /ra/i } })

//Buscar directivos cuyo cargo tenga la palabra "Académico"

db.directivos.find({ cargo: { $regex: /Académico/i } })


//Buscar materias cuyo código comience con "MAT"

db.materias.find({ codigo_materia: { $regex: /^MAT/i } })

//Estudiantes nacidos después de 2005

db.estudiantes.find({ fecha_nacimiento: { $gt: ISODate("2005-12-31") } })

//Directivos ingresados antes de 2020

db.directivos.find({ fecha_ingreso: { $lt: ISODate("2020-01-01") } })


//Materias con más de 3 créditos


db.materias.find({ creditos: { $gt: 3 } })

//Horarios que terminen antes de las 12:00

db.horarios.find({ hora_fin: { $lt: "12:00" } })


//Estudiantes registrados en el 2025

db.estudiantes.find({
    fecha_registro: {
      $gte: ISODate("2025-01-01"),
      $lte: ISODate("2025-12-31")
    }
  })

  //Directivos que no sean profesores 

  db.directivos.find({ tipo: { $ne: "Profesor" } })


  //Materias con exactamente 3 creditos

  db.materias.find({ creditos: 3 })


  //Estudiantes con documento entre "20000000" y "40000000"

  db.estudiantes.find({
    documento: { $gte: "20000000", $lte: "40000000" }
  })

  
//Horarios que comiencen después de las 09:00:

db.horarios.find({ hora_inicio: { $gt: "09:00" } })

//Sedes abiertas después de 2015:

db.sedes.find({ fecha_apertura: { $gt: ISODate("2015-01-01") } })


//Directivos con apellido terminado en "z" y que ingresaron antes de 2020:

db.directivos.find({
    apellido: { $regex: /z$/i },
    fecha_ingreso: { $lt: ISODate("2020-01-01") }
  })

//Materias con la palabra "Inglés" y más de 2 créditos:

db.materias.find({
    nombre_materia: { $regex: /Inglés/i },
    creditos: { $gt: 2 }
  })



//Cursos que contengan "Grupo A" y sean de la Sede Central:

db.cursos.find({
    nombre_curso: { $regex: /Grupo A/i },
    id_sede: ObjectId("689f9029f6a8495366175615")
  })

//Buscar estudiantes cuyo nombre empiece con "J" o "M" y que nacieron antes de 2005:

db.estudiantes.find({
    $or: [
      { nombre: { $regex: /^J/i } },
      { nombre: { $regex: /^M/i } }
    ],
    fecha_nacimiento: { $lt: ISODate("2005-01-01") }
  })

