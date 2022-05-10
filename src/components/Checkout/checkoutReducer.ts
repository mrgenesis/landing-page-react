
export default function checkoutReducer(state: any, action: any) {
  switch(action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [state.step]: { ...state[state.step], ...action.payload }};
    case 'SET_STEP':
      return { ...state, step: action?.payload?.step || 'error' };
    default:
      throw new Error(`[checkoutReducer diz]: Opção "${action.type}" desconhecida.`);
  }
}