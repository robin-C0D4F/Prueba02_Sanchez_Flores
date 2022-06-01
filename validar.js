/**
 Funcion de validacion
 */
function validar()
{
    var rut = document.formulario.txt_rut.value
    var nombre =document.formulario.txt_nombre.value
    var comentario = document.formulario.txt_comentario.value
    var comuna = document.formulario.opt_comuna.value
    var telefono = document.formulario.txt_telefono.value
    var genero = document.formulario.rbt_genero.value

    /* Secuencia */
    if (rut.length<9 || rut.length>11)
        {
            alert('Rut no valido, verifica si es un rut valido.')
            document.formula.txt_rut.focus()
            return false
        }
    
    if (nombre.length<2)
        {
            alert('Nombre no valido')
            document.formulario.txt_nombre.focus()
            return false
        }
    
    if(genero==0)
        {
            alert('Debe seleccionar su género')
            document.formulario.rbt_genero.focus()
        }

    if(telefono.length==0)
        {
            alert('Por favor ingrese un numero de teléfono.')
            document.formulario.txt_telefono.focus()
            return false
        }

    if (telefono.length>10 || telefono.length<=8)
        {
            alert('Telefono no valido, el telefono debe tener 9 números')
            document.formulario.txt_telefono.focus()
            return false
            
        }
    if(telefono.charAt(0)!=='9')
        {
            alert('El numero de telefono debe comenzar con 9')
            document.formulario.txt_telefono.focus()
            return false
        }
    

    if (comuna==0)
        {
            alert('Por favor seleccione una comuna')
            document.formulario.opt_comuna.focus()
            return false
        }

    if (comentario.length<10)
        {
            alert('Su comentario debe ser mayor a 10 caracteres')
            document.formula.txt_comentario.focus()
            return false
        }

        alert('Su consulta ha sido concretada, ¡Gracias por su opinión!')
        location.href="mainindex.html"
}   