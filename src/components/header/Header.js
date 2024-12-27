import React from "react";

export default function Header() {
  let isSign = true;
  return (
    <header>
      <div className="Logo">
        <a href="#">Main page</a>
          {isSign && (
            <ul>
              <li>
                <a href="#"> Register</a>
              </li>
              <li>
                <a href="#">Sign in</a>
              </li>
            </ul>
          )}
         {!isSign && (
          <ul>
            <li>
            <a href="#">About us</a>
          </li>
          </ul>
         )}
      </div>
    </header>
  );
}
