const process = require ('process')
const {buscarTarea,filtrarTareas,listarTareas,agregarTarea,actualizarTarea,eliminarTarea} = require('./tareas')

const comando = process.argv[2].toLocaleLowerCase();

switch (comando) {
    case 'buscar':
        let palabra = process.argv[3]
        buscarTarea(palabra);
         break;

    case 'listar':
        listarTareas()
        break;
    case 'agregar':
        let descripcion = process.argv[3];
        if (descripcion == undefined){
            return console.log('Debes especificar una tarea');
        }
        let nuevaTarea = {
            id: new Date().getTime(),
            descripcion,
            estado: 'pendiente'
        }
        agregarTarea(nuevaTarea)
        break;
        case 'actualizar':
                actualizarTarea(+process.argv[3])
            break;
            case undefined:
                console.log('Debes ingresar un comando');
                break;
            case 'eliminar':
                eliminarTarea(+process.argv[3])
                break;
            case 'filtrar':
                filtrarTareas(process.argv[3])
                break;
        default: console.log('Comando no válido');
            break;
}

