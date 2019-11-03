/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import React, { useCallback, useState } from 'react';
import Modal from './Modal';

function Card({ name, url, films, homeworld, species, gender, birthYear, appElement }) {
  const firstLetter = name[0];
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
    appElement.current.classList.add('blur');
  }, [setIsOpen, appElement]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    appElement.current.classList.remove('blur');
    appElement.current.classList.add('blurOut');
    setTimeout(() => appElement.current.classList.remove('blurOut'), 2100);
  }, [setIsOpen, appElement]);

  return (
    <>
      <li>
        <div className="card fadeIn" onClick={openModal}>
          <div className="avatarWrapper">
            <div className="avatar">{ firstLetter }</div>
            <p className="avatarName">{ name }</p>
            <p className="avatarSpecies">Species</p>
          </div>
        </div>
      </li>
      {isOpen && (
      <Modal
        onClose={closeModal}
        name={name}
        films={films}
        homeworld={homeworld}
        species={species}
        gender={gender}
        birthYear={birthYear}
        url={url}
      />
      )}
    </>
  );
}

export default Card;
