const conjunto1 = new WeakSet();
    let usuario1 = {
      nombre: "juan",
      puntos: 200
    };
    conjunto1.add(usuario1);
    console.log(conjunto1.has(usuario1)); //true
    usuario1 = null;
