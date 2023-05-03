import React, { Fragment } from "react";
export default function Header() {
  return (
    <Fragment >
      <header className='d-flex m-5  p-2 border-bottom'>
        <img
          height={50}

          width="auto"
          src="https://geekup.vn/Icons/geekup-logo-general.svg"
          alt=""
        />
        <h1  className='d-flex align-items-center mx-5 text-info'>Geekup Company</h1>
      </header>
    </Fragment>
  );
}
