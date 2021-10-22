import React from "react";

// compose функция которая выполняется справа налево
function compose<U>(...fns: Function[]) {
    return <E, >(initialValue: any): U =>
        fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

// compose функция которая выполняется слева направо
function pipe<U>(...fns: Function[]) {
    return <E, >(initialValue: any): U => fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
}

function pick<K extends string>(prop: K) {
    return <O extends Record<K, any>>(obj: O) => obj[prop];
}

const getValueNumber = pipe<number>(
    pick('currentTarget'),
    pick('value'),
    parseInt
)