import { useNavigate, useParams } from 'react-router-dom';
import { addVehicle, getVehicleById } from '../service/localstorage';
import { useForm } from './../hooks/useForm';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { editVehicle } from './../service/localstorage';
import { toast } from "react-toastify";

export const VehicleForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        marca: '',
        modelo: '',
        ano: '',
        placa: '',
        avaliacao: '',
    });

    useEffect(() => {
        if (id) {
            const vehicle = getVehicleById(id);
            setForm(vehicle);
        }
    }, [id]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValues.marca === "") {
            toast.warning("O campo marca é obrigatório!");
        }


        else if (inputValues.modelo === "") {
            toast.warning("O campo modelo é obrigatório.");
        }

        else if (inputValues.ano === "") {
            toast.warning("O campo ano é obrigatório.");
        }

        else if (inputValues.ano.length != 4) {
            toast.warning("O ano deve conter 4 dígitos.");
        }

        else if (inputValues.placa === "") {
            toast.warning("O campo placa é obrigatório.");
        }

        else if (inputValues.placa.length != 7) {
            toast.warning("A placa deve conter 7 digítos.");
        }

        else if (inputValues.avaliacao === "") {
            toast.warning("Avalie o estado do veículo.");
        }
        else {
            id ? editVehicle(id, inputValues) : addVehicle({ id: uuid(), ...inputValues });
            toast.success("Operação realizada com sucesso!");
            setTimeout(() => {
                resetForm();
            }, 2000);
        }

    };

    return (
        <div>

            <div className="d-flex my-5 justify-content-between">
                <i className="fa-solid fa-arrow-left" onClick={() => navigate("/")}></i>
            </div>
            <div style={{ marginTop: -50 }}>
                <h1 className="my-5 text-center">{id ? "Editar" : "Adicionar novo"} veículo</h1>

                <form onSubmit={handleSubmit} style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text customMarca" htmlFor="marcaInput">Marca</span>
                        </div>
                        <input
                            name="marca"
                            type="text"
                            value={inputValues.marca}
                            onChange={handleInputChange}
                            className="form-control customInputMarca"
                            placeholder="Exemplo: Ford"
                            aria-label="Marca"
                            id="marcaInput"
                        />

                    </div>

                    <div className="input-group mb-4">

                        <div className="input-group-prepend" >
                            <span className="input-group-text customModelo" htmlFor="modeloInput">Modelo</span>
                        </div>
                        <input
                            name="modelo"
                            type="text"
                            value={inputValues.modelo}
                            onChange={handleInputChange}
                            className="form-control customInputModelo"
                            placeholder="Exemplo: Focus"
                            aria-label="Modelo"
                            id="modeloInput"
                        />
                    </div>

                    <div className="input-group mb-4">

                        <div className="input-group-prepend" >
                            <span className="input-group-text customAno" htmlFor="anoInput">Ano</span>
                        </div>
                        <input
                            name="ano"
                            type="number"
                            value={inputValues.ano}
                            onChange={handleInputChange}
                            className="form-control customInputAno"
                            placeholder="Exemplo: 2012"
                            aria-label="Ano"
                            id="anoInput"
                        />
                    </div>



                    <div className="input-group mb-4">

                        <div className="input-group-prepend" >
                            <span className="input-group-text customPlaca" htmlFor="placaInput">Placa</span>
                        </div>
                        <input
                            name="placa"
                            type="text"
                            value={inputValues.placa}
                            onChange={handleInputChange}
                            className="form-control customInputPlaca"
                            placeholder="Exemplo: BFG1274"
                            aria-label="Placa"
                            id="placaInput"
                        />
                    </div>

                    <div className="input-group-prepend" style={{ marginTop: -4 }}>
                        <p className="customAval text-center">Avalie o estado do veículo em:</p>
                    </div>
                    <div className="input-group mb-4" style={{ justifyContent: 'center' }}>

                        <div className="form-check ms-3" style={{ marginTop: -8 }}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="avaliacao"
                                value="Excelente"
                                defaultChecked={inputValues.avaliacao === "Excelente"}
                                onChange={handleInputChange}
                                id="avalExcelenteInput"
                            />
                            <label className="form-check-label" htmlFor="avalExcelenteInput">
                                Excelente
                            </label>
                        </div>

                        <div className="form-check ms-3" style={{ marginTop: -8 }}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="avaliacao"
                                value="Bom"
                                defaultChecked={inputValues.avaliacao === "Bom"}
                                onChange={handleInputChange}
                                id="avalBomInput"
                            />
                            <label className="form-check-label" htmlFor="avalBomInput">
                                Bom
                            </label>
                        </div>

                        <div className="form-check ms-3" style={{ marginTop: -8 }}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="avaliacao"
                                value="Ruim"
                                defaultChecked={inputValues.avaliacao === "Ruim"}
                                onChange={handleInputChange}
                                id="avalRuimInput"
                            />
                            <label className="form-check-label" htmlFor="avalRuimInput">
                                Ruim
                            </label>
                        </div>
                    </div>
                <div className="d-grid mt-3" style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <button type="submit" className="btn btn-dark btn-block">{id ? "Alterar informações do" : "Cadastrar informações do"} veículo</button>
                    </div>


                </form >
            </div >
        </div>
    )

}


