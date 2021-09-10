export default function Home(props) {
  // * SPA - sigle page application
  /* useEffect(() => {
    fetch('http://localhost:3333/episodes')
    .then(res => res.json())
    .then(data => console.log(data))
  }, []); // hook responsável por disparar algo sempre que alguma coisa mudar na aplicação */
    
  return (
    <h1>{JSON.stringify(props.episodes)}</h1>
    
  )
}

// * SSR - server-side redering
/* export async function getServerSideProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json();

  return {
    props: {
      episodes: data,
    }
  }
} */

// * SSG - static site geneartion
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}