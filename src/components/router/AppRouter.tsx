import { render } from "@testing-library/react";
import { Component, FC, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

/* interface routesParameter {
  element: Component,
  path: string,
  isPrivate: boolean
}

export const AppRouter: FC<routesParameter> = ({element, path, isPrivate, ...props}) => {

  const renderPath = () => {
    return (isPrivate ? (<>Por favor inicie sesión</>) : (<>{element}</>)); 
  };

  return (
    <Route path={path} element={element}/>
  )
} */