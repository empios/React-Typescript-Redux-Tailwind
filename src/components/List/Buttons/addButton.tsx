import React, {MouseEvent, useState} from 'react';
import Modal from '../Modal/Modal';

type AddButtonProps = {
};


const AddButton: React.FC<AddButtonProps> = ():JSX.Element => {
    const [clicked, setClicked] = useState(false);
    const openModal = () => {
        setClicked(true);
    }
    const closeModal = () => setClicked(false)
    return (
        <>
            <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 mx-10 my-5 font-bold rounded" type="button" onClick={openModal}>Add</button>
            <Modal action="Add" clicked={clicked} close={closeModal}/>
        </>
    )
}

export default AddButton;