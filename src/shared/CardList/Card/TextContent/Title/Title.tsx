import React, {useState} from 'react';
import styles from './title.scss';
import {Post} from "../../../../Post";

interface ITitleProps {
  title: string;
}

export function Title({title}:ITitleProps) {
    const [isModelOpened, setIsModelOpened] = useState(false);


  return (
      <h2 className={styles.title}>
        <a href="#title_card" className={styles.postLink} onClick={(e)=>{
            e.preventDefault();
            setIsModelOpened(true);
        }}>{title}</a>

          {isModelOpened && (
              <Post score={56} author={"Dima"} created={1635610616} title={'Test'} onClose={()=>setIsModelOpened(false)}/>
          ) }
      </h2>

  );
}
