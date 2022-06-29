
$(window).on("load resize", function() {
cargarUsuarios();
actualizarEmailDeUsuario();
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();


//----------------------------------------------------------------------------------------------------------------------

/*function actualizarNombreUsuario() {
    document.getElementById("nombre-usuario").outerHTML = localStorage.nombre;
}*/


//----------------------------------------------------------------------------------------------------------------------

function actualizarEmailDeUsuario() {
    document.getElementById("txt-email-usuario").innerHTML = localStorage.email;
}

//----------------------------------------------------------------------------------------------------------------------


async function cargarUsuarios(){

    const request = await fetch('api/usuarios', {
        method: 'GET',
        headers: getHeaders()
    });
    const usuarios = await request.json();




//----------------------------------------------------------------------------------------------------------------------


    let listadoHtml = '';

    for (let usuario of usuarios){
    let telefonoTexto = usuario.telefono == null ? '-' : usuario.telefono;
    let botonEliminar = '<a href="#" onclick="eliminarUsuario('+usuario.id+')" class="popup-with-zoom-anim" href="#small-dialog">Eliminar</a>';
    let usuarioHtml = '<tr><td>'+usuario.id+'</td><td>'+usuario.nombre+' '+usuario.apellido+'</td><td>'+usuario.email
                    +'</td><td>'+telefonoTexto
                    +'</td><td>'+botonEliminar+'</td></tr>';

    listadoHtml += usuarioHtml;
    }

document.querySelector('#usuarios tbody').outerHTML = listadoHtml;

}


//----------------------------------------------------------------------------------------------------------------------


function getHeaders() {
    return {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Authorization': localStorage.token
   };
}




//----------------------------------------------------------------------------------------------------------------------


async function eliminarUsuario(id) {

    if (!confirm('¿Desea eliminar este usuario?')){
        return;
    }

    const request = await fetch('api/usuarios/' + id, {
            method: 'DELETE',
            headers: getHeaders()
        });

    location.reload();
}
