import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50" 
      />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/pinheiroduda.png" />

        <strong>Eduarda Pinheiro</strong>
        <span>Intern Software Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}