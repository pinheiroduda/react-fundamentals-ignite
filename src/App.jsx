import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/pinheiroduda.png",
      name: "Eduarda Pinheiro",
      role: "Intern Software Developer at CI&T"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋" },
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date('2022-07-28 11:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/pinheiroduda.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋" },
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date('2022-07-29 10:00:00'),
  }
]

function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post />
          })}
        </main>
      </div>
    </>
  )
}

export default App
 