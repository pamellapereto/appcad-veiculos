import { VehicleItem } from './VehicleItem';
import { useEffect, useState } from 'react';
import { getListVehicles } from '../service/localstorage';
import PaginationComponent from './PaginationComponent';
import PaginationSelector from './PaginationSelector';

export const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);
    const [vehiclesPerPage, setVehiclesPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);
    const startIndex = currentPage * vehiclesPerPage;
    const endIndex = startIndex + vehiclesPerPage;
    const currentVehicles = vehicles.slice(startIndex, endIndex);
    const pages = Math.ceil(vehicles.length / vehiclesPerPage);

    useEffect(() => {
        setVehicles(getListVehicles());
    }, []);

    useEffect(() => {
        setCurrentPage(0);
    }, [vehiclesPerPage]);

    return (
        <div>

            <h1 className="my-5 text-center">Veículos cadastrados</h1>


            {/*<input type='text' placeholder='Pesquisar' />*/}

            {
                vehicles.length > 0 ? (


                    <div style={{ textAlign: 'center' }}>
                        <PaginationSelector vehiclesPerPage={vehiclesPerPage} setVehiclesPerPage={setVehiclesPerPage} />


                        <div className="table-responsive col-lg-12">
                            <table className="table table-light table-striped table-hover table-borderless">
                                <thead className='table-dark'>
                                    <tr>
                                        <th scope="col">Marca</th>
                                        <th scope="col">Modelo</th>
                                        <th scope="col">Ano</th>
                                        <th scope="col">Placa</th>
                                        <th scope="col">Avaliação</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentVehicles.map(vehicle => <VehicleItem vehicle={vehicle} key={vehicle.id} setVehicles={setVehicles} />)
                                    }
                                </tbody>
                            </table>

                            <PaginationComponent pages={pages} setCurrentPage={setCurrentPage} />

                        </div>
                    </div>
                ) : (
                    <h3 className="my-5 text-center">Nenhum veículo cadastrado</h3>
                )
            }


        </div>
    )
}
