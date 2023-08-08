import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function LogIn() {
  const nav = useNavigate();

  const logIn = () => {
    const password = document.getElementById('password').value;
  
    fetch(`http://3.126.91.66:3000/GetUserData?password=${password}`, {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      method: 'get',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        nav('/allergyinfo', { state: { user: data } }); 
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <div>
      <h1>ברוכים הבאים</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        5

        PARAGRAPHS

        COPY
        DISCOVER MORE!
        Check out our new font generator and level up your social bios. Need more? Head over to Glyphy for all the fancy fonts and cool symbols you could ever imagine.

        And don’t forget, we have images, plugins and the ultimate guide to all flavors of lorem ipsum.


        What is Lorem Ipsum?
        From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.

        Lorem ipsum used in a magazine layout
        MAGAZINE LAYOUT WITH LOREM IPSUM
        HISTORY, PURPOSE AND USAGE
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
      </p>
      <input id="password" type="text" placeholder="הכנס סיסמא זמנית" /><br />
      <button onClick={() => logIn()}>היכנס</button>
    </div>
  );
}
