import React, {useState} from 'react';
import {Article} from "../articleReducer";
import Modal from '../Modal/Modal';


type EditButtonProps = {
    article: Article,
};

const EditButton: React.FC<EditButtonProps> = (props:EditButtonProps):JSX.Element => {
    const [clicked, setClicked] = useState(false);
    const {article} = props
    const openModal = () => {
        setClicked(true);
    }
    const closeModal = () => setClicked(false)
    const editNote = () => {
        console.log(props.article)
    }
    return (
        <>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={openModal}>Edit</button>
        <Modal action="Edit" clicked={clicked} close={closeModal} article={article} />
        </>
    )
}

export default EditButton;