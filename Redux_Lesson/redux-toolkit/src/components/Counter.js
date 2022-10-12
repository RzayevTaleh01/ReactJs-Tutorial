import React from "react";
import { useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.counter_store.value); //storeden statei cekmek ucun useSelector istifade edilir

  return <div>{count}</div>;
}
