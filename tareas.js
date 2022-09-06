const tareas = require('./tareas.json')
const fs = require('fs');

const guardarJSON = (tareas) => {
    fs.writeFileSync('./tareas.json', JSON.stringify(tareas,null,3))
}


const mostrarTareas = (tareas) => {
    tareas.forEach((tarea,index) => {
        console.log(`${index + 1} - ${tarea.descripcion} - estado: ${tarea.estado} - ID: ${tarea.id}`);
    });
}


const listarTareas = () => {
        mostrarTareas(tareas)
    return null
}


const agregarTarea = (tarea) => {
    tareas.push(tarea);
    guardarJSON(tareas)
    return console.log('Tarea agregada');
}


const actualizarTarea = (id) => {
    
    let check = tareas.filter(tarea => tarea.id === id);
    if(check.length === 0){
        return console.log('ID inexistente');
    }
    
     let tareasActualizadas = tareas.map(tarea => {
        if(tarea.id === id && tarea.estado === "pendiente"){
            tarea.estado = "en proceso";
        }else if(tarea.id === id && tarea.estado === "en proceso"){
             tarea.estado = "completado";
             return tarea;
         }
         return tarea
     })
     guardarJSON(tareasActualizadas)
      return console.log('Tarea actualizada');
}


const eliminarTarea = (id) =>{
let check = tareas.filter(tarea => tarea.id === id);
    if(check.length === 0){
        return console.log('ID inexistente')}
    let tareasFiltradas = tareas.filter (tarea => {
        return tarea.id !== id
    })

    guardarJSON(tareasFiltradas)

return console.log('Tarea eliminada');
}


const filtrarTareas = (estado) => {
    let estadosValidos =['completado','en proceso','pendiente']
    if (!estadosValidos.includes(estado)){
        return 'El estado no es válido'
    }
    let tareasFiltradas = tareas.filter((tarea) => {
         return tarea.estado === estado
    })
    mostrarTareas(tareasFiltradas)
    return null
}


const buscarTarea = (palabra) => {

    let resultado = tareas.filter(tarea => {
        return tarea.descripcion.toLowerCase().includes(palabra.toLowerCase())
    })
    
    mostrarTareas(resultado)

}

module.exports = {
    agregarTarea,
    actualizarTarea,
    eliminarTarea,
    listarTareas,
    filtrarTareas,
    buscarTarea
}