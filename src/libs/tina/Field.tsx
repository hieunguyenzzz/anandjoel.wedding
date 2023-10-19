"use client";
import { tinaField } from "tinacms/dist/react";
import { useSource } from '../source';

export const Field = ({
  source: _source, children, className, name: _name,
}: {
  source?: any;
  children?: React.ReactNode;
  className?: string;
  name: string;
}) => {
  const name = _name;
  const source = useSource();
  const dataTinaField = tinaField(_source || source, name);
  return <div className={className} data-tina-field={dataTinaField}>
    {children}
  </div>;
};
