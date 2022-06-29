async function registrarUsuario(){

    let datos = {};
    datos.nombre = document.getElementById('txtNombre').value;
    datos.apellido = document.getElementById('txtApellido').value;
    datos.email = document.getElementById('txtEmail').value;

    datos.telefono = document.getElementById('txtTelefono').value;
    if (datos.telefono <= 9999999){
        alert('El número ingresado no corresponde a un Teléfono.');
        return;
    }

    datos.password = document.getElementById('txtPassword').value;

    let repetirPassword = document.getElementById('txtConfirmarPassword').value;

    if (repetirPassword != datos.password){
        alert('La contraseña que ingresaste es diferente.');
        return;
    }



    const request = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
      alert("La cuenta fue creada con exito!");
      window.location.href = 'login.html'

    }

//----------------------------------------------------------------------------------------------------------------------