import  { Fragment, useEffect, useRef } from "react";
import Button from "./Button";
import Card from "./Card";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0 left-0"
      onClick={props.onConfirm}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="error-modal">
      <Card className="w-[36rem] p-0 z-20">
        <header className="bg-red-700 p-4 text-white rounded-t-xl text-xl">
          {props.title}
        </header>
        <section className="p-4">{props.message}</section>
        <footer className="p-4 flex justify-end">
          <Button className="w-32" onClick={props.onConfirm}>
            Tamam
          </Button>
        </footer>
      </Card>
    </div>
  );
};

const ErrorModal = (props) => {
  const { onConfirm, error } = props;
  const { title, message } = error;
  // const cleanupRef = useRef();

  
  
  // useEffect(() => {
  //   return () => {
  //     cleanupRef.current = true;
  //   }
  // })


  // useEffect(() => {
  //   console.log("Modal oluşturdu!");    
   
  //   return () => {
  //     if(cleanupRef.current)
  //     {
  //       props.setWorkers([]);
  //       console.log("Modal kaldırıldı")
  //     }   
  //   };
  // },[cleanupRef, props]);

 



  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay message={message} title={title} onConfirm={onConfirm}/>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;


//refs ve useRef Hook