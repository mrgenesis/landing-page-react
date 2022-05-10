
import React, { createContext } from 'react';

type CheckoutState = any;
type CheckoutAction = any;

const initState: CheckoutState = {};
const temporaryFunc = (action: any) => void {}; // esta funcção deve ser substituida pela retornada em useReducer

export const checkoutContext = createContext<[state: CheckoutState, dipatch: React.Dispatch<CheckoutAction>]>([initState, temporaryFunc]);
