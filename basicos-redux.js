const redux = require('redux');

const createStore = redux.createStore;

const stateInicial = {
    usuarios : []
}

//reducer
const reducerInicial= (state = stateInicial,action)=> {
    if(action.type === 'AGREGAR_USUARIO'){
        return {
            ...state,
            usuarios: [...state.usuarios,action.nombre]
        };
    }
    if(action.type === 'MOSTRAR_USUARIOS'){
        return {
            ...state
        };
    }
    return state;
}


const store = createStore(reducerInicial);
console.log(store.getState());

//subscribe
store.subscribe(()=>{
    console.log('algo cambio');
    console.log(store.getState());
    
    
});

//dispatch
store.dispatch({ type: 'AGREGAR_USUARIO', nombre:'Juan' });
store.dispatch({ type: 'AGREGAR_USUARIO', nombre:'Test' });
store.dispatch({ type: 'MOSTRAR_USUARIOS', nombre:'Test' });