import { useState , useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Addmovie({movies,setMovies}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const p1=useRef()
  const p2=useRef()
  const p3=useRef()

  const add=() =>{
    setMovies([...movies,
      { title:p1.current.value,
        Rating:p2.current.value,
        posterURL:p3.current.value
    }
    ])
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <input type="text" ref={p1} placeholder="Title" />
          <input type="number" ref={p2} placeholder="Rating" />
          <input type="url" ref={p3} placeholder="Poster URL"  />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={add}>
            Add Movie
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addmovie;