import React, { useState } from 'react'
import { removeVehicle } from '../service/localstorage';
import { getListVehicles } from '../service/localstorage';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { toast } from "react-toastify";

export const VehicleItem = ({ vehicle, setVehicles }) => {
    const { id, marca, modelo, ano, placa, avaliacao } = vehicle;
    const navigate = useNavigate();

    const [showAlert, setShowAlert] = useState(false);

    const handleClose = () => {
        setShowAlert(false);
    };

    const confirmDeleteVehicle = () => {
        setShowAlert(true);
    }

    const deleteVehicle = () => {
        removeVehicle(id);
        setVehicles(getListVehicles());
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
        toast.success("Veículo excluído com sucesso!");
    }

    return (
        <>
            <tr>
                <th scope="row">{marca}</th>
                <td>{modelo}</td>
                <td>{ano}</td>
                <td>{placa}</td>
                <td>{avaliacao}</td>

                <td>
                    <i className="fa-solid fa-pen-to-square" onClick={() => navigate(`/editar-veiculo/${id}`)}></i>
                </td>
                <td>
                    <i className="fa-solid fa-trash" onClick={() => confirmDeleteVehicle()}></i>
                </td>
            </tr>
            {
                showAlert && (
                    <Modal show={showAlert} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Atenção!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Confirma a exclusão do veículo?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={deleteVehicle}>
                                Sim
                            </Button>
                            <Button className="btnConfirmCancel" variant="primary" onClick={handleClose}>
                                Cancelar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )
            }


        </>
    )
}
