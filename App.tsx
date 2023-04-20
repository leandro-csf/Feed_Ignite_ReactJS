import { Header } from "../components/Header"
import { Post } from "../components/Post"
import { Sidebar } from "../components/Sidebar"
import "./global.css"
import styles from "./App.module.css"



const posts =  [
  {
    id: 1,
    author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/128147709?v=4',
        name: 'Leandro Cesar',
        role: 'Analista de Sistemas',
    },
    content: [
        {type: `paragraph`, content:`Fala galeraa 👋`},
        {type: `paragraph`, content:`Acabei de fazer este projeto no app da RocketSeat!!`},
        {type: `paragraph`, content:`Se trata de um projeto de um Feed feito no React!!`},
        {type: `link`, content:`me siga na rede social @leandro.csf`},
    ],
    
    publishedAt: new Date(`2022-05-03 20:00:00`),
},  

{
    id: 2,
    author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'Analista de Sistemas',
    },
    content: [
        {type: `paragraph`, content:`Fala galera`},
        {type: `paragraph`, content:`Acabei de subir mais um projeto no meu portifa.`},
        {type: `paragraph`, content:`É um projeto que fiz no NLW Return, evento da Rocketseat.`},
        {type: `link`, content:`jane.design/doctorcare`},
    ],
    
    publishedAt: new Date(`2022-05-10 20:00:00`),
},  
]

function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>

        <aside>
         <Sidebar/>
        </aside>

        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            
            />)
          })}
        </main>

      </div>


    </div>

  )
}

export default App
