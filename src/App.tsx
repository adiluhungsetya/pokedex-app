import React, { Suspense } from 'react';
import './App.css';
import Loader from './components/Loader';
import { ModalProvider } from './context/ModalProvider';
import NavBar from './components/NavBar';
import PokemonContainer from './components/PokemonContainer';
import Modal from './components/modal/Modal'

function App() {
  const elementRef = React.useRef<HTMLDivElement>(null);
  const [type, setType] = React.useState<string>("all");
  const [limit, setLimit] = React.useState<number>(30);
  const [hasMore, setHasMore] = React.useState<boolean>(true);

  const handleLoadButton = () => {
    setType("all")
    setLimit((prevState) => prevState + 30)
  }

  React.useEffect(() => {
    if(elementRef.current){
      elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
  
  return (
    <Suspense fallback={ <Loader/> }>
      <ModalProvider>
        <div className="wrapper">
          <h1 className="logo-pokemon">Pokédex</h1>
          <NavBar toggleType={setType}/>
          <PokemonContainer 
            type={type}  
            limit={limit}
            toggleLoad={setHasMore}
          />
          {
            hasMore && 
            <button className="load-more" onClick={handleLoadButton}>
              Load More
            </button>
          }
        </div>
        <Modal/>
      </ModalProvider>
    </Suspense>
  );
}

export default App;
