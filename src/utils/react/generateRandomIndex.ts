// либо nanoid
import {assoc} from "../js/assoc";

export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const assignId = assoc('id', generateRandomString());

export const generateId = <O extends Object>(obj: object) => assignId(obj) // функция которая добавляет к объекту id