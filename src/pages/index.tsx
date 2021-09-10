// SPA
// SSR
// SSG

export default function Home(props) {
  // * SPA
  /* useEffect(() => {
    fetch('http://localhost:3333/episodes')
    .then(res => res.json())
    .then(data => console.log(data))
  }, []); // hook responsável por disparar algo sempre que alguma coisa mudar na aplicação */

    
  return (
    <h1></h1>
  )
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json();

  return {
    props: {
      episodes: data,
    }
  }
}