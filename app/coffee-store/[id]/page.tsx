import React from "react";

export default function Page(props: { params: { id: string } }) {
  const {
    params: { id },
  } = props;
  return <div>Coffee store Page: {id}</div>;
}
