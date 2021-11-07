import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';
import { Container, Error } from '../ActivyTable/style';

interface NewCourseunitProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface NewCourseunitData {
    name: string;
    description: string;
}

export function NewCourseUnitModal({ isOpen, onRequestClose }: NewCourseunitProps) {

    const { register, handleSubmit, formState: { errors } } = useForm<NewCourseunitData>();

    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)));

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-ovelay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar Unidade Curricular</h2>
                <button
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <FiX size={20} />
                </button>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="Nome"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <Error>O preenchimento do campo é obrigatório</Error>}
                    <input
                        type="text"
                        placeholder="Descrição"
                        {...register("description", { required: true })}
                    />
                    {errors.description && <Error>O preenchimento do campo é obrigatório</Error>}
                </form>
            </Container>

        </Modal>
    )
}